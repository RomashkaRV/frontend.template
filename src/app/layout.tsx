import { Raleway } from "next/font/google";
import type { ReactNode } from "react";

import Head from "./head";

import "style/index.scss";

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={raleway.className}>
      <Head />

      <body>{children}</body>
    </html>
  );
}
