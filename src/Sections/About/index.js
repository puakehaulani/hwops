import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { TwoColTextRight, TwoColTextLeft } from '../../Components/TwoCol'
import './style.css'

// TODO: Customize Client Object
const aboutObject = {
    image: "./images/about.jpg",
    title: "Aloha!",
    text:
        [
            'We are dedicated to perpetuating native Hawaiian culture in the Pacific IconNorthWest. We are a family-oriented outrigger canoe club involving children and adults, not only for Hawaiians, but Hawaiians at heart.',
            'We belong to the Pacific Northwest Outrigger Racing Canoe Association (PNW-ORCA), an umbrella organization that oversees racing activities with rules governing competition and standards of equipmnent safety for the Washington and Oregon outrigger canoe clubs.',

        ]
}

const scheduleObject = {
    image: "./images/schedule.png",
    title: "Paddling Schedule",
    text:
        [

            'As of May 1, Paddle Schedule is as follows:',
            'Standard Practices:',
            'Tues/Thurs 5:45 PM',
            'Sun 9:00 AM',
            'Keiki Practice:',
            'Mon/Wed 4:30-6:00PM'
        ]
}

export const About = () => {
    return (
        <>
            <span className="anchor" id="about" />
            <Container className="section-container">
                <TwoColTextRight data={aboutObject} />
                <TwoColTextLeft data={scheduleObject} />
            </Container>
        </>
    )
}
