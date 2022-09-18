import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple</title>
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
