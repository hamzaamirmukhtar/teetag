import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Toaster />
      <Header />
      <div className={`grid grid-cols-12 gap-12`}>
        <div className="sidebar-mobile col-span-2 ">
          <Sidebar />
        </div>
        <div className="col-span-12 xl:col-span-10">
          <main className="dashboard__wrapper">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
