import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todoform from './components/TodoList/Todoform';
import Modal from './components/Modal/Modal';
import Todolist from './components/TodoList/Todolist';
import Buttons from './components/actionButtons/Buttons';

function App() {
	const viewModeState = { NEW: 'newTodos', COMPLETED: 'copmletedTodos' };

	const [viewMode, setViewMode] = useState(viewModeState.NEW);

	const [isModalActive, setIsModalActive] = useState(false);

	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || []
	);

	const [completedTodos, setCompletedTodos] = useState(
		JSON.parse(localStorage.getItem('completedTodos')) || []
	);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
	}, [completedTodos]);

	const hideCompletedTodosHandler = () => {
		setTodos(todos.filter((todo) => todo.isCompleted !== true));

		let todosFromLocalStarage = JSON.parse(
			localStorage.getItem('completedTodos')
		);
		if (null === todosFromLocalStarage) {
			todosFromLocalStarage = [];
		}

		const filteredTodos = todos.filter((todo) => todo.isCompleted !== false);

		const completeTodosToLocalStorage = [
			...todosFromLocalStarage,
			...filteredTodos,
		];

		setCompletedTodos(completeTodosToLocalStorage);
	};

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

	const editTextTodo = (id, isCompleted, newText) => {
		if (isCompleted) {
			setCompletedTodos(
				completedTodos.map((todo) => {
					return todo.id === id ? { ...todo, text: newText } : { ...todo };
				})
			);
		} else {
			setTodos(
				todos.map((todo) => {
					return todo.id === id ? { ...todo, text: newText } : { ...todo };
				})
			);
		}
	};

	const removeTodoHandler = (id, isCompleted) => {
		if (isCompleted) {
			setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
		} else {
			setTodos(todos.filter((todo) => todo.id !== id));
		}
	};

	const removeAllTodos = () => {
		setTodos([]);
		setIsModalActive(false);
	};

	const showInProgressTodo = () => {
		setViewMode(viewModeState.NEW);
	};

	const showCompletedTodo = () => {
		setViewMode(viewModeState.COMPLETED);
	};

	return (
		<div className="App">
			<h1>Todo App</h1>
			<Todoform addTodo={addTodoHandler} />
			<Modal
				active={isModalActive}
				setModalActive={setIsModalActive}
				removeAllTodos={removeAllTodos}
			/>
			<Buttons
				hideCompletedTodos={hideCompletedTodosHandler}
				showInProgressTodo={showInProgressTodo}
				showCompletedTodo={showCompletedTodo}
				openModal={
					todos.length ? () => setIsModalActive(true) : null
				}></Buttons>
			<Todolist
				todos={viewMode === viewModeState.NEW ? todos : completedTodos}
				removeTodo={removeTodoHandler}
				changeCompleteStatus={completeStatusHandler}
				editTodo={editTextTodo}
			/>
		</div>
	);
}

export default App;
