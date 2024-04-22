"use client";

import PopTrackLogo from "@/app/ui/pop-track-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
    height: "5rem",
    alignItems: "flex-end",
    borderRadius: "0.5rem",
    backgroundColor: "rgb(59 130 246)",
    padding: "1rem",
    "@media (min-width: 768px)": {
      height: "13rem",
    },
  }),
  contentContainer: css({
    marginTop: "1rem",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    gap: "1rem",
    "@media (min-width: 768px)": {
      flexDirection: "row",
    },
  }),
  leftContent: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#f9fafb",
    padding: "1.5rem",
    width: "100%",
    "@media (min-width: 768px)": {
      width: "40%",
      padding: "3rem",
    },
  }),
  rightContent: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    width: "100%",
    "@media (min-width: 768px)": {
      width: "60%",
      paddingLeft: "7rem",
      paddingRight: "7rem",
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
  }),
};

export default function Page() {
  return (
    <main css={styles.main}>
      <div css={styles.header}>
        <PopTrackLogo />
      </div>
      <div css={styles.contentContainer}>
        <div css={styles.leftContent}>
          <p
            className={`${lusitana.className}`}
            css={css({
              margin: 0,
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              color: "rgb(31 41 55)",
              "@media (min-width: 768px)": {
                fontSize: "1.875rem",
                lineHeight: "1.5",
              },
            })}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a
              href="https://nextjs.org/learn/"
              css={css({
                textDecorationLine: "none",
                color: "rgb(59 130 246)",
              })}
            >
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            css={css({
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              alignSelf: "flex-start",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.375rem",
              backgroundColor: "rgb(59 130 246)",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: "500",
              transition: "background-color 0.2s",
              textDecorationLine: "none",
              "&:hover": {
                backgroundColor: "rgb(49 100 236)",
              },
              "@media (min-width: 768px)": {
                padding: "1rem 2rem",
                fontSize: "1rem",
              },
            })}
          >
            <span>Log in</span>
            <ArrowRightIcon
              css={css({
                width: "1.25rem",
                height: "1.25rem",
                "@media (min-width: 768px)": {
                  width: "1.5rem",
                  height: "1.5rem",
                },
              })}
            />
          </Link>
        </div>
        <div css={styles.rightContent}></div>
      </div>
    </main>
  );
}
