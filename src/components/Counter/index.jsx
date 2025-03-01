import { useCounter, increment, decrement } from "../../context/counter";

export default function Counter() {
    const [state, dispatch] = useCounter()

    return (
        <>
            <div>Current Count: { state.count }</div>
            <button onClick={() => decrement(dispatch)}> - </button>
            <button onClick={() => increment(dispatch)}> + </button>
        </>
    )
}