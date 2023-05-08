import { useAppDispatch } from "@/website/lib/hooks/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { logout } from "store/features/auth/authSlice";
import { RootState } from "store/store";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./Header.module.css";

export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const cart = useSelector((state: RootState) => state.auth.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isToggle, setIsToggle] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/signin");
  };
  return (
    <>
      <header
        className={isToggle ? styles.header + " header-sticky" : styles.header}
      >
        <div className="container">
          <div className="grid items-center grid-cols-12">
            <div className="col-span-6 lg:col-span-2">
              <Link href="/" className={styles.logo}>
                <Image
                  src="/assets/logo-header.png"
                  width={230}
                  height={100}
                  alt="header-logo"
                />
              </Link>
            </div>
            <div className="hidden col-span-9 lg:block">
              <ul className="flex items-center justify-center gap-x-8 xl:gap-x-16 ">
                <li>
                  <Link
                    href="/"
                    data-text="My Story"
                    className="text-lg hover:text-yellow-primary hover:font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/story"
                    data-text="My Story"
                    className="text-lg hover:text-yellow-primary hover:font-semibold"
                  >
                    My Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signin"
                    data-text="Track Your Tag"
                    className="text-lg hover:text-yellow-primary hover:font-semibold"
                  >
                    Track Your Tag
                  </Link>
                </li>
                <li>
                  <Link
                    href="/play-now"
                    data-text="Play Now!"
                    className="font-bold h8 text-green-light hover:text-yellow-primary"
                  >
                    Play Now!
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribution"
                    data-text="Contribute"
                    className="text-lg hover:text-yellow-primary hover:font-semibold"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    href="/minions"
                    data-text="Minions"
                    className="text-lg hover:text-yellow-primary hover:font-semibold"
                  >
                    Minions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    data-text="Leaderboard"
                    className="text-lg hover:text-yellow-primary hover:font-semibold"
                  >
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center col-span-6 gap-6 lg:col-span-1 justify-self-end">
              {user === null ? (
                <Link href="/signin">
                  <BiLogIn className="w-12 h-12 hover:text-yellow-primary" />
                </Link>
              ) : (
                <button onClick={handleLogout}>
                  <BiLogOut className="w-12 h-12 hover:text-yellow-primary" />
                </button>
              )}
              <Link href="/cart" className={styles.cart}>
                <MdOutlineShoppingCart className="w-12 h-12 hover:text-yellow-primary" />
                <div className={styles.counter + " font-fugaz"}>
                  {cart?.cart_count ?? 0}
                </div>
              </Link>
              <Hamburger isToggle={isToggle} setIsToggle={setIsToggle} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
