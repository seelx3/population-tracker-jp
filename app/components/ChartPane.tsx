"use client";

import style from "@/app/styles/chartPane.module.css";
import React from "react";

import { PopulationChart } from "@/app/components/PopulationChart";
import { useActiveKey } from "@/app/hooks/useActiveKey";
import { usePrefecturesPopulationData } from "../hooks/usePrefecturesPopulationData";

const CONTENTS = [
  {
    key: "total",
    label: "総人口",
  },
  {
    key: "young",
    label: "年少人口",
  },
  {
    key: "productive",
    label: "生産年齢人口",
  },
  {
    key: "elderly",
    label: "老年人口",
  },
];

export const ChartPane: React.FC = () => {
  return (
    <>
      <SelectPopulationCompositionTab />
      <PopulationChart />
      <Notification />
    </>
  );
};

const SelectPopulationCompositionTab: React.FC = () => {
  const { activeKey, setActiveKey } = useActiveKey();

  return (
    <ul className={style.chartTabUl}>
      {CONTENTS.map((content) => (
        <li key={content.key} className={style.chartTabLi}>
          <button
            className={`${style.chartTabButton}`}
            style={
              activeKey === content.key
                ? {
                    border: "1px solid gray",
                    borderBottom: "0px",
                  }
                : {
                    border: "0px",
                    borderBottom: "1px solid gray",
                  }
            }
            onClick={() => setActiveKey(content.key)}
          >
            {content.label}
          </button>
        </li>
      ))}
    </ul>
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
