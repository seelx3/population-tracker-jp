const RESAS_PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

export default async function CheckBoxPane() {
  const data = await fetch(RESAS_PREFECTURES_API_URL, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    },
  }).then((res) => res.json());

  const prefectures = data.result as Prefectures[];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflowX: "auto" }}>
      {prefectures.map((prefecture) => (
        <div key={prefecture.prefCode} style={{ width: "5.5rem" }}>
          <input type="checkbox" id={prefecture.prefName} />
          <label htmlFor={prefecture.prefName}>{prefecture.prefName}</label>
        </div>
      ))}
    </div>
  );
}
