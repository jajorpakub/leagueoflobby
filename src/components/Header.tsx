import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  customBackPath?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "LOL Guess", 
  subtitle,
  showBackButton = true,
  customBackPath 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (customBackPath) {
      navigate(customBackPath);
    } else {
      // Smart back navigation based on current path
      const currentPath = location.pathname;
      
      if (currentPath.includes('/daily/lolguess/')) {
        navigate('/daily/lolguess');
      } else if (currentPath.includes('/daily/')) {
        navigate('/daily');
      } else if (currentPath.includes('/lol/')) {
        navigate('/lol');
      } else {
        navigate('/');
      }
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          {showBackButton && (
            <button onClick={handleBack} className="back-button">
              <span className="back-icon">←</span>
              <span className="back-text">Cofnij</span>
            </button>
          )}
        </div>

        <div className="header-center">
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>

        <div className="header-right">
          <button onClick={handleHome} className="home-button" title="Powrót do głównego menu">
            <span className="home-icon">🏠</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;