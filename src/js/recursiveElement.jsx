import React from 'react';
import { Form } from './form.jsx';
import { arrayData } from './data.jsx';

export class RecursiveElement extends React.Component {
	constructor(props) {
		super(props);
		
		// still need to know if its the first element or not, whether or not its a form or whatever other kind of element.
		this.isRoot = props.setParentForFutureRemoval ? false : true;
		// this.state = { }

	}

	componentWillMount() {}
	componentDidMount() {}
	shouldComponentUpdate() {}
	componentWillUpdate(nextProps, nextState) {}
	componentDidUpdate() {}
	componentWillReceiveProps(nextProps) {}
	componentWillUnmount() {}

	handleChange() {

	}

	reset() {

	}

	setForRemovalFromChild() {

	}

	getChild() {

	}

	render() {
		
	}


} 

RecursiveElement.defaultProps = {
	setParentForFutureRemoval: null, // recursive elements need to set their parent for future removal.
}