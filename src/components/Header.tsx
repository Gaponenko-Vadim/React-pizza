import LogoSvg from "/img/pizza-logo.svg";
import sHeader from "../../public/sHeader.svg";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Header: React.FC = () => {
  const pizzaConter = useSelector((state: RootState) => state.pizzaSlice);
  const prices = pizzaConter.reduce((sum, pizza) => {
    return pizza.price * pizza.count + sum;
  }, 0);
  const sumPizza = pizzaConter.reduce((sum, pizza) => {
    return pizza.count + sum;
  }, 0);
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img width="38" src={LogoSvg} alt="Pizza logo" />
          <div style={{ display: "flex", gap: "20px" }}>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
            <Search />
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart.html" className="button button--cart">
            <span>{prices}</span>
            <div className="button__delimiter"></div>
            <img src={sHeader} alt="Header" />
            <span>{sumPizza | 0}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
