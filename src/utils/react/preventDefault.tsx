import React from 'react';

export function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(event: E) => {
        event.preventDefault();
        fn(event);
    }
}