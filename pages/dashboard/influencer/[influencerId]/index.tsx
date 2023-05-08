import DataDetailCard from "@/dashboard/components/DataDetailCard/DataDetailCard";
import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import { Table } from "@/dashboard/components/Table/Table";
import { Influencer } from "@/dashboard/lib/types/dashboardTypes";
import { Paginator } from "@/website/components/Paginator/Paginator";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import {
  getAllInfluencers,
  getInfluencerInfo,
} from "@/website/lib/networkCalls/dashboard/userDetails";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useMemo, useState } from "react";
interface IParams extends ParsedUrlQuery {
  influencerId: string;
}

interface influencerInfoProps {
  influencer: Influencer;
}

const InfluencerInfo = ({ influencer }: influencerInfoProps) => {
  const cols = useMemo<ColumnDef<Influencer>[]>(
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
        header: "Influencer Code",
        cell: (row) => row.renderValue(),
        accessorKey: "influencer_code",
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
        title="influencer Info"
        metaTitle="influencer info"
        metaDesc="influencers"
      />
      <InnerHeader title="Basic Info" />
      <DataDetailCard user={influencer["influencer"]} />
      <InnerHeader title="Order History" />
      <Table data={orders.rows || []} columns={cols} />
      <Paginator
        pageNumber={pageNumber}
        onPageChange={setPageNumber}
        onDataLoad={handleDataChange}
        apiURL={`/dashboard/influencer/${influencer["influencer"].id}/transactions?page=${pageNumber}&limit=10`}
        parameter="transactions"
      />
    </>
  );
};

export default InfluencerInfo;

InfluencerInfo.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const influencers: any = await getAllInfluencers();

  const paths = influencers?.result.influencers.map((category) => {
    return {
      params: {
        influencerId: `${category.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { influencerId } = context.params as IParams;
  try {
    const influencer = await getInfluencerInfo(influencerId);
    // const orders = await getOrders(influencerId);
    return {
      props: {
        influencer: influencer.data.result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
