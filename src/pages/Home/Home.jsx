import Featured from '../../components/Featured/Featured';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
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
				<h1 className='homeTitle'>
					More than just hotels... Bookers discover pure comfort with homes,
					apartments, and more
				</h1>
				<FeaturedProperties />
			</div>
		</div>
	);
};
export default Home;
