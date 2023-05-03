import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { TwoColTextRight } from '../../Components/TwoCol'
import './style.css'

// TODO: Customize Client Object
const aboutObject = {
    image: "./images/about.jpg",
    title: "Aloha!",
    text: "We are a non-profit Organization dedicated to the perpatuation of Hawaiian Culture through Outrigger Canoe Paddling. Established in 1996 Hui Wa'a O Puget Sound members consists of paddlers of all ages , and level's. We continue to participate in races throughout the mainland US, HI and Polynesia."
}

export const About = () => {
    return (
        <>
            <span className="anchor" id="about" />
            <Container className="section-container">
                <TwoColTextRight data={aboutObject} />
            </Container>
        </>
    )
}
