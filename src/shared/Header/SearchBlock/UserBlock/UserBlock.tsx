import React from 'react';
import styles from './userblock.css';
import {AnonIcon} from "../../../Icons/AnonIcon";

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {

    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth/&duration=permanent&scope=read submit identity`}
           className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} className={styles.avatarImage}/>
                    : <AnonIcon/>
                }
            </div>

            <div className={styles.username}>
                {username || 'Аноним'}
            </div>
        </a>
    );
}
