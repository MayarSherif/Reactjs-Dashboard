import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

// import mileStaticsData from "../assets/data/mileStatics";

const barChart = (props) => {
  const mileStaticsData = props.data;
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mileStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="value" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default barChart;
