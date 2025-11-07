import React from "react";


//create your first component
const Home = (props) => {

	return (
		<div className="container">
			<div className="clock-container">
				<div className="digit-container">
					<div className="clock-symbol"><i class="fa-regular fa-clock"></i></div>
				</div>
				<div className="digit-container">
					<div>{props.digit1}</div>
				</div>
				<div className="digit-container">
					<div>{props.digit2}</div>
				</div>
				<div className="digit-container">
					<div>{props.digit3}</div>
				</div>
				<div className="digit-container">
					<div>{props.digit4}</div>
				</div>
				<div className="digit-container">
					<div>{props.digit5}</div>
				</div>
				<div className="digit-container">
					<div>{props.digit6}</div>
				</div>
			</div>
		</div >
	);
};

export default Home;