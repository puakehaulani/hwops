import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardGrid from '../CardGrid'
import { TwoColTextRight } from '../TwoCol'
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

    const founderObject = {
        image: "./images/about.jpg",
        title: "About Our Founder",
        text: "Ugh williamsburg unicorn keytar labore meggings fam hashtag ut velit. Tbh dolore live-edge, selfies YOLO shoreditch eu subway tile est kombucha. Cronut readymade irony blog. Dolore mlkshk schlitz pok pok gluten-free skateboard hella lumbersexual heirloom, cupidatat gastropub dolore disrupt adipisicing. Vape pug vegan neutra ullamco officia pariatur polaroid semiotics keytar vice affogato knausgaard. Art party laborum offal in ut dolore mlkshk literally pour-over chambray pariatur. Keffiyeh heirloom locavore, aliqua dreamcatcher in pitchfork blog hashtag umami."
    }
    const founderContent = (
        <TwoColTextRight data={founderObject} />
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
        <>
            <span class="anchor" id="team" />
            <Container className="section-container">
                {founderContent}
                {teamContent}
            </Container>
        </>
    )
}

export default Team