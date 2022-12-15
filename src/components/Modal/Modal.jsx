import style from './Modal.module.css';
import Button from '../actionButtons/Button';

const Modal = ({ active, setModalActive, removeAllTodos }) => {
	return (
		<div
			className={active ? style.modal_active : style.modal}
			onClick={() => setModalActive(false)}>
			<div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
				<div className={style.warning_message}>
					<span>You are going to delete all new todos. Continue?</span>
				</div>
				<div className={style.buttons}>
					<Button onClick={removeAllTodos}>OK</Button>
					<Button onClick={() => setModalActive(false)}>Cancel</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
