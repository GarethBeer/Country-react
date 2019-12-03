import React, { Component } from "react";

import "../styles/InputField.css";

class InputField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueOfInput: " "
		};
	}

	grabSomeDataFromInput = event => {
		const inputValue = event.target.value;
		this.setState({
			valueOfInput: inputValue
		});
	};

	sendCountryToParent = () => {
		const { sendToMyParent } = this.props;
		sendToMyParent(this.state.valueOfInput);
	};

	render() {
		return (
			<div className="search">
				<input
					type="text"
					className="search-term"
					placeholder="Show me the country"
					onChange={this.grabSomeDataFromInput}
				/>
				<button
					type="submit"
					className="search-button"
					onClick={this.sendCountryToParent}
				>
					<i className="fa fa-search"></i>
				</button>
			</div>
		);
	}
}
export default InputField;
