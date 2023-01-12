import { LoadableHead } from '../components/Head/dynamic-no-ssr'
import { LoadableMain } from '../components/Main/dynamic-no-ssr'
import { LoadableFooter } from '../components/Footer/dynamic'
import styles from '../styles/Home.module.css'

import { daysToWeeks } from 'date-fns'

export default function NoSSR() {
  return (
    <div className={styles.container}>
      <LoadableHead />
        <h1>{daysToWeeks(70)}</h1>
      
      <LoadableMain />

      {daysToWeeks(70) > 5 && <LoadableFooter />}
    </div>
  )
}

