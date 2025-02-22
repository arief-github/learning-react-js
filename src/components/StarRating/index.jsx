import Star from "./Star"
import PropType from 'prop-types'

const createArray = length => [...Array(length)]

export default function StarRating({totalStars = 5, selectedStars = 0 }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} />
            ))}

            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
}

StarRating.propTypes = {
    totalStars: PropType.number,
    selectedStars: PropType.number
}


