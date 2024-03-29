require('../sass/style.scss');

import React from 'react';

export class Image extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
		};

		this.mountAnimationTimeout = null;

		this.style = {
			position: 'absolute',
			top: Math.random() * window.innerHeight,
			left: Math.random() * window.innerWidth,
			zIndex: -1,
		};
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
			<img 
				style={ this.style }
				className={ 'header-element ' + (this.state.visible ? 'on' : 'off')}
				src={ this.props.url }
			/>
		);
	}
}

Image.defaultProps = {
	url: null,
	triggerKillAnimation: null,
};