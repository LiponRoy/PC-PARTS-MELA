import './App.css';
import NavbarTwo from './component/Navbar/NavbarTwo';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/footer/Footer';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import RequireAuth from './component/Require-Auth/RequireAuth';
import Purchase from './component/Purchase/Purchase';
import Dashboard from './component/deshboard/Dashboard ';
import MyOrder from './component/deshboard/myOrder/MyOrder';
import MyProfile from './component/deshboard/myProfile/MyProfile';
import Signin from './component/signIn/Signin';
import Register from './component/signIn/register/Register';
import AllUser from './component/deshboard/allUser/AllUser';
import Review from './component/deshboard/review/Review';
//for Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './component/RequireAdmin/RequireAdmin';
function App() {
	return (
		<div className='App px-10'>
			<NavbarTwo></NavbarTwo>
			<Routes>
				<Route path='/' element={<Home />} />

				{/* <Route path='/signUp' element={<Signup />} /> */}
				<Route path='/register' element={<Register />} />
				{/* <Route path='/login' element={<Login />} /> */}
				<Route path='/signin' element={<Signin />} />
				<Route
					path='/Purchase/:id'
					element={
						<RequireAuth>
							<Purchase />
						</RequireAuth>
					}
				/>

				<Route
					path='/dashboard'
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}>
					<Route index element={<MyOrder />} />
					<Route path='myProfile' element={<MyProfile />} />
					<Route path='review' element={<Review />} />
					<Route
						path='allUser'
						element={
							<RequireAdmin>
								<AllUser />
							</RequireAdmin>
						}
					/>
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
