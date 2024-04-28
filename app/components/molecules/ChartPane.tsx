"use client";

import {
  PopulationDataList,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { useEffect, useState } from "react";

import { Graph } from "@/app/components/molecules/ChartGraph";

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
                  ? prefecture.workingAgePopulationData
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
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {contents.map((content) => (
          <li
            key={content.key}
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            <button
              style={{
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                borderLeft:
                  activeKey === content.key ? "1px solid gray" : "0px",
                borderTop: activeKey === content.key ? "1px solid gray" : "0px",
                borderRight:
                  activeKey === content.key ? "1px solid gray" : "0px",
                borderBottom:
                  activeKey === content.key ? "0px" : "1px solid gray",
                backgroundColor: "white",
              }}
              onClick={() => setActiveKey(content.key)}
            >
              {content.label}
            </button>
          </li>
        ))}
      </ul>
      <Graph populationDataList={checkedPrefecturesPopulationDataList} />
    </>
  );
}
