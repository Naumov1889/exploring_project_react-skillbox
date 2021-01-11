import * as React from 'react';
import {starWars, uniqueNamesGenerator} from "unique-names-generator";

interface IStarWarsNameFunctionState {
    name: string;
    count: number;
}

export function StarWarsNameFunction() {
    const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1})
    const [state, setState] = React.useState<IStarWarsNameFunctionState>({name: randomName(), count: 0});
const handleClick = () => {
    setState((prevState => ({...prevState, name: randomName()})))
    setState((prevState => ({...prevState, count: prevState.count + 1})))
};
    console.log(state.count);

    return (
        <section>
            <span>{state.name}</span>
            <button onClick={handleClick}>Получить имя</button>
        </section>
    )
}