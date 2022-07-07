import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const res = await axios.get(url);
				setData(res.data);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	const refetch = async () => {
		setLoading(true);

		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return {
		data,
		loading,
		error,
		refetch,
	};
};

export default useFetch;