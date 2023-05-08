import ApplyBanner from "@/website/components/ApplyBanner/ApplyBanner";
import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import MinionList from "@/website/containers/MinionList/MinionList";
import { SingleMinion } from "@/website/lib/types/teetagTypes";
import { useState } from "react";

interface MinionProps {
  minions: SingleMinion[];
}

const Minions = ({ minions }: MinionProps) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [allMinions, setAllMinions] = useState<SingleMinion[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDataChange = (data: SingleMinion[]) => {
    setAllMinions(data);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TitleHead title="Minions" metaTitle="Minions" metaDesc="" />
          <section className="minions-hero">
            <Header />
            <div className="story-content">
              <div className="container">
                <h1 className="text-center uppercase h1 font-fugaz shadow-heading">
                  MINIONS
                </h1>
                <p className="mt-4 text-center h8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </p>
              </div>
            </div>
          </section>
          <ApplyBanner
            btnText="Apply here "
            btnUrl="/apply-minion"
            title="Apply here to be a minion"
          />
          <MinionList minions={allMinions || []} />
        </>
      )}
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/minion/all?page=${pageNumber}&limit=12`}
        parameter="minions"
      />
      <Footer />
    </>
  );
};

export default Minions;
