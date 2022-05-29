import React, { useState } from 'react';
import { toast } from 'react-toastify';
const UserRow = ({ user }) => {
	const { email, role } = user;
	const makeAdmin = () => {
		fetch(`https://murmuring-chamber-20650.herokuapp.com/makeAdmin/${email}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then(response => {
				if (response.status === 403) {
					toast.error('filed to make admin');
				}
				response.json();
			})
			.then(data => {
				console.log(data);
			});
	};

	return (
		<tr>
			<th>{email}</th>
			<td>Cy Ganderton</td>
			<td>
				{role !== 'admin' ? (
					<button onClick={makeAdmin} class='btn btn-xs'>
						Make admin
					</button>
				) : (
					'Admin'
				)}
			</td>
			<td>
				<button class='btn btn-xs'>Remove user</button>
			</td>
		</tr>
	);
};

export default UserRow;
