import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
const AddProduct = () => {
	const [imgurlme, setImgurlme] = useState('');
	const imageStorageKey = '65a64e81eab60152d6486a54d707cb66';
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async data => {
		console.log(data);
		const image = data.imgUrl[0];
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
		// if (user) {
		// 	//
		// }
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then(response => response.json())
			.then(result => {
				if (result.success) {
					const imglipon = result.data.url;
					console.log(imglipon);
					setImgurlme(imglipon);
				}
			});

		const mydata = {
			name: data.name,
			description: data.description,
			price: data.price,
			availableQuantity: data.availableQuantity,
			minimumOrderQuantity: data.minimumOrderQuantity,
			user_email: data.user_email,
			imgUrl: imgurlme,
		};

		postData(mydata);
	};

	const postData = mydata => {
		const url = 'https://murmuring-chamber-20650.herokuapp.com/product/insertdata';
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(mydata),
		})
			.then(response => response.json())
			.then(datas => {
				console.log(datas);
			});
	};

	return (
		<div>
			<div class='hero min-h-screen bg-base-200'>
				<div class='hero-content flex-col lg:flex-row'>
					<div className='text-left '>
						<form onSubmit={handleSubmit(onSubmit)}>
							<h1 className='text-center text-2xl'>Update Your Profile</h1>
							<div class='form-control'>
								<input className='par3-input' placeholder='name' {...register('name', { required: true })} />
								<br></br>
								{errors.name && <span className='text-red-500 text-1xl'>name field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par3-input' placeholder='description' {...register('description', { required: true })} />
								<br></br>
								{errors.description && <span className='text-red-500 text-1xl'>description field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par3-input' placeholder='price' {...register('price', { required: true })} />
								<br></br>
								{errors.price && <span className='text-red-500 text-1xl'>price field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par3-input' placeholder='Available Quantity' {...register('availableQuantity', { required: true })} />
								<br></br>
								{errors.availableQuantity && <span className='text-red-500 text-1xl'>availableQuantity field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par3-input' placeholder='Minimum Order Quantity' {...register('minimumOrderQuantity', { required: true })} />
								<br></br>
								{errors.minimumOrderQuantity && <span className='text-red-500 text-1xl'>minimumOrderQuantity field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par3-input' placeholder='user_email' {...register('user_email', { required: true })} />
								<br></br>
								{errors.user_email && <span className='text-red-500 text-1xl'>user_email field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input type='file' className='par3-input' placeholder='select Image imgUrl' {...register('imgUrl', { required: true })} />
								<br></br>
								{errors.imgUrl && <span className='text-red-500 text-1xl'>imgUrl field is required</span>}
								<br></br>

								<input className='btn' type='submit' value='Update' />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
