import { selector, selectorFamily } from "recoil";
import basketAtom from "./atom";

export const selectGroupedBasket = selectorFamily({
  key: "groupedBasketState",
  get:
    (id: string) =>
    ({ get }) => {
      const state = get(basketAtom);
      return state.filter((item) => item._id === id);
    },
});

export const selectBasketTotalPrice = selector({
  key: "basketTotalPrice",
  get: ({ get }) => {
    const state = get(basketAtom);
    return state.reduce(
      (total: number, item: Product) => (total += item.price),
      0
    );
  },
});
