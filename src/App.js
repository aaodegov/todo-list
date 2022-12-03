import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todoform from './components/TodoList/Todoform';
import Todolist from './components/TodoList/Todolist';

function App() {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || []
	);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodoHandler = (text) => {
		setTodos([
			...todos,
			{
				id: uuidv4(),
				isCompleted: false,
				text: text,
			},
		]);
	};

	const completeStatusHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo };
			})
		);
	};

	const editTextTodo = (id, newText) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === id ? { ...todo, text: newText } : { ...todo };
			})
		);
	};

	const removeTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="App">
			<h1>Todo App</h1>
			<Todoform addTodo={addTodoHandler} />
			<Todolist
				todos={todos}
				removeTodo={removeTodoHandler}
				changeCompleteStatus={completeStatusHandler}
				editTodo={editTextTodo}
			/>
		</div>
	);
}

export default App;
