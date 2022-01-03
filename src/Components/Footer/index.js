import React from 'react'
import { FaHeart, FaRegCopyright } from 'react-icons/fa';

import { ContactSocialIcons } from '../Contact';
import './style.css'

function Footer() {
    return (
        <div className="footer" fixed="bottom">
            <hr className="separator"></hr>
            <ContactSocialIcons />
            made with <FaHeart /> by <a className="devLink" href="https://www.linkedin.com/in/lexijack/" target="_blank" rel="noopener noreferrer">lexi jack</a><br />
            {/* <FaRegCopyright /> 2022 */}
        </div>
    )
}

export default Footer