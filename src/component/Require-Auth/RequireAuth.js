import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
	const [user, loading, error] = useAuthState(auth);

	const location = useLocation();

	if (loading) {
		return <Loading></Loading>;
	}

	if (!user) {
		return <Navigate to='/signin' state={{ from: location }} replace></Navigate>;
	} else {
		return children;
	}
};

export default RequireAuth;
