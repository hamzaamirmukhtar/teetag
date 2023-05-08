import { Exo, Fugaz_One } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbMail, TbMapPin, TbPhone } from "react-icons/tb";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
  display: "fallback",
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fugaz",
  display: "fallback",
});

export const Footer = () => {
  return (
    <footer
      className={`${exo.variable} ${fugaz.variable} font-exo bg-black-secondary`}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-12 py-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-start lg:justify-items-center footer__header">
          <div>
            <Image
              src="/assets/footer-logo.png"
              width={300}
              height={130}
              alt="footer-logo"
            />
            <p className="mt-10 text-base font-regular">
              TeeTag is simple… It’s TAG! America’s LARGEST game of Tag through
              the use of custom t-shirts in order to help raise money for
              children who’ve lost a parent to Cancer. TeeTag spans across all
              50 states of America and is meant to be a fun, interactive,
              pay-it-forward game for a greater cause.
            </p>
          </div>
          <div>
            <h6 className="text-base uppercase font-fugaz">Navigation</h6>
            <ul className="flex flex-col gap-8 mt-8">
              <li>
                <Link
                  href="/"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  TagTracker
                </Link>
              </li>
              <li>
                <Link
                  href="/play-now"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  PlayNow!
                </Link>
              </li>
              <li>
                <Link
                  href="/contribution"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-base uppercase font-fugaz">Useful Links</h6>
            <ul className="flex flex-col gap-8 mt-8">
              <li>
                <Link
                  href="/cart"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/apply-scholarship"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Apply for Scholarship
                </Link>
              </li>
              <li>
                <Link
                  href="/apply-minion"
                  className="text-base font-regular hover:text-yellow-primary"
                >
                  Become a Minion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-base uppercase font-fugaz">
              FOR DETAILS CONTACT
            </h6>
            <ul className="flex flex-col gap-8 mt-8">
              <li>
                <a href="tel:+1-111-222-3345">
                  <div className="flex items-center justify-start gap-4">
                    <TbPhone />
                    <p>+1-111-222-3345</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex items-center justify-start gap-4">
                    <TbMapPin />
                    <p>123 Fifth Avenue, New York NY 10160</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:jack@teetag.com">
                  <div className="flex items-center justify-start gap-4">
                    <TbMail />
                    <p>jack@teetag.com</p>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-10 mt-10">
              <li>
                <a href="#" target="_blank">
                  <FaYoutube className="h8 text-yellow-primary hover:text-green-dark" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaLinkedinIn className="h8 text-yellow-primary hover:text-green-dark" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaFacebookF className="h8 text-yellow-primary hover:text-green-dark" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTwitter className="h8 text-yellow-primary hover:text-green-dark" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTiktok className="h8 text-yellow-primary hover:text-green-dark" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 lg:px-0 footer__bottom bg-green-light">
        <p className="text-sm text-center font-regular text-black-secondary">
          TEETAG © 2023 All Rights Reserved | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};
