import { z } from "zod";

const POPULATION_COMPOSITION_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

const querySchema = z.object({
  prefCode: z.string().refine((val) => {
    const intValue = parseInt(val);
    return intValue >= 1 && intValue <= 47;
  }),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const prefCode = searchParams.get("prefCode");

  try {
    querySchema.parse({ prefCode });
  } catch {
    throw new Error("Invalid query parameter");
  }

  return await fetch(
    `${POPULATION_COMPOSITION_API_URL}?cityCode=-&prefCode=${prefCode}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.RESAS_API_KEY || "",
      },
    },
  );
}
