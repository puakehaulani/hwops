import React from 'react'
import Container from 'react-bootstrap/Container'

import { CardGridListItem } from '../../Components/CardGrid'
import './style.css'

export const Skills = () => {
    // TODO: Customize Client Object

    const skillsObject = [
        {
            title: "Skill 1",
            listItem: ["beep", "boop", "boop", "bop"],
            image: "./images/about.jpg"

        },
        {
            title: "Skill 2",
            listItem: ["beep", "boop", "bop"],
            image: "./images/about.jpg"
        },
        {
            title: "Skill 3",
            listItem: ["boop", "boop", "boop", "beep", "bop"],
            image: "./images/about.jpg"
        }
    ]
    return (
        <>
            <span className="anchor" id="skills" />
            <Container className="section-container">
                {/* TODO: Customize Client Content */}
                <h1 className="text-center">Our Skills</h1>
                <CardGridListItem data={skillsObject} />
            </Container>
        </>
    )
}

