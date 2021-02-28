import React from 'react';
import styles from './dropdown.css';
import {DropdownContent} from "./DropdownContent";
import {getCoords} from "../../utils/dom";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {
};


export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
    const [position, setPosition] = React.useState({top: '100px', left: '100px'});

    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = (event: React.MouseEvent) => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }

        if (event.currentTarget instanceof HTMLElement) {
            const coords = getCoords(event.currentTarget)
            setPosition({
                top: `${coords.top + 30}px`,
                left: `${coords.left}px`
            })
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                <DropdownContent children={children}
                                 setIsDropdownOpen={setIsDropdownOpen}
                                 onClose={() => setIsDropdownOpen(!isDropdownOpen)}
                                 position={position}/>
            )}
        </div>
    );
}
