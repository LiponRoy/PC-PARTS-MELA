import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const ManageProduct = () => {
	const [user, setUser] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://murmuring-chamber-20650.herokuapp.com/product/getData', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => setUser(data.allProduct));
	}, []);
	return (
		<div>
			<div class='overflow-x-auto'>
				<table class='table w-full'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Available Quantity</th>
							<th>Minimum Quantity</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{user.map(us => (
							<Product key={us._id} user={us}></Product>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageProduct;
