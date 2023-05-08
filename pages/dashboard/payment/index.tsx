import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import StatusCard from "@/dashboard/components/StatusCard/StatusCard";
import { Table } from "@/dashboard/components/Table/Table";
import { Loader } from "@/website/components/Loader/Loader";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { getDashboardData } from "@/website/lib/networkCalls/dashboard/userDetails";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useEffect, useMemo, useState } from "react";

const Payment = () => {
  const cols = useMemo<ColumnDef<any>[]>(
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
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    const dasboardData = getDashboardData();
    dasboardData.then((res: any) => {
      const result = res.data.result;
      const data = [
        {
          id: 1,
          title: "Total Sale",
          amount: result.totalRevenue,
          percentage: result.revenuePercentage,
          color: "#00ff00",
          color_name: "green",
          count: null,
        },
        {
          id: 4,
          title: "Minion Earning",
          amount: result.allMinionRaiseMoney,
          percentage: result.minionRaisedMoneyPercentage,
          color: "#00ffcc",
          color_name: "blue",
          count: null,
        },
        {
          id: 5,
          title: "Influencer Earning",
          amount: 0,
          count: "878",
          percentage: "11.94",
          color: "#00ff00",
          color_name: "green",
        },
        {
          id: 6,
          title: "gross profit",
          amount: result.grossProfit ?? 0,
          count: null,
          percentage: "21.17",
          color: "#e03a45",
          color_name: "red",
        },
      ];

      setDashboardData(data);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TitleHead
            title="Payments"
            metaTitle="payments"
            metaDesc="payments"
          />
          <InnerHeader title="Payments" />

          <div className="mt-8">
            <div className="grid grid-cols-12 gap-8">
              {dashboardData.map((card) => (
                <StatusCard
                  key={card.id}
                  title={card.title}
                  amount={card.amount}
                  count={card.count}
                  percentage={card.percentage}
                  color={card.color}
                  color_name={card.color_name}
                  id={card.id}
                />
              ))}
            </div>
          </div>
          <Table columns={cols} data={orders} />
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

export default Payment;

Payment.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
