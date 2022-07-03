import './Featured.css';

const Featured = () => {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/city/square250/620103.webp?k=c07eb50383bfb4bedd11308fb59876bff7ef522dc379f4d96a48812cecaf45eb&o='
					alt='Featured city'
					className='featuredImg'
				/>
				<div className='featuredTitles'>
					<h2>Orlando</h2>
					<h3>3,684 properties</h3>
				</div>
			</div>
			<div className='featuredItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/city/square250/856691.webp?k=9cf21942b6aa8706b8721525de6a06b55e8980139ee21f53593982a8e988a55a&o='
					alt='Featured city'
					className='featuredImg'
				/>
				<div className='featuredTitles'>
					<h2>New York</h2>
					<h3>1,381 properties</h3>
				</div>
			</div>
			<div className='featuredItem'>
				<img
					src='https://t-cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o='
					alt='Featured city'
					className='featuredImg'
				/>
				<div className='featuredTitles'>
					<h2>Myrtle Beach</h2>
					<h3>2,642 properties</h3>
				</div>
			</div>
		</div>
	);
};
export default Featured;
