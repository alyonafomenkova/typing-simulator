import ButtonProps from './Button.types';
import styles from './Button.module.scss';

const Button = ({ submit = false, text, onClick }: ButtonProps) => (
  <button
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    className={styles.button}
  >
    {text}
  </button>
);

export default Button;
