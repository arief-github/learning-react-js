import PropTypes from "prop-types";
import StarRating from "../StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({ id, title, color, rating, onRemove = f => f, onRate = f => f }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}/>
            <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
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