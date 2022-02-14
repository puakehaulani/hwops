import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './style.css'

function Navigation() {
    /*
        Transparent to Opaque Nav Background Transition on scroll
     */
    const [transparentBg, setTransparentBg] = useState(true)
    useEffect(() => {
        window.onscroll = () => {
            // TODO: update offset below to match client page if required
            if (window.pageYOffset > 350) {
                setTransparentBg(false)
            } else {
                setTransparentBg(true)
            }
        }
    }, []);

    return (
        <Navbar
            collapseOnSelect={true}
            className={` ${transparentBg ? "navBackgroundTransparent" : "navBackgroundColor"}`}
            variant="light"
            expand="md"
            sticky="top"
        >
            <Navbar.Brand href="/">
                {transparentBg ?
                    <></>
                    :
                    <Image src="../images/logo.png" height={50} />
                }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    {/* TODO: Customize Client Links */}
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#services">Services</Nav.Link>
                    <Nav.Link href="/#team">Team</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation