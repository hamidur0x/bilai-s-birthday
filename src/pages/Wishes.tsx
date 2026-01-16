import { useState } from 'react';
import { Link } from 'react-router-dom';

const wishes = [
  { id: 1, emoji: '🌟', text: 'May all your dreams come true!' },
  { id: 2, emoji: '💖', text: 'Endless love and happiness!' },
  { id: 3, emoji: '🎂', text: 'Sweetest birthday ever!' },
  { id: 4, emoji: '✨', text: 'Sparkle and shine always!' },
  { id: 5, emoji: '🌈', text: 'A colorful year ahead!' },
  { id: 6, emoji: '🦋', text: 'Beautiful transformations!' },
];

export default function Wishes() {
  const [revealed, setRevealed] = useState<number[]>([]);

  const revealWish = (id: number) => {
    if (!revealed.includes(id)) {
      setRevealed([...revealed, id]);
      createConfetti();
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
      padding: '2rem 1rem',
      paddingTop: 'calc(env(safe-area-inset-top) + 5rem)'
    }}>
      {/* Confetti Container */}
      <div id="confetti" className="confetti-container" />

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
        marginBottom: '0.5rem'
      }}>
        ✨ Birthday Wishes ✨
      </h1>

      <p style={{
        textAlign: 'center',
        color: '#8b6a60',
        marginBottom: '2rem'
      }}>
        Tap each card to reveal your wish!
      </p>

      {/* Wishes Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        {wishes.map((wish) => (
          <div
            key={wish.id}
            onClick={() => revealWish(wish.id)}
            style={{
              background: revealed.includes(wish.id) 
                ? 'linear-gradient(135deg, #fff 0%, #ffdde1 100%)'
                : 'linear-gradient(135deg, #e8a4c9 0%, #d4739d 100%)',
              borderRadius: '1rem',
              padding: '1.5rem',
              minHeight: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: revealed.includes(wish.id) 
                ? '2px solid rgba(232, 164, 201, 0.5)'
                : '2px solid transparent'
            }}
          >
            {revealed.includes(wish.id) ? (
              <>
                <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  {wish.emoji}
                </span>
                <span style={{ 
                  fontSize: '0.9rem', 
                  textAlign: 'center',
                  color: '#5c3d3d',
                  fontWeight: 500
                }}>
                  {wish.text}
                </span>
              </>
            ) : (
              <>
                <span style={{ fontSize: '2rem', color: '#fff' }}>🎁</span>
                <span style={{ 
                  fontSize: '0.8rem', 
                  color: 'rgba(255,255,255,0.8)',
                  marginTop: '0.5rem'
                }}>
                  Tap to reveal
                </span>
              </>
            )}
          </div>
        ))}
      </div>

      {/* All revealed message */}
      {revealed.length === wishes.length && (
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '1rem',
          maxWidth: '300px',
          margin: '2rem auto 0'
        }}>
          <span style={{ fontSize: '2rem' }}>🎉</span>
          <p className="font-handwritten" style={{ 
            fontSize: '1.5rem', 
            color: '#d4739d',
            marginTop: '0.5rem'
          }}>
            All wishes revealed!
          </p>
          <p style={{ color: '#8b6a60', fontSize: '0.9rem' }}>
            May they all come true! 💕
          </p>
        </div>
      )}
    </div>
  );
}

function createConfetti() {
  const container = document.getElementById('confetti');
  if (!container) return;
  
  const colors = ['#e8a4c9', '#ffd1dc', '#ffb6c1', '#ff69b4', '#fff'];
  
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.textContent = ['✨', '💕', '🎉'][Math.floor(Math.random() * 3)];
      confetti.style.fontSize = (0.8 + Math.random() * 0.5) + 'rem';
      container.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }, i * 50);
  }
}
