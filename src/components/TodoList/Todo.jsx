import { useState } from 'react';
import style from './Todo.module.css';
import { RxDotFilled } from 'react-icons/rx';
import { IoTrashBinSharp } from 'react-icons/io5';
import { BsCheckLg } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';

function Todo({ todo, removeTodo, changeCompleteStatus, editTodo }) {
	const [canEditingTextTodo, setCanEditingTextTodo] = useState(false);

	const changeEditMode = () => {
		setCanEditingTextTodo(!canEditingTextTodo);
	};

	const keyPress = (e) => {
		const key = e.keyPress || e.which;
		if (key === 13) {
			setCanEditingTextTodo(!canEditingTextTodo);
		}
	};

	return (
		<div
			className={
				todo.isCompleted ? style.todoElementComleted : style.todoElement
			}>
			<div className={style.dotIcon}>
				<RxDotFilled title="do you really need a hint? :3" />
			</div>

			<div className={style.todoText}>
				{!canEditingTextTodo ? (
					todo.text
				) : (
					<input
						onKeyPress={(e) => {
							keyPress(e);
						}}
						className={style.todoText}
						value={todo.text}
						onChange={(e) =>
							editTodo(todo.id, todo.isCompleted, e.target.value)
						}></input>
				)}
			</div>

			<div className={style.todoElementButtons}>
				{!canEditingTextTodo ? (
					<BsCheckLg
						title="Mark this todo as completed"
						onClick={() => changeCompleteStatus(todo.id)}
						className={style.check}
					/>
				) : null}

				<FaPen
					title="Enable/disable edit mode"
					onClick={changeEditMode}
					className={style.pen}
				/>
				<IoTrashBinSharp
					title="Remove this todo"
					onClick={() => removeTodo(todo.id, todo.isCompleted)}
					className={style.garbage}
				/>
			</div>
		</div>
	);
}

export default Todo;
