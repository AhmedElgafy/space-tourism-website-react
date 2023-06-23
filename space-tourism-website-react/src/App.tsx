import { useState, createContext } from "react";
import srcData from "../public/data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import Destinations from "./Routes/Destinations";
import Crew from "./Routes/Crew";
import Technology from "./Routes/technology";

function App() {
  const [count, setCount] = useState(0);
  // console.log(srcData.nav[1]);

  return (
    <>
      <nav className="m-6 flex items-center justify-between">
        <img className="block" src={srcData.nav[0].logoImage} alt="" />
        <img className="block" src={srcData.nav[0].hamburgerImage} alt="" />
      </nav>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
