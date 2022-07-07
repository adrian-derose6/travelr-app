import './FeaturedProperties.css';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../config/env-vars';

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch(`${API_URL}/hotels/countByType`);
	console.log(data);
	return (
		<div className='fp'>
			{loading ? (
				'Loading'
			) : (
				<>
					{data.map((item) => (
						<div className='fpItem' key={item._id}>
							<img src='' alt='' className='fpImg' />
							<span className='fpName'>{item.name}</span>
							<span className='fpCity'>{item.city}</span>
							<span className='fpPrice'>
								Starting from ${item.cheapestPrice}
							</span>
							{item.rating && (
								<div className='fpRating'>
									<button>{item.rating}</button>
									<span>Excellent</span>
								</div>
							)}
						</div>
					))}
				</>
			)}
		</div>
	);
};
export default FeaturedProperties;
