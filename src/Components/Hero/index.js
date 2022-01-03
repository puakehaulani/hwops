import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './style.css'

function Hero() {
    return (
        <div className="hero" id="home">
            <Container>
                <Row >
                    <div className="logoOverlay">
                        <Image src="./images/logo.png" />
                    </div>
                </Row>
                <Row>
                    <div className="tagline">Tagline</div>
                </Row>
            </Container>
        </div>
    )
}

export default Hero