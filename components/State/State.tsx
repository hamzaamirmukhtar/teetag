import { Category } from "@/website/lib/types/wooCommerceTypes";
import Image from "next/image";
import Link from "next/link";
import styles from "./State.module.css";

interface StateProps {
  category: Category;
}

export default function State({ category }: StateProps) {
  return (
    <Link
      href={`/states/${encodeURIComponent(category.id)}`}
      className={styles.state}
    >
      <Image
        src={
          category.image[0].src
            ? category.image[0].src
            : "/assets/placeholder.png"
        }
        alt={
          category.image[0]?.alt ? category.image[0].alt : "placeholder image"
        }
        placeholder="blur"
        blurDataURL="/assets/placeholder.png"
        width={290}
        height={140}
        className="w-120"
      />
      <h4 className="mt-4 text-center uppercase h6 font-fugaz text-yellow-primary">
        {category.name}
      </h4>
    </Link>
  );
}
