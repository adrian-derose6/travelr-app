import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Hotels from './pages/Hotels/Hotels';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotels' element={<Hotels />} />
				<Route path='/hotels/hotelId' element={<Hotel />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
