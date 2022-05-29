import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import UserRow from './UserRow';

const AllUser = () => {
	const [user, setUser] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://murmuring-chamber-20650.herokuapp.com/alluser', {
			method: 'GET',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then(response => response.json())
			.then(data => setUser(data));
	}, []);
	return (
		<div>
			<div class='overflow-x-auto'>
				<table class='table w-full'>
					<thead>
						<tr>
							<th>Email</th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{user.map(us => (
							<UserRow key={us._id} user={us}></UserRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllUser;
