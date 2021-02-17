import { ButtonHTMLAttributes } from 'react';

interface CustomAttributes {
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

interface ButtonProps extends CustomAttributes {
  isTextButton?: boolean;
  text: string;
  submit?: boolean;
  onClick?: () => void;
}

export default ButtonProps;
