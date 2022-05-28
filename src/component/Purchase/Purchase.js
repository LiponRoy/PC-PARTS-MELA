import './Purchase.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase.init';
import { useForm } from 'react-hook-form';
const Purchase = () => {
	const [QuantityError, setQuantityError] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [singleProduct, setSingleProduct] = useState([]);

	const [user] = useAuthState(auth);
	const { id } = useParams();
	const navigate = useNavigate();
	const url = `https://murmuring-chamber-20650.herokuapp.com/product/getSingle/${id}`;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setSingleProduct(data.SingleProduct));
	}, []);

	// react hook form
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		const avQ = document.getElementById('avQuan').innerHTML;
		const miniQ = document.getElementById('miniQuan').innerHTML;

		// parseInt(data.minimumOrderQuantity);
		if (parseInt(data.myQuantity) > parseInt(avQ)) {
			setQuantityError('');
			setQuantityError('availableQuantity Over');
			return;
		}
		if (parseInt(data.myQuantity) < parseInt(miniQ)) {
			setQuantityError('');
			setQuantityError('les than minimumOrderQuantity');
			return;
		}
		setQuantityError('');
		console.log(data);
		AddOrderToDatabase(data.myQuantity);
	};

	const AddOrderToDatabase = myQuantity => {
		console.log('add data to database...');
		const mydata = {
			name: singleProduct.name,
			price: singleProduct.price,
			Quantity: myQuantity,
			imgUrl: singleProduct.imgUrl,
			email: user.email,
		};

		const url = 'https://murmuring-chamber-20650.herokuapp.com/order/orderPost';
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(mydata),
		})
			.then(response => response.json())
			.then(datas => console.log(datas));

		// got to my order page
		navigate('/');
	};

	// const handleChange = e => {
	// 	const avQ = document.getElementById('avQuan').innerHTML;
	// 	const miniQ = document.getElementById('miniQuan').innerHTML;

	// 	// const myValue = getValues('myQuantity');

	// 	if (e.target.value < miniQ) {
	// 		setBtnDisabled(false);
	// 	}
	// 	if (e.target.value > avQ) {
	// 		setBtnDisabled(false);
	// 	}

	// 	console.log(e.target.value);
	// };

	return (
		<div>
			<div class='hero min-h-screen bg-base-200 myContain'>
				<div class='hero-content flex-col lg:flex-row'>
					<div class='hero-content flex-col lg:flex-col'>
						<img src={singleProduct.imgUrl} class='max-w-sm rounded-lg shadow-2xl' />
						<h3 className='text-2xl'>Name: {singleProduct.name}</h3>
						<h4 className='text-3xl font-bold'>$ {singleProduct.price}</h4>
					</div>
					<div>
						<h1 class='text-2xl'>About Product</h1>
						<p>{singleProduct.description}</p>

						<span>User Name:</span>
						<h1 class='text-2xl'>{user.displayName}</h1>
						<span>User Email:</span>
						<h1 class='text-2xl'>{user.email}</h1>
						<br></br>
						<span>Available Quantity:</span>
						<h1 class='text-2xl' id='avQuan'>
							{singleProduct.availableQuantity}
						</h1>
						<span>Minimum Quantity:</span>
						<h1 class='text-2xl' id='miniQuan'>
							{singleProduct.minimumOrderQuantity}
						</h1>
						<br></br>
						{/* Form */}
						<form onSubmit={handleSubmit(onSubmit)}>
							<span>My Quantity</span>
							<input className='par-input' placeholder='Your quantity' type='number' {...register('myQuantity', { required: true })} />

							{/* errors will return when field validation fails  */}
							{errors.minimumOrderQuantity && <span>This field is required</span>}

							<br></br>

							<input class='btn btn-primary' type='submit' value='PLACE ORDER' />
							<h1 className='text-2xl text-red-500'>{QuantityError}</h1>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
