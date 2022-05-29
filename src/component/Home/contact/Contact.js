import React from 'react';
import './Contact.css';
const Contact = () => {
	return (
		<div>
			<div class='MycontactForm'>
				<div class='topHeading'>
					<h2>Contact With Us </h2>
				</div>
				<div class='contactForm'>
					<form action=''>
						<input type='text' placeholder='Email' />
						<textArea placeholder='Message'></textArea>
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
