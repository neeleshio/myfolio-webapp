import React from 'react'
import { StyledFeatured } from './FeaturedStyles.js'
import { useHistory } from 'react-router-dom'

function Featured() {
    const history = useHistory()

    const handleFeatured = () => {
        history.push('/journal/Implementing-our-own-%60split()%60-in-Javascript/6184ff6d6e98b1a96a160466')
    }

    return (
        <StyledFeatured id="featured">
            <div className="container">
                <h2>Featured ★</h2>
                <div className="card-container">
                    <div className="wrapper">
                        <h3>New Article🎉: Implementing our own `split()` in Javascript.</h3>
                        <button onClick={handleFeatured}>Check out</button>
                    </div>
                </div>
            </div>
        </StyledFeatured>
    )
}

export default Featured
