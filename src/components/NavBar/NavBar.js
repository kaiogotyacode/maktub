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
          <FaBars className={style.menuIcon} fill="white" />
        </div>
        <div className={style.logo}>
          <h1 className="font-bold">Maktub Logo</h1>
        </div>
        
        <div className={`${isMenuOpen ? style.visible : style.hidden } ${style.divOptions}`} >
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
