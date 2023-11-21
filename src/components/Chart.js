import { BarChart, axisClasses } from "@mui/x-charts";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { companiesAtom } from "../atoms";

export const Chart = () => {
  const companies = useRecoilValue(companiesAtom);

  const chartSetting = {
    yAxis: [
      {
        label: "market cap (INR)",
      },
    ],
    width: 800,
    height: 600,
    sx: {
      [`.${axisClasses.label}`]: {
        transform: "translate(-100px, 0)",
      },
    },
  };

  const valueFormatter = (value) => `${value} INR`;

  return (
    <>
      {companies.length !== 0 && (
        <BarChart
          margin={{ left: 150, bottom:200 }}
          dataset={companies.map((company) => ({
            name: company.name,
            marketCap: company.marketCap.toExponential(2),
          }))}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "name",
              tickLabelStyle: {
                angle: 45,
                textAnchor: "start",
                fontSize: 12,
              },
            },
          ]}
          series={[
            { dataKey: "marketCap", label: "Market Cap", valueFormatter },
          ]}
          {...chartSetting}
        ></BarChart>
      )}
    </>
  );
};
