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
								<div class='card '>
									<img class='card-img-top' src={prod.imgUrl} alt='Card image cap' />
									<span className='name'>{prod.name}</span>
									<h4 className='price'>{prod.price} TK</h4>
									<h4 className=''>availableQuantity: {prod.availableQuantity}</h4>
									<h4 className=''>minimumOrderQuantity: {prod.minimumOrderQuantity}</h4>
									<a href='#' class='btn btn-secondary btn-lg mt-2 proBtn' onClick={() => navigate(`/Purchase/${prod._id}`)}>
										Manage
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
	);
};

export default ToolsPart;
