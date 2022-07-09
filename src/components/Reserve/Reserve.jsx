import { useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFetch from '../../hooks/useFetch';
import { useSearchContext } from '../../context/SearchContext';
import { API_URL } from '../../config/env-vars';
import './Reserve.css';

const Reserve = ({ setOpen, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);
	const { data, loading, error } = useFetch(
		`${API_URL}/hotels/${hotelId}/rooms`
	);
	const { dates } = useSearchContext();

	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		const date = new Date(start.getTime());

		let list = [];

		while (date <= end) {
			list.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		return list;
	};

	const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);

		return !isFound;
	};

	const handleChecked = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

	const handleClick = (e) => {};

	return (
		<div className='reserve'>
			<div className='rContainer'>
				<FontAwesomeIcon
					icon={faCircleXmark}
					className='rClose'
					onClick={() => setOpen(false)}
				/>
				<span>Select your rooms:</span>
				{data.map((item) => (
					<div className='rItem'>
						<div className='rItemInfo'>
							<div className='rTitle'>{item.title}</div>
							<div className='rDesc'>{item.desc}</div>
							<div className='rMax'>
								Max people: <b>{item.maxPeople}</b>
							</div>
							<div className='rPrice'>{item.price}</div>
						</div>
						{item.roomNumbers.map((roomNumber) => (
							<div className='room'>
								<label>{roomNumber.number}</label>
								<input
									type='checkbox'
									value={roomNumber._id}
									onChange={handleChecked}
									disabled={!isAvailable(roomNumber)}
								/>
							</div>
						))}
					</div>
				))}
				<button onClick={handleClick} className='rButton'>
					Reserve Now!
				</button>
			</div>
		</div>
	);
};
export default Reserve;
