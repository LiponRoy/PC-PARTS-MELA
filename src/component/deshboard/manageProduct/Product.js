import React from 'react';
import { useQuery } from 'react-query';

const Product = ({ user }) => {
	const { name, price, availableQuantity, minimumOrderQuantity } = user;
	// // react Query
	// const { isLoading, error, refetch } = useQuery('repoData', () => fetch(`http://localhost:4000/product/deleteProduct/${user._id}`).then(res => res.json()));

	// if (isLoading) return 'Loading...';

	// if (error) return 'An error has occurred: ' + error.message;
	// react Query End

	// delete order
	const deleteProduct = id => {
		fetch(`https://murmuring-chamber-20650.herokuapp.com/product/deleteProduct/${user._id}`)
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
				<td>{availableQuantity}</td>
			</td>
			<td>
				<td>{minimumOrderQuantity}</td>
			</td>

			<td>
				<button onClick={deleteProduct} className='btn'>
					Remove Product
				</button>
			</td>
		</tr>
	);
};

export default Product;
