import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import ActivityData from "../assets/data/ActivityData";

const CarStatsChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={ActivityData}
        
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>

        </defs>
        <XAxis dataKey="month" stroke="#ddd" />
        
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
        <Area
          type="monotone"
          dataKey="km"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CarStatsChart;
