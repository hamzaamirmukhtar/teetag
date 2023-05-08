import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { User } from "@/dashboard/lib/types/dashboardTypes";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useMemo, useState } from "react";

const Orders = () => {
  const cols = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: "Order ID",
        cell: (row) => row.renderValue(),
        accessorKey: "order_id",
      },
      {
        header: "Tagee Name",
        cell: (row) => row.renderValue(),
        accessorKey: "shipping.name",
      },
      {
        header: "Tagee Phone",
        cell: (row) => row.renderValue(),
        accessorKey: "shipping.phone",
      },
      {
        header: "Shipping Cost",
        cell: (row) => row.renderValue(),
        accessorKey: "shipping_cost",
      },
      {
        header: "Total",
        cell: (row) => row.renderValue(),
        accessorKey: "total",
      },
      {
        header: "Minion Code",
        cell: (row) => row.renderValue(),
        accessorKey: "minion_code",
      },
      {
        header: "Payment Status",
        cell: (row) => row.renderValue(),
        accessorKey: "payment_status",
      },
      {
        header: "Date",
        cell: (row) => row.renderValue(),
        accessorKey: "createdAt",
      },
    ],
    [],
  );

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<any>([]);
  const handleDataChange = (data: []) => {
    setOrders(data);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TitleHead title="Orders" metaTitle="orders" metaDesc="orders" />
          <InnerHeader title="orders" />
          <Table data={orders} columns={cols} />
        </>
      )}
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/dashboard/admin/transactions?page=${pageNumber}&limit=10`}
        parameter="transactions"
      />
    </>
  );
};

export default Orders;

Orders.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
