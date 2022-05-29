import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
// import './ReviewsHome.css';
const ReviewsHome = () => {
	const navagate = useNavigate();
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch('https://murmuring-chamber-20650.herokuapp.com/rv/getRerview')
			.then(response => response.json())
			.then(data => setReview(data.allRevie));
	}, []);
	return (
		<div className='my-5'>
			<div>
				{review.length != 0 ? (
					<div>
						<div className=' grid md:grid-cols-6'>
							{review.map(prod => (
								<div className='everyReview'>
									<div class='card w-96 bg-base-100 shadow-xl image-full'>
										<figure>
											<img src='https://i.ibb.co/7XMh5H4/jeremy-bezanger-wl8h-Zo-JBSU8-unsplash.jpg' alt='Shoes' />
										</figure>
										<div class='card-body'>
											<h2 class='card-title '>{prod.username}</h2>
											<span className='rating text-2xl'>{prod.rating}</span>
											<p className=''>{prod.desc}</p>
										</div>
									</div>
									{/* ../ */}

									{/* ../ */}
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

export default ReviewsHome;
