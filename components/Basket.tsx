import Link from "next/link";
import { useRecoilValue } from "recoil";
import { ShoppingBagIcon } from "@heroicons/react/outline";

import basketAtom from "../atoms/basket/atom";

function Basket() {
  const basket = useRecoilValue(basketAtom);

  if (basket.length === 0) return null;

  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {basket.length ? (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {basket.length}
          </span>
        ) : null}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
  );
}

export default Basket;
