import axios from "axios";
import { PopulationCompositionAPIResponse } from "../types";

const POPULATION_COMPOSITION_API = "/api/population/composition/perYear";

export const fetchPopulationCompositionData = async ({
  prefCode,
}: {
  prefCode: number;
}): Promise<PopulationCompositionAPIResponse> => {
  const response = await axios
    .get(`${POPULATION_COMPOSITION_API}?prefCode=${prefCode}`)
    .then((res) => res.data.result)
    .catch(() => {
      throw new Error("人口構成データの取得に失敗しました");
    });
  return response;
};
