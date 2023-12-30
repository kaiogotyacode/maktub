import {FaBars } from "react-icons/fa";
import style from "./NavBar.module.css";
import { useState } from "react";

function NavBar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  function ToggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className={`${style.nav}`}>
        <div onClick={ToggleMenu} className={style.menu}>
          <FaBars className={style.menuIcon} />
        </div>
        <div className={style.logo}>
          <h1 className="font-bold">NavBar</h1>
        </div>
        
        <div className={`${style.divOptions} ${!isMenuOpen ? style.visible : style.hidden }`} >
          <ul className={style.options}>
            <li className={style.itemOption}>
              <a>Agendas</a>
            </li>
            <li className={style.itemOption}>
              <a>Canetas</a>
            </li>
            <li className={style.itemOption}>
              <a>Cadernos</a>
            </li>
          </ul>
          <div className={style.optionsBackDrop}></div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
