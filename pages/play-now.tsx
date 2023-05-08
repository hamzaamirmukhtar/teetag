import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import Order from "@/website/containers/Orders/Order";
import Rules from "@/website/containers/Rules/Rules";
import { StateCollection } from "@/website/containers/StateCollection/StateCollection";
import { fetchAllCategories } from "@/website/lib/networkCalls/storeFunctions";
import { Category } from "@/website/lib/types/wooCommerceTypes";
import { GetStaticProps } from "next";
import Head from "next/head";
// import withAuth from "./hoc/withAuth";

interface PlayNowProps {
  categories: Category[];
}

function Play({ categories }: PlayNowProps) {
  return (
    <>
      <Head>
        <title>Play Now | TeeTag</title>
        <meta
          name="description"
          content="America Largest Game of Tag via shirts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Rules />
      <StateCollection categories={categories} />
      <Order />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories: Category[] = await fetchAllCategories();

  if (!categories) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      categories: categories,
    },
  };
};

export default Play;
// export default withAuth(Play)
