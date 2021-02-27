import React from 'react';
import styles from './cardpreview.css';

interface ICardPreviewProps {
    img: string;
}


export function CardPreview({img}: ICardPreviewProps) {
    const defaultImg = "https://cdn.dribbble.com/users/1803663/screenshots/14962221/media/60eb7a363b3689545148f2488d8852f8.jpg"

    return (
        <div className={styles.preview}>
            <img className={styles.previewImg}
                 src={img.startsWith("https://") ? img : defaultImg}/>
        </div>
    );
}
