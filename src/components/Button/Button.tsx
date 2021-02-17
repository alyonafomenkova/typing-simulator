import ButtonProps from './Button.types';
import styles from './Button.module.scss';

const Button = ({
  isTextButton = false,
  submit = false,
  text,
  onClick,
}: ButtonProps) => (
  <button
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    className={isTextButton ? styles.textButton : styles.button}
  >
    {text}
  </button>
);

export default Button;
