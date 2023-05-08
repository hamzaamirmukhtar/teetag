import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import { Loader } from "@/website/components/Loader/Loader";
import PageHeader from "@/website/components/PageHeader/PageHeader";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import Cart from "@/website/containers/Cart/Cart";
import { checkVerification } from "@/website/lib/networkCalls/authFunctions";
import { getCart } from "@/website/lib/networkCalls/cartFunctions";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "store/features/auth/authSlice";
import { RootState } from "store/store";

const ShoppingCart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const path = localStorage.getItem("user_path");

  useEffect(() => {
    const fetchCart = async () => {
      const response = await getCart();
      if (response.status === 200) {
        dispatch(updateCart(response.result.cart));
      }
    };
    fetchCart();
  }, []);

  useMemo(() => {
    const Verification = async (): Promise<any> => {
      if (user?.provider === "email") {
        checkVerification(String(user?.to_verify), router);
      } else {
        if (user?.phone === null) {
          router.push("/additional");
        } else {
          checkVerification(String(user?.to_verify), router);
        }
      }
    };

    Verification();
  }, [user]);

  if (path) {
    localStorage.removeItem("user_path");
    router.push(path, undefined, { shallow: true });
  } else {
    return !user?.to_verify ? (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <TitleHead title="Cart" metaTitle="cart" metaDesc="" />
        <Header />
        <PageHeader title="Cart" />
        <Cart />
        <Footer />
      </>
    ) : (
      <Loader />
    );
  }
};

export default ShoppingCart;
