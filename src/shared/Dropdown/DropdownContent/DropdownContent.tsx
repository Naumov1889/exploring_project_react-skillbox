import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdowncontent.css';

interface IDropdownContentProps {
    children: React.ReactNode;
    setIsDropdownOpen: (isOpen: boolean) => void;
    onClose?: () => void;
    position?: {
        top: string;
        left: string;
    }
}

const NOOP = () => {
};

export function DropdownContent({children, setIsDropdownOpen, onClose = NOOP, position}: IDropdownContentProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose?.();
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
        <div style={{top: position?.top, left: position?.left}}
             className={styles.listContainer}
             ref={ref}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                {children}
            </div>
        </div>
    ), modalRootNode);
}
