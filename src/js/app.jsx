require('../sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { arrayData } from './data.jsx';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			value: -1,
			width: '50px',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	// componentWillMount() {}
	// componentDidMount() {}
	// componentWillReceiveProps(nextProps) {}
	// shouldComponentUpdate() {}	
	// componentWillUpdate(nextProps, nextState) {}
	// componentDidUpdate() {}
	// componentWillUnmount() {}

	handleChange(event) {
		this.setNewWidth(event.target.value);
		if (this.state.value === -1) {
			this.selectForm.options[0].remove();
		}
	}

	setNewWidth(width) {
		this.hiddenOption.innerHTML = this.selectForm.options[this.selectForm.selectedIndex].textContent;
		this.hiddenSelect.style.display = 'initial';
		this.setState({ 
			value: width,
			width: this.hiddenSelect.clientWidth + 'px',
		});
		this.hiddenSelect.style.display = 'none';
	}

	getOptions() {
		let options;
		if (this.props.id !== null) {
			options = arrayData[this.props.id].options.map((obj, i) =>
				<option value={ i } key={ i }>{ obj.text }</option>
			);
		} else {
			options = this.props.custom.options.map((obj, i) =>
				<option value={ i } key={ i }>{ obj.text }</option>
			);
		}
		options.splice(0, 0, <option value={ -1 } key={ -1 }>-</option>);
		return options;
	}

	isCustomForm() {
		if (this.props.id !== null) return false;
		else return true;
	}

	getChildForm() {
		let nextData = {};
		if (!this.isCustomForm()) {
			nextData = arrayData[this.props.id];
		} else {
			nextData = this.props.custom;
		}

		// if there's an actual target, set the form to it
		if (nextData.options[this.state.value] != null && 
				nextData.options[this.state.value].target != null) {
			return (
				<Form
					id={ nextData.options[this.state.value].target }
					key={ nextData.options[this.state.value].text }
				/>
			);
		// if its a null target, make a custom form
		} else if (nextData.options[this.state.value] != null &&
							 nextData.options[this.state.value].target == null) {
			let newForm = {
				name: nextData.name,
				index: nextData.index,
			};
			
			if (this.isCustomForm()) {
				newForm.options = nextData.options.filter((obj, i) => i != this.state.value && obj.text !== 'and')
																					.map((obj) => { return { text: obj.text, target: obj.target };  
																					});
			} else {
				newForm.options = nextData.options.filter((obj, i) => i != this.state.value && obj.text !== 'and')
																 					.map((obj) => { return { text: 'and ' + obj.text,	target: obj.target}; 
																 					});
			}
			newForm.options.push({ text: 'and', target: 0 });
			
			return (
				<Form custom={ newForm } key={ newForm.name } />
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<span>
				<select className='header-element'
								value={ this.state.value } 
								style={ { width: this.state.width } } 
								onChange={ this.handleChange }
								ref={ (select) => { this.selectForm = select; } }>
					{ this.getOptions() }
				</select>

				<select className='header-element hidden'
								ref={ (select) => { this.hiddenSelect = select; } }>
					<option ref={ (option) => { this.hiddenOption = option; } }></option>
				</select>
				{ this.getChildForm() }
			</span>
		);
	}
}

Form.defaultProps = {
	id: null,
	value: null,
	custom: null,
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
					<Form id={ 0 }/>
					<span>in Brooklyn, New York</span>
				</div>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.getElementById('app'));