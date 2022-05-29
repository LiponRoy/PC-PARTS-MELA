import React from 'react';

const Order = ({ user }) => {
	const { name, price, Quantity, email } = user;
	// // react Query
	// const { isLoading, error, refetch } = useQuery('repoData', () => fetch(`http://localhost:4000/product/deleteProduct/${user._id}`).then(res => res.json()));

	// if (isLoading) return 'Loading...';

	// if (error) return 'An error has occurred: ' + error.message;
	// react Query End   /deleteOrder/

	// delete order
	const deleteProduct = id => {
		fetch(`https://murmuring-chamber-20650.herokuapp.com/order/deleteOrder/${user._id}`)
			.then(response => response.json())
			.then(data => data);
	};

	return (
		<tr>
			{/* <th>{name}</th> */}
			<td>{name}</td>
			<td>
				<td>{price}</td>
			</td>
			<td>
				<td>{Quantity}</td>
			</td>
			<td>
				<td>{email}</td>
			</td>

			<td>
				<button onClick={deleteProduct} className='btn'>
					Remove Order
				</button>
			</td>
		</tr>
	);
};

export default Order;
