import React, { useState } from 'react'
import { VscHeart } from 'react-icons/vsc'
import { RiHeartFill, RiShareForwardLine, RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri'

function Leftbar() {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)

    const handleArticleLike = () => {
        setLiked(!liked)
    }

    const handleArticleSave = () => {
        setSaved(!saved)
    }

    return (
        <div id="leftbar">
            <div className="leftbar_wrapper">
                <div className="like_btn">
                    <i className={!liked && "heart_icon"} onClick={handleArticleLike}>
                        <VscHeart />
                    </i>
                    <i className={liked && "heart_icon"} onClick={handleArticleLike}>
                        <RiHeartFill className="filled" />
                    </i>
                    <p>1,345 likes</p>
                </div>
                <div className="share_btn">
                    <i>
                        <RiShareForwardLine />
                    </i>
                    <p>Share</p>
                </div>
                <div className="bookmark_btn">
                    <i className={!saved && "bookmark_icon"} onClick={handleArticleSave}>
                        <RiBookmarkLine />
                    </i>
                    <i className={saved && "bookmark_icon"} onClick={handleArticleSave}>
                        <RiBookmarkFill />
                    </i>
                    <p>Save</p>
                </div>
            </div>
        </div>
    )
}

export default Leftbar
