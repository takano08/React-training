import React from 'react'

const LikeButton = (props = props) => {
    return(
        <button id={'counter'}>いいね数: {props.count}</button>
    )
}

export default LikeButton