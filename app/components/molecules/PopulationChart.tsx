"use client";

import { PopulationDataList } from "@/app/types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Accessibility from "highcharts/modules/accessibility";

if (typeof Highcharts === "object") {
  Accessibility(Highcharts);
}

type Props = {
  populationDataList: PopulationDataList;
  activeKey: string;
};

export const PopulationChart: React.FC<Props> = ({
  populationDataList,
  activeKey,
}) => {
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
          return Number(this.value) / 10000 + "万";
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
          (Number(this.y) >= 10000
            ? Math.floor(Number(this.y) / 10000) + "万"
            : "") +
          (Number(this.y) % 10000) +
          "人"
        );
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
