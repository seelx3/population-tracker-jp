import axios from "axios";
import { z } from "zod";
import { PopulationCompositionAPIResponse } from "../types";

const querySchema = z.object({
  prefCode: z.string().refine((val) => {
    const intValue = parseInt(val);
    return intValue >= 1 && intValue <= 47;
  }),
});

const POPULATION_COMPOSITION_API = "/api/population/composition/perYear";

export const fetchPopulationCompositionData = async ({
  prefCode,
}: {
  prefCode: number;
}): Promise<PopulationCompositionAPIResponse> => {
  const prefCodeString = prefCode.toString();

  try {
    querySchema.parse({ prefCode: prefCodeString });
  } catch {
    throw new Error("都道府県コードが不正です");
  }

  const params = new URLSearchParams({
    prefCode: prefCodeString,
  });

  const response = await axios
    .get(`${POPULATION_COMPOSITION_API}?${params}`)
    .then((res) => res.data.result)
    .catch(() => {
      throw new Error("人口構成データの取得に失敗しました");
    });
  return response;
};
