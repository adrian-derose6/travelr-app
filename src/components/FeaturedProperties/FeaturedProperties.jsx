import './FeaturedProperties.css';

const FeaturedProperties = () => {
	return (
		<div className='fp'>
			<div className='fpItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/87429279.jpg?k=c42e70f7026958ba62b91d68267c207fca4dce772d603a2e7159405a55e223d0&o=&hp=1'
					alt='Featured property'
					className='fpImg'
				/>
				<span className='fpName'>7Seasons Apartments Budapest</span>
				<span className='fpCity'>Budapest</span>
				<span className='fpPrice'>Starting from $76</span>
				<div className='fpRating'>
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className='fpItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/350334405.jpg?k=b935d6f6add8315ccf6901d424636ac5550a9ff352a797083ecf713303370a99&o=&hp=1'
					alt='Featured property'
					className='fpImg'
				/>
				<span className='fpName'>Aparthotel Stare Miasto</span>
				<span className='fpCity'>Krakow</span>
				<span className='fpPrice'>Starting from $82</span>
				<div className='fpRating'>
					<button>8.8</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className='fpItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/69813393.jpg?k=aca2217cc21edcf3f108b94bc79ee527f8c709732b6e20815fcf4ba1f7fae991&o=&hp=1'
					alt='Featured property'
					className='fpImg'
				/>
				<span className='fpName'>Casa Portuguesa Prata</span>
				<span className='fpCity'>Lisbon</span>
				<span className='fpPrice'>Starting from $355</span>
				<div className='fpRating'>
					<button>8.5</button>
					<span>Very Good</span>
				</div>
			</div>
			<div className='fpItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/80970678.jpg?k=5522889e6ffe1e96899b9e82cee9a7653af667b6892383a42820c64acdacdae3&o=&hp=1'
					alt='Featured property'
					className='fpImg'
				/>
				<span className='fpName'>Habitat Apartments Bruc Terrace</span>
				<span className='fpCity'>Barcelona</span>
				<span className='fpPrice'>Starting from $1,187</span>
				<div className='fpRating'>
					<button>7.3</button>
					<span>Good</span>
				</div>
			</div>
		</div>
	);
};
export default FeaturedProperties;
