import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
const OverallLineCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        month: "Jan",
        value: 30,
        category: "Student",
      },
      {
        month: "Jan",
        value: 54,
        category: "Employee",
      },
      {
        month: "Jan",
        value: 37,
        category: "Position",
      },
      {
        month: "Feb",
        value: 51,
        category: "Student",
      },
      {
        month: "Feb",
        value: 59,
        category: "Employee",
      },
      {
        month: "Mar",
        value: 61,
        category: "Student",
      },
      {
        month: "Mar",
        value: 73,
        category: "Employee",
      },
      {
        month: "Feb",
        value: 55,
        category: "Position",
      },
      {
        month: "Mar",
        value: 67,
        category: "Position",
      },
      {
        month: "Apr",
        value: 75,
        category: "Employee",
      },
      {
        month: "Apr",
        value: 79,
        category: "Student",
      },
      {
        month: "Apr",
        value: 77,
        category: "Position",
      },
    ]);
  }, []);

  // const asyncFetch = () => {
  //     fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
  //         .then((response) => response.json())
  //         .then((json) => setData(json))
  //         .catch((error) => {
  //             console.log('fetch data failed', error);
  //         });
  // };
  const config = {
    data,
    xField: "month",
    yField: "value",
    seriesField: "category",
    // xAxis: {
    //     type: 'time',
    // },
    // yAxis: {
    //     label: {
    //         // 数值格式化为千分位
    //         formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    //     },
    // },
  };

  return <Line {...config} />;
};

export default OverallLineCharts;
