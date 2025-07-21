import { type ReactNode } from 'react';

interface IChildren {
  children: ReactNode;
}
export default function Main({ children }: IChildren) {
  return <main>{children}</main>;
}
