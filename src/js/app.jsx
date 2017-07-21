require('../sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';


// add ID to manage data - not rely on name alone. 
// generate a new ID every time? or just have an array/array indices?
let testData = {
	start: {
		options: [
			'is',
			'was',
			'test a',
			'test b',
		]
	},
	is: {
		options: [
			'a creative technologist',
			'a programmer',
			'an artist',
			'an educator',
		]
	},
	['a creative technologist']: {
		options: [
			'working at'
		]
	},
	['a programmer']: {
		options: [
			'working on',
			'proficient in',
		],
	},
	['an artist']: {
		options: [
			'interested in',
		]
	},
	['an educator']: {
		options: [
			'teaching at',
		]
	}
};

let arrayData = [
	{
		name: 'start',
		options: [
			{	text: 'is', target: 1 },
		]
	},
	{
		name: 'is',
		options: [
			{ text: 'a technologist', target: 1 },
			{ text: 'a programmer', target: null },
			{ text: 'an artist', target: null },
			{ text: 'an educator', target: null }
		]
	},
	{

	}

]


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: this.props.value };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	getOptions() {
		let options = arrayData[this.props.id].options.map((obj, i) =>
			<option value={ i } key={ i }>
				{ obj.text }
			</option>
		);
		options.splice(0, 0, <option value={ -1 } key={ -1 } />);
		return options;
	}

	getChildForm() {
		if (arrayData[this.props.id].options[this.state.value] &&
				arrayData[this.props.id].options[this.state.value].target) {
			return (
				<Form 
					id={ arrayData[this.props.id].options[this.state.value].target } 
					value={ -1 }
				/>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<span>
				<select className='header-element' value={ this.state.value } onChange={ this.handleChange }>
					{ this.getOptions() }
				</select>
				{ this.getChildForm() }
			</span>
		);
	}
}

class App extends React.Component {

	render() {
		return (
			<div id='container'>
				<div id='header'>
					<span className='header-element'>Bryan Ma</span> 
					<Form id={ 0 } value={ -1 }/>
				</div>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.getElementById('app'));