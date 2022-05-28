import { useEffect, useState } from 'react';

const UseToken = user => {
	const [token, setToken] = useState('');

	useEffect(() => {
		const email = user?.user?.email;
		const currentUser = { email: email };
		if (email) {
			fetch(`https://murmuring-chamber-20650.herokuapp.com/userme/${email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(currentUser),
			})
				.then(res => res.json())
				.then(data => {
					// console.log(data);
					const accessToken = data.token;
					localStorage.setItem('accessToken', accessToken);
					setToken(accessToken);
				});
		}

		console.log('email useToken: ', email);
	}, [user]);
	return [token];
};
export default UseToken;
