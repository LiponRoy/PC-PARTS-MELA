import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase.init';
const Purchase = () => {
	const [user] = useAuthState(auth);
	const { id } = useParams();
	const navigate = useNavigate();
	const [singleProduct, setSingleProduct] = useState([]);
	const url = `http://localhost:4000/product/getSingle/${id}`;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setSingleProduct(data.SingleProduct));
	}, []);

	return (
		<div>
			<div className='text-center'>
				<div className='userInfo'>
					<span>User Name : {user.displayName}</span>
					<br></br>
					<span>User Email : {user.email}</span>
				</div>
				<div className='imgPart'>
					<img className='' src={singleProduct.imgUrl} width='220px' alt='' />
				</div>

				<div className='contentAll'>
					<div className=''>
						<h3>Name: {singleProduct.name}</h3>
						<h4>Desc :{singleProduct.description}</h4>
						<h4>Price :{singleProduct.price} Tk</h4>
						<h4>Available Quantity :{singleProduct.availableQuantity}</h4>
						<h4>Minimum Order Quantity :{singleProduct.minimumOrderQuantity}</h4>
						<br></br>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
