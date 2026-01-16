import { Link } from 'react-router-dom';

export default function Letter() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
      padding: '2rem 1rem',
      paddingTop: 'calc(env(safe-area-inset-top) + 5rem)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
        color: '#5c3d3d',
        marginBottom: '1.5rem'
      }}>
        💌 A Letter For You 💌
      </h1>

      {/* Letter Card */}
      <div style={{
        background: '#fffef5',
        borderRadius: '0.5rem',
        padding: '2rem',
        maxWidth: '350px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        transform: 'rotate(-1deg)',
        border: '1px solid rgba(232, 164, 201, 0.3)'
      }}>
        <p className="font-handwritten" style={{
          fontSize: '1.4rem',
          lineHeight: 1.8,
          color: '#5c3d3d'
        }}>
          My Dearest Pookie,
          <br /><br />
          On this special day, I want you to know how incredibly grateful I am to have you in my life. 💕
          <br /><br />
          Your smile lights up my world, your laughter is my favorite melody, and your love makes every day worth living.
          <br /><br />
          May this birthday bring you all the happiness, love, and beautiful moments you truly deserve. ✨
          <br /><br />
          Here's to another year of amazing adventures together!
          <br /><br />
          Forever yours,
          <br />
          💖 Your Person 💖
        </p>
      </div>

      {/* Decorative elements */}
      <div style={{
        marginTop: '2rem',
        fontSize: '2rem',
        opacity: 0.6
      }}>
        💕✨💕
      </div>
    </div>
  );
}
