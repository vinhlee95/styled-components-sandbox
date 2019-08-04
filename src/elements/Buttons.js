import styled, {css} from 'styled-components';
import * as mixins from '../utils';

const buttonCommon = css`
	cursor: pointer;
	font-size: 16px;
	border-radius: 3px;
	margin: 0 1em;
	padding: 0.25em 1em;
	transition: 0.5s all ease-out;
`;

const Button = styled.button`
	background: ${props => (props.primary ? 'red' : 'white')};
	color: ${props => (props.primary ? 'white' : 'red')};
	${buttonCommon};

	&:hover {
		background-color: palevioletred;
		color: white;
	}
	/* Breakpoints */
	${mixins.above.tabPort`
		background: black;
		color: white;
	`}

	${mixins.above.desktop`
		background: white;
		color: black;
	`}
`;

export {Button};
