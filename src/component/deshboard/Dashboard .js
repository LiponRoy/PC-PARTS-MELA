import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import './Loading.css';
const Dashboard = () => {
	return (
		<div className='my-loading'>
			<div class='drawer drawer-mobile'>
				<input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
				<div class='drawer-content '>
					<span className='text-3xl'> My desh board</span>
					<Outlet></Outlet>
				</div>
				<div class='drawer-side'>
					<label for='my-drawer-2' class='drawer-overlay'></label>
					<ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
						{/* <!-- Sidebar content here --> */}
						<li>
							<Link to='/dashboard'>My Order</Link>
						</li>
						<li>
							<Link to='/dashboard/myProfile'>My Profile</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
