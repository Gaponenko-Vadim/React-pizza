import { useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchFunck } from "../../redux/slice/search";
import debounce from "lodash.debounce";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const refInput = useRef<HTMLInputElement | null>(null);

  const debouncedSearch = useCallback(
    debounce((e: string) => {
      dispatch(searchFunck(e));
    }, 1000),
    []
  );

  const buttonClick = (e: string) => {
    setValue(e);
    debouncedSearch(e);
    refInput.current?.focus();
  };

  return (
    <>
      <input
        ref={refInput}
        placeholder="поиск пиццы"
        onChange={(e) => buttonClick(e.target.value)}
        value={value}
      />
      {value && <button onClick={() => buttonClick("")}>стереть</button>}
    </>
  );
};

export default Search;
