import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./contribution.module.css";

const prices = [
  {
    id: 1,
    name: "$25",
  },
  {
    id: 2,
    name: "$50",
  },
  {
    id: 3,
    name: "$100",
  },
  {
    id: 4,
    name: "$250",
  },
  {
    id: 5,
    name: "$500",
  },
  {
    id: 6,
    name: "$1000",
  },
  {
    id: 7,
    name: "$5000",
  },
];

const Contribution = () => {
  const router = useRouter();
  const [active, setActive] = useState<number>(1);
  const [price, setPrice] = useState<string>("25");

  function handleClick(
    e: React.MouseEvent<Element, MouseEvent>,
    index: number,
  ) {
    setActive(index);
    const selectedPrice = e.currentTarget.textContent;
    const contributePrice = selectedPrice?.replace("$", "");

    setPrice(contributePrice ? contributePrice : "");
  }

  const handleContribute = () => {
    if (price) {
      localStorage.setItem("contribute_price", price);
      router.push("/contribution-checkout");
    }
  };
  return (
    <>
      <TitleHead
        title="Contribution"
        metaTitle="contribution"
        metaDesc="AMERICA'S LARGEST GAME OF TAG For a Greater Cause!"
      />
      <section className="story-hero">
        <Header />
        <div className="story-content">
          <div className="container">
            <h1 className="text-center uppercase h1 font-fugaz shadow-heading">
              make a contribution
            </h1>
            <p className="mt-4 text-center h8">
              Contributions are a fast and easy way to continue spreading the
              game of TeeTag while also raising money for the cause! For every
              $25 contributed - 1 select individual will automatically be tagged
              and sent a t-shirt! Jack has hundreds of people all across America
              who are ready and waiting to get tagged!
            </p>
            <p className="mt-8 text-center h8">
              20% of all proceeds from contributions will still go directly to
              the cause.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-44 items-start xl:items-center">
            <div className="image-container">
              <Image
                src="/assets/contribution-image.png"
                fill
                alt="contribution-image"
                className="teetag-image-shadow"
              />
            </div>
            <div>
              <h3 className="h3 font-fugaz uppercase text-green-light mb-10">
                Custom Contribution
              </h3>
              <div>
                <p className="h8 text-green-light font-fugaz uppercase mb-8">
                  price
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-10 variation_flex">
                  {prices.map((price) => (
                    <label
                      htmlFor={price.name}
                      key={price.id}
                      className={
                        styles.contribution__checkbox +
                        ` font-fugaz ${active === price.id ? " active" : ""}`
                      }
                      onClick={(e) => handleClick(e, price.id)}
                    >
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        name={price.name}
                        value={price.name}
                        checked={active === price.id ? true : false}
                      />
                      {price.name}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="teetag__input max-w-lg">
                  <label
                    htmlFor="name"
                    className="block mb-4 font-fugaz uppercase"
                  >
                    Add Custom Amount
                  </label>
                  <input
                    type="number"
                    name="name"
                    id="name"
                    placeholder="Enter Your Amount"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="btn-teetag text-center yellow btn-contribute"
                onClick={handleContribute}
              >
                Contribute Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <ul className="teetag-list sm">
            <li>
              <span className="pl-3">
                For every $25 contributed = 1 select individual will
                automatically be tagged and sent a t-shirt
              </span>
            </li>
            <li>
              <span className="pl-3">
                20% of ALL proceeds from contributions will still go directly to
                the scholarship recipient TeeTag is currently helping raise
                money for.
              </span>
            </li>
            <li>
              <span className="pl-3">
                The more people tagged, the FASTER & BIGGER TeeTag spreads!
              </span>
            </li>
            <li>
              <span className="pl-3">
                Your generosity is greatly appreciated :)
              </span>
            </li>
          </ul>
          <p className="h8">
            <span className="font-semibold">Note:</span> Contributions are not
            considered donations for tax purposes.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contribution;
