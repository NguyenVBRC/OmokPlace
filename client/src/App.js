import { Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Training from "./Components/Training/Training";
import LinksLegion from "./Components/LinksLegion/LinksLegion";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";

const dbConnect = require("./db/dbConnect");
dbConnect();

import "./App.css"

function App() {
  return (
    <div className="main">
      <NavigationBar />
      {/* <section className="content__container">
        <LinksLegion />
        <Training />
      </section> */}
      <Routes>
        <Route path="/Omok" element={<Home />} />
        <Route path="/LinksAndLegion" element={<LinksLegion />} />
        <Route path="/TrainingMaps" element={<Training />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
