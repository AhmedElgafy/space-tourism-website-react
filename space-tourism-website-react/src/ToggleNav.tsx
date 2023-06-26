import { NavLink, Outlet } from "react-router-dom";
type ImgSrc = {
  imgSrc: string;
};

export default function ToggleNav({ imgSrc }: ImgSrc) {
  return (
    <>
      <div className=" absolute top-0 right-0 bg-white bg-opacity-[4%] backdrop-blur-lg  fixed max-h-screen bottom-0 w-72 ">
        <img src={imgSrc} alt="" className="block absolute right-0 m-5 " />
        <div className=" ml-10 mt-[40%] flex flex-col gap-7 text-white">
          <NavLink to="/">
            <h5 className="font-['Barlow Condensed', sans-serif] font-extralight ">
              <strong className="font-bold">00</strong>&nbsp;HOME
            </h5>
          </NavLink>
          <NavLink to="destination">
            <h5 className="font-['Barlow Condensed', sans-serif] font-extralight ">
              <strong className="font-bold">01</strong>&nbsp;DESTINATION
            </h5>
          </NavLink>
          <NavLink to="crew">
            <h5 className="font-['Barlow Condensed', sans-serif] font-extralight ">
              <strong className="font-bold">02</strong>&nbsp;CREW
            </h5>
          </NavLink>
          <NavLink to="technology">
            <h5 className="font-['Barlow Condensed', sans-serif] font-extralight ">
              <strong className="font-bold">03</strong>&nbsp;TECHNOLOGY
            </h5>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
