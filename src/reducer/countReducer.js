import React, { useReducer } from 'react';
const countReducer = (state, action) => {
	switch (action.type) {
		case 'ADD-5':
			return { count: state.count + action.amount };
		case 'SUB':
			return { count: state.count - action.amount };
		case 'RESET':
			return { count: 0 };
		case 'MULT_5': {
			if (state.count === 0) {
				return { count: 1 };
			}
			else return { count: state.count * action.amount };
		}

		default:
			return { count: state.count + 1 };
	}
};

const CountNum = () => {
	const [ state, dispatch ] = useReducer(countReducer, { count: 1 });
	return (
		<div>
			<div style={countStyle}>
				<h1> {state.count}</h1>
				<button onClick={() => dispatch({ type: 'ADD-5', amount: 10 })}>ADD (10)</button>
				<button onClick={() => dispatch({ type: 'SUB', amount: 1 })}>SUB </button>
				<button onClick={() => dispatch({ type: 'ADD-1' })}>ADD (1)</button>
				<button onClick={() => dispatch({ type: 'MULT_5', amount: 5 })}>MULT (5)</button>
				<button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
			</div>
		</div>
	);
};
export default CountNum;

const countStyle = {
	backgroundColor : '#FF851B ',
	width           : '90%',
	hight           : 'auto',
	margin          : 'auto',
	textAlign       : 'center',
	padding         : '10px',
	boxShadow       : ' 0.1px 3px 8px 0.2px',
	borderRadius    : ' 10px',
	color           : '#fff'
};
