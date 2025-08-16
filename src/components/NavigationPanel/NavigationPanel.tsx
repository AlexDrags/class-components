import './style.css';
import Link from 'next/link';

export default function NavigationPanel() {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
