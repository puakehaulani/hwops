import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

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

export const CardList = (props) => {
    console.log('card list props', props)
    const list = props.map((i) => {
        console.log('card list map i = ', i)
        return CardListItem(i)
    })
    return list
}

export const CardGridItem = (props) => {
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

<<<<<<< Updated upstream
export default CardGrid
export { CardGridListItem }
=======
export const CardListItem = (item) => {

    return (
        <Container style={{ backgroundColor: 'linen', marginTop: 20, padding: 20 }}>
            <Row xs={1} sm={2}>
                <Col className="image-container">
                    <Image src={item.img} rounded fluid />
                </Col>
                <Col className=" my-auto textContainerAbout">
                    {item.link ? <a href={item.link}>
                        <h3>{item.title.toUpperCase()}</h3></a> : <h3>{item.title.toUpperCase()}</h3>}
                    {item.description}
                </Col>
            </Row>
        </Container>
    )
}

>>>>>>> Stashed changes
