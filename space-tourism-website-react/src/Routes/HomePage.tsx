import scrData from "../../public/data.json";
export default function HomePage() {
  console.log(scrData.homePage[0].bgImageMob);
  document.body.style.background = `url(${scrData.homePage[0].bgImageMob})  no-repeat `;
  return (
    <>
      <div className="text-white flex flex-col h-full items-center text-center">
        <h5 className="font-['Barlow Condensed']">
          {scrData.homePage[0].subTitle}
        </h5>
        <h1 className="font-['Bellefair']">{scrData.homePage[0].title}</h1>
        <p className="font-['Barlow']">{scrData.homePage[0].description}</p>
        <button className="font-['Bellefair']">EXPLORE</button>
      </div>
    </>
  );
}
