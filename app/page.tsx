import PopTrackLogo from "@/app/ui/popu-track-logo";

import { ChartPane } from "./ChartPane";
import CheckBoxPane from "./CheckBoxPane";

import styles from "./styles.module.css";

export default async function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <PopTrackLogo />
      </div>
      <div className={styles.checkbox}>
        <CheckBoxPane />
      </div>
      <div className={styles.charPane}>
        <ChartPane />
      </div>
    </main>
  );
}
