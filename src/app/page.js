import Head from "next/head";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Path to your favicon image */}
      </Head>
      <Terminal />
    </main>
  );
}
