import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CreateProps = {
  price: number;
  title: string;
  types: number[];
  sizes: number[];
  id: number;
  count: number;
};

type pizzaProps = CreateProps[];

const initialState: pizzaProps = [];

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<CreateProps>) => {
      const finds = state.find((item) => item.id === action.payload.id);
      if (finds) {
        finds.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removePizza: (state, action) => {
      const find = state.find((item) => item.id === action.payload.id);

      if (find) {
        if (find.count > 1) {
          find.count -= 1;
        } else {
          state = state.filter((item) => item.id !== action.payload.id);
        }
      }
      return state;
    },
    removePizzaDelete: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      return state;
    },
    removeBasket: (state) => {
      state.length = 0;
    },
  },
});
export const { addPizza, removePizza, removeBasket, removePizzaDelete } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;
