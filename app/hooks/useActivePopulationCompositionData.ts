import {
  PopulationDataList,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { atom, useAtom } from "jotai";
import { useMemo } from "react";

const activeKeyAtom = atom<string>("total");

export const useActivePopulationCompositionData = (
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[],
) => {
  const [activeKey, setActiveKey] = useAtom(activeKeyAtom);

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
