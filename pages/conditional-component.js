import Footer from '../components/Footer'
import { LoadableHead } from '../components/Head/dynamic.js'
import styles from '../styles/Home.module.css'

import { daysToWeeks } from 'date-fns'

export default function ConditionalComponent() {
  return (
    <div className={styles.container}>
      <LoadableHead />
        <h1>{daysToWeeks(70)}</h1>
      {daysToWeeks(70) > 15 && <Footer />}
    </div>
  )
}

/**
 * 
 * Footer (rendered or not)
 * * conditional.js => 564kb (unzipped) 
 * 
 * LoadableFooter (rendered)
 * * conditional.js => 418kb (unzipped)
 * * Footer.js => 150kb (unzipped)
 * 
 * LoadableFooter (no-rendered)
 * * conditional.js => 418kb (unzipped)
 * * Footer.js => non-downloaded
 */

