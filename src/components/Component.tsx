import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { activIdFunck } from "../redux/slice/filter";

const Component: FC = () => {
  const activ = useSelector((state: RootState) => state.filter.activId);
  const dispatch = useDispatch();
  const category: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index: number) => {
    dispatch(activIdFunck(index));
  };
  return (
    <div className="categories">
      <ul>
        {category.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activ === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Component;
