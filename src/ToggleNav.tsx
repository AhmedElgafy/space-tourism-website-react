import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

type ImgSrc = {
  imgSrc: string;
  hidAndShowNav: boolean;
  setShowNav(e: boolean): void;
};

export default function ToggleNav({
  imgSrc,
  hidAndShowNav,
  setShowNav,
}: ImgSrc) {
  const curRoute = useLocation();
  const [screenRes, setScreenRes] = useState(screen.width);
  const hoveringOnNavItem =
    "hover:before:absolute hover:before:content-[''] hover:opacity-[50%] hover:before:h-[100%]  hover:before:w-[3px] hover:before:opacity-[50%] sm_md:hover:before:w-[100%] sm_md:hover:before:h-[3px] sm_md:hover:before:bottom-[-21px] before:hover:right-0 before:hover:bg-white";
  // " before:absolute hover:before:content-[''] hover:before:opacity-[50%] sm_md:hover:before:w-[100%] sm_md:hover:before:h-[3px] sm_md:hover:before:bottom-[-21px] hover:before:right-0 hover:before:bg-white sm_md:hover:before:w-[100%] sm_md:hover:before:h-[3px]";
  window.addEventListener("resize", () => {
    setScreenRes(screen.width);
  });
  const handleClose = () => {
    screen.width < 630 && setShowNav(true);
    // console.log(screen.width < 700);
  };

  return (
    <>
      <div
        className={`bg-white  z-10 bg-opacity-[4%] backdrop-blur-lg ${
          hidAndShowNav || screenRes > 650 ? "fixed" : "hidden"
        }  h-[100vh] top-0 right-0 w-60 sm_md:!absolute sm_md:h-20 sm_md:w-[80%] md:w-[60%]`}
      >
        <img
          src={imgSrc}
          onClick={() => setShowNav(false)}
          alt=""
          className="block absolute right-0 m-5 cursor-pointer sm_md:hidden"
        />

        <div className=" ml-10 mt-[40%] flex flex-col gap-7  text-white sm_md:flex-row sm_md:my-8 relative md:before:absolute md:before:bg-white md:before:content-[''] md:before:bottom-0 md:before:h-[3px] md:before:w-[50%] md:before:right-[105%] before:opacity-[14%]">
          <NavLink to="/">
            <h5
              className={`font-['Barlow Condensed', sans-serif] ${hoveringOnNavItem} relative font-extralight ${
                curRoute.pathname == "/"
                  ? "before:absolute before:content-[''] before:h-[100%]  before:w-[3px] sm_md:before:w-[100%] sm_md:before:h-[3px] sm_md:before:bottom-[-21px] before:right-0 before:bg-white"
                  : null
              }`}
              onClick={handleClose}
            >
              <strong className="font-bold">00</strong>&nbsp;HOME
            </h5>
          </NavLink>
          <NavLink to="destinations">
            <h5
              onClick={handleClose}
              className={`font-['Barlow Condensed', sans-serif] ${hoveringOnNavItem} relative font-extralight ${
                curRoute.pathname == "/destinations"
                  ? "before:absolute before:content-[''] before:h-[100%] before:w-[3px] sm_md:before:w-[100%] sm_md:before:h-[3px] sm_md:before:bottom-[-21px] before:right-0 before:bg-white"
                  : null
              }`}
            >
              <strong className="font-bold">01</strong>&nbsp;DESTINATION
            </h5>
          </NavLink>
          <NavLink to="crew">
            <h5
              className={`font-['Barlow Condensed', sans-serif] ${hoveringOnNavItem} relative font-extralight ${
                curRoute.pathname == "/crew"
                  ? "before:absolute before:content-[''] before:h-[100%] before:w-[3px] sm_md:before:w-[100%] sm_md:before:h-[3px] sm_md:before:bottom-[-21px] before:right-0 before:bg-white"
                  : null
              }`}
              onClick={handleClose}
            >
              <strong className="font-bold">02</strong>&nbsp;CREW
            </h5>
          </NavLink>
          <NavLink to="technology">
            <h5
              onClick={handleClose}
              className={`font-['Barlow Condensed', sans-serif] relative ${hoveringOnNavItem} font-extralight ${
                curRoute.pathname == "/technology"
                  ? "before:absolute before:content-[''] before:h-[100%] before:w-[3px] sm_md:before:w-[100%] sm_md:before:h-[3px] sm_md:before:bottom-[-21px] before:right-0 before:bg-white"
                  : null
              }`}
            >
              <strong className="font-bold">03</strong>&nbsp;TECHNOLOGY
            </h5>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
