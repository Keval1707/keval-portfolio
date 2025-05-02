import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/'; // Check if current path is home

  return (
    <header className={`${isHomePage ? 'home-header' : 'header'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className={`logo ${scrolled ? 'scrolled' : ''}`}>
          <span className="logo-text">{"<Ks/>"}</span>
        </Link>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
