import { LoadableHead } from '../components/Head/dynamic';
import { LoadableMain } from '../components/Main/dynamic';
import { LoadableFooter } from '../components/Footer/dynamic';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <LoadableHead />
      <LoadableMain />
      <LoadableFooter />
    </div>
  );
}
