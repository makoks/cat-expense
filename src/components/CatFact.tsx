import { useEffect, useState } from "react";
import styles from "@/styles/CatFact.module.css";

const errorMessage = 'Failed to fetch fact';

export default function CatFact() {
  const [fact, setFact] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('mount');
    const fetchFact = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
          setFact(errorMessage);
        }
        const data = await response.json();
        setFact(data.fact);
      } catch {
        setFact(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFact();
    return () => {console.log('unmount')}
  }, []);

  return (
    <article>
      <h2 className={styles.title}>Random cat fact:</h2>
      <p>{isLoading ? 'Loading...' : fact}</p>
    </article>
  );
}
