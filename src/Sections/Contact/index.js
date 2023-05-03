import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";

import { FormSubmitAPIForm } from '../../Components/Form'
import './style.css'

export const ContactCTA = () => {
    return (
        // TODO: Customize Client Content
        <div className="contactCTA">
            Come paddle with us!<br />
            <Link to="/contact">
                {/* TODO: Customize Button variant */}
                <Button variant="danger">Join</Button>
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
                <Button variant="danger">{props.data.button}</Button>
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
                <a style={{ color: "#ea3a51" }} href="https://www.facebook.com/groups/HWOPS" target="_blank" rel='noreferrer'><FaFacebookSquare /></a>

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
                        <h1 >Come Paddle With Us</h1>
                        <Container style={{ paddingBottom: "30px" }}>
                            For more information about Hui Wa'a o Puget Sound, send us a message and we will respond as soon as possible. Mahalo!<br />
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



