import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

import './style.css'

function CardComponent(props) {
    return (
        <Card style={{ borderStyle: "none", borderRadius: 0, backgroundColor: "transparent" }}>
            {props.gallery ?
                <Link to={props.linkPath}>
                    <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />
                </Link>
                : <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />}
            <Card.Body>
                <Card.Title as="h3" className="text-center">{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                {props.linkPath ?
                    <div className="text-center"><Link to={props.linkPath}><FaChevronDown /></Link></div>
                    : <></>}
            </Card.Body>
        </Card>
    )
}

function CardListContent(props) {
    console.log("props", props.listItem)
    // useEffect(() => {
    //     if (props.listItem) {
    //         console.log(props.listItem.map(i => <li>i</li>))
    //     }

    // }, [])

    const arr = props.listItem.map(i => <li>{i}</li>)
    console.log("arr", arr)

    return (
        <Card style={{ borderStyle: "none", borderRadius: 0, backgroundColor: "transparent" }}>
            {props.linkPath ?
                <Link to={props.linkPath}>
                    <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />
                </Link>
                : <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />}
            <Card.Body>
                <Card.Title as="h3" className="text-center">{props.title}</Card.Title>
                <Card.Text>
                    <ul>
                        {arr}
                    </ul>
                </Card.Text>
                {props.linkPath ?
                    <div className="text-center"><Link to={props.linkPath}><FaChevronDown /></Link></div>
                    : <></>}
            </Card.Body>
        </Card>
    )
}


export default CardComponent
export { CardListContent }