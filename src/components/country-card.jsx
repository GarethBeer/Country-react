import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
	if (!props.country) {
		return null;
	}
	const {
		country: { name, capital, population, alpha2Code }
	} = props;

	return (
		<div className="card-list">
			<div className="card">
				<img
					src={`https://www.countryflags.io/${alpha2Code}/flat/64.png`}
					alt="flag"
					style={{ width: "100%" }}
				/>
				<div className="card-details">
					<h4>
						<b>I am {name}</b>
					</h4>
					<p>These are some details about me:</p>
					<ul>
						<li>My Capital is {capital}</li>
						<li>My Population is {population}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default CountryCard;
