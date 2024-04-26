"use client";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

interface Props {
  prefectures: Prefectures[];
}

export function CheckBoxPane({ prefectures }: Props) {
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
