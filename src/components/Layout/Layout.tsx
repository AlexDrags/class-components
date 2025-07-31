import './style.css';
import { Outlet, Link } from 'react-router';
export default function Layout() {
  return (
    <div>
      <nav className="navigation">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
      <Outlet />
      <footer>
        <a
          href="https://github.com/AlexDrags"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub author
        </a>
        <p>2025.</p>
      </footer>
    </div>
  );
}
