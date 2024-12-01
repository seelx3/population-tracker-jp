export async function GET() {
  return await fetch(`${process.env.PREFECTURES_API_URL}`, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    },
  });
}
