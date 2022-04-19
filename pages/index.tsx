import Head from "next/head";
import styles from "../styles/Home.module.css";

import Component1 from "../src/components/Component1";
import Component2 from "../src/components/Component2";
import { ExampleProvider } from "../src/contexts/ExampleContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ContextAPI</title>
      </Head>

      <main className={styles.main}>
        <ExampleProvider>
          <Component1 />
          <Component2 />
        </ExampleProvider>
      </main>
    </div>
  );
}
