import style from "./SearchBar.module.css";
import { GiMagnifyingGlass } from "react-icons/gi";
import { CiEraser } from "react-icons/ci";
function SearchBar() {
  return (
    <>
      <div className={style.searchBarContainer}>
        <div className={style.searchBar}>
          {/* Lupa Logo */}
          <span className={style.magnifierContainer}>
            <GiMagnifyingGlass className={style.magnifierIcon}/>
          </span>
          {/* Campo de Pesquisa */}
          <div className={style.search}>
            <input className={style.searchInput} type="text" placeholder="Type here..."/> 
          </div>
          {/* Separador | Pesquisa */}
          <span className={style.searchDivisor}> 
            <CiEraser className={style.eraserIcon}/>
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
