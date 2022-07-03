import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/PropertyList/PropertyList';
import './Home.css';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className='homeContainer'>
				<Featured />
				<h1 className='homeTitle'>Browse by property type</h1>
				<PropertyList />
				<h1 className='homeTitle'>Homes guests love</h1>
			</div>
		</div>
	);
};
export default Home;
