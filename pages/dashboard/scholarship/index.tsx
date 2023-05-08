import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { User } from "@/dashboard/lib/types/dashboardTypes";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useMemo, useState } from "react";

const Scholarship = () => {
  const requestedCols = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: "User ID",
        cell: (row) => row.renderValue(),
        accessorKey: "id",
      },
      {
        header: "Name",
        cell: (row) => row.renderValue(),
        accessorKey: "user.name",
      },
      {
        header: "Email",
        cell: (row) => row.renderValue(),
        accessorKey: "user.email",
      },
      {
        header: "Phone Number ",
        cell: (row) => row.renderValue(),
        accessorKey: "user.phone",
      },
      {
        header: "State",
        cell: (row) => row.renderValue(),
        accessorKey: "user.state",
      },
      {
        header: "Age",
        cell: (row) => row.renderValue(),
        accessorKey: "user.age",
      },
      {
        header: "Loss",
        cell: (row) => row.renderValue(),
        accessorKey: "reason",
      },
      {
        header: "Status",
        cell: (row) => row.renderValue(),
        accessorKey: "status",
      },
    ],
    [],
  );
  const [pageNumberRequested, setPageNumberRequested] = useState<number>(1);
  const [isLoadingRequested, setIsLoadingRequested] = useState<boolean>(true);
  const [requestedApplications, setRequestedApplications] = useState<any[]>([]);

  const rejectedCols = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: "User ID",
        cell: (row) => row.renderValue(),
        accessorKey: "id",
      },
      {
        header: "Name",
        cell: (row) => row.renderValue(),
        accessorKey: "user.name",
      },
      {
        header: "Email",
        cell: (row) => row.renderValue(),
        accessorKey: "user.email",
      },
      {
        header: "Phone Number ",
        cell: (row) => row.renderValue(),
        accessorKey: "user.phone",
      },
      {
        header: "State",
        cell: (row) => row.renderValue(),
        accessorKey: "user.state",
      },
      {
        header: "Age",
        cell: (row) => row.renderValue(),
        accessorKey: "user.age",
      },

      {
        header: "Loss",
        cell: (row) => row.renderValue(),
        accessorKey: "reason",
      },
      {
        header: "Status",
        cell: (row) => row.renderValue(),
        accessorKey: "status",
      },
    ],
    [],
  );
  const [pageNumberRejected, setPageNumberRejected] = useState<number>(1);
  const [isLoadingRejected, setIsLoadingRejected] = useState<boolean>(true);
  const [rejectedApplications, setRejectedApplications] = useState<any[]>([]);
  const handleRequestedDataChange = (data: any[]) => {
    setRequestedApplications(data);
    setIsLoadingRequested(false);
  };
  const handleRejectedDataChange = (data: any[]) => {
    setRejectedApplications(data);
    setIsLoadingRejected(false);
  };

  return (
    <>
      {isLoadingRequested ? (
        <Loader />
      ) : (
        <>
          <TitleHead
            title="Scholarship"
            metaTitle="scholarship"
            metaDesc="scholarship"
          />
          <InnerHeader title="Requested" />
          <Table
            data={requestedApplications}
            columns={requestedCols}
            link="scholarship/applications/edit"
            showActions={false}
          />
        </>
      )}
      <Paginator
        pageNumber={pageNumberRequested}
        onPageChange={setPageNumberRequested}
        onDataLoad={handleRequestedDataChange}
        apiURL={`/dashboard/admin/applications?role=scholarshipRecipient&status=pending&page=${pageNumberRequested}&limit=10`}
        parameter="applications"
      />
      <InnerHeader title="Rejected" />
      <Table
        data={rejectedApplications}
        columns={rejectedCols}
        showActions={true}
      />

      <Paginator
        pageNumber={pageNumberRejected}
        onPageChange={setPageNumberRejected}
        onDataLoad={handleRejectedDataChange}
        apiURL={`/dashboard/admin/applications?role=scholarshipRecipient&status=rejected&page=${pageNumberRejected}&limit=10`}
        parameter="applications"
      />
    </>
  );
};

export default Scholarship;

Scholarship.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
