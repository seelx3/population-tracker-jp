"use client";

import style from "@/app/styles/chartPane.module.css";
import React from "react";

import { PrefectureWithPopulationComposition } from "@/app/types";

import { PopulationChart } from "@/app/components/molecules/PopulationChart";
import { useActivePopulationCompositionData } from "@/app/hooks/useActivePopulationCompositionData";

const contents = [
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

type Props = {
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
};

export const ChartPane: React.FC<Props> = ({
  prefecturesPopulationCompositionData,
}) => {
  const { activeKey, setActiveKey, activePrefecturesPopulationDataList } =
    useActivePopulationCompositionData(prefecturesPopulationCompositionData);

  return (
    <>
      <ul className={style.chartTabUl}>
        {contents.map((content) => (
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
      <PopulationChart
        populationDataList={activePrefecturesPopulationDataList}
        activeKey={activeKey}
      />
    </>
  );
};
