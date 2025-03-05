import { useState } from "react";

function useToggle() {
    const [on, setOn] = useState(false)
    const toggle = () => setOn(!on)

    return {
        on,
        toggle,
        togglerProps: {
            'aria-pressed': on,
            onClick: toggle
        },
    }
}

export default useToggle