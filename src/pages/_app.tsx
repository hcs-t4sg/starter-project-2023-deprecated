import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, type Session } from "@supabase/auth-helpers-react";
import { ThemeProvider } from "next-themes";
import { type AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import Layout from "~/components/layout";
import "~/styles/globals.css";
import { api } from "~/utils/api";

// https://nextjs.org/docs/pages/building-your-application/styling/css-modules

// For more on custom App component: https://nextjs.org/docs/pages/building-your-application/routing/custom-app

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <>
      <Head>
        <title>T4SG Starter Project</title>
        <meta name="description" content="T4SG starter project 2023. Bootstrapped with create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionContextProvider>
      </ThemeProvider>
    </>
  );
}

export default api.withTRPC(MyApp);
