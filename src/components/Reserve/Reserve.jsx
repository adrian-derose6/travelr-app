import { useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../config/env-vars';
import './Reserve.css';

const Reserve = ({ setOpen, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);
	const { data, loading, error } = useFetch(
		`${API_URL}/hotels/${hotelId}/rooms`
	);

	const handleChecked = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

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
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
export default Reserve;
