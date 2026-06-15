import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <style>{`
        .site-header {
          background: #004370;
          color: #fff;
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          /* Bug: no min-width or overflow constraint; title wraps at narrow viewports */
        }
        .header-logo {
          width: 36px;
          height: 36px;
          background: #00A1FF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .header-title {
          font-size: 1.1rem;
          font-weight: 600;
          /* Bug: missing white-space: nowrap; title wraps to a second line */
        }
        .header-nav {
          display: flex;
          gap: 1.5rem;
        }
        .header-nav a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 0.9rem;
        }
        .header-nav a:hover {
          color: #fff;
        }
      `}</style>
      <div className="header-brand">
        <div className="header-logo">G</div>
        <span className="header-title">Globomantics Customer Support</span>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/orders/12345">My Orders</Link>
        <a href="#">Account</a>
      </nav>
    </header>
  )
}
