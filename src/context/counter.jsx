import { number } from "prop-types";
import { createContext, useReducer, useContext } from "react";

const CounterContext = createContext()

function CounterProvider({ step = 1, initialCount = 0, ...props }) {
    const [state, dispatch] = useReducer(
        (state, action) => {
            const change = action.step ?? step

            switch(action.type) {
                case 'increment' : {
                    return { ...state, count: state.count + change }
                }
                case 'decrement' : {
                    return { ...state, count: state.count - change }
                }
                default : {
                    throw new Error(`Unhandled action type: ${action.type}`)
                }
            }
        },
        { count: initialCount }
    )

    const value = [state, dispatch]

    return <CounterContext.Provider value={value} {...props} />
}

function useCounter() {
    const context = useContext(CounterContext)

    if (context === undefined) {
        throw new Error(`useCounter must be used within a CounterProvider`)
    }

    return context
}

export { CounterProvider, useCounter }

CounterProvider.propTypes = {
    step: number.isRequired,
    initialCount: number.isRequired
}