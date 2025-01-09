import { PopulationChart } from "@/app/components/PopulationChart";
import style from "@/app/styles/chartPane.module.css";
import React from "react";
import { usePrefecturesPopulationData } from "../hooks/usePrefecturesPopulationData";
import { ContentTypeSelectTab } from "./ContentTypeSelectTab";

export const ChartPane: React.FC = () => {
  return (
    <>
      <h3>人口推移</h3>
      <div className={style.chartPaneContainer}>
        <ContentTypeSelectTab />
        <PopulationChart />
        <Notification />
      </div>
    </>
  );
};

const Notification: React.FC = () => {
  const { error, isLoading } = usePrefecturesPopulationData();

  if (error) {
    return <p>データの読み込みに失敗しました。</p>;
  }

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  return null;
};
