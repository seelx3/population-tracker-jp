import { useEffect, useState } from "react";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

export default function CheckBoxPane() {
  const [prefectures, setPrefectures] = useState<Prefectures[]>([]);
  useEffect(() => {
    const fetchPrefectures = async () => {
      const res = await fetch("./api/prefectures").then((res) => res.json());
      setPrefectures(res.data.result);
    };
    fetchPrefectures();
  }, []);

  if (prefectures.length === 0) {
    return <>Loading...</>;
  }

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
