import style from './Todolist.module.css';
import Todo from './Todo';
import loading from '../../img/noTodos.gif';

function Todolist({ todos, removeTodo, changeCompleteStatus, editTodo }) {
	return (
		<div className={style.todoListContainer}>
			{!todos.length && (
				<div>
					<img alt="travolta" src={loading}></img>
				</div>
			)}
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					removeTodo={removeTodo}
					changeCompleteStatus={changeCompleteStatus}
					editTodo={editTodo}
				/>
			))}
		</div>
	);
}

export default Todolist;
