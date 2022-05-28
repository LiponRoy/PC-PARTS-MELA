import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import UserRow from './UserRow';

const AllUser = () => {
	const [user, setUser] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:4000/user/getAllUser')
			.then(response => response.json())
			.then(data => setUser(data.allUser));
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
			{/* <div>
				{user.length != 0 ? (
					<div>
						<div className=' grid md:grid-cols-3'>
							{user?.map(prod => (
								<div key={prod._id}>
									<div class=' '>
										<h4 className='price'>{prod.email} TK</h4>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<Loading></Loading>
				)}
			</div> */}
		</div>
	);
};

export default AllUser;
