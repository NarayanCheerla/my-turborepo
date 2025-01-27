import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`bg-orange-100 ${inter.className}`}>
        <ReactQueryProvider>
          <main>{children}</main>
        <ReactQueryDevtools/>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
