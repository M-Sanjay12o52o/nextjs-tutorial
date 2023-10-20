import React from "react";
import styles from "./styles.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "Created by Sanjay",
  icons: "/favicon.ico",
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default AboutLayout;
