import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import MinionList from "@/website/containers/MinionList/MinionList";

const Influencer = () => {
  return (
    <>
      <TitleHead title="Influencer" metaTitle="Influencer" metaDesc="" />
      <section className="minions-hero">
        <Header />
        <div className="story-content">
          <div className="container">
            <h1 className="text-center uppercase h1 font-fugaz shadow-heading">
              INFLUENCER
            </h1>
            <p className="mt-4 text-center h8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s.
            </p>
          </div>
        </div>
      </section>
      <MinionList />
      <Footer />
    </>
  );
};

export default Influencer;
