require('../sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { RecursiveElement } from './recursiveElement.jsx';
import { Form } from './form.jsx';
import { Text } from './text.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.lastForm = null;
		this.secondLastForm = null;

		this.generate = this.generate.bind(this);
		this.remove = this.remove.bind(this);

		this.handleWheel = this.handleWheel.bind(this);

		this.readyToGenerate = true;
		this.readyToGenerateTimeout = null;
	}

	componentDidMount() {
		window.addEventListener('wheel', this.handleWheel);
		// window.addEventListener('scroll', (e) => {console.log('hi');})
	}

	componentWillUnmount() {
		clearTimeout(this.readyToGenerateTimeout);
	}

	generate() {
		this.lastForm.setToValue(Math.floor(Math.random() * (this.lastForm.selectForm.options.length - 1)));
	}

	remove() {
		if (this.secondLastForm) this.secondLastForm.reset();
	}

	handleWheel(event) {
		event.preventDefault();

		if (this.readyToGenerate) {
			this.readyToGenerate = false;
			this.readyToGenerateTimeout = setTimeout(() => {this.readyToGenerate = true;}, 100);
			if (event.deltaY > 0) {
				this.generate();
			}
			else if (event.deltaY < 0) {
				this.remove();
			}
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