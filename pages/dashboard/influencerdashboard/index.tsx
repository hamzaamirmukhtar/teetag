import DashboardTitleHead from "@/dashboard/components/DashboardTitleHead/DashboardTitleHead";
import InnerHeader from "@/dashboard/components/InnerHeader/InnerHeader";
import StatusCard from "@/dashboard/components/StatusCard/StatusCard";
import Delete from "@/dashboard/components/Svg/Delete";
import Edit from "@/dashboard/components/Svg/Edit";
import { Table } from "@/dashboard/components/Table/Table";
import { User } from "@/dashboard/lib/types/dashboardTypes";
import { TitleHead } from "@/website/components/TitleHead/TitleHead";
import { ColumnDef } from "@tanstack/react-table";
import DashboardLayout from "module/dashboard/layout/DashboardLayout";
import { useMemo } from "react";

const data = [
  {
    id: 1,
    title: "revenue",
    amount: "19,750",
    percentage: "11.94",
    color: "#00ff00",
    color_name: "green",
    count: null,
  },
  {
    id: 2,
    title: "expenses",
    amount: "11,375",
    percentage: "19.91",
    color: "#e03a45",
    color_name: "red",
    count: null,
  },
  {
    id: 3,
    title: "money to recipients",
    amount: "9000",
    percentage: "21.17",
    color: "#ffff00",
    color_name: "yellow",
    count: null,
  },
  {
    id: 4,
    title: "money to minions",
    amount: "784",
    percentage: "21.17",
    color: "#00ffcc",
    color_name: "blue",
    count: null,
  },
];

const InfluencerDashboard = () => {
  function handleEdit() {}

  function handleDelete() {}
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
        accessorKey: "tags",
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
        header: "Role",
        cell: (row) => row.renderValue(),
        accessorKey: "role",
      },
      {
        header: "Actions",
        cell: (row) => (
          <div className="flex items-center justify-center gap-6">
            <button onClick={handleEdit}>
              <Edit />
            </button>
            <button onClick={handleDelete}>
              <Delete />
            </button>
          </div>
        ),
        disableSortBy: true,
      },
    ],
    [],
  );
  const dummyData = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        tags: 100,
        email: "farazqureshi311@gmail.com",
        phone: "+1202 555 0156",
        state: "Arizona",
        role: "approved",
      });
    }
    return items;
  };
  return (
    <>
      <TitleHead
        title="Influencer Dashboard"
        metaTitle="Influencer  Dashboard"
        metaDesc="Influencer  Dashboard"
      />
      <InnerHeader title="Influencer  Dashboard" />
      <DashboardTitleHead name="John Doe" state="Alabama" />
      <div className="my-8 grid grid-cols-12 gap-8">
        {data.map((card) => (
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
      <InnerHeader title="Orders" />
      <Table data={dummyData()} columns={cols} />
    </>
  );
};

export default InfluencerDashboard;

InfluencerDashboard.getLayout = function (page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
