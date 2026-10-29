import { Link } from 'react-router-dom';

export default function List() {
  const items = [
    { id: 1, title: 'Элемент 1', description: 'Бірінші элементтің сипаттамасы' },
    { id: 2, title: 'Элемент 2', description: 'Екінші элементтің сипаттамасы' },
    { id: 3, title: 'Элемент 3', description: 'Үшінші элементтің сипаттамасы' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
        Тізім беті (List)
      </h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item) => (
          <li key={item.id} style={{ 
            background: '#ffffff', 
            padding: '16px 20px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e1e8ed'
          }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{item.description}</p>
            </div>
            <Link to={`/list/${item.id}`} style={{ 
              background: '#007bff', 
              color: '#fff', 
              padding: '8px 16px', 
              borderRadius: '6px', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 2px 4px rgba(0,123,255,0.2)'
            }}>
              Толығырақ
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}