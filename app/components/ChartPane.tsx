import React from "react";
import { PopulationTypeSelectTab } from "./PopulationTypeSelectTab";
import { PopulationChart } from "@/app/components/PopulationChart";
import style from "@/app/styles/chartPane.module.css";

export const ChartPane: React.FC = () => {
  return (
    <>
      <h3>人口推移</h3>
      <div className={style.chartPaneContainer}>
        <PopulationTypeSelectTab />
        <PopulationChart />
      </div>
    </>
  );
};
