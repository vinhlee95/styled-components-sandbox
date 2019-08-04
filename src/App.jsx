import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from './GlobalStyle';
import {Button} from './elements';
import {Header} from './layouts';
import * as themes from './themes';

function App() {
	const [theme, setTheme] = useState('dark');

	const getTheme = () => {
		switch (theme) {
			case 'light':
				return themes.lightTheme;
			case 'dark':
				return themes.darkTheme;
			default:
				return themes.lightTheme;
		}
	};

	const handleChangeTheme = () => {
		switch (theme) {
			case 'light':
				return setTheme('dark');
			case 'dark':
				return setTheme('light');
			default:
				return;
		}
	};

	return (
		<ThemeProvider theme={getTheme()}>
			<div className="App">
				<GlobalStyle />
				<Header />
				<Button onClick={handleChangeTheme}>Change theme</Button>
				<p>Hello styled component</p>
				<Button>Secondary</Button>
				<Button primary>Primary</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
