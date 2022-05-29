import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Order from './Order';

const ManageOrder = () => {
	const [order, setOrder] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://murmuring-chamber-20650.herokuapp.com/order/GetAllOrderNew', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => setOrder(data.allOrder));
	}, []);
	return (
		<div>
			<div>
				<div class='overflow-x-auto'>
					<table class='table w-full'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>User Email</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							{order.map(us => (
								<Order key={us._id} user={us}></Order>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageOrder;
