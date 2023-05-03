import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import { FormSubmitAPIForm } from '../../Components/Form'
import './style.css'

export const ContactCTA = () => {
    return (
        // TODO: Customize Client Content
        <div className="contactCTA">
            Contact us for a consultation! <br />
            <Link to="/contact">
                {/* TODO: Customize Button variant */}
                <Button variant="dark">Connect</Button>
            </Link>
        </div>

    )
}

export const CustomContactCTA = (props) => {
    return (
        // TODO: Customize Client Content
        <div className="contactCTA">
            {props.data.text} <br />
            <Link to="/contact">
                {/* TODO: Customize Button variant */}
                <Button variant="dark">{props.data.button}</Button>
            </Link>
        </div>

    )
}


export const ContactSocialIcons = () => {
    return (
        <>
            {/* 
                TODO: add or remove client icons from react icons
                TODO: update hrefs with clients urls
                TODO: update color on icons
            */}
            <h1 >
                <a style={{ color: "#B2A2B9" }} href="https://www.linkedin.com/in/lexijack/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
                <a style={{ color: "#B2A2B9" }} href="https://www.instagram.com/puakehaulani/" target="_blank" rel='noreferrer'><FaInstagramSquare /></a>
            </h1>
        </>
    )
}

export const Contact = () => {
    // TODO: Customize Client Content
    return (
        <>
            <span className="anchor" id="contact" />
            <Container className="section-container">
                <Row xs={1} sm={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                    <Col sm={4} className="text-center">
                        <h1 >Contact Us</h1>
                        <Container style={{ paddingBottom: "30px" }}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                            {ContactSocialIcons()}
                        </Container>
                    </Col>
                    <Col sm={8} className="formCol">
                        <FormSubmitAPIForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}



