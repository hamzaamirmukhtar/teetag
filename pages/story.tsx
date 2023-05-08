import { Footer } from "@/website/components/Footer/Footer";
import { Header } from "@/website/components/Header/Header";
import Heading3 from "@/website/components/Heading3/Heading3";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import Image from "next/image";

const story = () => {
  return (
    <>
      <TitleHead
        title="My Story"
        metaTitle="My Story"
        metaDesc="AMERICA'S LARGEST GAME OF TAG For a Greater Cause!"
      />
      <section className="story-hero">
        <Header />
        <div className="story-content">
          <div className="container">
            <h1 className="text-center uppercase h1 font-fugaz shadow-heading">
              My Story
            </h1>
            <p className="mt-4 text-center h8">
              Hello! My name is Jack Bradley - I am the creator and founder of
              TeeTag. I created the game of TeeTag because I wanted to create
              something exciting
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-16 xl:grid-cols-2">
            <div>
              <Heading3 title="my story/past" />
              <p className="mt-16 h8">
                I have been blessed with a wonderful family around me. I have an
                8 year old brother (Matthew) and a 16 year old sister (Jane)
                who’ve been by my side every step of the way.
              </p>
              <p className="mt-16 h8">
                My Mom was one of these people who would always see the bright
                side in every situation. She was positive, funny, and most
                importantly – selfless. I don’t know how she did it – helping
                with all the sports and activities my sister and I were involved
                it, Physical Therapy and help for my special needs brother,
                going all out for the countless parties held within my family…
                the list is endless. She was indeed the best Mommy ever.
              </p>
            </div>
            <div>
              <Image
                src="/assets/story2.png"
                width={700}
                className="mx-auto teetag-image-shadow"
                height={580}
                alt="story2"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/assets/story3.png"
                width={700}
                className="mx-auto teetag-image-shadow"
                height={580}
                alt="story2"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="h8">
                In August of 2017 (13 years old), my beautiful and amazing
                mother sat me down on her bedside to inform me that she had been
                diagnosed with Stage 4 Esophagus Cancer. She was my backbone;
                she was everything. All the prayers, sleepless nights by her
                side, and endless hugs wasn’t enough to heal her. In February of
                2018, she gracefully passed away.
              </p>
              <p className="mt-16 h8">
                Losing her at such a young age rocked my world. Still to this
                day, not a day goes by where I don't think about her. I miss
                her. Even though there will always be a hole in my heart, I
                think she would be proud of the person I have become and what I
                am trying to do. She is my motivation
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="max-w-screen-xl mx-auto text-center h8">
            Additionally, in April of 2020, my Grandpa passed due to Covid-19. I
            was extremely close to him; he had taught me how to play chess from
            a young age and never failed to make me smile. He lived in the same
            town as me so thankfully, I got to see him frequently. He would sit
            in his wheelchair for hours upon hours telling me great stories
            about his life along with a few life lessons. He was a great mentor
            for me and someone I will always look up to.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="relative aspect-square">
              <Image src="/assets/story7.png" fill alt="story7" />
            </div>
            <div className="relative aspect-square">
              <Image src="/assets/story4.png" fill alt="story5" />
            </div>
            <div className="relative aspect-square">
              <Image src="/assets/story5.png" fill alt="story6" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="max-w-screen-xl mx-auto text-center h8">
            Lastly, I lost my Grandma (Grandpa's Wife) in October of 2020 also
            to Covid-19. She was one of those people who gave constant love and
            always wanted to talk. She always spoke so positively and she always
            shined light on my day. Her favorite sport was basketball and she
            thought every player was Michael Jordan… she absolutely loved it. I
            miss those times but cherish the countless times together. Her smile
            and love will not be forgotten :)
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <Heading3 title="motivation" />
          <p className="mt-16 h8">
            I am not mentioning these devastating losses to create empathy and
            compassion for myself. It is more to show my motivation and drive
            behind the Jack Bradley Experiment. I understand how hard it can be
            to lose a parent, and I think we all understand the horrific
            consequences Covid-19 has had on all of us, especially with losing
            loved ones. I hope to shine a light through this dark storm. I want
            to help put a bandage on a giant wound.
            <span className="text-green-light">
              {" "}
              Specifically, I want to help kids who have lost a parent due to
              Cancer by{" "}
            </span>{" "}
            helping pay for their future education. I chose this demographic
            because I felt it to be very relevant but also aligns well with my
            own personal loss. Additionally, I am trying to pay for my own
            college expenses and hopefully my sister Jane's college expenses as
            well.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading3 title="conclusion" />
          <p className="mt-16 h8">
            The Jack Bradley Project & TeeTag is meant to be a fun, friendly
            game through t-shirts to relieve the severe consequences of
            Covid-19. I want everybody to enjoy and have fun with the process
            and help the cause. TeeTag is meant to be an inclusive,
            community-based project. I am so excited to be on this journey with
            you. Due to the potential contagious, virus-like structure of
            TeeTag, one small act of generosity from you can lead to so much
            more. Thank you guys!
          </p>
          <p className="mt-16 font-semibold h7">Tag... You're it :)</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default story;
