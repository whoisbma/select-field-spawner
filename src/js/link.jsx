require('../sass/style.scss');

import React from 'react';

export class Link extends React.Component {
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
				<a key={ this.props.url } href={ this.props.url }	target='_blank'>{ this.props.text }</a>
			</span>
		);
	}
}

Text.defaultProps = {
	url: null,
	text: null,
	triggerKillAnimation: null,
};