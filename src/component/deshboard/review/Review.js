import './Review.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase.init';

const Review = () => {
	const [user] = useAuthState(auth);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data);
		const url = 'http://localhost:4000/rv/addRerview';
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(datas => {
				console.log(datas);
			});
	};
	return (
		<div>
			<div className='reviewContainer'>
				<h1 class='text-2xl'>Enter Your Review</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* register your input into the hook by invoking the "register" function */}
					<input className='par-input' value={user.displayName} readOnly={true} {...register('username', { required: true })} />
					<br></br>
					<p className='errorDesign'>{errors.desc?.message}</p>

					<input
						className='par-input'
						type='number'
						placeholder='Enter Reating'
						{...register('rating', {
							valueAsNumber: true,
							validate: value => value > 0,
						})}
					/>
					<p className='errorDesign'>{errors.rating?.message}</p>

					{/* include validation with required or other standard HTML validation rules */}
					<input className='par-input' placeholder='Enter Description' {...register('desc', { required: true })} />
					<br></br>
					<p className='errorDesign'>{errors.desc?.message}</p>

					<input class='btn btn-wide' type='submit' />
				</form>
			</div>
		</div>
	);
};

export default Review;
