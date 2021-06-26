import logo from "../../assets/logo/logo.svg";

import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <a className={`${classes.logo} icon`} href="/">
        <img src={logo} alt="" width="44" height="44" />
        <span>TODO</span>
      </a>
      <div className={classes.greeting}>
        <div>Привет, <span>Имя!</span></div>
        <button className={classes.logOut} type="button">Выйти</button>
      </div>
    </header>
  );
};

export default Header;
