import Image from "next/image";
import Link from "next/link";
import Heading3 from "../Heading3/Heading3";
import TeetagList from "../TeetagList/TeetagList";

const Minions = () => {
  return (
    <section className="mb-40">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
          <div className="image-container">
            <Image
              src="/assets/minion-image.png"
              alt=""
              fill
              className="teetag-image-shadow"
            />
          </div>
          <div>
            <Heading3 title="minions" />
            <p className="mt-6 mb-12 h8">Minions are selectively chosen kids</p>
            <TeetagList
              ulClassConfig={"teetag-list sm"}
              liClassConfig={"ml-3 capitalize text-green-light"}
              items={[
                "Ages 16-22",
                "Have lost a parent to cancer",
                "NEED FINANCIAL SUPPORT",
              ]}
            />
            <p className="mt-12 h8">
              Minions are in charge of growing and spreading TeeTag throughout
              their state. Minions get rewarded by receiving a small portion of
              every tag they generate. This creates a fun and interactive way to
              spread the game of TeeTag across the country while also giving
              back to those in financial need.
            </p>
            <div className="flex flex-col items-stretch md:space-x-10 md:flex-row">
              <Link
                href="/apply-minion"
                className="text-center btn-teetag yellow"
              >
                Become a minion
              </Link>
              <Link href="/minions" className="text-center btn-teetag green">
                current minions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minions;
