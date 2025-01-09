import React from "react";
import styles from "@/app/styles/page.module.css";

import { Header } from "@/app/components/Header";
import { PopuTrackPane } from "@/app/components/PopulationTracker";

const Page: React.FC = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY not found.");
  }

  return (
    <div className={styles.root}>
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <Header />
        </div>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.main}>
          <PopuTrackPane />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} seelx3</p>
      </footer>
    </div>
  );
};

export default Page;
