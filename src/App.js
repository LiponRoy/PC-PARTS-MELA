import './App.css';
import NavbarTwo from './component/Navbar/NavbarTwo';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/footer/Footer';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';

function App() {
	return (
		<div className='App px-10'>
			<NavbarTwo></NavbarTwo>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signUp' element={<Signup />} />
				<Route path='/login' element={<Login />} />

				{/* <Route path='/manageProduct' element={<ManageProduct />} /> */}
				{/* <Route path='/addNewItem' element={<AddNewIteam />} /> */}
				{/* <Route path='/blog' element={<Blog />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/myItem' element={<MyItem />} /> */}

				{/* <Route path='/blog/:id' element={<About />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
