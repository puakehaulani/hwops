import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export function TwoColTextRight(props) {
    console.log("twocoltextright ", props)
    return (
        <Row xs={1} sm={2}>
            <Col className="image-container">
                <Image src={props.data.image} height={400} width={400} rounded fluid />
            </Col>
            <Col className="text-center my-auto textContainerAbout">
                <h1 className="text-center">{props.data.title}</h1>
                {props.data.text}
            </Col>
        </Row>
    )
}

export function TwoColTextLeft(props) {
    console.log("twocoltextleft ", props)
    return (
        <Row xs={1} sm={2}>
            <Col className="text-center my-auto textContainerAbout">
                <h1 className="text-center">{props.data.title}</h1>
                {props.data.text}
            </Col>
            <Col className="image-container">
                <Image src={props.data.image} height={400} width={400} rounded fluid />
            </Col>
        </Row>
    )
}