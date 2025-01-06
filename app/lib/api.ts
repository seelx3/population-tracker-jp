import {
  PopulationCompositionAPIResponse,
  Prefecture,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const POPULATION_TOTAL = "総人口";
const POPULATION_YOUNG = "年少人口";
const POPULATION_PRODUCTIVE = "生産年齢人口";
const POPULATION_ELDERLY = "老年人口";

export async function getPrefecturePopulationCompositionData(
  queryClient: QueryClient,
  prefecture: Prefecture,
): Promise<PrefectureWithPopulationComposition> {
  const populationComposition: PopulationCompositionAPIResponse =
    await queryClient.fetchQuery({
      queryKey: ["populationComposition", prefecture.prefCode],
      queryFn: async () => {
        const response = await axios.get(
          `/api/population/composition/perYear?prefCode=${prefecture.prefCode}`,
        );
        return response.data.result;
      },
      staleTime: 1000 * 60 * 60 * 1,
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
