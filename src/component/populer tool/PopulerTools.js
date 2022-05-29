import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './PopulerTools.css';
import img1 from '../assets/CR/cat1.jpg';
import img2 from '../assets/CR/cat2.jpg';
import img3 from '../assets/CR/cat3.jpg';
import img4 from '../assets/CR/cat2.jpg';
import img5 from '../assets/CR/cat1.jpg';

const PopulerTools = () => {
	const sliderIteam = [
		{
			price: '1,312',

			desc: 'good quality product',
			img: img1,
		},
		{
			price: '2,445',

			desc: 'good quality product',
			img: img2,
		},
		{
			price: '2,339',

			desc: 'good quality product',
			img: img3,
		},
		{
			price: '1,945',

			desc: 'good quality product',
			img: img4,
		},
		{
			price: '1,014 ',

			desc: 'good quality product',
			img: img5,
		},
	];

	let settings_3 = {
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		//koyta kore show korbe
		slidesToShow: 4,
		//arrow press korle koyta kore asbe
		slidesToScroll: 2,
		// vertical:true,
		// verticalSwiping={true}
		pauseOnHover: false,
		//fade={true}
		touchMove: true,

		initialSlide: 0,
		infinite: true,
		// centerPadding: '170px',
		centerMode: true,

		responsive: [
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
		],
	};

	return (
		<>
			<div className='multiSliderHere'>
				<Slider {...settings_3}>
					{sliderIteam.map(daa => (
						<div className='cardMeHere'>
							<div class='card card-compact w-44 bg-base-100 shadow-xl'>
								<figure>
									<img src={daa.img} alt='no img found' />
								</figure>
								<div class='card-body'>
									<h2 class='card-title'>TK {`${daa.price}`} </h2>
									<p>{daa.desc}?</p>
								</div>
							</div>
							{/* ../ */}

							{/* ../ */}
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default PopulerTools;
