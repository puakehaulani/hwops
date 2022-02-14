import React from 'react'
import Container from 'react-bootstrap/Container'

import CardGrid from '../CardGrid'

import './style.css'

function Services() {
    // TODO: Customize Client Object
    const servicesObject = [
        {
            title: "Service 1",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "./images/about.jpg",
        },
        {
            title: "Service 2",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "./images/about.jpg",

        },
        {
            title: "Service 3",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "./images/about.jpg",
        }
    ]
    return (
        <>
            <span className="anchor" id="services" />
            <Container className="section-container">
                {/* TODO: Customize Client Content */}
                <h1 className="text-center">Our Services</h1>
                <CardGrid data={servicesObject} />
            </Container></>
    )
}

export default Services