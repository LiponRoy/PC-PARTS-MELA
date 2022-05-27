import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../Firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../hooks/UseToken';
const Signin = () => {
	const navigate = useNavigate();
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

	const [token] = UseToken(user || gUser);

	let signInerror;

	if (token) {
		navigate('/');
	}
	if (loading || gLoading) {
		return <Loading></Loading>;
	}
	if (error || gError) {
		signInerror = (
			<p className='text-red-500'>
				<small>Error: {error?.message || gError?.message}</small>
			</p>
		);
	}
	const onSubmit = data => {
		signInWithEmailAndPassword(data.email, data.password);
		console.log(data);
	};

	//go to google
	const goToRegister = () => {
		navigate('/register');
	};

	return (
		<div className='flex h-screen justify-center item-center'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<div className='card-body'>
					<h2 className='text-center text-2xl font-bold'>Sign In </h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div class='form-control w-full max-w-xs'>
							<label class='label'>
								<span class='label-text-alt'>Email</span>
							</label>
							<input
								type='email'
								placeholder='Email here'
								class='input input-bordered w-full max-w-xs'
								{...register(
									'email',
									{
										required: {
											value: true,
											message: 'Email is required',
										},
									},
									{
										pattern: {
											value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
											message: 'Invalid Email', // JS only: <p>error message</p> TS only support string
										},
									},
								)}
							/>
							<label class='label'>{errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}</label>
							<label class='label'>{errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}</label>
						</div>
						{/* password feild */}
						{/* password feild */}
						{/* password feild */}
						<div class='form-control w-full max-w-xs'>
							<label class='label'>
								<span class='label-text-alt'>Password</span>
							</label>
							<input
								type='Password'
								placeholder='Password here'
								class='input input-bordered w-full max-w-xs'
								{...register(
									'password',
									{
										required: {
											value: true,
											message: 'Password is required',
										},
									},
									{
										pattern: {
											value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
											message: 'Invalid Password',
										},
									},
								)}
							/>
							<label class='label'>{errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}</label>
						</div>
						{signInerror}
						<input className='btn w-full max-w-xs' type='submit' value='login' />
					</form>
					<div className='m-2'>
						<span>Already have account ?</span>
						<span onClick={goToRegister} className='goToSignupPage '>
							login page
						</span>
					</div>

					<div className='divider'>OR</div>
					<button onClick={() => signInWithGoogle()} class='btn btn-active'>
						Google Signin
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signin;
