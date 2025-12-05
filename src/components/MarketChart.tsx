import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { CustomTooltipProps } from "../types";

interface ChartDataPoint {
  name: string;
  value: number;
}

interface MarketChartProps {
  data: ChartDataPoint[];
  title?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm">
        <div className="font-semibold">{payload[0].value}</div>
        <div className="opacity-90">{label}</div>
      </div>
    );
  }
  return null;
};

const MarketChart: React.FC<MarketChartProps> = ({
  data,
  title = "XAU/USD",
}) => {
  return (
    <div className="relative rounded-[20px] min-h-[338px] bg-[linear-gradient(180deg,rgba(255,_228,_228,_0.2)_0%,_rgba(255,_129,_134,_0.2)_100%)] w-full flex-[0_0_auto] overflow-hidden">
      <h3 className="font-semibold text-gray-800 mb-4 relative z-10 mt-[17px] ml-[14px]">
        {title}
      </h3>

      <div className="relative h-72 pl-2 z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E31E25"
            />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#E31E25" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#E31E25" }}
              axisLine={false}
              tickLine={false}
              width={30}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#E31E24", strokeWidth: 2 }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#E31E24"
              strokeWidth={3}
              fill="rgba(227, 30, 36, 0.20)"
              activeDot={{
                r: 6,
                stroke: "#E31E24",
                fill: "white",
                strokeWidth: 3,
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#E31E24"
              strokeWidth={3}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketChart;
