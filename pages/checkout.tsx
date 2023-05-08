import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import { Loader } from "@/website/components/Loader/Loader";
import PageHeader from "@/website/components/PageHeader/PageHeader";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import BillingDetails from "@/website/containers/BillingDetails/BillingDetails";
import { getPaymentDetail } from "@/website/lib/networkCalls/paymentFunction";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const Checkout = () => {
  const router = useRouter();
  const { transaction_id } = router.query;
  const cartItems = useSelector(
    (state: RootState) => state.auth.cart?.cartItems,
  );

  useEffect(() => {
    const getTransaction = async () => {
      const response = await getPaymentDetail(String(transaction_id));
      toast.error(response.message);
    };
    if (router.isReady) {
      if (transaction_id) {
        getTransaction();
      }
    }
  }, [transaction_id, router]);

  useEffect(() => {
    if (!cartItems?.length) {
      router.replace("/cart");
    }
  }, [cartItems]);

  return cartItems?.length ? (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <TitleHead title="checkout" metaTitle="checkout" metaDesc="" />
      <Header />
      <PageHeader title="Checkout" />
      <BillingDetails />
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default Checkout;
