import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './style.css'

function Navigation() {
    ///////transparent to colored nav background state
    const [transparentBg, setTransparentBg] = useState(false)
    // useEffect(() => {
    //     window.onscroll = () => {
    //         if (window.pageYOffset > 350) {
    //             setTransparentBg(false)
    //         } else {
    //             setTransparentBg(true)
    //         }
    //     }
    // }, []);

    return (
        <Navbar className={` ${transparentBg ? "navBackgroundTransparent" : "navBackgroundColor"}`} variant="light" expand="md" sticky="top">
            <Navbar.Brand href="#">{transparentBg ? <></> : <Image src="../images/logo.png" height={50} />}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/">about</Nav.Link>
                    <Nav.Link href="/services">services</Nav.Link>
                    <Nav.Link href="/portfolio">portfolio</Nav.Link>
                    <Nav.Link href="/contact">contact</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation