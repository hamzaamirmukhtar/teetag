import { handleCartStatus } from "@/website/lib/networkCalls/authFunctions";
import { addCart, removeCart } from "@/website/lib/networkCalls/cartFunctions";
import { CartItem } from "@/website/lib/types/wooCommerceTypes";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "store/features/auth/authSlice";
import { RootState } from "store/store";
import CartQty from "../CartQty/CartQty";
import styles from "./CartListItem.module.css";

interface CartItemProps {
  cartItem: CartItem;
}

const CartListItem = ({ cartItem }: CartItemProps) => {
  const [counter, setCounter] = useState(cartItem.quantity);
  const cart = useSelector((state: RootState) => state.auth.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const isBrowser = () => typeof window !== "undefined";

  const data = { ...cartItem };
  data.quantity = 1;

  async function addQuantity() {
    const response = await addCart({
      cart_id: cart?.id,
      color: cartItem.color,
      image: {
        src: cartItem.image.src,
        alt: cartItem.image.alt,
      },
      name: cartItem.name,
      price: cartItem.price,
      product_id: cartItem.product_id,
      short_description: cartItem.short_description,
      size: cartItem.size,
      state: cartItem.state,
      variation_id: cartItem.variation_id,
      total: cartItem.total,
    });
    if (response.status === 200) {
      dispatch(updateCart(response.result.cart));
      setCounter((prevState) => prevState + 1);
    }
  }

  async function removeQuantity() {
    const response = await removeCart({
      cart_id: cart?.id,
      color: cartItem.color,
      image: {
        src: cartItem.image.src,
        alt: cartItem.image.alt,
      },
      name: cartItem.name,
      price: cartItem.price,
      product_id: cartItem.product_id,
      short_description: cartItem.short_description,
      size: cartItem.size,
      state: cartItem.state,
      variation_id: cartItem.variation_id,
      total: cartItem.total,
    });
    if (response.status === 200) {
      dispatch(updateCart(response.result.cart));
      setCounter((prevState) => prevState - 1);
      if (counter <= 1) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth" as any,
        });
      }
    }
    if (response.status === 400) {
      handleCartStatus(response);
    }
  }

  return (
    <div
      className={
        styles.cart__item +
        " grid grid-cols-1 xl:grid-cols-12 gap-6 items-center"
      }
    >
      <div className="relative xl:col-span-2 aspect-square">
        <Image src={cartItem.image?.src} fill alt={cartItem.image?.alt} />
      </div>
      <div className="grid items-start grid-cols-12 gap-10 py-10 lg:py-20 xl:gap-2 xl:col-span-10">
        <div className="col-span-12 text-center xl:text-start xl:col-span-2">
          <h3 className="mb-10 uppercase font-fugaz h8 text-green-light">
            {cartItem.name}
          </h3>
          <p className="mb-5 text-xl font-bold text-yellow-primary">
            {cartItem.state}
          </p>
          <p className="text-xl">{cartItem?.short_description}</p>
        </div>
        <div className="col-span-4 text-center xl:col-span-2">
          <h6 className="mb-10 uppercase font-fugaz h8 text-green-light">
            Size
          </h6>
          <p className="uppercase font-fugaz h8">
            {cartItem.size ? cartItem.size : "N/A"}
          </p>
        </div>
        <div className="col-span-4 text-center xl:col-span-2">
          <h6 className="mb-10 uppercase font-fugaz h8 text-green-light">
            Color
          </h6>
          <p className="uppercase font-fugaz h8">
            {cartItem.color ? cartItem.color : "N/A"}
          </p>
        </div>
        <div className="col-span-4 text-center xl:col-span-2">
          <h6 className="mb-10 uppercase font-fugaz h8 text-green-light">
            Price
          </h6>
          <p className="uppercase font-fugaz h8">
            ${parseFloat(cartItem.price).toFixed(2)}
          </p>
        </div>

        <div className="col-span-6 text-center xl:col-span-2">
          <h6 className="mb-10 uppercase font-fugaz h8 text-green-light">
            Quantity
          </h6>
          <CartQty
            quantity={counter}
            decrementFunction={removeQuantity}
            incrementFunction={addQuantity}
          />
        </div>
        <div className="col-span-4 text-center xl:col-span-2">
          <h6 className="mb-10 uppercase font-fugaz h8 text-green-light">
            Total
          </h6>
          <p className="uppercase font-fugaz h8">
            ${cartItem.total?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
