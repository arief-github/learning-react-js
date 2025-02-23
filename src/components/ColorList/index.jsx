import PropTypes from "prop-types";
import Color from "./Color";
import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";

export default function ColorList() {
    const { colors } = useContext(ColorContext)
    
    if (!colors.length) return <div>No Color Listed</div>
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    )
}

ColorList.propTypes = {
    colors: PropTypes.array,
}