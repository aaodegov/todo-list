import style from './Button.module.css';

const Button = ({ onClick, children, buttonState }) => {
	return (
		<button className={style.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
