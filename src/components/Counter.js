import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => {
	const [ v, setValue ] = useState(value);

	const incremento = () => {
		setValue(v + 1);
	};

	const decrement = () => {
		setValue(v - 1);
	};

	const reset = () => {
		setValue(value);
	};

	return (
		<div>
			<h1> Aplicaciòn contador</h1>
			<h2>{v}</h2>

			<button onClick={incremento}> Incremento </button>
			<button onClick={decrement}> Decremento </button>
			<button onClick={reset}> Reset </button>
		</div>
	);
};

Counter.propTypes = {
	value: PropTypes.number
};

export default Counter;
