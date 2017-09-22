require('../sass/style.scss');

import React from 'react';

export class Submit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
		};

		this.mountAnimationTimeout = null;
	}

	componentDidMount() {
		this.mountAnimationTimeout = setTimeout(() => {
			this.setState({ visible: true });
		} , 1);
	}

	componentWillUpdate(nextProps, nextState) { }

	componentDidUpdate() { }

	componentWillMount() { }

	componentWillReceiveProps(nextProps) { 
		if (nextProps.triggerKillAnimation) {
			this.setState({ 
				visible: false,
			});
		}
	}

	shouldComponentUpdate() { 
		return true;
	}

	componentWillUnmount() { 
		clearTimeout(this.mountAnimationTimeout);
	}

	render() {
		return (
			<input 
			className={ 'header-element ' + (this.state.visible ? 'on' : 'off')}
			type='text'>
			</input>
		);
	}
}

Text.defaultProps = {
	textVal: null,
	triggerKillAnimation: null,
};