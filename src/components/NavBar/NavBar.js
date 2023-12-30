import { FaAlignJustify } from "react-icons/fa";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.menu}>
          <FaAlignJustify className={style.menuIcon} />
        </div>
        <div className={style.logo}>
          <h1 className="font-bold">NavBar</h1>
        </div>

        <div className={style.divOptions}>
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
          <div className={style.optionsBackDrop}>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
