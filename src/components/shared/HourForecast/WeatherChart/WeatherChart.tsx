import classes from "./weatherChart.module.css";
import {
  LineChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

import CustomLabelWithIcon from "./CustomChartsComponents/CustomLabelWithIcon";
import CustomCursor from "./CustomChartsComponents/CustomCursor";

const dataDesktop = [
  { time: "Now", temp: 26, wind: "11.7km/h", icon: "cloudyNight" },
  { time: "22:00", temp: 26, wind: "9.3km/h", icon: "night" },
  { time: "00:00", temp: 22, wind: "12km/h", icon: "strormyNight" },
  { time: "2:00", temp: 16, wind: "15km/h", icon: "storm" },
  { time: "4:00", temp: 20, wind: "15km/h", icon: "storm" },
  { time: "6:00", temp: 22, wind: "15km/h", icon: "strormyNight" },
  { time: "8:00", temp: 16, wind: "15km/h", icon: "storm" },
];

const dataMobile = [
  { time: "Now", temp: 26, wind: "11.7km/h", icon: "cloudyNight" },
  { time: "22:00", temp: 26, wind: "9.3km/h", icon: "night" },
  { time: "00:00", temp: 22, wind: "12km/h", icon: "strormyNight" },
  { time: "2:00", temp: 16, wind: "15km/h", icon: "storm" },
];

type WeatherChartProps = {
  isMobile: boolean;
};

const WeatherChart = ({ isMobile }: WeatherChartProps) => {
  return (
    <div className="md:p-4 w-full">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={isMobile ? dataMobile : dataDesktop}
          margin={{ left: 20, right: 20 }}
        >
          <XAxis dataKey="time" hide padding={{ left: 30, right: 30 }} />
          <YAxis hide padding={{ top: 30, bottom: 30 }} />
          <Tooltip
            content={() => null}
            cursor={<CustomCursor height={150} stroke="#FFCC21" />}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#FFCC21"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#FFCC21" }}
          >
            <LabelList
              dataKey="temp"
              position="top"
              offset={10}
              fill="#fff"
              formatter={(value: any) => `${value}°C`}
            />
            <LabelList dataKey="icon" content={<CustomLabelWithIcon />} />
            <LabelList
              dataKey="wind"
              position="bottom"
              offset={55}
              fill="#fff"
              fontSize={10}
            />
            <LabelList
              dataKey="time"
              position="bottom"
              offset={67}
              fill="#fff"
              fontSize={10}
            />
          </Line>
          <CartesianGrid vertical={false} horizontal={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
