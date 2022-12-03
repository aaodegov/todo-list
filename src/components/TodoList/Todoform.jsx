import { useState } from 'react';
import style from './Todoform.module.css';

function Todoform(props) {
	const [text, setText] = useState('');

	const onSubmitHandler = (event) => {
		event.preventDefault();
		props.addTodo(text);
		setText('');
	};

	return (
		<div className={style.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Enter your todo..."></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Todoform;
