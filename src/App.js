import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Carasol from './component/carasol/Carasol';

function App() {
	return (
		<div className='App px-10'>
			<Navbar></Navbar>
			<Carasol></Carasol>
			<Footer></Footer>
		</div>
	);
}

export default App;
