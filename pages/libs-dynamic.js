import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from "react";
import { LoadableDateDisplay } from '../components/DateDisplay/dynamic';

// Normal: 660kb

export default function LibsDynamic() {
  const [showDate, setShowDate] = useState(false);
  const [diff, setDiff] = useState(null);

  // const format = useRef(null);

  const arr1 = [1, 2, 3, 4, 5];
  const arr4 = [1, 3, 5, 7, 9];

  // useEffect(() => {
  //   async function getFormat() {
  //     const res = (await import('date-fns/format')).default;
  //     format.current = res;
  //   }
  //   getFormat();
  // });

  async function handleShowDiff() {
    //By using Dynamic Imports, this fixes the "Remove unused JavaScript" issue on page load.
    // const _ = (await import('lodash')).default; => Avoid import the full lib
    const difference = (await import('lodash/difference')).default;
    setDiff(difference(arr1, arr4));
  }

  return (
    <div className={styles.container}>
      <LoadableDateDisplay />

      <h3>Arr 1</h3>
      <ul>
        {arr1.map(item => <li key={item}>{item}</li>)}
      </ul>

      <h3>Arr 4</h3>
      <ul>
        {arr4.map(item => <li key={item}>{item}</li>)}
      </ul>

      <button onClick={handleShowDiff}>Show Diff</button>
      {diff && <h1>{diff.map(num => <>{num}, </>)}</h1>}
    </div>
  );
}
