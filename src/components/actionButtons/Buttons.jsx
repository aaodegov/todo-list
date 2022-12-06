import Button from './Button';
import style from './Buttons.module.css';

const Buttons = ({
	removeAllTodos,
	hideCompletedTodos,
	showInProgressTodo,
	showCompletedTodo,
}) => {
	return (
		<div className={style.buttonsBlock}>
			<Button onClick={hideCompletedTodos}>hide completed</Button>
			<Button onClick={showInProgressTodo}>show in progress todo</Button>
			<Button onClick={showCompletedTodo}>show completed todo</Button>
			<Button onClick={removeAllTodos}>clear all</Button>
		</div>
	);
};

export default Buttons;
