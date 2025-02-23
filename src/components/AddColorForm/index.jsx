import PropTypes from "prop-types";
import { useInput } from "../../hooks/useInput";
import { useColors } from "../../hooks/useColors";

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput("#000")
    const { addColor } = useColors()

    const submit = e => {
        e.preventDefault()

        addColor(titleProps.value, colorProps.value)

        resetTitle()
        resetColor()
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />

            <input {...colorProps} type="color" required />

            <button>ADD</button>
        </form>
    )
}

AddColorForm.propType = {
    onNewColor: PropTypes.func
}