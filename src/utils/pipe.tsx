export function pipe<U>(...fns: Function[]) {
// принимает другие функции и исполняет их слева-направо
    return <E,>(initialValue: any): U =>
        fns.reduce((prevValue, fn) => fn(prevValue), initialValue);
}