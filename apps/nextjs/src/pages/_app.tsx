// src/pages/_app.tsx
import "../styles/globals.css";
import React from "react";
import type { AppType } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { SSRProvider as ReactAriaSsrProvider } from "@react-aria/ssr";
import { PwaMeta } from "components";
import { ThemeProvider } from "next-themes";
import { api } from "utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <PwaMeta />
      </Head>
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
        <ReactAriaSsrProvider>
          <main className={`${poppins.variable} font-primary`}>
            <Component {...pageProps} />
          </main>
        </ReactAriaSsrProvider>
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
