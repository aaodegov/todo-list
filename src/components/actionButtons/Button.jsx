import style from './Button.module.css';

const Button = ({ onClick, children, buttonState }) => {
	return (
		<button disabled={buttonState} className={style.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
