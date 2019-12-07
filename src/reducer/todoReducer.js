import uuid from 'uuid/v4';
const countReducer = (state, action) => {
	switch (action.type) {
		case 'ADDTODO':
			return [ ...state, { id: uuid(), task: action.task, completed: false } ];
		case 'TOGGLETODO':
			return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		case 'REMOVETODO':
			return state.filter((todo) => todo.id !== action.id);
		case 'EDITTODO':
			return state.map((todo) => (todo.id === action.id ? { ...todo, task: action.newTask } : todo));
		default:
			return state;
	}
};
export default countReducer;
