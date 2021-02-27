import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';

interface IPost {
    onClose?: () => void;
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                console.log('clicked!');
                props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const modalRootNode = document.querySelector('#modal_root');
    if (!modalRootNode) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque cupiditate delectus deserunt
                dignissimos eligendi eum facilis illum, inventore ipsa ipsam itaque modi mollitia necessitatibus
                perferendis placeat tenetur unde.
            </div>
        </div>
    ), modalRootNode);
}
