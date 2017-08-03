require('../sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { arrayData } from './data.jsx';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			value: this.props.value,
			width: '50px',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	// componentWillMount() {}
	// componentDidMount() {}

	// componentWillReceiveProps(nextProps) {
		// this.constructor(nextProps);
		// this.setState({value: nextProps.value});
	// }

	// shouldComponentUpdate() {}	
	// componentWillUpdate(nextProps, nextState) {}
	// componentDidUpdate() {}
	// componentWillUnmount() {}

	handleChange(event) {
		this.hiddenOption.innerHTML = this.selectForm.options[this.selectForm.selectedIndex].textContent;
		this.hiddenSelect.style.display = 'initial';
		this.setState({ 
			value: event.target.value, 		
			width: this.hiddenSelect.clientWidth + 'px',
		});
		this.hiddenSelect.style.display = 'none';

		if (this.state.value === -1) {
			this.selectForm.options[0].remove();
		}
	}

	getOptions() {
		let options = arrayData[this.props.id].options.map((obj, i) =>
			<option value={ i } key={ i }>
				{ obj.text }
			</option>
		);
		options.splice(0, 0, <option value={ -1 } key={ -1 }>-</option>);
		return options;
	}

	getChildForm() {
		if (arrayData[this.props.id].options[this.state.value] != null &&
				arrayData[this.props.id].options[this.state.value].target != null) {
			return (
				<Form 
					id={ arrayData[this.props.id].options[this.state.value].target } 
					value={ -1 }
					key={ arrayData[this.props.id].options[this.state.value].text }
				/>
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
					<span>in Brooklyn, New York</span>
				</div>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.getElementById('app'));