import React from 'react';
import styles from './cardtextcontent.css';

export function CardTextContent() {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <a className={styles.userLink} href="#user-url">
            <img className={styles.avatar}
                 src="https://cdn.dribbble.com/users/2531150/screenshots/7381472/media/be977f32a3f5abf4898f2c343ab7bfe0.jpg?compress=1&resize=800x600"
                 alt="avatar"
            />
            <span className={styles.username}>Иван Иванов</span>
          </a>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
        <div className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi asperiores beatae consequatur, dolores eius facere hic, illo in nam necessitatibus obcaecati odit placeat quasi quia quod repellendus tempore ullam.
          </a>
        </div>
      </div>
  );
}
