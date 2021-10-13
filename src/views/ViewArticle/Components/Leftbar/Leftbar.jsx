import React, { useState } from 'react'
import { VscHeart } from 'react-icons/vsc'
import { RiHeartFill } from 'react-icons/ri'

function Leftbar() {
    const [liked, setLiked] = useState(false)

    const handleArticleLike = () => {
        setLiked(!liked)
    }

    return (
        <div id="leftbar">
            <div className="leftbar_wrapper">
                <i className={!liked && "heart_icon--disabled"} onClick={handleArticleLike}>
                    <VscHeart />
                </i>
                <i className={liked && "heart_icon--disabled"} onClick={handleArticleLike}>
                    <RiHeartFill className="filled" />
                </i>
            </div>
        </div>
    )
}

export default Leftbar
