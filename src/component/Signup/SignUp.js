import React, { useEffect, useState } from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
const Signup = () => {
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
	const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
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
	//submit
	const handleCreateUser = async event => {
		event.preventDefault();
		await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
		await updateProfile({ displayName: userInfo.name });
		console.log('');
	};

	// valovabe singup hole home e jao
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	useEffect(() => {
		if (user) {
			navigate(from);
		}
	}, [user]);

	if (loading || updating) {
		return <Loading></Loading>;
	}

	//go to google
	const goToLogin = () => {
		navigate('/login');
	};

	return (
		<div className='container'>
			<div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-6 signup-contain'>
						<div className='text-center'></div>
						<form onSubmit={handleCreateUser} className='my-signup-form'>
							<h3 className=' mb-3'>Signup </h3>

							<div className='form-group'>
								<label htmlFor='exampleInputName1'>Name</label>
								<input type='text' onChange={handleName} className='form-control' id='exampleInputName1' aria-describedby='emailHelp' placeholder='Enter Name' required />
								{userError?.nameError && <p className='signUpError'>{userError.nameError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email address</label>
								<input type='email' onChange={handleEmail} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' required />
								{userError?.emailError && <p className='signUpError'>{userError.emailError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input type='password' onChange={handlePassword} className='form-control' id='exampleInputPassword1' placeholder='Password' required />
								{userError?.passwordError && <p className='signUpError'>{userError.passwordError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputConfirmPassword'>Password</label>
								<input type='password' onChange={handleConfirmPassword} className='form-control' id='exampleInputPassword1' placeholder='ConfirmPassword' required />
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
						<SocialLogin></SocialLogin>
					</div>
					<div className='col-md-3'></div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
