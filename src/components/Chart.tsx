import { useState } from "react";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  ComposedChart,
} from "recharts";
import { chartData } from "../constants/chartData";

// Custom tooltip component
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-md rounded">
        <p className="font-semibold text-gray-800">{`Week: ${label}`}</p>
        <p className="text-blue-600">
          <span className="font-medium">GM Dollars:</span> $
          {Number(payload[0].value).toLocaleString()}
        </p>
        {payload[1] && (
          <p className="text-green-600">
            <span className="font-medium">GM %:</span> {payload[1].value}%
          </p>
        )}
      </div>
    );
  }

  return null;
};

export default function Chart() {
  // State to store the processed data
  const [data] = useState(() => {
    // Process the data to ensure GM Dollars and GM % are numbers
    return chartData.map((item) => ({
      ...item,
      Week: item.Week,
      "GM Dollars": parseFloat(item["GM Dollars"].replace(/[^0-9.-]+/g, "")), // Convert to number
      "GM %": parseInt(item["GM %"].replace("%", "")), // Convert percentage to number
    }));
  });

  // Format the tooltip value
  const formatDollar = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-semibold mb-4">
        GM Dollars and Percentage by Week
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 w-full h-[550px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 60,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="Week"
              angle={-45}
              textAnchor="end"
              height={70}
              interval={0}
              tick={{ fill: "#666" }}
            />
            <YAxis
              yAxisId="left"
              tickFormatter={formatDollar}
              label={{
                value: "GM Dollars",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#666" },
              }}
              tick={{ fill: "#666" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              label={{
                value: "GM %",
                angle: 90,
                position: "insideRight",
                style: { textAnchor: "middle", fill: "#666" },
              }}
              tick={{ fill: "#666" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Bar
              yAxisId="left"
              dataKey="GM Dollars"
              fill="#3b82f6" // Tailwind blue-500
              radius={[4, 4, 0, 0]}
              name="GM Dollars"
              animationDuration={1500}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="GM %"
              stroke="#10b981" // Tailwind green-500
              strokeWidth={2}
              dot={{ fill: "#10b981", r: 4 }}
              activeDot={{ r: 6 }}
              name="GM %"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
