import React, { Component } from 'react';

class Output extends Component {
	toFeet(n) {
		let realFeet = ((n*0.393700) / 12);
		let feet = Math.floor(realFeet);
		let inches = Math.round((realFeet - feet) * 12);
		return feet + "'" + inches;
	}
	toLbs(kg) {
		let nearExact = kg/0.45359237;
		let lbs = Math.floor(nearExact);
		return lbs;
	}

  render() {
  	let height = this.toFeet(this.props.data.height);
  	let weight = this.toLbs(this.props.data.weight);
  	let bmi = this.props.data.bmi;
  	let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
      Results <br />
      	Height: {height} |
      	Weight: {weight} lbs |
      	Bmi: {bmi} |
      	<span className={(this.props.data.bmiClass === "Obese") ? "danger" : ""}>{bmiClass}</span>
      </div>
    );
  }
}

export default Output;