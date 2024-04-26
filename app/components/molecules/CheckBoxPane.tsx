"use client";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

interface Props {
  prefectures: Prefectures[];
  checkboxHandler: (prefIdx: number) => void;
}

export function CheckBoxPane({ prefectures, checkboxHandler }: Props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflowX: "auto" }}>
      {prefectures.map((prefecture, idx) => (
        <div key={prefecture.prefCode} style={{ width: "5.5rem" }}>
          <input
            type="checkbox"
            id={prefecture.prefName}
            onChange={() => {
              checkboxHandler(idx);
            }}
          />
          <label htmlFor={prefecture.prefName}>{prefecture.prefName}</label>
        </div>
      ))}
    </div>
  );
}
