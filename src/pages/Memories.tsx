import { useState } from 'react';
import { Link } from 'react-router-dom';

const memories = [
  { id: 1, emoji: '📸', caption: 'Our first photo' },
  { id: 2, emoji: '🎉', caption: 'Party time!' },
  { id: 3, emoji: '🌸', caption: 'Spring vibes' },
  { id: 4, emoji: '☕', caption: 'Coffee dates' },
  { id: 5, emoji: '🌅', caption: 'Sunset moments' },
  { id: 6, emoji: '🎂', caption: 'Last birthday' },
];

export default function Memories() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
      padding: '2rem 1rem',
      paddingTop: 'calc(env(safe-area-inset-top) + 5rem)'
    }}>
      {/* Back Button */}
      <Link to="/" style={{
        position: 'fixed',
        top: 'max(1rem, env(safe-area-inset-top))',
        left: '1rem',
        zIndex: 100,
        background: 'rgba(255,255,255,0.95)',
        border: '2px solid rgba(232, 164, 201, 0.5)',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: '#5c3d3d',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        ←
      </Link>

      <h1 className="font-handwritten" style={{
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#5c3d3d',
        marginBottom: '2rem'
      }}>
        📸 Our Memories 📸
      </h1>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        {memories.map((memory) => (
          <div
            key={memory.id}
            onClick={() => setSelected(memory.id)}
            style={{
              background: '#fff',
              borderRadius: '0.5rem',
              padding: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transform: `rotate(${(memory.id % 2 === 0 ? 2 : -2)}deg)`,
              transition: 'transform 0.3s'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)',
              borderRadius: '0.25rem',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              {memory.emoji}
            </div>
            <p style={{
              textAlign: 'center',
              marginTop: '0.75rem',
              fontSize: '0.85rem',
              color: '#8b6a60',
              fontWeight: 500
            }}>
              {memory.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Fullscreen View */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
            cursor: 'pointer'
          }}
        >
          <div style={{
            fontSize: '8rem',
            marginBottom: '1rem'
          }}>
            {memories.find(m => m.id === selected)?.emoji}
          </div>
          <p style={{
            color: '#fff',
            fontSize: '1.25rem'
          }}>
            {memories.find(m => m.id === selected)?.caption}
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            marginTop: '2rem',
            fontSize: '0.9rem'
          }}>
            Tap anywhere to close
          </p>
        </div>
      )}
    </div>
  );
}
