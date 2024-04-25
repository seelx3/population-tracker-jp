"use client";

import PopTrackLogo from "@/app/ui/pop-track-logo";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChartPane } from "./ChartPane";
import CheckBoxPane from "./CheckBoxPane";

const blue = "rgb(59 130 246)";
const gray = "rgb(249 250 251)";

const styles = {
  main: css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "1.5rem",
  }),
  header: css({
    display: "flex",
    flexGrow: 0,
    height: "4rem",
    alignItems: "flex-center",
    borderRadius: "0.5rem",
    backgroundColor: blue,
    padding: "1rem",
  }),
  checkbox: css({
    borderRadius: "0.5rem",
    backgroundColor: gray,
    marginTop: "1rem",
    padding: "1rem",
  }),
  charPane: css({
    borderRadius: "0.5rem",
    backgroundColor: gray,
    height: "12rem",
    marginTop: "1rem",
    padding: "1rem",
  }),
};

export default function Page() {
  return (
    <main css={styles.main}>
      <div css={styles.header}>
        <PopTrackLogo />
      </div>
      <div css={styles.checkbox}>
        <CheckBoxPane />
      </div>
      <div css={styles.charPane}>
        <ChartPane />
      </div>
    </main>
  );
}
