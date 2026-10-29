import { useParams, Link } from 'react-router-dom';

export default function Details() {
  const { id } = useParams(); // URL-дағы id-ді оқу[cite: 2, 3]
  return (
    <div>
      <h1>Детали #{id}</h1>
      <p>Бұл {id}-ші элементтің ақпараты.</p>
      <Link to="/list">Тізімге оралу</Link>
    </div>
  );
}