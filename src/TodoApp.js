import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import DisplayImages from './DisplayImages';
import ShoppingList from './shoppingList/ShoppingList';
import { TodoProvider } from './context/TodoContext';
import CountNum from './reducer/countReducer';
import CardAnimation from './componts/CardAnimation';

function TodoApp(){
	return (
		<Paper
			style={{
				padding         : 0,
				margin          : 0,
				height          : '100vh',
				backgroundColor : '#fafafa'
			}}
			elevation={0}>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<div>
					<Toolbar>
						<Typography color='inherit'>TODOS WITH HOOKS</Typography>
						<CardAnimation/>
					</Toolbar>
				</div>
			</AppBar>
			<Grid container justify='center' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					
					<CountNum />
					<ShoppingList />
					<TodoProvider>
						<TodoForm />
						<TodoList />
					</TodoProvider>
				</Grid>
				
				<Grid item xs={11} md={8} lg={10} sytle={{ marginTop: '20px' }}>
					<hr/>
					<DisplayImages />
				</Grid>
			</Grid>
		</Paper>
	);
}
export default TodoApp;
