import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import { signOut } from 'firebase/auth';
// import UseToken from '../hooks/UseToken';
const NavbarTwo = () => {
	const [user] = useAuthState(auth);
	const [showLinks, setShowLink] = useState(false);
	const navigate = useNavigate();

	//for insert user to database
	// const [token] = UseToken(user);

	const closeFunc = () => {
		setShowLink(false);
	};
	const signOutTask = () => {
		signOut(auth);
		localStorage.removeItem('accessToken');
		navigate('/');
	};
	return (
		<>
			<div className=''>
				<div className='liponNav fixed-top'>
					<div className='leftSide'>
						<div className='logo text-white'>
							<span className='mr-5'>PC PARTS MELA</span>
							{user ? user.displayName : 'no user'}
						</div>
					</div>
					<div className='middleSide'></div>
					<div className='rightSide'>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								Home
							</NavLink>

							{!user && (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/register'>
									Register
								</NavLink>
							)}

							{user && (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/dashboard'>
									DashBoard
								</NavLink>
							)}

							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/blog'>
								Blog
							</NavLink>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/about'>
								Portfolio
							</NavLink>
							{user ? (
								<a onClick={signOutTask} className='signout-btn'>
									Signout
								</a>
							) : (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/signin'>
									Signin
								</NavLink>
							)}

							<label for='my-drawer-2' class='btn btn-primary drawer-button lg:hidden'>
								drawer
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
