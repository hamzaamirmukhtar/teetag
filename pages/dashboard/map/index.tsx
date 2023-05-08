import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";

const Map = () => {
  return (
    <>
      <TitleHead title="Map" metaTitle="map" metaDesc="map" />
      <InnerHeader title="Map" />
    </>
  );
};

export default Map;

Map.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
