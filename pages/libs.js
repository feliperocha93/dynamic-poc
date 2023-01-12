import _ from "lodash";
import * as FNS from 'date-fns';

import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Libs() {
  const [showDate, setShowDate] = useState(false);
  const [showDiff, setShowDiff] = useState(null);

  const arr1 = [1, 2, 3, 4, 5];
  const arr4 = [1, 3, 5, 7, 9];

  return (
    <div className={styles.container}>
      <button onClick={() => setShowDate(true)}>Show Date</button>
      {showDate && <h1>{FNS.format(new Date(), "'Today is a' eeee")}</h1>}

      <h3>Arr 1</h3>
      <ul>
        {arr1.map(item => <li key={item}>{item}</li>)}
      </ul>

      <h3>Arr 4</h3>
      <ul>
        {arr4.map(item => <li key={item}>{item}</li>)}
      </ul>

      <button onClick={() => setShowDiff(true)}>Show Diff</button>
      {showDiff && <h1>{_.difference(arr1, arr4).map(num => <>{num}, </>)}</h1>}
    </div>
  );
}
