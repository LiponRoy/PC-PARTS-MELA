import React from 'react';
import './BusinessSummary.css';
import { FaBeer, FaAudible } from 'react-icons/fa';
const BusinessSummary = () => {
	return (
		<div>
			<div className='bSummary grid md:grid-cols-4'>
				<div className='sectionOne p-12 text-white'>
					<FaAudible size='88px' color='white'></FaAudible>
					<span className='text-4xl'>12</span>
					<span className='text-1xl'>something</span>
				</div>
				<div className='sectionOne p-12 text-white'>
					<FaAudible size='88px' color='white'></FaAudible>
					<span className='text-4xl'>12</span>
					<span className='text-1xl'>something</span>
				</div>
				<div className='sectionOne p-12 text-white'>
					<FaAudible size='88px' color='white'></FaAudible>
					<span className='text-4xl'>12</span>
					<span className='text-1xl'>something</span>
				</div>
				<div className='sectionOne p-12 text-white'>
					<FaAudible size='88px' color='white'></FaAudible>
					<span className='text-4xl'>12</span>
					<span className='text-1xl'>something</span>
				</div>
			</div>
		</div>
	);
};

export default BusinessSummary;
