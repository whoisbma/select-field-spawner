require('../sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { arrayData } from './data.jsx';

// i need to know what was the last form element that got created.
// could have an app-level ref that points to it.
// pass it down to each one that gets created.
// what about passing them back up, though?


class Form extends React.Component {
	constructor(props) {
		super(props);

		this.isRoot = props.setParentForRemoval ? false : true;

		this.state = { 
			value: -1,
			width: '50px',
			visible: this.isRoot,
		};

		this.handleChange = this.handleChange.bind(this);
		this.setToValue = this.setToValue.bind(this);

		this.setForRemovalFromChild = this.setForRemovalFromChild.bind(this);
	}

	componentDidMount() {
		this.props.setForAdd(this);
		// setTimeout(() => { this.setState({ visible: true }); }, 10);
		
	}

	componentWillUpdate(nextProps, nextState) { }

	componentDidUpdate() { }

	// componentWillMount() {}
	// componentWillReceiveProps(nextProps) {}
	// shouldComponentUpdate() {}	
	// componentWillUnmount() {}

	handleChange(event) {
		this.setToValue(event.target.value);
	}

	reset() {	
		if (!this.isRoot) this.setState({ visible: false });

		setTimeout(() => {
			if (this.state.value != -1) {
				if (!this.isRoot) this.props.setParentForRemoval();
				this.props.setForAdd(this);
		
				let opt1 = document.createElement('option');
				opt1.value = "-1";
				opt1.text = "-";
				opt1.key = "-1";
		
				this.selectForm.options.add(opt1, 0);
				this.setState({
					value: -1,
					width: '50px',
				});
			}
		}, 100);
	}

	setToValue(n) {
		this.props.setForRemoval(this); 
		if (this.state.value === -1) {
			this.selectForm.options[0].remove();
		}
		this.selectForm.selectedIndex = n;
		this.hiddenOption.innerHTML = this.selectForm.options[this.selectForm.selectedIndex].textContent;
		this.hiddenSelect.style.display = 'initial';
		this.setState({ 
			value: n,
			width: this.hiddenSelect.clientWidth + 'px',
		});
		this.hiddenSelect.style.display = 'none';

		setTimeout(() => {
			this.setState({ visible: true });
		}, 100);	
	}

	setForRemovalFromChild() {
		this.props.setForRemoval(this);
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
					setForAdd={ this.props.setForAdd }
					setForRemoval={ this.props.setForRemoval }
					setParentForRemoval={ this.setForRemovalFromChild }
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
				<Form 
					custom={ newForm } 
					key={ newForm.name } 
					setForAdd={ this.props.setForAdd }
					setForRemoval={ this.props.setForRemoval }
					setParentForRemoval={ this.setForRemovalFromChild }
				/>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<span>
				<select className={ 'header-element ' + (this.state.visible ? 'on' : 'off') }
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
	custom: null,
	setForAdd: null,
	setForRemoval: null,
	setParentForRemoval: null,
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.lastForm = null;
		this.secondLastForm = null;

		this.generate = this.generate.bind(this);
		this.remove = this.remove.bind(this);

		this.handleWheel = this.handleWheel.bind(this);

		this.readyToGenerate = true;
	}

	componentDidMount() {
		window.addEventListener('wheel', this.handleWheel);
		// window.addEventListener('scroll', (e) => {console.log('hi');})
	}

	generate() {
		this.lastForm.setToValue(Math.floor(Math.random() * (this.lastForm.selectForm.options.length - 1)));
	}

	remove() {
		if (this.secondLastForm) this.secondLastForm.reset();
	}

	handleWheel(event) {
		// event.preventDefault();
		if (this.readyToGenerate) {
			this.readyToGenerate = false;
			setTimeout(() => {this.readyToGenerate = true;}, 5);
			if (event.deltaY > 0) this.generate();
			else if (event.deltaY < 0) this.remove();
		}
	}

	render() {
		return (
			<div id='container'>
					<div id='testing'>
						<button onClick={ this.generate }>generate</button>
						<button onClick={ this.remove }>remove</button>
					</div>

				<div id='header'>
					<span className='header-element'>Bryan Ma</span> 
					<Form 
						id={ 0 }
						setForAdd={ (childRef) => { this.lastForm = childRef } }
						setForRemoval={ (childRef) => { this.secondLastForm = childRef } }
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.getElementById('app'));