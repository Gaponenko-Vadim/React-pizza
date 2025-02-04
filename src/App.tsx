import "./App.css";
import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFond from "./pages/NotFond";
import Basket from "./pages/Basket";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slice/counterSlice";
import { RootState } from "./redux/store";
const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart.html" element={<Basket />} />
          <Route path="*" element={<NotFond />} />
        </Routes>
      </div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
