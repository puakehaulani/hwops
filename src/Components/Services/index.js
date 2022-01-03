import React from 'react'
import Container from 'react-bootstrap/Container'

import { CardGridListItem } from '../CardGrid'

import './style.css'

function Services() {
    const servicesObject = [
        {
            title: "Basic Package",
            listItem: ["Great for consultants and new small businesses", "Single page profile", "Fast delivery time", "Design Basic for branding or bring your own", "Deployment and domain assistance"],
            image: "./images/basic.png",
            linkPath: "https://docs.google.com/document/d/1aUNqP8zA4lbgG90MX-6nvt0GxfxEI63eemggm4oCe4M/edit?usp=sharing",
        },
        {
            title: "Custom Projects",
            listItem: ["Multiple pages", "Extensive style customization", "Extra features"],
            image: "./images/custom.png",
            // linkPath: "",

        },
        {
            title: "Ala Carte",
            listItem: ["Upgrade to Design Plus", "Add pages", "Add features", "Domain migration"],
            image: "./images/alacarte.png",
            linkPath: "https://docs.google.com/document/d/1U8njw7k3U9xsqunYouR2Gv-vqmhmCc59EaZOQyTXEP4/edit?usp=sharing",
        }
    ]
    return (
        <Container className="services" id="services">
            <h1 className="text-center">what can we build together?</h1>
            <CardGridListItem data={servicesObject} />
        </Container>
    )
}

export default Services