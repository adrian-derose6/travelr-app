import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navContainer'>
				<Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
					<span className='logo'>
						<FontAwesomeIcon icon={faPlane} />
						Travelr.com
					</span>
				</Link>
				<div className='navItems'>
					<button className='navButton'>Register</button>
					<button className='navButton'>Login</button>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
