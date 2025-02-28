import React from "react";
import { Column } from "@ant-design/plots";

const PositionAddedBymonth = () => {
  const data = [
    {
      type: "Jan",
      position: 35,
    },
    {
      type: "Feb",
      position: 52,
    },
    {
      type: "Mar",
      position: 61,
    },
    {
      type: "Apr",
      position: 80,
    },
    {
      type: "May",
      position: 0,
    },
    {
      type: "Jun",
      position: 0,
    },
    {
      type: "Jul",
      position: 0,
    },
    {
      type: "Aug",
      position: 0,
    },
    {
      type: "Sep",
      position: 0,
    },
    {
      type: "Oct",
      position: 0,
    },
    {
      type: "Nov",
      position: 0,
    },
    {
      type: "Dec",
      position: 0,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "position",
    seriesField: "",
    color: "#993333",
    // label: {
    //     content: (originData) => {
    //         const val = parseFloat(originData.value);

    //         if (val < 0.05) {
    //             return (val * 100).toFixed(1) + '%';
    //         }
    //     },
    //     offset: 10,
    // },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return (
    <>
      <Column {...config} />
    </>
  );
};
export default PositionAddedBymonth;
