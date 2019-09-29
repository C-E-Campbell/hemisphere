import React from "react";
import "./SeasonDisplay.style.scss";

const seasonConfig = {
	summer: {
		text: "Lets hit the beach",
		iconStyle: "sun"
	},
	winter: {
		text: "Burr, it is cold.",
		iconStyle: "snowflake"
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = ({ lat }) => {
	const season = getSeason(lat, new Date().getMonth());
	const { text, iconStyle } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconStyle} icon massive icon-left`} />
			<h1>{text}</h1>
			<i className={`${iconStyle} icon massive icon-right`} />
		</div>
	);
};

export default SeasonDisplay;

//<i class="snowflake outline icon"></i>

//<i class="sun icon"></i>
