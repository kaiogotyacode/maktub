import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import style from "./Carousel.module.css";

function Carousel() {
  return (
    <>
      <div className={style.carouselContainer}>
        <div className={`w-full h-full`}>
          <img
            className={style.imgContainer}
            src={require(`../../assets/images/no_img.jpg`)}
          />
        </div>

        <span
          className={`w-8 h-8 absolute left-3 top-[50%] translate-y-[-50%]`}
        >
          <FaAngleLeft className={style.carouselArrow} />
        </span>

        <span
          className={`w-8 h-8 absolute right-3 top-[50%] translate-y-[-50%]`}
        >
          <FaAngleRight className={style.carouselArrow} />
        </span>

        <div className={`${style.carouselNavigator}`}>
          <div className={`${style.carouselNavItem}`}></div>
          <div className={`${style.carouselNavItem}`}></div>
          <div className={`${style.carouselNavItem}`}></div>
        </div>
      </div>
    </>
  );
}
export default Carousel;
