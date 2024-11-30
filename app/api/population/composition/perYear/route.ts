const POPULATION_COMPOSITION_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const prefCode = searchParams.get("prefCode");

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
