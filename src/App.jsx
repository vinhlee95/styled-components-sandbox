import React from 'react';
import {Button} from './elements';
import {GlobalStyle} from './GlobalStyle';
import {Header} from './layouts';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<p>Hello styled component</p>
			<Button>Secondary</Button>
			<Button primary>Primary</Button>
		</div>
	);
}

export default App;
