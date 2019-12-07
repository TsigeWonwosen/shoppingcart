import React, { useContext, memo } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { DispatchContext } from './context/TodoContext';

function EditTodoForm({ id, task, toggleEditForm }){
	const dispatch = useContext(DispatchContext);
	const [ value, handleChange, reset ] = useInputState(task);
	console.log(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDITTODO', id: id, newTask: value });
				reset();
				toggleEditForm();
			}}
			style={{ marginLeft: '1rem', width: '50%' }}>
			<TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
		</form>
	);
}
export default memo(EditTodoForm);
