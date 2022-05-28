import React from 'react';

const UserRow = ({ user }) => {
	return (
		<tr>
			<th>{user.email}</th>
			<td>Cy Ganderton</td>
			<td>Quality Control Specialist</td>
			<td>Blue</td>
		</tr>
	);
};

export default UserRow;
