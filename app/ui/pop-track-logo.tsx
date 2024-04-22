import { ChartBarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className}`}
      css={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        lineHeight: 1,
        color: "white",
      })}
    >
      <ChartBarIcon
        css={css({
          height: "3rem",
          width: "3rem",
        })}
      />
      <p
        css={css({
          margin: 0,
          fontSize: "2.75rem",
        })}
      >
        PopTrack
      </p>
    </div>
  );
}
