import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
// import './ReviewsHome.css';
const ReviewsHome = () => {
	const navagate = useNavigate();
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/rv/getRerview')
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
									<div key={prod._id}>
										<span className='name'>{prod.username}</span>
										<br></br>
										<span className='rating'>{prod.rating}</span>
										<br></br>
										<h4 className='desc'>{prod.desc} </h4>
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

export default ReviewsHome;
