import { ChartBarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export function PopuTrackLogo() {
  return (
    <div
      className={`${lusitana.className}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        lineHeight: 1,
        color: "white",
      }}
    >
      <ChartBarIcon
        style={{
          height: "3rem",
          width: "3rem",
        }}
      />
      <p style={{ margin: 0, fontSize: "2.75rem" }}>PopuTrack</p>
    </div>
  );
}
