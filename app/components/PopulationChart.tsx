"use client";

import { PopulationDataList } from "@/app/types";
import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Accessibility from "highcharts/modules/accessibility";

if (typeof Highcharts === "object") {
  Accessibility(Highcharts);
}

const TEN_THOUSAND = 10000;

const yAxisLabelFormatter = (value: number): string => {
  return Number(value) / TEN_THOUSAND + "万";
};

const populationFormatter = (value: number): string => {
  return (
    (value >= TEN_THOUSAND
      ? Math.floor(Number(value) / TEN_THOUSAND) + "万"
      : "") +
    (value % TEN_THOUSAND)
  );
};

type Props = {
  populationDataList: PopulationDataList;
  activeKey: string;
};

export const PopulationChart: React.FC<Props> = ({
  populationDataList,
  activeKey,
}) => {
  const categories: string[] = populationDataList[0]?.populationData.map(
    (populationData) => populationData.year.toString(),
  );
  const series: Highcharts.SeriesOptionsType[] = populationDataList.map(
    (data) => ({
      type: "line",
      name: data.prefName,
      data: data.populationData.map((populationData) => populationData.value),
    }),
  );

  const options: Highcharts.Options = {
    title: {
      text:
        activeKey === "total"
          ? "総人口の推移"
          : activeKey === "young"
            ? "年少人口の推移"
            : activeKey === "productive"
              ? "生産年齢人口の推移"
              : activeKey === "elderly"
                ? "老年人口の推移"
                : "",
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
      labels: {
        formatter: function () {
          return yAxisLabelFormatter(Number(this.value));
        },
      },
    },
    series,
    accessibility: {
      description: "都道府県別の人口推移を示すグラフ",
    },
    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          this.series.name +
          "</b><br>" +
          this.x +
          "年<br>" +
          populationFormatter(this.y as number) +
          "人"
        );
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
