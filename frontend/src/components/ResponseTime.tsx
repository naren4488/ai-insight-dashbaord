import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  response_times:
    | {
        day_wise: { date: string; average_time: number }[];
        week_wise: { week: string; average_time: number }[];
      }
    | undefined;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: [{ value: number }];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

type ResponseTimeDate = {
  date: string;
  average_time: number;
}[];
type ResponseTimeWeek = {
  week: string;
  average_time: number;
}[];
const ResponseTime = ({ response_times }: Props) => {
  const [tabState, setTabState] = useState("date");
  const [data, setData] = useState<ResponseTimeDate | ResponseTimeWeek>();
  //   console.log(tabState, data);
  useEffect(() => {
    if (response_times) {
      if (tabState === "date") {
        //   console.log("narndra");
        setData(response_times.day_wise);
      } else {
        //   console.log("naren4488");
        setData(response_times.week_wise);
      }
    }
  }, [response_times, tabState]);

  return (
    <div className="response-time">
      <div className="response-main-content">
        <div className="header-content">
          <h2>Respnose Time</h2>
          <p>Trends over time on a daily or weekly basis</p>
        </div>
        <div>
          <button
            className={`tab-btn ${tabState === "date" && "active-btn"}`}
            onClick={() => setTabState("date")}
          >
            Date Wise
          </button>
          <button
            className={`tab-btn ${tabState === "week" && "active-btn"}`}
            onClick={() => setTabState("week")}
          >
            Week Wise
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={`${tabState}`} />
          <YAxis />
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={
              <CustomTooltip active={true} payload={[{ value: 0 }]} label="" />
            }
          />
          <Legend payload={[{ value: "Response Time", type: "line" }]} />
          <Line
            type="monotone"
            dataKey="average_time"
            stroke="#4d9fe2"
            animationDuration={200}
            animationBegin={50}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseTime;
