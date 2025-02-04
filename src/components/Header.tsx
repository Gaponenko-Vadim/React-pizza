import LogoSvg from "/img/pizza-logo.svg";
import sHeader from "../../public/sHeader.svg";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header: React.FC = () => {
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
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src={sHeader} alt="Header" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
