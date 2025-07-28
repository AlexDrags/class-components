import { useContext } from 'react';
import { QueryTextContext } from '../context/context';
export default function ContextComponent() {
  const value = useContext(QueryTextContext);
  return <h1>Context: {value}</h1>;
}
