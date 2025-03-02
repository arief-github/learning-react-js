import { useState, Children, cloneElement } from "react";
import { array, node } from "prop-types";

export default function Toggle({ children, allowedTypes }) {
    const [on, setOn] = useState(false)

    const toggle = () => setOn(!on)

    return Children.map(children, child => {
        if(allowedTypes.includes(child.type)) {
            const newChild = cloneElement(child, { on, toggle })
            console.log(newChild)
            return newChild
        }

        return child
    })
}

Toggle.propTypes = {
    children: node,
    allowedTypes: array,
}