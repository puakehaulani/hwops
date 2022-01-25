import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { TwoColTextRight } from '../TwoCol'
import './style.css'

// TODO: Customize Client Object
const aboutObject = {
    image: "./images/about.jpg",
    title: "About Company",
    text: "Ugh williamsburg unicorn keytar labore meggings fam hashtag ut velit. Tbh dolore live-edge, selfies YOLO shoreditch eu subway tile est kombucha. Cronut readymade irony blog. Dolore mlkshk schlitz pok pok gluten-free skateboard hella lumbersexual heirloom, cupidatat gastropub dolore disrupt adipisicing. Vape pug vegan neutra ullamco officia pariatur polaroid semiotics keytar vice affogato knausgaard. Art party laborum offal in ut dolore mlkshk literally pour-over chambray pariatur. Keffiyeh heirloom locavore, aliqua dreamcatcher in pitchfork blog hashtag umami."
}

function About() {
    return (
        <>
            <span class="anchor" id="about" />
            <Container className="section-container">
                <TwoColTextRight data={aboutObject} />
            </Container>
        </>
    )
}

export default About