import {
  PopulationDataList,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { useMemo, useState } from "react";

export const useActivePopulationCompositionData = (
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[],
) => {
  const [activeKey, setActiveKey] = useState<string>("total");

  const activePrefecturesPopulationDataList: PopulationDataList =
    useMemo(() => {
      return prefecturesPopulationCompositionData.map((prefecture) => ({
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
      }));
    }, [prefecturesPopulationCompositionData, activeKey]);

  return { activeKey, setActiveKey, activePrefecturesPopulationDataList };
};
