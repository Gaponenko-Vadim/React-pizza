import { useState } from "react";
import plus from "../../public/Plus.svg";
import { useSelector, useDispatch } from "react-redux";
import { addPizza } from "../redux/slice/pizzaSlice";
import { RootState } from "../redux/store";

const PizzaBlock = ({
  price,
  title,
  types,
  sizes,
  id,
}: {
  price: number;
  title: string;
  types: number[];
  sizes: number[];
  id: number;
}) => {
  const testo = ["тонкое", "традиционное"];
  const [testoForm, setTestoform] = useState(0);
  const [sizesI, setSizesI] = useState(0);
  const dispatch = useDispatch();
  const pizzaConter = useSelector((state: RootState) => state.pizzaSlice);
  const counter = pizzaConter.find((pizza) => id === pizza.id);

  const counterFunc = () => {
    const item = {
      price,
      title,
      types,
      sizes,
      id,
      count: 1,
    };
    dispatch(addPizza(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types &&
              types.map((type, i) => (
                <li
                  key={type}
                  onClick={() => setTestoform(i)}
                  className={testoForm === type ? "active" : ""}
                >
                  {testo[type]}
                </li>
              ))}
          </ul>
          <ul>
            {sizes &&
              sizes.map((size, i) => (
                <li
                  key={size}
                  onClick={() => setSizesI(i)}
                  className={sizesI === i ? "active" : ""}
                >
                  {size} см.
                </li>
              ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} ₽</div>
          <div
            className="button button--outline button--add"
            onClick={() => counterFunc()}
          >
            <img src={plus} alt="плюс" />
            <span>Добавить</span>
            {counter ? <i> {counter.count} </i> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
