import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import DashboardWrapper from "@/dashboard/containers/DashboardWrapper/DashboardWrapper";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";

import DashboardLayout from "module/dashboard/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <>
      <TitleHead title="Dashboard" metaTitle="dashboard" metaDesc="dashboard" />
      <InnerHeader title="dashboard" />
      <DashboardWrapper />
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
