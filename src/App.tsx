import { useState } from "react";
import srcData from "../public/data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import Destinations from "./Routes/Destinations";
import Crew from "./Routes/Crew";
import Technology from "./Routes/technology";
import ToggleNav from "./ToggleNav";

function App() {
  const [showNav, setShowNav] = useState(false);
  // console.log(srcData.nav[1]);
  const handleHamburgerClick = () => {
    if (showNav) setShowNav(false);
    else setShowNav(true);
  };
  // console.log(showNav);
  return (
    <>
      <div className="">
        <nav className="m-6 !mb-2  flex items-center justify-between">
          <img className="block " src={srcData.nav[0].logoImage} alt="" />

          <img
            className="block"
            src={srcData.nav[0].hamburgerImage}
            alt=""
            onClick={handleHamburgerClick}
          />
        </nav>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ToggleNav
                  imgSrc={srcData.nav[0].exitIcon}
                  hidAndShowNav={showNav}
                  setShowNav={handleHamburgerClick}
                />
              }
            >
              <Route index element={<HomePage />} />
              <Route path="destinations" element={<Destinations />} />
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
