import { useState } from "react";
import srcData from "../../public/data.json";
export default function Destinations() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const [activePlanetIndex, setActivePlanetIndex] = useState(0);
  // const [screenRes, setScreenRes] = useState(screen.width);
  const planets: string[] = ["MOON", "MARS", "EUROPA", "TITAN"];
  // document.body.style.background = `url(${srcData.backGroundImages[0].dist.mob})  no-repeat `;
  if (screen.width < 375) {
    document.body.style.background = `url(${srcData.backGroundImages[0].dist.mob})  no-repeat fixed`;
    document.body.style.backgroundSize = "cover";
  }
  if (screen.width < 700 && screen.width > 375) {
    document.body.style.background = `url(${srcData.backGroundImages[0].dist.tab})  no-repeat fixed`;
    document.body.style.backgroundSize = "cover";
  }
  if (screen.width > 700) {
    document.body.style.background = `url(${srcData.backGroundImages[0].dist.desk})  no-repeat fixed `;
    document.body.style.backgroundSize = "cover";
  }
  window.addEventListener("resize", () => {
    if (screen.width < 375) {
      document.body.style.background = `url(${srcData.backGroundImages[0].dist.mob})  no-repeat fixed`;
      document.body.style.backgroundSize = "cover";
    }
    if (screen.width < 700 && screen.width > 375) {
      document.body.style.background = `url(${srcData.backGroundImages[0].dist.tab})  no-repeat fixed`;
      document.body.style.backgroundSize = "cover";
    }
    if (screen.width > 770) {
      document.body.style.background = `url(${srcData.backGroundImages[0].dist.desk})  no-repeat fixed`;
      document.body.style.backgroundSize = "cover";
    }
  });
  const getPlanet = (e: string): void => {
    console.log(planets.indexOf(e));
    setPlanetIndex(planets.indexOf(e));
    console.log(e);
  };
  const PlantsName = (): JSX.Element[] => {
    let list: JSX.Element[] = [];
    planets.forEach((ele) => {
      let textColor: string;
      if (planets.indexOf(ele) == activePlanetIndex) {
        textColor =
          "!text-white before:absolute  before:content-[''] before:h-[1px] before:w-[100%] before:bottom-[-5px] before:bg-white";
      } else {
        textColor = "";
      }
      list.push(
        <p
          key={ele}
          className={`body ${textColor}   !m-2 cursor-pointer onPlanet relative md:text-xl hover:text-[#ffffff]`}
          onClick={() => {
            getPlanet(ele);
            setActivePlanetIndex(planets.indexOf(ele));
          }}
        >
          {ele}
        </p>
      );
    });
    return list;
  };
  return (
    <>
      <div className=" centerContent !h-[80vh] space-y-6 !justify-start md:grid grid-cols-2 items-center">
        <div className="">
          <h5 className="subTitle m-5 md:!ml-32 tracking-[.2em] sm:text-left md:text-xl">
            <span className="subTitleNums">01</span>&nbsp; PICK YOUR DESTINATION
          </h5>
          <img
            className="block mx-auto my-2 w-[170px] md:w-[400px]"
            src={srcData.destinations[planetIndex].images.png}
            alt=""
          />
        </div>
        <div className=" md:text-left space-y-3">
          <div className="flex gap-0 justify-center md:justify-start">
            <PlantsName></PlantsName>
          </div>
          <h1 className="title !text-6xl md:!text-8xl">
            {srcData.destinations[planetIndex].name.toUpperCase()}
          </h1>
          <p className="body !mb-3 md:ml-0 md:me-24">
            {srcData.destinations[planetIndex].description}
          </p>
          <div className="line mb-1 w-60 justify-self-center mx-auto md:mx-0 md:w-[80%] md:justify-self-start"></div>
          <div className="sm:grid grid-flow-col col-start-2 space-y-3 items-center ">
            <div>
              <p className=" body !mb-[.1rem] text-xs md:m-0">AVG. DISTANCE</p>
              <h1 className="text-4xl text-white  !font-['Bellefair']">
                {srcData.destinations[planetIndex].distance}
              </h1>
            </div>
            <div>
              <p className=" body !mb-[.1rem] text-xs md:m-0">
                EST. TRAVEL TIME
              </p>
              <h1 className="text-4xl text-white !font-['Bellefair'] ">
                {srcData.destinations[planetIndex].travel}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
