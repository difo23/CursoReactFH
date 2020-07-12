import React from 'react';
import Counter from './components/Counter';

let valueDefault = 10;

function App() {
	return (
		<div className="App">
			<Counter value={valueDefault} />
		</div>
	);
}

export default App;
