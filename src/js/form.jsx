require('../sass/style.scss');

import React from 'react';
import { Text } from './text.jsx';
import { data } from './data.jsx';

export class Form extends React.Component {
	constructor(props) {
		super(props);

		this.isRoot = props.setParentForFutureRemoval ? false : true;

		this.state = { 
			value: -1,
			width: '50px',
			visible: this.isRoot,
			triggerChildKillAnimation: false,
		};

		this.getPostText = this.getPostText.bind(this);

		this.handleChange = this.handleChange.bind(this);
		this.setToValue = this.setToValue.bind(this);

		this.setForRemovalFromChild = this.setForRemovalFromChild.bind(this);

		this.mountAnimationTimeout = null;
		this.setRemovalTimeout = null;

		this.hasChild = false;
	}

	componentDidMount() {
		this.props.setForSelection(this);

		this.mountAnimationTimeout = setTimeout(() => {
			this.setState({ visible: true });
		} , 1);
	}

	componentWillUpdate(nextProps, nextState) { }

	componentDidUpdate() { }

	// componentWillMount() {}

	componentWillReceiveProps(nextProps) {
		// if parent is telling child to trigger removal
		if (nextProps.triggerKillAnimation) {
			this.setState({ 
				visible: false,
				triggerChildKillAnimation: false,
			});
		}
	}

	componentWillUnmount() {
		clearTimeout(this.mountAnimationTimeout);
		clearTimeout(this.setRemovalTimeout);
	}

	handleChange(event) {
		this.setToValue(event.target.value);
	}

	// called by App to whatever its set to the second to last form of, in order to tell its child to trigger its removal animation and change its form status back to -1
	reset() {	
		if (this.state.value != -1 && !this.state.triggerChildKillAnimation) {

			this.setState({
				triggerChildKillAnimation: true
			});

			if (!this.isRoot) this.props.setParentForFutureRemoval();

			const resetForm = function() {
				let opt1 = document.createElement('option');
				opt1.value = "-1";
				opt1.text = "-";
				opt1.key = "-1";

				this.selectForm.options.add(opt1, 0);
				this.props.setForSelection(this);
				this.setState({
					value: -1,
					width: '50px',
				});
			}

			if (this.hasChild ) {
				this.setRemovalTimeout = setTimeout(resetForm.bind(this), 300);
			} else {
				resetForm.bind(this);
			}
		}	
	}

	setToValue(n) {
		this.props.setForRemoval(this); 

		this.setState({
				triggerChildKillAnimation: false
			});

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
	}

	setForRemovalFromChild() {
		// pass this function to children to be able to call and set it to be removed by App next
		this.props.setForRemoval(this);
	}

	getOptions() {
		let options;
		if (this.props.id !== null) {
			options = data[this.props.id].options.map((obj, i) =>
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
			nextData = data[this.props.id];
		} else {
			nextData = this.props.custom;
		}

		// if there's an actual target, set the form to it
		if (nextData.options[this.state.value] != null && 
				nextData.options[this.state.value].target != null) {
			
			this.hasChild = true;
			
			return (
				<Form
					id={ nextData.options[this.state.value].target }
					key={ nextData.options[this.state.value].text }
					setForSelection={ this.props.setForSelection }
					setForRemoval={ this.props.setForRemoval }
					setParentForFutureRemoval={ this.setForRemovalFromChild }
					triggerKillAnimation={ this.state.triggerChildKillAnimation }
				/>
			);

		// if its a null target, make a custom form
		} else if (nextData.options[this.state.value] != null &&
							 nextData.options[this.state.value].target == null &&
							 nextData.options.length > 1) {

			this.hasChild = true;

			let newForm = {
				name: nextData.name + this.state.value,
				index: nextData.index,
			};
			
			if (this.isCustomForm()) {
				newForm.options = nextData.options
					.filter((obj, i) => i != this.state.value && obj.text !== 'and')
					.map((obj) => { return { 
						text: obj.text, 
						target: obj.target,
						postText: obj.postText,
					};  
				});
			} else {
				newForm.options = nextData.options
					.filter((obj, i) => i != this.state.value && obj.text !== 'and')
					.map((obj) => { return { 
 						text: 'and ' + obj.text,	
 						target: obj.target,
 						postText: obj.postText,
 					}; 
				});
			}
			// newForm.options.push({ text: 'and', target: 0 });
			
			return (
				<Form 
					custom={ newForm } 
					key={ newForm.name } 
					setForSelection={ this.props.setForSelection }
					setForRemoval={ this.props.setForRemoval }
					setParentForFutureRemoval={ this.setForRemovalFromChild }
					triggerKillAnimation={ this.state.triggerChildKillAnimation }
				/>
			);
		} else {
			return null;
		}
	}

	getPostText() {
		// i might want this to return a custom <Text /> react component.
		// this way i could control mounting animations as well here.

		if (!this.isCustomForm()) {		
			if (data[this.props.id].options[this.state.value] && 
					data[this.props.id].options[this.state.value].postText) {
				this.hasChild = true;
				return (
					<Text 
						textVal={ data[this.props.id].options[this.state.value].postText } 
						triggerKillAnimation={ this.state.triggerChildKillAnimation }
					/>
				);
			} else {
				return null;
			}
		} else {
			if (this.props.custom.options[this.state.value] &&
					this.props.custom.options[this.state.value].postText) {
				this.hasChild = true;
				return (
					<Text 
						textVal={ this.props.custom.options[this.state.value].postText }
						triggerKillAnimation={ this.state.triggerChildKillAnimation }
					/>
				);
			} else {
				return null;
			}
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
				{ this.getPostText() }
				{ this.getChildForm() }
			</span>
		);
	}
}

Form.defaultProps = {
	id: null,
	custom: null,
	setForSelection: null,
	setForRemoval: null,
	setParentForFutureRemoval: null,
	triggerKillAnimation: null,
};