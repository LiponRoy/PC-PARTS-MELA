import React from 'react';
import './HomeSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import img0 from '../../assets/slideImg/p1.jpg';
import img1 from '../../assets/slideImg/p2.jpg';
import img2 from '../../assets/slideImg/p3.jpg';
import img3 from '../../assets/slideImg/p4.jpg';

const HomeSlider = () => {
	const data = [
		{
			name: 'Make Your Home gorgeous',
			img: img0,
		},
		{
			name: 'Make Your Home gorgeous',

			img: img1,
		},
		{
			name: 'Make Your Home gorgeous',

			img: img2,
		},
		{
			name: 'Make Your Home gorgeous',

			img: img3,
		},
	];

	let properticeMe = {
		autoplay: true,
		autoplaySpeed: 8000,
		dots: true,
		pauseOnHover: false,
		fade: true,
		touchMove: true,
	};
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-0'></div>
				<div className='col-md-12'>
					<div className='mainSld'>
						<Slider {...properticeMe}>
							{data.map(daa => (
								<div className='carddMe'>
									<div className='iteams'>
										<div className='imgPart'>
											<img className='imagecl' src={daa.img} alt='no img found' />
											<div className='textAll'>
												<div className='text-start'>
													<span></span>
													<br></br>
													<span className='text-3xl'>Best Quality</span> <br></br>
													<span className='text-2xl'>Products</span>
													<br></br>
													<p className='four-text'></p>
													<br></br>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

//end

export default HomeSlider;
