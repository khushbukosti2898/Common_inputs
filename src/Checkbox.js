import React from 'react';
import PropTypes from 'prop-types'
function Checkbox(props) {
    return (<>
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />{props.title}
    </>)
}
Checkbox.propTypes = {
    type: PropTypes.string
}


export default Checkbox;