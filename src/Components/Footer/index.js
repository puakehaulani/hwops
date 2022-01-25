import React from 'react'
import { FaHeart } from 'react-icons/fa';

import { ContactSocialIcons } from '../Contact';
import './style.css'

function Footer() {

    return (
        <div className="footer" fixed="bottom">
            <ContactSocialIcons />
            {/* TODO: if project is pro bono, replace FaHeart with FaHandHoldingHeart */}
            made with <FaHeart /> by <a className="devLink" href="https://lexi.scalesdev.com" target="_blank" rel="noopener noreferrer">lexi scales</a><br />
            © {new Date().getFullYear()}
        </div>
    )
}

export default Footer