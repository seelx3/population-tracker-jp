import { z } from "zod";

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

  return await fetch(
    `${process.env.POPULATION_COMPOSITION_API_URL}?cityCode=-&prefCode=${prefCode}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.API_KEY || "",
      },
    },
  );
}
