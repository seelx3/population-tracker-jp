"use client";

import style from "@/app/styles/chartPane.module.css";

import {
  PopulationDataList,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { useEffect, useState } from "react";

import { PopulationChart } from "@/app/components/molecules/PopulationChart";

interface Props {
  checkedPrefectures: number[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

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

export function ChartPane({
  checkedPrefectures,
  prefecturesPopulationCompositionData,
}: Props) {
  const [
    checkedPrefecturesPopulationDataList,
    setCheckedPrefecturesPopulationDataList,
  ] = useState<PopulationDataList>([]);

  const [activeKey, setActiveKey] = useState<string>("total");

  useEffect(() => {
    const checkedPrefecturesPopulationDataList: PopulationDataList = [];
    checkedPrefectures.forEach((checkedIdx) => {
      const prefCode = checkedIdx + 1;
      const prefecture = prefecturesPopulationCompositionData.find(
        (data) => data.prefCode === prefCode,
      );
      if (prefecture) {
        checkedPrefecturesPopulationDataList.push({
          prefName: prefecture.prefName,
          populationData:
            activeKey === "total"
              ? prefecture.totalPopulationData
              : activeKey === "young"
                ? prefecture.youngPopulationData
                : activeKey === "productive"
                  ? prefecture.productivePopulationData
                  : activeKey === "elderly"
                    ? prefecture.elderlyPopulationData
                    : [],
        });
      }
    });
    setCheckedPrefecturesPopulationDataList(
      checkedPrefecturesPopulationDataList,
    );
  }, [activeKey, checkedPrefectures, prefecturesPopulationCompositionData]);

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
        populationDataList={checkedPrefecturesPopulationDataList}
        activeKey={activeKey}
      />
    </>
  );
}
