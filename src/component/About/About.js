import React from 'react';
import './About.css';
const About = () => {
	return (
		<div>
			<div class='hero min-h-screen bg-base-200'>
				<div class='hero-content flex-col lg:flex-row'>
					<img className=' img-thumbnail' src='img/me.jpg' width='300px' alt='no-image' />
					<div>
						<h1 class='text-2xl text-left font-bold m-4'>Lipon Roy!</h1>
						<h1 class='text-1xl text-left font-bold m-4'>Email : roylipon550@gmail.com</h1>
						<h1 class='text-1xl text-left font-bold m-4'>Education : MSc in CSE </h1>
						<h1 class='text-1xl text-left font-bold m-4'>Technology Skill : HTML, CSS, JAVASCRIPT,REACT JS,NODE js,MONGO DB, SQL, Git and GitHub, Basic design skills</h1>
						<h1 class='text-1xl text-left font-bold m-4'>My Project Live website Link 1 : https://lr-furniture.web.app/</h1>
						<h1 class='text-1xl text-left font-bold m-4'>My Project Live website Link 2 : https://react-firebase-auth-lipon.web.app/</h1>
						<h1 class='text-1xl text-left font-bold m-4'>My Project Live website Link 3 : https://snazzy-babka-aa35da.netlify.app/</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
