import { useState } from "react";
import plus from "../../public/Plus.svg";

const PizzaBlock = ({
  price,
  title,
  types,
  sizes,
}: {
  price: number;
  title: string;
  types: number[];
  sizes: number[];
}) => {
  const testo = ["тонкое", "традиционное"];
  const [counter, setCounter] = useState(0);
  const [testoForm, setTestoform] = useState(0);
  const [sizesI, setSizesI] = useState(0);

  const counterFunc = () => {
    setCounter(counter + 1);
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
            <i>{counter}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
