import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Navbard from "./component/parts/Navbard";
import Footer from "./component/parts/Footer";
import Home from "./component/pages/Home";

function App() {
  return (
    <div className="app">
      <Navbard />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
