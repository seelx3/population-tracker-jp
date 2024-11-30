const PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

export async function GET() {
  return await fetch(PREFECTURES_API_URL, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    },
  });
}
