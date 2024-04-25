const RESAS_POPULATION_COMPOSITION_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityCode = searchParams.get("cityCode") || "";
  const prefCode = searchParams.get("prefCode") || "";

  const url = new URL(RESAS_POPULATION_COMPOSITION_API_URL);
  url.searchParams.append("cityCode", cityCode);
  url.searchParams.append("prefCode", prefCode);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
