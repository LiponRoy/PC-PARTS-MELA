import React, { useEffect, useState } from 'react';
import './Signup.css';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import UseToken from '../hooks/UseToken';
const Signup = () => {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [userError, setUserError] = useState({
		nameError: '',
		emailError: '',
		passwordError: '',
		confirmPasswordError: '',
		generalError: '',
	});

	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
	const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
	//for insert user to database
	const [token] = UseToken(user || guser);
	// console.log(user);

	//for google signin
	// for email
	const handleName = event => {
		const nameREGEX = /[a-zA-Z0-9]+/;
		const validName = nameREGEX.test(event.target.value);
		if (validName) {
			setUserInfo({ ...userInfo, name: event.target.value });
			setUserError({ ...userError, nameError: '' });
		} else {
			setUserError({ ...userError, nameError: 'Invalid email' });
			setUserInfo({ ...userInfo, name: '' });
		}
	};
	// for email
	const handleEmail = event => {
		const emailREGEX = /\S+@\S+\.\S+/;
		const validEmail = emailREGEX.test(event.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: event.target.value });
			setUserError({ ...userError, emailError: '' });
		} else {
			setUserError({ ...userError, emailError: 'Invalid email' });
			setUserInfo({ ...userInfo, email: '' });
		}
	};

	// for password
	const handlePassword = event => {
		const passwordREGEX = /.{6,}/;
		const validPassword = passwordREGEX.test(event.target.value);
		if (validPassword) {
			setUserInfo({ ...userInfo, password: event.target.value });
			setUserError({ ...userError, passwordError: '' });
		} else {
			setUserError({ ...userError, passwordError: 'minimum 6 charecter' });
			setUserInfo({ ...userInfo, password: '' });
		}
	};

	// for confirm password
	const handleConfirmPassword = event => {
		if (event.target.value === userInfo.password) {
			setUserInfo({ ...userInfo, confirmPassword: event.target.value });
			setUserError({ ...userError, confirmPasswordError: '' });
			// return;
		} else {
			setUserError({ ...userError, confirmPasswordError: 'Password do not match' });
			setUserInfo({ ...userInfo, confirmPassword: '' });
		}
	};

	if (loading || updating || gloading) {
		return <Loading></Loading>;
	}

	// valovabe singup hole home e jao
	if (token) {
		navigate('/');
	}

	//submit
	const handleCreateUser = async event => {
		event.preventDefault();
		await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
		await updateProfile({ displayName: userInfo.name });
	};

	// const location = useLocation();
	// const from = location.state?.from?.pathname || '/';

	// useEffect(() => {

	// }, [token]);

	//go to google
	const goToLogin = () => {
		navigate('/login');
	};

	return (
		<div className='container ContactHeader'>
			<div>
				<div className='row'>
					<div className='col-md-12 signup-contain'>
						<div className='text-center'></div>
						<form onSubmit={handleCreateUser} className='my-signup-form'>
							<h3 className=' mb-3'>Signup </h3>

							<div className='form-group'>
								<label htmlFor='exampleInputName1'>Name</label>
								<input type='text' onChange={handleName} className='form-control signUpInput' id='exampleInputName1' aria-describedby='emailHelp' placeholder='Enter Name' required />
								{userError?.nameError && <p className='signUpError'>{userError.nameError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email address</label>
								<input type='email' onChange={handleEmail} className='form-control signUpInput' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' required />
								{userError?.emailError && <p className='signUpError'>{userError.emailError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input type='password' onChange={handlePassword} className='form-control signUpInput' id='exampleInputPassword1' placeholder='Password' required />
								{userError?.passwordError && <p className='signUpError'>{userError.passwordError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputConfirmPassword'>Password</label>
								<input type='password' onChange={handleConfirmPassword} className='form-control signUpInput' id='exampleInputPassword1' placeholder='ConfirmPassword' required />
								{userError?.confirmPasswordError && <p className='signUpError'>{userError.confirmPasswordError}</p>}
							</div>
							<button type='submit' className='btn btn-warning mt-2 signupBtn'>
								Submit
							</button>

							<p style={{ color: 'red' }}>{error?.message}</p>
							{/* <p style={{ color: 'blue' }}>{loading}</p> */}
						</form>
						<div className='m-2'>
							<span>Already have account ?</span>
							<span onClick={goToLogin} className='goToSignupPage '>
								login page
							</span>
						</div>
						<button onClick={() => signInWithGoogle()} className=' btn btn-outline-secondary mt-1'>
							<FcGoogle size={20}></FcGoogle> Google login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
