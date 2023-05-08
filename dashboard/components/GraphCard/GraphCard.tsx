import { Loader } from "@/website/components/Loader/Loader";
import { getMonthlyChartData } from "@/website/lib/networkCalls/dashboard/userDetails";
import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import FilterBox from "../FilterBox/FilterBox";
import styles from "./GraphCard.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  borderRadius: 20,
  barPercentage: 0.5,
  categoryPercentage: 1.2,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Minions",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 4000 })),
      backgroundColor: "#00ff00",
      borderWidth: 6,
    },
    {
      label: "Influencer",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 4000 })),
      backgroundColor: "#e03a45",
      borderWidth: 6,
    },
    {
      label: "Current Recipient",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 4000 })),
      backgroundColor: "#00ffcc",
      borderWidth: 6,
    },
  ],
};
interface GraphCardProps {
  // chartData?: any;
}

const GraphCard = () => {
  const [filter, setFilter] = useState<string>("");
  const handleFilterChange = (value: string) => {
    setFilter(value.split(" ")[0]);
    // setIsLoading(true);
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const response = getMonthlyChartData(filter);
    response.then((res) => {
      const data = res.data.result;

      const newChartData = generateChartData(data);
      // setChartData([]);
      setChartData({ ...newChartData });
      setIsLoading(false);
    });
  }, [filter]);

  function generateChartData(data) {
    return {
      labels: data.map((item) => item.month),
      datasets: [
        {
          label: "Minions",
          data: data.map((item) => item.minionTotal),
          backgroundColor: "#00ff00",
          borderWidth: 6,
        },
        {
          label: "Influencer",
          data: data.map((item) => item.total),
          backgroundColor: "#e03a45",
          borderWidth: 6,
        },
        {
          label: "Current Recipient",
          data: data.map((item) => item.scholarshipRecipientTotal),
          backgroundColor: "#00ffcc",
          borderWidth: 6,
        },
      ],
    };
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h6 className="h8 font-fugaz uppercase">
              Donated Money Distribution
            </h6>
            <FilterBox
              values={["1 month", "6 months", "12 months"]}
              onChange={handleFilterChange}
            />
          </div>
          <div className={styles.card_body}>
            {chartData && (
              <Bar options={options} data={chartData} height={400} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GraphCard;
