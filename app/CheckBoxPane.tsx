import axios from "axios";
import React, { useEffect } from "react";

const RESAS_PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

export const CheckBoxPane: React.FC = () => {
  const [prefectures, setPrefectures] = React.useState<Prefectures[]>([]);

  useEffect(() => {
    axios
      .get(RESAS_PREFECTURES_API_URL, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY,
        },
      })
      .then((response) => {
        setPrefectures(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching prefectures:", error);
      });
  }, []);

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
};
