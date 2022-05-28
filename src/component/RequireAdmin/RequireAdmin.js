import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useAdmin from '../hooks/UseAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
	const [user, loading, error] = useAuthState(auth);
	const [admin, adminLoading] = useAdmin(user);

	const location = useLocation();

	if (loading || adminLoading) {
		return <Loading></Loading>;
	}

	if (!user || !admin) {
		signOut(auth);
		return <Navigate to='/signin' state={{ from: location }} replace></Navigate>;
	} else {
		return children;
	}
};

export default RequireAdmin;
