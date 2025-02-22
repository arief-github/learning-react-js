import { FaStar } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={ selected ? "red" : "grey" } onClick={onSelect}/>
)

Star.propTypes = {
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
}

export default Star