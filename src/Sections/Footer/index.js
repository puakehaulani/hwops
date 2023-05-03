import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';

import { ContactSocialIcons } from '../Contact';
import './style.css'

export const Footer = () => {

    return (
        <div className="footer" fixed="bottom">
            {/* <ContactSocialIcons /> */}
            made with <FaHandHoldingHeart /> by <a className="devLink" href="https://lexi.scalesdev.com" target="_blank" rel="noopener noreferrer">lexi scales</a><br />
            © {new Date().getFullYear()}
        </div>
    )
}
