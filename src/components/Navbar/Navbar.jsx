import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
	const { user } = useAuth();

	return (
		<div className='navbar'>
			<div className='navContainer'>
				<Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
					<span className='logo'>
						<FontAwesomeIcon icon={faPlane} />
						Travelr.com
					</span>
				</Link>
				{user ? (
					user.username
				) : (
					<div className='navItems'>
						<button className='navButton'>Register</button>
						<button className='navButton'>Login</button>
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
