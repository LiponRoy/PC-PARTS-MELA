import React, { useEffect, useState } from 'react';
import './MyProfile.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase.init';
import { useForm } from 'react-hook-form';
const MyProfile = () => {
	const [user] = useAuthState(auth);
	const [singleuser, setSingleuser] = useState([]);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data);
		if (user) {
			fetch(`http://localhost:4000/updateuser/${user.email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
				});
		}
	};

	// getting user information here
	useEffect(() => {
		fetch(`http://localhost:4000/singleuser/${user.email}`)
			.then(response => response.json())
			.then(data => {
				setSingleuser(data);
				console.log(data);
			});
	}, [singleuser]);

	return (
		<div>
			<div class='hero min-h-screen bg-base-200'>
				<div class='hero-content flex-col lg:flex-row'>
					<div className='lg:flex-cols mr-20'>
						<p class='text-3xl font-bold'>{user ? user.displayName : 'no user'}</p>
						<p class='py-6'>{user ? user.email : 'no user'}</p>
						<p class='py-6'>Mob :{singleuser.mobile}</p>
						<p class='py-6'>Edu :{singleuser.education}</p>
						<p class='py-6'>Loc :{singleuser.location}</p>
					</div>
					<div className='text-left'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div class='form-control'>
								<input type='number' className='par1-input' placeholder='Phone Number' {...register('mobile', { required: true })} />
								<br></br>
								{errors.mobile && <span className='text-red-500 text-1xl'>mobile field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par1-input' placeholder='Enter education' {...register('education', { required: true })} />
								<br></br>
								{errors.education && <span className='text-red-500 text-1xl'>education field is required</span>}
								<br></br>
							</div>
							<div class='form-control'>
								<input className='par1-input' placeholder='Enter location' {...register('location', { required: true })} />
								<br></br>
								{errors.education && <span className='text-red-500 text-1xl'>education field is required</span>}
								<br></br>

								<input className='btn' type='submit' />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
