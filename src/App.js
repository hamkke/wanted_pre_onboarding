import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Dropdown from "./components/Dropdown";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import Slider from "./components/Slider";
import Input from "./components/Input";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="linkBox">
          <Link className="linkBtn" to="/">
            Tap 보기
          </Link>
          <Link className="linkBtn" to="/Toggle">
            Toggle 보기
          </Link>
          <Link className="linkBtn" to="/Input">
            Input 보기
          </Link>
          <Link className="linkBtn" to="/Slider">
            Slider 보기
          </Link>
          <Link className="linkBtn" to="/Dropdown">
            Dropdown 보기
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Tab />}></Route>
          <Route path="/Toggle" element={<Toggle />} />
          <Route path="/Input" element={<Input />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Dropdown" element={<Dropdown />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
