import { ProductType } from "../components/Product";

export type StateType = {
  basket: ProductType[];
  user: null | { email: string | null; uid: string };
};

export const initialState: StateType = {
  basket: [],
  user: null,
};

export type ActionType =
  | { type: "ADD_TO_BASKET"; product: ProductType }
  | { type: "REMOVE_FROM_BASKET"; id: string }
  | { type: "EMPTY_BASKET" }
  | { type: "SET_USER"; user: StateType["user"] };

type GetBasketTotal = { (basket: ProductType[]): number };

export const getBasketTotal: GetBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.product],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default reducer;
