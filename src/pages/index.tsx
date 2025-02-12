import Head from "next/head";
import CatExpense from "@/components/CatExpense";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Expense</title>
        <meta name="description" content="Cat expence app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.container}>
            Cat Expense
          </h1>
        </header>

        <main className={`${styles.container} ${styles.main}`}>
          <CatExpense />
        </main>
      </div>
    </>
  );
}
