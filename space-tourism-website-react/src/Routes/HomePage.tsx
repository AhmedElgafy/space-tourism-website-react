import scrData from "../../public/data.json";
export default function HomePage() {
  // console.log(scrData.homePage[0].bgImageMob);
  document.body.style.background = `url(${scrData.homePage[0].bgImageMob})  no-repeat `;
  return (
    <>
      <div className="text-white flex flex-col h-screen justify-center text-center">
        <h5 className="my-3 font-['Barlow Condensed', sans-serif] ">
          {scrData.homePage[0].subTitle}
        </h5>
        <h1 className="my-3 font-['Bellefair'] font-light text-7xl">
          {scrData.homePage[0].title}
        </h1>
        <p className="mb-10 mx-4 font-['Barlow', sans-serif] ">
          {scrData.homePage[0].description}
        </p>
        <button
          className="  font-['Bellefair'] mx-auto h-40 w-40  rounded-[100%] 

text-[#0B0D17] text-2xl bg-[#ffffff] "
        >
          EXPLORE
        </button>
      </div>
    </>
  );
}
