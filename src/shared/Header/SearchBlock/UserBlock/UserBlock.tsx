import React from 'react';
import styles from './userblock.css';
import {AnonIcon} from "../../../Icons/AnonIcon";

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
    loading?: boolean;
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {

    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=https://skillbox-react.herokuapp.com/auth/&duration=permanent&scope=read submit identity`}
        // <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.MYNONCONLICTVARNAME}/auth/&duration=permanent&scope=read submit identity`}
           className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} className={styles.avatarImage}/>
                    : <AnonIcon/>
                }
            </div>

            {
                loading ? (
                    <div className={styles.username}>
                        loading...
                    </div>
                ) : (
                    <div className={styles.username}>
                        {username || 'Аноним'}
                    </div>
                )
            }
        </a>
    );
}
