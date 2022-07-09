import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../context/AuthContext';
import { API_URL } from '../../config/env-vars';
import './Login.css';

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});
	const { loading, error, dispatch } = useAuth();

	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axios.post(`${API_URL}/auth/login`, credentials);
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
			navigate('/');
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
		}
	};

	return (
		<div className='login'>
			<div className='lContainer'>
				<input
					type='text'
					placeholder='username'
					id='username'
					onChange={handleChange}
					className='lInput'
				/>
				<input
					type='password'
					placeholder='password'
					id='password'
					onChange={handleChange}
					className='lInput'
				/>
				<button disabled={loading} onClick={handleClick} className='lButton'>
					Login
				</button>
				{error && <span>{error.message}</span>}
			</div>
		</div>
	);
};
export default Login;
