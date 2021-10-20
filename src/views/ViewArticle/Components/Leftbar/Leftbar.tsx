import React, { useState } from 'react'
import { Favorite, FavoriteBorder, Bookmark, BookmarkBorder, Reply } from '@mui/icons-material';
import './LeftbarStyles.scss'

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
                    <i className={!liked ? "heart_icon" : ""} onClick={handleArticleLike}>
                        <FavoriteBorder />
                    </i>
                    <i className={liked ? "heart_icon" : ""} onClick={handleArticleLike}>
                        <Favorite className="filled" />
                    </i>
                    <p>1,345</p>
                </div>
                <div className="bookmark_btn">
                    <i className={!saved ? "bookmark_icon" : ""} onClick={handleArticleSave}>
                        <BookmarkBorder />
                    </i>
                    <i className={saved ? "bookmark_icon" : ""} onClick={handleArticleSave}>
                        <Bookmark />
                    </i>
                    <p>Save</p>
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
