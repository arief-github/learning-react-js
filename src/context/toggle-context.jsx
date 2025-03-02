import { node } from "prop-types";
import { useState, createContext, useContext } from "react";

const ToggleContext = createContext()
ToggleContext.displayName = 'ToggleContext'

function Toggle({ children }) {
    const [on, setOn] = useState(false)
    const toggle = () => setOn(!on)

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

function useToggle() {
    return useContext(ToggleContext)
}

Toggle.propTypes = {
    children: node.isRequired
}

export { Toggle, useToggle }