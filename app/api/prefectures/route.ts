const PREFECTURES_API_URL = `${process.env.API_ENDPOINT}/api/v1/prefectures`;

export async function GET() {
  return await fetch(PREFECTURES_API_URL, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.API_KEY || "",
    },
    cache: "force-cache",
  });
}
