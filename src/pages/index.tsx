import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}
