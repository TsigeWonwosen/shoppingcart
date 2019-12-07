import React, { createContext } from 'react';
// import useTodoState from '../hooks/useTodoState';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducer/todoReducer';
import uuid from 'uuid/v4';

export const defaultTodos = [
	{ id: uuid(), task: 'Now is the Time to Change', completed: false },
	{ id: uuid(), task: 'Release lady Dugs into garden', completed: true },
	{ id: uuid(), task: 'Walk the Talk', completed: true }
];
export const TodoContext = createContext();
export const DispatchContext = createContext();

export const TodoProvider = (props) => {
	// const todoStaff = useTodoState(defaultTodos);
	//const [ state, dispatch ] = useReducer(todoReducer, defaultTodos);
	const [ state, dispatch ] = useLocalStorageReducer('Todo', defaultTodos, todoReducer);

	// return <TodoContext.Provider value={todoStaff}>{props.children}</TodoContext.Provider>;
	return (
		<TodoContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>{props.children} </DispatchContext.Provider>
		</TodoContext.Provider>
	);
};
