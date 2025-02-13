import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface PizzaItem {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const PizzaFull = () => {
  const [pizzaFeach, setPizzaFeach] = useState<PizzaItem | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const pizzaGet = async () => {
      try {
        const { data } = await axios.get(
          "https:669d26e115704bb0e3054723.mockapi.io/item/" + id
        );
        setPizzaFeach(data);
      } catch {
        alert("ошибка");
        navigate("/");
      }
    };
    pizzaGet();
  }, []);
  if (!pizzaFeach) {
    return <h2>загрузка</h2>;
  }
  return (
    <div className="container">
      <h2>{pizzaFeach.title}</h2>
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <p>{pizzaFeach.price}</p>
    </div>
  );
};

export default PizzaFull;
