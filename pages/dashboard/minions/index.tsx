import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { Minion } from "module/website/lib/types/teetagTypes";
import { useMemo, useState } from "react";

const Minions = () => {
  const [minions, setMinions] = useState<Minion[]>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDataChange = (data: Minion[]) => {
    setMinions(data);
    setIsLoading(false);
  };

  const cols = useMemo<ColumnDef<Minion>[]>(
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
        accessorKey: "minion_code",
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
          <TitleHead title="Minions" metaTitle="minions" metaDesc="minions" />
          <InnerHeader title="Minions List" />
          <Table
            data={minions}
            columns={cols}
            link="minions"
            showActions={true}
            type={"minion"}
          />
        </>
      )}
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/dashboard/admin/minions?page=${pageNumber}&limit=10`}
        parameter="minions"
      />
    </>
  );
};

export default Minions;

Minions.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
