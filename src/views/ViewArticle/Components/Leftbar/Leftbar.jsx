import React, { useState } from 'react'
import { VscHeart } from 'react-icons/vsc'
import { RiHeartFill, RiShareForwardLine, RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri'
import { Favorite, FavoriteBorder, BookmarkAdded, BookmarkBorder, Reply } from '@mui/icons-material';

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
                        <FavoriteBorder />
                    </i>
                    <i className={liked && "heart_icon"} onClick={handleArticleLike}>
                        <Favorite className="filled" />
                    </i>
                    <p>1,345</p>
                </div>
                <div className="bookmark_btn">
                    <i className={!saved && "bookmark_icon"} onClick={handleArticleSave}>
                        <BookmarkBorder />
                    </i>
                    <i className={saved && "bookmark_icon"} onClick={handleArticleSave}>
                        <BookmarkAdded />
                    </i>
                    <p>
                        {saved ? "Saved" : "Save"}
                    </p>
                </div>
                <div className="share_btn">
                    <i>
                        <Reply className="share_icon" />
                    </i>
                    <i>
                        <Reply className="share_icon--disabled" />
                    </i>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Leftbar
