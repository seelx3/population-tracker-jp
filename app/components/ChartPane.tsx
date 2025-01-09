import React from "react";
import { ContentTypeSelectTab } from "./ContentTypeSelectTab";
import { PopulationChart } from "@/app/components/PopulationChart";
import style from "@/app/styles/chartPane.module.css";

export const ChartPane: React.FC = () => {
  return (
    <>
      <h3>人口推移</h3>
      <div className={style.chartPaneContainer}>
        <ContentTypeSelectTab />
        <PopulationChart />
      </div>
    </>
  );
};
