"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {
  PopulationData,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { useEffect, useState } from "react";

type PopulationDataList = {
  prefName: string;
  populationData: PopulationData[];
}[];

interface Props {
  checkedPrefectures: number[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

function Graph({
  populationDataList,
}: {
  populationDataList: PopulationDataList;
}) {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories: string[] = [];

  populationDataList.forEach((data) => {
    const traceData: number[] = [];
    data.populationData.forEach((populationData) => {
      categories.push(populationData.year.toString());
      traceData.push(populationData.value);
    });

    series.push({
      type: "line",
      name: data.prefName,
      data: traceData,
    });
  });

  const options: Highcharts.Options = {
    title: {
      text: "人口推移",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
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
