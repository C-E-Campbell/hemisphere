import React from "react";
import "./ErrorScreen.style.scss";

const ErrorScreen = () => {
	return (
		<div id='errorScreen' className='ui info message'>
			<div className='header'>Oops...</div>
			<ul className='list'>
				<li>Without geolocation we cant find you.</li>
				<li>Do you actually live on earth? You could be anywhere :(</li>
			</ul>
		</div>
	);
};

export default ErrorScreen;
