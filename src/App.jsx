import React from 'react';
import {Button} from './elements';
import {GlobalStyle} from './GlobalStyle';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<p>Hello styled component</p>
			<Button>Secondary</Button>
			<Button primary>Primary</Button>
		</div>
	);
}

export default App;
