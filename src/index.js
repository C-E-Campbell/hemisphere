import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Loader from "./components/Loader/Loading";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			errorMessage: ""
		};
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude
				});
			},
			err => {
				this.setState({ errorMessage: err.message });
			}
		);
		console.log("Did Mount");
	}

	componentDidUpdate() {
		console.log("Did Update");
	}

	render() {
		const { lat, errorMessage } = this.state;

		if (errorMessage && !lat) {
			return <ErrorScreen />;
		}

		if (!errorMessage && lat) {
			return <SeasonDisplay lat={lat} />;
		}

		return <Loader />;
	}
}
ReactDOM.render(<App />, document.getElementById("root"));
