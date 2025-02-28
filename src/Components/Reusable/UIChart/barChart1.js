import React from "react";
import { Column } from "@ant-design/plots";

const EmployeeBarChart = () => {
  const data = [
    {
      type: "26",
      value: 26,
    },
    {
      type: "27",
      value: 27,
    },
    {
      type: "28",
      value: 20,
    },
    {
      type: "29",
      value: 30,
    },
    {
      type: "30",
      value: 20,
    },
    {
      type: "31",
      value: 22,
    },

  ];
  const config = {
    data,
    xField: "type",
    yField: "value",
    color: "#1D59BE",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Users",
      },
      value: {
        alias: "Users",
      },
    },
  };

  return (
    <div className="barchart_conatiner">
      <Column {...config} />
      <div className="text-center">
        <small >Dates of past 8 days</small>
      </div>


    </div>
  );
};
export default EmployeeBarChart;
