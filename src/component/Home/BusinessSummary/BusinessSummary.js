import React from 'react';
import './BusinessSummary.css';
import { FaBeer, FaDeezer, FaUserPlus, FaShuttleVan } from 'react-icons/fa';
const BusinessSummary = () => {
	return (
		<div>
			<div className=' grid md:grid-cols-3'>
				{/* ../ */}
				<div class='card w-96 bg-base-100 shadow-xl'>
					<figure class='px-10 pt-10'>
						<FaDeezer size={70}></FaDeezer>
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title text-4xl'>455M</h2>
						<h2 class='card-title text-2xl'>ANNUAL REVENUE</h2>
					</div>
				</div>
				{/* ../ */}
				{/* ../ */}
				<div class='card w-96 bg-base-100 shadow-xl'>
					<figure class='px-10 pt-10'>
						<FaUserPlus size={70}></FaUserPlus>
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title text-4xl'>81k+</h2>
						<h2 class='card-title text-2xl'>CUSTOMERS REVIEWS</h2>
					</div>
				</div>
				{/* ../ */}
				{/* ../ */}
				<div class='card w-96 bg-base-100 shadow-xl'>
					<figure class='px-10 pt-10'>
						<FaShuttleVan size={70}></FaShuttleVan>
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title text-4xl text-bold'>455+</h2>
						<h4 class='card-title text-2xl'>WE SERVED</h4>
					</div>
				</div>
				{/* ../ */}
			</div>
		</div>
	);
};

export default BusinessSummary;
