import { useEffect, useState } from "react";
import scrData from "../../public/data.json";
import { Link } from "react-router-dom";
export default function HomePage() {
  // console.log(scrData.homePage[0].bgImageMob);
  if (screen.width < 375) {
    document.body.style.background = `url(${scrData.homePage[0].bgImageMob})  no-repeat `;
  }
  if (screen.width < 700 && screen.width > 375) {
    document.body.style.background = `url(${scrData.homePage[0].bgImageTab})  no-repeat `;
  }
  if (screen.width > 770) {
    document.body.style.background = `url(${scrData.homePage[0].bgImageDesk})  no-repeat `;
  }
  window.addEventListener("resize", () => {
    if (screen.width < 375) {
      document.body.style.background = `url(${scrData.homePage[0].bgImageMob})  no-repeat `;
    }
    if (screen.width < 700 && screen.width > 375) {
      document.body.style.background = `url(${scrData.homePage[0].bgImageTab})  no-repeat `;
    }
    if (screen.width > 770) {
      document.body.style.background = `url(${scrData.homePage[0].bgImageDesk})  no-repeat `;
    }
  });

  return (
    <>
      <div className="text-white sm:space-y-28 flex flex-col  my-10 justify-start  text-center h-screen md:grid grid-cols-2 items-center ">
        <div className="space-y-3 md:text-left justify-self-center md:ml-11 md:w-96">
          <h5 className="my-3 subTitle  ">{scrData.homePage[0].subTitle}</h5>
          <h1 className="my-3 title sm:text-8xl md:m-0">
            {scrData.homePage[0].title}
          </h1>
          <p className="body md:m-0">{scrData.homePage[0].description}</p>
        </div>
        <Link to="destinations">
          <button className="  md:!text-center justify-self-center font-['Bellefair']  bg-white mx-auto h-40 w-40 my-14 rounded-[100%] text-[#0B0D17] text-2xl">
            EXPLORE
          </button>
        </Link>
      </div>
    </>
  );
}
