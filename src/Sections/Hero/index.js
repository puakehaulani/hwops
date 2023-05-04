import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { ContactCTA } from '../Contact'
import './style.css'

export const Hero = (props) => {

    return (
        <div className="hero">
            <Container>
                <Row >
                    <div className="logoOverlay">
                        <Image src={props.data.image} fluid={true} />
                    </div>
                </Row>
                <Row>
                    <div className="tagline">{props.data.tagline}</div>
                </Row>
                {
                    props.data.cta ?
                        <ContactCTA />
                        : <></>
                }
            </Container>
        </div>
    )
}
