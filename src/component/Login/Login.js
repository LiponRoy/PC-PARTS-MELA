import React from 'react';
import './Login.css';
// for firebase login
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// hook form and yup
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().min(4).max(15).required(),
	})
	.required();
// end hook form and yup
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		formState,
		reset,
	} = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

	const onSubmit = data => {
		console.log(data);
		signInWithEmailAndPassword(data.email, data.password);
		// reset();
	};
	// for firebase login
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
	// for navigate
	const navagate = useNavigate();
	// Jodi user thake tahole eivabe korte hobe, eikhane home e jabe
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	if (user) {
		navagate(from, { replace: true });
	}
	//go to signup page
	const goToSignup = () => {
		navagate('/signup');
	};

	// end firebase login
	return (
		<div>
			<div className='formPage'>
				<div className='formLipon'>
					<h1 className='text-white text-4xl m-2'>Login Here</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input placeholder='Email' {...register('email')} />
						<p className='errorDesign'>{errors.email?.message}</p>
						<input placeholder='Password' type='text' {...register('password')} />
						<p className='errorDesign'>{errors.password?.message}</p>
						<button type='submit' class='btn btn-wide'>
							Submit
						</button>
					</form>
					<p className='resetPass-part m-2'>
						<div className=''>
							<span>Don't have account ?</span>
							<span onClick={goToSignup} className='goToSignupPage m-2'>
								Create Account
							</span>
						</div>
					</p>

					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Login;
