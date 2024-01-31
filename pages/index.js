import { LoadableHead } from '../components/Head/dynamic';
import { LoadableMain } from '../components/Main/dynamic';

import lazyHydrate from 'next-lazy-hydrate';

const LoadableFooter = lazyHydrate(() => import('../components/Footer'), {
  on: ['visible'],
});

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
