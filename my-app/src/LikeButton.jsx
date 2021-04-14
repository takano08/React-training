import React from 'react'

/**
 * @param props
 */
const LikeButton = (props = props) => {
    return(
        <button id={'counter'}>いいね数: {props.count}</button>
    )
}

export default LikeButton