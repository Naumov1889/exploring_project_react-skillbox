import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg}
             src="https://cdn.dribbble.com/users/1803663/screenshots/14962221/media/60eb7a363b3689545148f2488d8852f8.jpg" />
      </div>
  );
}
