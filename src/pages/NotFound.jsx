import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 — Бет табылмады</h1>
      <p>Мекенжай қате немесе табылмады[cite: 2, 3].</p>
      <Link to="/">Басты бетке өту</Link>
    </div>
  );
}