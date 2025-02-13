import "./App.css";
import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFond from "./pages/NotFond";
import Basket from "./pages/Basket";
import LayoutMain from "./Layout";

import PizzaFull from "./pages/PizzaFull";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart.html" element={<Basket />} />
        <Route path="/*" element={<NotFond />} />
        <Route path="/:id" element={<PizzaFull />} />
      </Route>
    </Routes>
  );
};

export default App;
