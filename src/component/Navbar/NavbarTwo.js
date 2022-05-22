import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import { signOut } from 'firebase/auth';
const NavbarTwo = () => {
	const [user] = useAuthState(auth);
	const [showLinks, setShowLink] = useState(false);
	const navigate = useNavigate();

	const closeFunc = () => {
		setShowLink(false);
	};
	const signOutTask = () => {
		signOut(auth);
		navigate('/');
	};
	return (
		<>
			<div className=''>
				<div className='liponNav'>
					<div className='leftSide'>
						<div className='logo'>
							<h4>PC PARTS MELA</h4>
						</div>
					</div>
					<div className='middleSide'>
						<h5>middle side</h5>
					</div>
					<div className='rightSide'>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								Home
							</NavLink>

							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/signUp'>
								SignUp
							</NavLink>
							{user ? (
								<a onClick={signOutTask} className='signout-btn'>
									Signout
								</a>
							) : (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/login'>
									Login
								</NavLink>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
