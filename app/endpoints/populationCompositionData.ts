import axios from "axios";
import { PopulationCompositionAPIResponse } from "../types";

const POPULATION_COMPOSITION_API = "/api/population/composition/perYear";

export const fetchPopulationCompositionData = async ({
  prefCode,
}: {
  prefCode: number;
}): Promise<PopulationCompositionAPIResponse> => {
  if (!(prefCode >= 1 && prefCode <= 47)) {
    throw new Error("都道府県コードが不正です");
  }

  const params = new URLSearchParams({
    prefCode: prefCode.toString(),
  });

  const response = await axios
    .get(`${POPULATION_COMPOSITION_API}?${params}`)
    .then((res) => res.data.result)
    .catch(() => {
      throw new Error("人口構成データの取得に失敗しました");
    });
  return response;
};
