import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import useAdmin from '../hooks/UseAdmin';
// import './Loading.css';

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	return (
		<div className='my-loading'>
			<div class='drawer drawer-mobile'>
				<input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
				<div class='drawer-content '>
					<Outlet></Outlet>
				</div>
				<div class='drawer-side'>
					<label for='my-drawer-2' class='drawer-overlay'></label>
					<ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
						{/* <!-- Sidebar content here --> */}
						{!admin && (
							<li>
								<Link to='/dashboard'>My Order</Link>
							</li>
						)}
						<li>
							<Link to='/dashboard/myProfile'>My Profile</Link>
						</li>
						{!admin && (
							<li>
								<Link to='/dashboard/review'>Ad a Review</Link>
							</li>
						)}
						{admin && (
							<li>
								<Link to='/dashboard/allUser'>All User</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
