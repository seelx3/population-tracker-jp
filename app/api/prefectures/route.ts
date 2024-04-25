const RESAS_PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

export async function GET() {
  const res = await fetch(RESAS_PREFECTURES_API_URL, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
