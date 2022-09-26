import { atom } from "recoil";

const basketAtom = atom<Product[]>({
  key: "basketAtom",
  default: [],
});

export default basketAtom;
