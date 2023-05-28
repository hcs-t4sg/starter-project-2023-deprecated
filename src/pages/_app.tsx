import { type AppType } from "next/app";
import Head from "next/head";
import Layout from "~/components/Layout";
import "~/styles/globals.css";
import { api } from "~/utils/api";

// https://nextjs.org/docs/pages/building-your-application/styling/css-modules

// For more on custom App component: https://nextjs.org/docs/pages/building-your-application/routing/custom-app

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>T4SG Starter Project</title>
        <meta name="description" content="T4SG starter project 2023. Bootstrapped with create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default api.withTRPC(MyApp);
