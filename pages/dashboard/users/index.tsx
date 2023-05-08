import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { User } from "@/dashboard/lib/types/dashboardTypes";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useMemo, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const cols = useMemo<ColumnDef<User>[]>(
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
        header: "Personal Tags",
        cell: (row) => row.renderValue(),
        accessorKey: "total_tags",
      },
      {
        header: "Email",
        cell: (row) => row.renderValue(),
        accessorKey: "email",
      },
      {
        header: "Phone Number ",
        cell: (row) => row.renderValue(),
        accessorKey: "phone",
      },
      {
        header: "State",
        cell: (row) => row.renderValue(),
        accessorKey: "state",
      },
      {
        header: "Provider",
        cell: (row) => row.renderValue(),
        accessorKey: "provider",
      },
      {
        header: "Role",
        cell: (row) => row.renderValue(),
        accessorKey: "role",
      },
    ],
    [],
  );

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDataChange = (data: User[]) => {
    setUsers(data);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TitleHead title="Users" metaTitle="users" metaDesc="users" />
          <InnerHeader title="users List" />
          <Table data={users} columns={cols} link="users" showActions={true} />
        </>
      )}
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/dashboard/admin/users?page=${pageNumber}&limit=10`}
        parameter="users"
      />
    </>
  );
};

export default Users;

Users.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
