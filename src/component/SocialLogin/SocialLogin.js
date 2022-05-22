import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	if (error) {
		return (
			<div>
				<p>Error: {error.message}</p>
			</div>
		);
	}
	if (loading) {
		return <p>Loading...</p>;
	}
	//End for google signin

	// valovabe singup hole home e jao
	const from = location.state?.from?.pathname || '/';

	if (user) {
		navigate(from);
	}
	return (
		<div>
			<button onClick={() => signInWithGoogle()} className=' btn btn-outline-secondary mt-1'>
				<FcGoogle size={20}></FcGoogle> Google login
			</button>
		</div>
	);
};

export default SocialLogin;
