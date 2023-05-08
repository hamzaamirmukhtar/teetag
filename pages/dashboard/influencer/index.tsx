import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { Influencer } from "@/dashboard/lib/types/dashboardTypes";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useMemo, useState } from "react";

const Influencers = () => {
  const [influencers, setInfluencers] = useState<Influencer[]>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDataChange = (data: Influencer[]) => {
    setInfluencers(data);
    setIsLoading(false);
  };

  const cols = useMemo<ColumnDef<Influencer>[]>(
    () => [
      {
        header: "Player ID",
        cell: (row) => row.renderValue(),
        accessorKey: "id",
      },
      {
        header: "Name",
        cell: (row) => row.renderValue(),
        accessorKey: "name",
      },
      {
        header: "Total Tags",
        cell: (row) => row.renderValue(),
        accessorKey: "total_tags",
      },
      {
        header: "Email",
        cell: (row) => row.renderValue(),
        accessorKey: "email",
      },
      {
        header: "Code",
        cell: (row) => row.renderValue(),
        accessorKey: "influencer_code",
      },
      {
        header: "State",
        cell: (row) => row.renderValue(),
        accessorKey: "state",
      },
    ],
    [],
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TitleHead
            title="Influencers"
            metaTitle="influencers"
            metaDesc="influencers"
          />
          <InnerHeader title="Influencers List" />
          <Table
            data={influencers}
            columns={cols}
            link="influencer"
            showActions={true}
            type={"influencer"}
          />
        </>
      )}
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/dashboard/admin/influencers?page=${pageNumber}&limit=10`}
        parameter="influencers"
      />
    </>
  );
};

export default Influencers;

Influencers.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
