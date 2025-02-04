import { useState, useEffect, FC } from "react";
import { useSelector } from "react-redux";
import Component from "../components/Component";
import Sort from "../components/Sort";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../components/Pagination";
import { RootState } from "../redux/store";
import axios from "axios";

interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const Home: FC = () => {
  const [paginationIteam, setPaginationIteam] = useState(1);
  const [pizzaJson, setPizzaJson] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(true);
  const activeIndex = useSelector((state: RootState) => state.filter.activId);
  const activeSort = useSelector(
    (state: RootState) => state.filter.sortItem.sortProperty
  );

  const value = useSelector((state: RootState) => state.search.value);
  const activeSortProperty = activeSort.includes("-")
    ? `${activeSort.replace("-", "")}&order=asc`
    : `${activeSort}&order=desc`;
  const search = value ? `&search=${value}` : "";
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://669d26e115704bb0e3054723.mockapi.io/item?page=${paginationIteam}&limit=4&category=${
          activeIndex > 0 ? activeIndex : ""
        }&sortby=${activeSortProperty}${search}`
      )

      .then((data) => {
        setPizzaJson(data.data);
        setLoading(false);
      });
  }, [activeIndex, activeSortProperty, search, paginationIteam]);
  return (
    <div className="container">
      <div className="content__top">
        <Component />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading === true
          ? [...new Array<void>(6)].map((_, i) => <Skeleton key={i} />)
          : pizzaJson.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination setPaginationIteam={(e: number) => setPaginationIteam(e)} />
    </div>
  );
};

export default Home;
