import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

import { FormSubmitAPIForm } from '../Form'
import './style.css'

function ContactCTA() {
    return (
        <div className="contactCTA section-container">
            Contact us for a consultation! <br />
            <Link to="/contact"><Button>Connect</Button></Link>
        </div>

    )
}

function ContactSocialIcons() {
    return (
        <>
            {/* TODO: update hrefs with clients urls */}
            <h1 >
                <a style={{ color: "#0e404b" }} href="https://www.linkedin.com/in/lexijack/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
                <a style={{ color: "#0e404b" }} href="https://www.instagram.com/puakehaulani/" target="_blank" rel='noreferrer'><FaInstagramSquare /></a>
            </h1>
        </>
    )
}

function Contact() {
    return (
        <Container className="section-container" id="contact">
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
    )
}



export default Contact
export { ContactCTA, ContactSocialIcons }