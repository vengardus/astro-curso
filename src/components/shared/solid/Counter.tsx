import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
    initialValue: number
    children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {
    const [counter, setCounter] = createSignal(props.initialValue);

    return (
        <div>
            {/* <h1 class="text-4xl">Counter</h1> */}
            {
                props.children
            }
            <p class="text-2xl">Value: {counter()}</p>
            <div class="flex gap-2">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCounter((prev) => ++prev)}
                >+ 1</button>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCounter((prev) => --prev)}
                >-1</button>
            </div>
        </div>
    );
}