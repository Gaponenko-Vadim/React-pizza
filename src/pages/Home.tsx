import { useEffect, FC, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../redux/slice/filter";
import Component from "../components/Component";
import Sort, { sortOption } from "../components/Sort";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../components/Pagination";
import { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { pizzaAxios } from "../redux/slice/biznesPizza";

import qs from "qs";

interface PizzaParams {
  activeIndex: number;
  activeSortProperty: string;
  search: string;
  paginationIteam: number;
}

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const activeIndex = useSelector((state: RootState) => state.filter.activId);
  const paginationIteam = useSelector(
    (state: RootState) => state.filter.paginationIteam
  );
  const pizzaJson = useSelector((state: RootState) => state.biznesPizza);
  const activeSort = useSelector(
    (state: RootState) => state.filter.sortItem.sortProperty
  );

  const value = useSelector((state: RootState) => state.search.value);
  const activeSortProperty = activeSort.includes("-")
    ? `${activeSort.replace("-", "")}&order=asc`
    : `${activeSort}&order=desc`;
  const search = value ? `&search=${value}` : "";

  const isMounted = useRef(false);
  const isSerch = useRef(false);

  const pizzaParams: PizzaParams = {
    activeIndex,
    activeSortProperty,
    search,
    paginationIteam,
  };

  useEffect(() => {
    dispatch(pizzaAxios(pizzaParams));
  }, [dispatch, activeIndex, activeSortProperty, search, paginationIteam]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortOption.find(
        (obj) => obj.sortProperty === params.activeSort
      );
      isSerch.current = true;

      dispatch(
        setFilters({
          activId: Number(params.activeIndex) || 0,
          paginationIteam: Number(params.paginationIteam) || 1,

          sortItem: sort || {
            name: "популярности",
            sortProperty: "rating",
          },
        })
      );
      isSerch.current = false;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        activeIndex,
        paginationIteam,
        activeSort,
      });
      navigate(`?${queryString}`);
    } else {
      isMounted.current = true;
    }
  }, [activeIndex, activeSort, paginationIteam]);

  if (pizzaJson.status === "error") {
    return (
      <div className="container">
        <div className="content__top">
          <Component />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>

        <h1>Пиццы потерялись!!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="content__top">
        <Component />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaJson.status === "loading"
          ? [...new Array<void>(6)].map((_, i) => <Skeleton key={i} />)
          : pizzaJson.items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
