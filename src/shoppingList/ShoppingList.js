import React, { useReducer, useRef,memo } from 'react';
import {ShoppingReducer} from '../reducer/shopingReducer'

 function ShoppingList(){
	const inputRef = useRef();
	const [ items, dispatch ] = useReducer(ShoppingReducer, [{id:30,name:"Goat"},{id:31,name:"Sheep"}]);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD', name: inputRef.current.value });
		inputRef.current.value = '';
	};
	return (
		<React.Fragment>
            <strong><h2>Shoping List</h2></strong> 
			<form  className= "form-group" onSubmit={handleSubmit}>
				<input className ="form-control" placeholder="Add Shopping ..." ref={inputRef} />
			</form>
			<button className="btn btn-danger"
				onClick={() => {
					dispatch({ type: 'CLEAR' });
				}}>
				Clear
			</button>
			<ul>
				{items.map((item, index) =>  
						<li key={item.id}>
							{item.name}
							<button className="btn btn-primary"
								onClick={() => {
									dispatch({ type: '_', index });
								}}>
								X
							</button>
						</li>
					
				)}
			</ul>
		</React.Fragment>
	);
}
export default memo(ShoppingList)
