import React from 'react';
import Divider from '../Divider';
import PopulerTools from '../populer tool/PopulerTools';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import HomeSlider from './HomeSlider/HomeSlider';
import ReviewsHome from './review/ReviewsHome';
import ToolsPart from './ToolsPart/ToolsPart';

const Home = () => {
	return (
		<div>
			<HomeSlider></HomeSlider>
			<Divider DividerText='Populer Tools'></Divider>
			<PopulerTools></PopulerTools>
			<Divider DividerText='Tools Parts'></Divider>
			<ToolsPart></ToolsPart>
			<Divider DividerText='Business Summary'></Divider>
			<BusinessSummary></BusinessSummary>
			<Divider DividerText='Reviews'></Divider>
			<ReviewsHome></ReviewsHome>
		</div>
	);
};

export default Home;
