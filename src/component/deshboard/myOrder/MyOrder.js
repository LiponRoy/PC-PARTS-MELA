import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';
import { signOut } from 'firebase/auth';
const MyOrder = () => {
	const [user] = useAuthState(auth);
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			fetch(`http://localhost:4000/getOrder?email=${user.email}`, {
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			})
				.then(response => {
					if (response.status === 401 || response.status === 403) {
						signOut(auth);
						localStorage.removeItem('accessToken');
						navigate('/');
					}
					return response.json();
				})
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
							{product?.slice(0, 6).map(prod => (
								<div key={prod._id}>
									<div class='card '>
										<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
										<span className='name'>{prod.name}</span>
										<h4 className='price'>{prod.price} TK</h4>
										<h4 className='price'>Email :{prod.email} </h4>

										<a onClick={() => deleteProduct(prod._id)} className='btn btn-warning mngBtn'>
											Cancle
										</a>
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
