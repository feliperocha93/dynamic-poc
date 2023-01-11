import LoadableFooter from '../components/Footer'
import LoadableHead from '../components/Head'
import LoadableMain from '../components/Main'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <LoadableHead />
      <LoadableMain />  
      <LoadableFooter />
    </div>
  )
}
