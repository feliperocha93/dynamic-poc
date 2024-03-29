import styles from '../../styles/Home.module.css';
import { LoadableModal } from '../Modal/dynamic';
import { useState } from 'react';

function Main() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <button onClick={toggleModal}>OPEN</button>

      <LoadableModal open={open} toggleModal={toggleModal} />

      <div className={styles.grid}>
        <a href='https://nextjs.org/docs' className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href='https://nextjs.org/learn' className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/canary/examples'
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}

export default Main;
