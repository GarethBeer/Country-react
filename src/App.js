import React, { Component } from "react";
import InputField from "./components/input-field";
import "./styles/App.css";
import CountryCard from "./components/country-card";

class App extends Component {
	constructor() {
		super();
		this.state = {
			country: null
		};
	}
	handleCountryFromChild = dataFromChild => {
		this.callApi(dataFromChild);
	};
	callApi = country => {
		fetch(`https://restcountries-v1.p.rapidapi.com/name/${country}`, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
				"x-rapidapi-key": "977fb23600msh4ddc20963134706p1b5b50jsn076334f6d9fb"
			}
		})
			.then(initialResponse => initialResponse.json())
			.then(response => {
				this.setState({
					country: response[0]
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="wrap">
				<InputField sendToMyParent={this.handleCountryFromChild} />
				<CountryCard country={this.state.country} />
			</div>
		);
	}
}

export default App;
