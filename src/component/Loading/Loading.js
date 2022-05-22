import React from 'react';
import './Loading.css';
const Loading = () => {
	return (
		<div className='my-loading'>
			<div class='spinner-border text-dark' role='status'>
				<span class='sr-only'></span>
			</div>
		</div>
	);
};

export default Loading;
