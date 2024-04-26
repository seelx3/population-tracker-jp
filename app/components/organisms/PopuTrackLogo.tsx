import { lusitana } from "@/app/ui/fonts";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export function PopuTrackLogo() {
  return (
    <div
      className={`${lusitana.className}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        lineHeight: 1,
        color: "white",
      }}
    >
      <ChartBarIcon
        style={{
          height: "1.5rem",
          width: "1.5rem",
        }}
      />
      <p style={{ fontSize: "1.5rem" }}>都道府県別人口推移</p>
    </div>
  );
}
