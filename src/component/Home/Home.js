import React from 'react';
import Divider from '../Divider';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import HomeSlider from './HomeSlider/HomeSlider';
import ToolsPart from './ToolsPart/ToolsPart';

const Home = () => {
	return (
		<div>
			<HomeSlider></HomeSlider>
			<Divider DividerText='Tools Parts'></Divider>
			<ToolsPart></ToolsPart>
			<Divider DividerText='Business Summary'></Divider>
			<BusinessSummary></BusinessSummary>
		</div>
	);
};

export default Home;
