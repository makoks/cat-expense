import Head from "next/head";
import { Sour_Gummy } from "next/font/google";
import CatExpense from "@/components/CatExpense";
import styles from "@/styles/Home.module.css";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Expense</title>
        <meta name="description" content="Cat expence app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${sourGummy.variable}`}>
        <header>Cat Expense</header>

        <main className={styles.main}>
          <CatExpense />
        </main>
      </div>
    </>
  );
}
