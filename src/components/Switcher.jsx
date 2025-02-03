import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Switcher = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };
  const goToLoginPage = () => {
    navigate('/login');
  };

  const { theme, toggleTheme } = useContext(ThemeContext); // theme ve toggleTheme'i context'ten alıyoruz

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <nav className="nav-links">
        <a onClick={goToHomePage} className="links">
          Home Page
        </a>
        <a onClick={goToLoginPage} className="links">
          Login Page
        </a>
      </nav>
    </div>
  );
};

export default Switcher;
