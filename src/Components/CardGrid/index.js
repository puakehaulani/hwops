import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CardComponent, { CardListContent } from '../Card'
import './style.css'

function CardGrid(props) {
    const colContent = props.data.map(i => (
        <Col key={i.title}>
            <CardComponent image={i.image} title={i.title} text={i.text} linkPath={i.linkPath} gallery={i.gallery} />
        </Col>)
    )

    return (
        <Container>
            <Row xs={1} sm={3}>
                {colContent}
            </Row>
        </Container>
    )
}
function CardGridListItem(props) {
    const colContent = props.data.map(i => (
        <Col key={i.title}>
            <CardListContent image={i.image} title={i.title} listItem={i.listItem} linkPath={i.linkPath} gallery={i.gallery} />
        </Col>)
    )

    return (
        <Container >
            <Row xs={1} sm={3} className="listItemRows">
                {colContent}
            </Row>
        </Container>
    )
}

export default CardGrid
export { CardGridListItem }