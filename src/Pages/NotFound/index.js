import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import { Navigation } from "../../Components/Navigation"
// TODO: update linkpath if needed
import img from '../../assets/images/404.jpg'
import './style.css'

export const NotFound = () => {
    return (
        <div className="pageView">
            <Navigation />
            <Container fluid className="notFound">
                <Row lg={2} className="imageCenter">
                    <Col className="text-center">
                        <Image src={img} fluid />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Link to="/">
                            {/* TODO: Update variant to match client branding */}
                            <Button variant="dark">Return</Button>
                        </Link>
                    </Col>
                </Row >
            </Container>
        </div>
    )
}
