import logo from "../../assets/logo/logo.svg";

import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <a className='header__logo icon' href="/">
        <img src={logo} alt="" width="44" height="44" />
        <span>TODO</span>
      </a>
      <div className='header__greeting'>
        <div>Привет, <span>Имя!</span></div>
        <button className='header__logout' type="button">Выйти</button>
      </div>
    </header>
  );
};

export default Header;
