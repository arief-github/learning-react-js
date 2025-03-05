import { useToggle } from "../context/toggle-context";
import { Switch } from "../components/Switch";
import { node } from "prop-types";

function ToggleOn({ children }) {
    const { on } = useToggle()
    return on ? children : null
}

function ToggleOff({ children }) {
    const { on } = useToggle()
    return on ? null : children
}

function ToggleButton({ ...props }) {
    const { on, toggle } = useToggle()
    return <Switch on={on} onClick={toggle} {...props} />
}

// validasi props
ToggleOn.propTypes = {
    children: node.isRequired
}

ToggleOff.propTypes = {
    children: node.isRequired
}

export { ToggleOn, ToggleOff, ToggleButton }