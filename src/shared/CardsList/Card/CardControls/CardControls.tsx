import React from 'react';
import styles from './cardcontrols.css';

export function CardControls() {
  return (
    <div className={styles.cardControls}>
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          up
        </button>
        <span className={styles.karmaValue}>234</span>
        <button className={styles.down}>
          down
        </button>
      </div>
      <div className={styles.commentCount}>
        <button>
          <span className={styles.commentValue}>27 </span>
          comments
        </button>
      </div>
      <div className={styles.cardActions}>
        <div className={styles.share}>
          <button>
            share
          </button>
        </div>
        <div className={styles.plus}>
          <button>
            save
          </button>
        </div>
      </div>
    </div>
  );
}
