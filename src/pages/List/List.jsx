import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import SearchItem from '../../components/SearchItem/SearchItem';
import { API_URL } from '../../config/env-vars';
import useFetch from '../../hooks/useFetch';
import './List.css';

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [dates, setDates] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptons] = useState(location.state.options);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);

	const { data, loading, error, refetch } = useFetch(
		`${API_URL}/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
	);

	const handleClick = () => {
		refetch();
	};

	return (
		<div>
			<Navbar />
			<Header type='list' />
			<div className='listContainer'>
				<div className='listWrapper'>
					<div className='listSearch'>
						<h1 className='lsTitle'>Search</h1>
						<div className='lsItem'>
							<label>Destination</label>
							<input placeholder={destination} type='text' />
						</div>
						<div className='lsItem'>
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								dates[0].startDate,
								'MM/dd/yyyy'
							)} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDates([item.selection])}
									minDate={new Date()}
									ranges={dates}
								/>
							)}
						</div>
						<div className='lsItem'>
							<label>Options</label>
							<div className='lsOptions'>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>
										Min price <small>per night</small>
									</span>
									<input
										type='number'
										onChange={(e) => setMin(e.target.value)}
										className='lsOptionInput'
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>
										Max price <small>per night</small>
									</span>
									<input
										type='number'
										onChange={(e) => setMax(e.target.value)}
										className='lsOptionInput'
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>Adult</span>
									<input
										type='number'
										min={1}
										className='lsOptionInput'
										placeholder={options.adult}
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>Children</span>
									<input
										type='number'
										min={0}
										className='lsOptionInput'
										placeholder={options.children}
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>Room</span>
									<input
										type='number'
										min={1}
										className='lsOptionInput'
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button onClick={handleClick}>Search</button>
					</div>
					<div className='listResults'>
						{loading ? (
							'loading'
						) : (
							<>
								{data.map((item) => (
									<SearchItem item={item} key={item._id} />
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default List;
