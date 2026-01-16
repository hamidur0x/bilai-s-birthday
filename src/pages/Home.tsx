import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    // Create floating hearts
    const heartsContainer = document.getElementById('hearts');
    if (heartsContainer) {
      for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (10 + Math.random() * 20) + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (5 + Math.random() * 5) + 's';
        heartsContainer.appendChild(heart);
      }
    }
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      {/* Floating Hearts */}
      <div id="hearts" className="hearts-bg" />

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Ribbon */}
        <div style={{ 
          fontSize: '4rem', 
          animation: 'bounce 2s ease-in-out infinite' 
        }}>
          🎀
        </div>

        {/* Title */}
        <h1 className="font-handwritten" style={{
          fontSize: '3.5rem',
          color: 'var(--primary)',
          textShadow: '0 0 30px rgba(232, 164, 201, 0.5)',
          marginBottom: '0.5rem'
        }}>
          Happy Birthday
        </h1>

        <h2 className="font-handwritten" style={{
          fontSize: '3rem',
          color: 'var(--fg)'
        }}>
          Pookie 💕
        </h2>

        <p style={{
          color: 'var(--muted)',
          marginTop: '1rem',
          fontSize: '1.1rem'
        }}>
          A special celebration just for you ✨
        </p>

        {/* Navigation Grid */}
        <nav style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          width: '100%',
          maxWidth: '340px',
          marginTop: '2rem'
        }}>
          <NavCard to="/cake" emoji="🎂" title="View Cake" desc="AR Camera Magic" />
          <NavCard to="/memories" emoji="📸" title="Memories" desc="Our Gallery" />
          <NavCard to="/letter" emoji="💌" title="Letter" desc="From Me to You" />
          <NavCard to="/wishes" emoji="✨" title="Wishes" desc="Birthday Vibes" />
        </nav>

        {/* Floating Icons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          fontSize: '1.5rem',
          opacity: 0.6
        }}>
          <span style={{ animation: 'bounce 3s ease-in-out infinite' }}>🍨</span>
          <span style={{ animation: 'bounce 3s ease-in-out infinite 0.5s' }}>☕</span>
          <span style={{ animation: 'bounce 4s ease-in-out infinite 1s' }}>💖</span>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(232, 164, 201, 0.2)',
        fontSize: '0.75rem',
        color: 'var(--muted)'
      }}>
        Made with 💖 for my pookie
      </footer>
    </div>
  );
}

function NavCard({ to, emoji, title, desc }: { to: string; emoji: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      style={{
        background: 'var(--card)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(232, 164, 201, 0.3)',
        borderRadius: '1.5rem',
        padding: '1.5rem 1rem',
        textDecoration: 'none',
        color: 'var(--fg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{emoji}</span>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{title}</span>
      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{desc}</span>
    </Link>
  );
}
