import React from "react";
import { Column } from "@ant-design/plots";

const MonthlyBarChart = () => {
  const data = [
    {
      type: "Jan",
      value: 38,
    },
    {
      type: "Feb",
      value: 52,
    },
    {
      type: "Mar",
      value: 61,
    },
    {
      type: "Apr",
      value: 75,
    },
    {
      type: "May",
      value: 0,
    },
    {
      type: "Jun",
      value: 0,
    },
    {
      type: "Jul",
      value: 0,
    },
    {
      type: "Aug",
      value: 0,
    },
    {
      type: "Sep",
      value: 0,
    },
    {
      type: "Oct",
      value: 0,
    },
    {
      type: "Nov",
      value: 0,
    },
    {
      type: "Dec",
      value: 0,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "value",
    color: "#56b356",

    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Student",
      },
      value: {
        alias: "Student",
      },
    },
  };

  return (
    <>
      <Column {...config} />
    </>
  );
};
export default MonthlyBarChart;
