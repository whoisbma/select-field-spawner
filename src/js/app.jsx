require('../sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

let arrayData = [
	{
		name: 'start',
		index: 0,
		options: [
			{	text: 'is', target: 1 },
		]
	},
	{
		name: 'is',
		index: 1,
		options: [
			{ text: 'a technologist', target: 2 },
			{ text: 'a programmer', target: null },
			{ text: 'an artist', target: null },
			{ text: 'an educator', target: null }
		]
	},
	{
		name: 'a technologist',
		index: 2,
		options: [
			{ text: 'working at', target: null, post: 'Gallagher and Associates' },
			{ text: 'working on', target: null },
			{ text: 'working in', target: null },
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
	constructor(props) {
		super(props);
	}

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