import React, { useEffect } from 'react';
import './Login.css';
// for firebase login
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseToken from '../hooks/UseToken';
// hook form and yup
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from '../Loading/Loading';
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
	const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
	//for insert user to database
	const [token] = UseToken(user || Guser);

	// valovabe singup hole home e jao
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	useEffect(() => {
		if (token) {
			navigate(from, { replace: true });
		}
	}, [token, navigate]);

	if (loading || Gloading) {
		return <Loading></Loading>;
	}

	//go to signup page
	const goToSignup = () => {
		navigate('/signup');
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
					<button onClick={() => signInWithGoogle()} className=' btn btn-outline-secondary mt-1'>
						<FcGoogle size={20}></FcGoogle> Google login
					</button>

					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Login;
