import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import { Loader } from "@/website/components/Loader/Loader";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import ProductDetail from "@/website/containers/ProductDetail/ProductDetail";
import Recipient from "@/website/containers/Recipient/Recipient";
import RelatedProducts from "@/website/containers/RelatedProducts/RelatedProducts";
import {
  fetchProduct,
  fetchRelatedProducts,
} from "@/website/lib/networkCalls/storeFunctions";
import { ProductType } from "@/website/lib/types/wooCommerceTypes";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";

interface IParams extends ParsedUrlQuery {
  productid: string;
}

interface ProductProps {
  product: ProductType;
}

const SingleProduct = ({ product }: ProductProps) => {
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    async function getRelatedProducts(ids: number[]) {
      const relatedArray = await fetchRelatedProducts(ids);
      setRelatedProducts(relatedArray);
    }
    getRelatedProducts(product?.related_ids);
  }, [product]);
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <TitleHead
        title={product.name}
        metaDesc={product.short_description}
        metaTitle={product.name}
      />
      <Header />
      <ProductDetail product={product} />
      <Recipient />
      <RelatedProducts relatedProducts={relatedProducts} />
      <Footer />
    </>
  );
};

export default SingleProduct;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { productid } = ctx.params as IParams;
  const product = await fetchProduct(productid);

  return {
    props: {
      product,
    },
    revalidate: 1,
  };
};
