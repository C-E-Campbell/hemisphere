import React from "react";
import "./Loading.style.scss";

const Loader = () => {
	return (
		<div id='load' className='ui active dimmer'>
			<div className='ui text loader large'>
				Please allow us to use your location.
			</div>
		</div>
	);
};

export default Loader;
