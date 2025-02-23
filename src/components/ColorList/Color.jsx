import PropTypes from "prop-types";
import StarRating from "../StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../../hooks/useColors";

export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors()

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}/>
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
        </section>
    )
}

Color.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired
}