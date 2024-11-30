import {
  PopulationDataList,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { useEffect, useState } from "react";

export const useActivePopulationCompositionData = (
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[],
) => {
  const [
    activePrefecturesPopulationDataList,
    setActivePrefecturesPopulationDataList,
  ] = useState<PopulationDataList>([]);

  const [activeKey, setActiveKey] = useState<string>("total");

  useEffect(() => {
    const activePrefecturesPopulationDataList: PopulationDataList =
      prefecturesPopulationCompositionData.map((prefecture) => ({
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
    setActivePrefecturesPopulationDataList(activePrefecturesPopulationDataList);
  }, [activeKey, prefecturesPopulationCompositionData]);

  return { activeKey, setActiveKey, activePrefecturesPopulationDataList };
};
