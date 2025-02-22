import { number, string } from "prop-types";
import StarRating from "../StarRating";

export default function Color({ title, color, rating }) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, backgroundColor: color }}/>
            <StarRating selectedStars={rating} />
        </section>
    )
}

Color.propTypes = {
    title: string.isRequired,
    color: string.isRequired,
    rating: number.isRequired
}