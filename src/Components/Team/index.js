import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import CardGrid from '../CardGrid'
import './style.css'

function Team() {
    const teamObject = [
        {
            title: "Teammate 1",
            image: "./images/about.jpg",
            text: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick."
        },
        {
            title: "Teammate 2",
            image: "./images/about.jpg",
            text: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth."
        },
        {
            title: "Teammate 3",
            image: "./images/about.jpg",
            text: " Cliche occupy humblebrag, swag actually VHS vape normcore bespoke keffiyeh hammock trust fund paleo."
        }
    ]
    const founderContent = (
        <Row xs={1} sm={2}>
            <Col className="image-container">
                <Image src="./images/about.jpg" height={400} width={400} rounded fluid />
            </Col>
            <Col className="text-center my-auto textContainerFounder">
                <h1 className="text-center">welina kakou</h1>
                <p>I'm a full-stack web developer from O‘ahu, Hawai‘i, with a background in service and client relations. I earned a Certificate in Web Development from the University of Washington in 2021. My strengths include teamwork, listening, anticipating the needs of clients, and working in fast paced environments.
                    <br />
                    My motivation comes from my insatiable curiosity and the endorphin rush from solving a problem. I love to learn.
                    <br />
                    If I'm not coding, I'm probably outside - snowboarding, paddling outrigger canoes, or hanging out at a dog park .
                    <br />
                    I'm excited to find my technical niche. In the meantime, I plan to continue trying new things and taking on diverse projects.
                </p>
            </Col>
        </Row>
    )

    const teamContent = (
        <div>
            <Row>
                <h2 className="text-center headerTeamMembers">Our Team Members</h2>
            </Row>
            <Row>
                <CardGrid data={teamObject} />
            </Row>
        </div>
    )

    return (
        <Container className="team" id="team">
            {founderContent}

        </Container>
    )
}

export default Team