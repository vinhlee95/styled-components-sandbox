import styled from 'styled-components';
import * as mixins from '../utils.style';

const Button = styled.button`
	background: ${props => (props.primary ? 'red' : 'white')};
	color: ${props => (props.primary ? 'white' : 'red')};
	${mixins.buttonCommon};

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
