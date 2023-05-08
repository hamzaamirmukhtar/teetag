import DataDetailCard from "@/dashboard/components/DataDetailCard/DataDetailCard";
import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import {
  getAllMinions,
  getMinionInfo,
} from "@/website/lib/networkCalls/dashboard/userDetails";
import { Minion } from "@/website/lib/types/teetagTypes";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useMemo, useState } from "react";
interface IParams extends ParsedUrlQuery {
  minionId: string;
}

interface minionInfoProps {
  minion: Minion;
}

const MinionInfo = ({ minion }: minionInfoProps) => {
  const cols = useMemo<ColumnDef<Minion>[]>(
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
      <TitleHead
        title="minion Info"
        metaTitle="minion info"
        metaDesc="minions"
      />
      <InnerHeader title="Basic Info" />
      <DataDetailCard user={minion["minion"]} />
      <InnerHeader title="Order History" />
      <Table data={orders.rows || []} columns={cols} />
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/dashboard/minion/${minion["minion"].id}/transactions?page=${pageNumber}&limit=10`}
        parameter="transactions"
      />
    </>
  );
};

export default MinionInfo;

MinionInfo.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const minions: any = await getAllMinions();

  const paths = minions?.result.minions.map((category) => {
    return {
      params: {
        minionId: `${category.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { minionId } = context.params as IParams;
  try {
    const minion = await getMinionInfo(minionId);
    // const orders = await getOrders(minionId);
    return {
      props: {
        minion: minion.data.result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
