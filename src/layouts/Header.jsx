import React from 'react';
import styled from 'styled-components';
import {Button} from '../elements';

const AppHeader = styled.header`
	background: darkblue;
	color: #fff;
	padding: 0.8rem 1.2rem;
`;

const Header = () => <AppHeader>Home</AppHeader>;

const HeaderButton = styled(Button)`
	border-radius: 12px;
	border: 1px solid violet;
	min-width: 400px;
`;

Header.Button = HeaderButton;

export {Header};
