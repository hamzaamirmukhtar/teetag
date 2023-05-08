import GraphCard from "@/dashboard/components/GraphCard/GraphCard";
import StatusCard from "@/dashboard/components/StatusCard/StatusCard";
import StatusListCard from "@/dashboard/components/StatusListCard/StatusListCard";
import {
  getDashboardData,
  getMonthlyChartData,
} from "@/website/lib/networkCalls/dashboard/userDetails";
import { useEffect, useState } from "react";

let data: any = [
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
  {
    id: 5,
    title: "money to influencer",
    amount: null,
    count: "878",
    percentage: "11.94",
    color: "#00ff00",
    color_name: "green",
  },
  {
    id: 6,
    title: "gross profit",
    amount: "8400",
    count: null,
    percentage: "21.17",
    color: "#e03a45",
    color_name: "red",
  },
  {
    id: 7,
    title: "total tags",
    amount: null,
    count: 80,
    percentage: "19.91",
    color: "#ffff00",
    color_name: "yellow",
  },
  {
    id: 8,
    title: "number of players",
    amount: null,
    count: 100,
    percentage: "11.94",
    color: "#00ffcc",
    color_name: "blue",
  },
];

const DashboardWrapper = () => {
  const [chartData, setChartData] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    const response = getMonthlyChartData("12");
    response.then((res) => {
      setChartData(res.data.result);
    });

    const dasboardData = getDashboardData();
    dasboardData.then((res: any) => {
      const result = res.data.result;
      data = [
        {
          id: 1,
          title: "revenue",
          amount: result.totalRevenue,
          percentage: result.revenuePercentage,
          color: "#00ff00",
          color_name: "green",
          count: null,
        },
        {
          id: 2,
          title: "expenses",
          amount: result.totalExpenses ?? 0,
          percentage: "19.91",
          color: "#e03a45",
          color_name: "red",
          count: null,
        },
        {
          id: 3,
          title: "money to recipients",
          amount: result.allReceipientRaiseMoney,
          percentage: result.raisedMoneyPercentage,
          color: "#ffff00",
          color_name: "yellow",
          count: null,
        },
        {
          id: 4,
          title: "money to minions",
          amount: result.allMinionRaiseMoney,
          percentage: result.minionRaisedMoneyPercentage,
          color: "#00ffcc",
          color_name: "blue",
          count: null,
        },
        {
          id: 5,
          title: "money to influencer",
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
        {
          id: 7,
          title: "total tags",
          amount: null,
          count: result.totalTags,
          percentage: result.tagsPercentage,
          color: "#ffff00",
          color_name: "yellow",
        },
        {
          id: 8,
          title: "number of players",
          amount: null,
          count: result.totalPlayers,
          percentage: result.playersPercentage,
          color: "#00ffcc",
          color_name: "blue",
        },
      ];
      // data = data.map((item) => {
      //   if (item.title === "revenue") {
      //     item.amount = result.totalRevenue;
      //   } else if (item.title === "expenses") {
      //     item.amount = result.expenses ?? 0;
      //   } else if (item.title === "money to recipients") {
      //     item.amount = result.activeReceipientRaiseMoney ?? 0;
      //   } else if (item.title === "money to minions") {
      //     item.amount = result.activeMinionRaiseMoney ?? 0;
      //   } else if (item.title === "money to influencers") {
      //     item.amount = result.activeInfluencerRaiseMoney ?? 0;
      //   } else if (item.title === "gross profit") {
      //     item.amount = result.grossProfit ?? 0;
      //   } else if (item.title === "total tags") {
      //     item.amount = result.totalTags;
      //   } else if (item.title === "number of players") {
      //     item.amount = result.totalPlayers ?? 0;
      //   }
      // });
      setDashboardData(data);
    });
  }, []);
  return (
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
        <div className="col-span-12">
          <GraphCard />
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <StatusListCard
              title="Recent Contributions"
              data={[
                {
                  name: "Current Recipient",
                  date: "1 Jan 2022 - 31 Dec 2022",
                  amount: "$1201.34",
                },
                {
                  name: "Minions",
                  date: "1 Jan 2022 - 31 Dec 2022",
                  amount: "$1201.34",
                },
                {
                  name: "Influences",
                  date: "1 Jan 2022 - 31 Dec 2022",
                  amount: "$1201.34",
                },
              ]}
            />
            <StatusListCard
              title="Latest Tags/Transactions"
              data={[
                {
                  name: "3 TeeShirts",
                  date: "19 Jan 2023",
                  state: "Arizona",
                  tag: "1",
                  amount: "$1201.34",
                },
                {
                  name: "Purchase of furniture",
                  date: "19 Jan 2023",
                  state: "NewYork",
                  tag: "3",
                  amount: "-$567.14",
                },
                {
                  name: "Cash refund for tickets",
                  date: "19 Jan 2023",
                  state: "California",
                  tag: "5",
                  amount: "$1201.34",
                },
              ]}
            />
            <StatusListCard
              title="Traffic Source"
              data={[
                {
                  name: "Social Media Redirection",
                  percentage: "65%",
                },
                {
                  name: "Google Ads",
                  percentage: "15%",
                },
                {
                  name: "http://www.example.com/1234",
                  percentage: "20%",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
