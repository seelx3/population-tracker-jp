import {
  PopulationCompositionAPIResponse,
  Prefecture,
  PrefectureWithPopulationComposition,
} from "@/app/types";

const POPULATION_TOTAL = "総人口";
const POPULATION_YOUNG = "年少人口";
const POPULATION_PRODUCTIVE = "生産年齢人口";
const POPULATION_ELDERLY = "老年人口";

export async function getPrefecturePopulationCompositionData(
  prefecture: Prefecture,
): Promise<PrefectureWithPopulationComposition> {
  const populationComposition: PopulationCompositionAPIResponse = await fetch(
    `/api/population/composition/perYear?prefCode=${prefecture.prefCode}`,
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("人口構成データの取得に失敗しました");
    });

  return {
    prefCode: prefecture.prefCode,
    prefName: prefecture.prefName,
    boundaryYear: populationComposition.result.boundaryYear,
    totalPopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_TOTAL,
      )?.data || [],
    youngPopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_YOUNG,
      )?.data || [],
    productivePopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_PRODUCTIVE,
      )?.data || [],
    elderlyPopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_ELDERLY,
      )?.data || [],
  };
}
