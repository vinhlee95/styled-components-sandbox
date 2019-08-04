import {css} from 'styled-components';

const breakpoint = {
	phone: 400,
	tabPort: 600,
	tabLand: 900,
	desktop: 1200
};

// Mixins
// Above mixin
// Output:
// const above = {
//   phone: fn(),
//   tabPort: fn(),
//   ...
// }
export const above = Object.keys(breakpoint).reduce((acc, label) => {
	acc[label] = (...args) => {
		console.log('Args', args);
		return css`
			@media (min-width: ${breakpoint[label]}px) {
				${css(...args)}
			}
		`;
	};

	return acc;
}, {});

export const buttonCommon = css`
	cursor: pointer;
	font-size: 16px;
	border-radius: 3px;
	margin: 0 1em;
	padding: 0.25em 1em;
	transition: 0.5s all ease-out;
`;
