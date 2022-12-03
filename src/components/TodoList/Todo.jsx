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

	return (
		<div className={style.todoElement}>
			<div className={style.dotIcon}>
				<RxDotFilled />
			</div>

			<div className={style.todoText}>
				{!canEditingTextTodo ? (
					todo.text
				) : (
					<input
						className={style.todoText}
						value={todo.text}
						onChange={(e) => editTodo(todo.id, e.target.value)}></input>
				)}
			</div>

			<div className={style.todoElementButtons}>
				<BsCheckLg
					onClick={() => changeCompleteStatus(todo.id)}
					className={style.check}
				/>
				<FaPen onClick={changeEditMode} className={style.pen} />
				<IoTrashBinSharp
					onClick={() => removeTodo(todo.id)}
					className={style.garbage}
				/>
			</div>
		</div>
	);
}

export default Todo;
