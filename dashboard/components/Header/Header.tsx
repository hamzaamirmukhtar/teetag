import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi";
import SideBarHamburger from "../SideBarHamburger/SideBarHamburger";
import styles from "./Header.module.css";
const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header>
      <div className={styles.header}>
        <div className="flex items-center gap-6">
          <SideBarHamburger isToggle={isToggle} setIsToggle={setIsToggle} />
          <Link href="/dashboard" className={styles.logo}>
            <Image
              src="/assets/logo-header.png"
              width={230}
              height={100}
              alt="header-logo"
            />
          </Link>
        </div>
        <div className="flex justify-start items-center gap-6">
          <div className="flex items-center justify-start gap-2 hover:text-yellow-primary cursor-pointer">
            <p className="text-base">John Doe</p>
            <HiOutlineUserCircle className="w-12 h-12 " />
          </div>
          <GoGlobe className="w-12 h-12 hover:text-yellow-primary cursor-pointer" />
          <BiLogOut className="w-12 h-12 hover:text-yellow-primary cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
