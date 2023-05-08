import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiUserVoice } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { HiOutlineAcademicCap, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiDashboardLine, RiUser2Line } from "react-icons/ri";

interface SideBarProps {
  isToggle?: boolean;
}

const Sidebar = ({ isToggle }: SideBarProps) => {
  const router = useRouter();
  useEffect(() => {
    //show sidebar items based on user role
    const data: any = localStorage.getItem("persist:root");
    const parseData = JSON.parse(data);
    const auth = parseData.auth;
    const { user } = JSON.parse(auth);
    const role = user.role;
  }, []);

  return (
    <aside className={isToggle ? "sidebar open-sidebar" : "sidebar"}>
      <ul className="flex flex-col justify-center items-stretch">
        <li
          className={
            router.pathname === "/dashboard" ? "dashboard__list_active" : null
          }
        >
          <Link
            href="/dashboard"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <RiDashboardLine />
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          className={
            router.pathname.startsWith("/dashboard/users")
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/users"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <FiUsers />
            <p>Users</p>
          </Link>
        </li>
        <li
          className={
            router.pathname.startsWith("/dashboard/minions")
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/minions"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <RiUser2Line />
            <p>Minions</p>
          </Link>
          {router.pathname.startsWith("/dashboard/minions") && (
            <ul className="dashboard__list">
              <li
                className={
                  router.pathname === "/dashboard/minions"
                    ? "dashboard__list_active"
                    : "dashboard__list_inactive"
                }
              >
                <Link href="/dashboard/minions" className="cursor-pointer">
                  <p>List</p>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/dashboard/minions/applications"
                    ? "dashboard__list_active"
                    : "dashboard__list_inactive"
                }
              >
                <Link
                  href="/dashboard/minions/applications"
                  className="cursor-pointer"
                >
                  <p>Applications</p>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className={
            router.pathname.startsWith("/dashboard/scholarship")
              ? "dashboard__list_active"
              : "dashboard__list_inactive"
          }
        >
          <Link
            href="/dashboard/scholarship"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <HiOutlineAcademicCap />
            <p>Scholarship</p>
          </Link>
          {router.pathname.startsWith("/dashboard/scholarship") && (
            <ul className="dashboard__list">
              <li
                className={
                  router.pathname === "/dashboard/scholarship"
                    ? "dashboard__list_active"
                    : "dashboard__list_inactive"
                }
              >
                <Link href="/dashboard/scholarship" className="cursor-pointer">
                  <p>Requested/Rejected</p>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/dashboard/scholarship/applications"
                    ? "dashboard__list_active"
                    : "dashboard__list_inactive"
                }
              >
                <Link
                  href="/dashboard/scholarship/applications"
                  className="cursor-pointer"
                >
                  <p>Active/Complete/In-Active</p>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* <li
          className={
            router.pathname === "/dashboard/scholarship"
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/scholarship"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <HiOutlineAcademicCap />
            <p>Scholarship</p>
          </Link>
          {router.pathname === "/dashboard/scholarship" && (
            <ul className="dashboard__sublist">
              <li
                className={
                  router.pathname === "/dashboard/scholarship"
                    ? "dashboard__list_active"
                    : null
                }
              >
                <Link
                  href="/dashboard/scholarship"
                  className="flex justify-start items-center gap-4 cursor-pointer"
                >
                  <p>Requested/Rejected</p>
                </Link>
              </li>
              <li
                className={
                  router.pathname !== "/dashboard/scholarship/allApplications"
                    ? "dashboard__sublist_active"
                    : null
                }
              >
                <Link
                  href="/dashboard/scholarship/allApplications"
                  className="flex justify-start items-center gap-4 cursor-pointer"
                >
                  <p>Active/Complete/In-Active</p>
                </Link>
              </li>
            </ul>
          )}
        </li> */}
        <li
          className={
            router.pathname.startsWith("/dashboard/influencer")
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/influencer"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <BiUserVoice />
            <p>Influencers</p>
          </Link>
          {router.pathname.startsWith("/dashboard/influencer") && (
            <ul className="dashboard__list">
              <li
                className={
                  router.pathname == "/dashboard/influencer"
                    ? "dashboard__list_active"
                    : "dashboard__list_inactive"
                }
              >
                <Link href="/dashboard/influencer" className="cursor-pointer">
                  <p>List</p>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/dashboard/influencer/createinfluencer"
                    ? "dashboard__list_active"
                    : "dashboard__list_inactive"
                }
              >
                <Link
                  href="/dashboard/influencer/createinfluencer"
                  className="cursor-pointer"
                >
                  <p>Create</p>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className={
            router.pathname === "/dashboard/orders"
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/orders"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <HiOutlineShoppingBag />
            <p>Orders</p>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/dashboard/payment"
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/payment"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <MdOutlineAttachMoney />
            <p>Payment/Finance</p>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/dashboard/map"
              ? "dashboard__list_active"
              : null
          }
        >
          <Link
            href="/dashboard/map"
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <GoLocation />
            <p>Map</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
