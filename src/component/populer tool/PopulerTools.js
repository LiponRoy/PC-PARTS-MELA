import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './PopulerTools.css';
import img1 from '../assets/CR/cat1.jpg';
import img2 from '../assets/CR/cat2.jpg';
import img3 from '../assets/CR/cat3.jpg';
import img4 from '../assets/CR/cat4.jpg';
import img5 from '../assets/CR/cat5.jpg';

const PopulerTools = () => {
	const sliderIteam = [
		{
			price: '4,312',

			desc: 'Smart Wooden Bedroom(12SD4)',
			img: img1,
		},
		{
			price: '5,445',

			desc: 'Best Bed set(120SD4)',
			img: img2,
		},
		{
			price: '12,339',

			desc: 'Smart Chair(7Sc9)',
			img: img3,
		},
		{
			price: '10,945',

			desc: 'Tea Table and Smart Chair(45rt)',
			img: img4,
		},
		{
			price: '19,014 ',

			desc: 'Sofa set (234mmx)',
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
							<div className='iteamsHere text-start'>
								<img src={daa.img} alt='no img found' width='500' height='500' />
								<h5>TK {`${daa.price}`} </h5>
								<h6>{daa.desc}</h6>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default PopulerTools;
