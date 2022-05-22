import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Purchase = () => {
	const { id } = useParams();
	return <div>ID is :{id}</div>;
};

export default Purchase;
