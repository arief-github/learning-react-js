import { array } from "prop-types";
import Color from "./Color";

export default function ColorList({ colors = [] }) {
    if (!colors.length) return <div>No Color Listed</div>
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color}/>)
            }
        </div>
    )
}

ColorList.propTypes = {
    colors: array
}