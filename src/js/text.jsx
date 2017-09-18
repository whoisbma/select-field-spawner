require('../sass/style.scss');

import React from 'react';
import { Form } from './form.jsx';

export class Text extends React.Component {
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
			<span className={ 'header-element ' + (this.state.visible ? 'on' : 'off')}>
				{ this.props.textVal }
			</span>
		);
	}
}

Text.defaultProps = {
	textVal: null,
	triggerKillAnimation: null,
};