import { useCounter } from "../../context/counter";

export default function Counter() {
    const [state, dispatch] = useCounter()

    const increment = () => dispatch({ type: 'increment' })
    const decrement = () => dispatch({ type: 'decrement' })

    return (
        <>
            <div>Current Count: { state.count }</div>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
        </>
    )
}