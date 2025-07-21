import { type ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';
interface IButton {
  children?: ReactNode;
  typeButton: ButtonType;
}

export default function Button({ children, typeButton }: IButton) {
  return <button type={typeButton}>{children}</button>;
}
