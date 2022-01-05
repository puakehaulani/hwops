import React from 'react'
import Container from 'react-bootstrap/Container'

import { CardGridListItem } from '../CardGrid'

import './style.css'

function Skills() {
    const skillsObject = [
        {
            title: "basics",
            listItem: ["JavaScript", "Express", "Node", "MySQL", "MongoDB", "Git"]

        },
        {
            title: "frameworks",
            listItem: ["React", "React Native"]

        },
        {
            title: "services and tools",
            listItem: ["AWS", "Firebase", "googling"]
        }
    ]
    return (
        <Container className="section-container" id="skills">
            <h1 className="text-center">skillz to pay the billz</h1>
            <CardGridListItem data={skillsObject} />
        </Container>
    )
}

export default Skills