import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import './ToolsPart.css';

const ToolsPart = () => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://murmuring-chamber-20650.herokuapp.com/product/getData')
			.then(response => response.json())
			.then(data => setProduct(data.allProduct));
	}, []);

	return (
		<div>
			{product.length != 0 ? (
				<div>
					<div className=' grid md:grid-cols-3'>
						{product?.slice(0, 6).map(prod => (
							<div key={prod._id}>
								{/* //..... */}
								<div class='card card-compact w-96 bg-base-100 shadow-xl mycard'>
									<figure>
										<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
									</figure>
									<div class='card-body '>
										<span className='name'>{prod.name}</span>
										<h4 className='price'>{prod.price} TK</h4>
										<h4 className=''>Available Quantity: {prod.availableQuantity}</h4>
										<h4 className=''>Minimum Order Quantity: {prod.minimumOrderQuantity}</h4>
										<div class='card-actions justify-center'>
											<button onClick={() => navigate(`/Purchase/${prod._id}`)} class='btn btn-wide'>
												Manage
											</button>
										</div>
									</div>
								</div>
								{/* //..... */}
							</div>
						))}
					</div>
				</div>
			) : (
				<Loading></Loading>
			)}
		</div>
	);
};

export default ToolsPart;
