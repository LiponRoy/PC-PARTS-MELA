import { useContext, useEffect, useState } from 'react';
import './MyOrder.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';

const MyOrder = () => {
	const [user] = useAuthState(auth);
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	// fetch(`http://localhost:4000/getOrder?email= ${user.email}`)
	//fetch(`http://localhost:4000/order/getAllOrder/${user.email}`)

	useEffect(() => {
		if (user) {
			fetch(`http://localhost:4000/getOrder?email=${user.email}`)
				.then(response => response.json())
				.then(data => setProduct(data));
		}
	}, [user]);

	// delete order
	const deleteProduct = id => {
		fetch(`http://localhost:4000/order/deleteOrder/${id}`)
			.then(response => response.json())
			.then(data => data);
	};

	return (
		<div>
			<div>
				{product.length != 0 ? (
					<div>
						<div className=' grid md:grid-cols-3'>
							{product.map(prod => (
								// display Json Data using map function
								<div key={prod._id} className='col-md-12'>
									<div className='Manageproduct '>
										<div className='allProduct '>
											<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
											<span className='name'>{prod.name}</span>
											<h4 className='price'>{prod.price} TK</h4>
											<h4 className='price'>Email :{prod.email} </h4>

											<a onClick={() => deleteProduct(prod._id)} className='btn btn-warning '>
												CANCLE
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<Loading></Loading>
				)}
			</div>
		</div>
	);
};

export default MyOrder;
