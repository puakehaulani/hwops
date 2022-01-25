import React from 'react'
import Container from 'react-bootstrap/Container'

import { CardGridListItem } from '../CardGrid'

import './style.css'

function Skills() {
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
            <span class="anchor" id="skills" />
            <Container className="section-container">
                <h1 className="text-center">Our Skills</h1>
                <CardGridListItem data={skillsObject} />
            </Container>
        </>
    )
}

export default Skills