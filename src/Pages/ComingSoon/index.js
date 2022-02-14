import React from 'react'
import Image from 'react-bootstrap/Image'

// TODO: update linkpath if needed
import img from '../../assets/images/comingsoon.jpg'
import './style.css'

export const ComingSoon = () => {
    return (
        <div className="pageView comingSoon ">
            <Image src={img} fluid />
        </div>

    )
}

export default ComingSoon