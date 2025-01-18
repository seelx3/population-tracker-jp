import { z } from "zod";

const POPULATION_COMPOSITION_API_URL = `${process.env.API_ENDPOINT}/api/v1/population/composition/perYear`;

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
    return new Response("Invalid query parameter", { status: 400 });
  }

  const params = new URLSearchParams({
    cityCode: "-",
    prefCode: prefCode || "",
  });

  return await fetch(`${POPULATION_COMPOSITION_API_URL}?${params}`, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.API_KEY || "",
    },
    cache: "force-cache",
  });
}
