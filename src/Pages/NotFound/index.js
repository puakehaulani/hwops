import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import './style.css'

function NotFound() {
    return (
        <Container fluid className="notFound">
            <Row>
                <Col className="text-center">
                    <h1>404 Page Not Found</h1>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Link to="/">
                        <Button>return</Button>
                    </Link>
                </Col>
            </Row >
        </Container>

    )
}

export default NotFound