import { atom, useAtom } from "jotai";
import { PopulationDataList } from "../types";
import { activeKeyAtom } from "./useActiveKey";
import { prefecturesPopulationCompositionDataAtom } from "./usePrefecturesPopulationData";

const activePrefecturesPopulationDataListAtom = atom<PopulationDataList>(
  (get) => {
    const activeKey = get(activeKeyAtom);
    return get(prefecturesPopulationCompositionDataAtom).map((prefecture) => ({
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
  },
);

export const useActivePrefecturePopulationDataList = () => {
  const [activePrefecturesPopulationDataList] = useAtom(
    activePrefecturesPopulationDataListAtom,
  );

  return { activePrefecturesPopulationDataList };
};
