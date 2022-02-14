import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { ContactCTA } from '../Contact'
import CarouselComponent from '../Carousel'

import './style.css'

export const Banner = (props) => {
    return (
        <Container className="banner">
            <Row xs={1} sm={2}>
                <Col className="my-auto textContainerBanner">
                    <Container>
                        <h1 >{props.data.header}</h1>
                        <h2>{props.data.text}</h2>
                        {props.data.cta ? <ContactCTA /> : <></>}
                    </Container>

                </Col>
                <Col className="image-container">
                    <Image src={props.data.image} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export const BannerCarousel = (props) => {
    return (
        <Container className="banner">
            <Row xs={1} sm={2}>
                <Col className="my-auto textContainerBanner">
                    <div>
                        <h1 >{props.data.header}</h1>
                        <h4>{props.data.text}</h4>
                        {props.data.cta ? <ContactCTA /> : <></>}
                    </div>

                </Col>
                <Col>
                    <CarouselComponent data={props.data.carousel} />
                </Col>
            </Row>
        </Container>
    )
}