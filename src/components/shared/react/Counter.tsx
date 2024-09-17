import { useState } from "react";


interface Props {
    initialValue: number
    children?: JSX.Element
}

export const Counter = (props: Props) => {
    const [counter, setCounter] = useState(props.initialValue);

    return (
        <div>
            
            {props.children}
            
            <p className="text-2xl">Value: {counter}</p>
            <div className="flex gap-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCounter((prev) => ++prev)}
                >+ 1</button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCounter((prev) => --prev)}
                >-1</button>
            </div>
        </div>
    );
}