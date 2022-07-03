import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className='homeContainer'></div>
		</div>
	);
};
export default Home;
