import {
  PopulationCompositionAPIResponse,
  Prefecture,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import axios from "axios";

const POPULATION_TOTAL = "総人口";
const POPULATION_YOUNG = "年少人口";
const POPULATION_PRODUCTIVE = "生産年齢人口";
const POPULATION_ELDERLY = "老年人口";

export async function getPrefecturePopulationCompositionData(
  prefecture: Prefecture,
): Promise<PrefectureWithPopulationComposition> {
  const populationComposition: PopulationCompositionAPIResponse = await axios
    .get(`/api/population/composition/perYear?prefCode=${prefecture.prefCode}`)
    .then((res) => res.data.result)
    .catch(() => {
      throw new Error("人口構成データの取得に失敗しました");
    });

  return {
    prefCode: prefecture.prefCode,
    prefName: prefecture.prefName,
    boundaryYear: populationComposition.boundaryYear,
    totalPopulationData:
      populationComposition.data.find((data) => data.label === POPULATION_TOTAL)
        ?.data || [],
    youngPopulationData:
      populationComposition.data.find((data) => data.label === POPULATION_YOUNG)
        ?.data || [],
    productivePopulationData:
      populationComposition.data.find(
        (data) => data.label === POPULATION_PRODUCTIVE,
      )?.data || [],
    elderlyPopulationData:
      populationComposition.data.find(
        (data) => data.label === POPULATION_ELDERLY,
      )?.data || [],
  };
}
