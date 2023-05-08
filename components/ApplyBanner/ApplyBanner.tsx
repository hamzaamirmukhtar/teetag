import Link from "next/link";

interface ApplyBannerProps {
  title: string;
  btnText: string;
  btnUrl: string;
}

const ApplyBanner = ({ title, btnText, btnUrl }: ApplyBannerProps) => {
  return (
    <section className="apply-banner">
      <div className="container">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-center md:justify-between items-center gap-10 md:gap-0">
          <h2 className="h2 uppercase text-black-bg font-fugaz">{title}</h2>
          <Link
            href={btnUrl}
            className="btn-teetag black text-center"
            style={{ marginTop: "0px" }}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplyBanner;
