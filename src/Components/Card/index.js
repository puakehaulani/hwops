import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { FaChevronDown } from 'react-icons/fa'

import './style.css'

function CardComponent(props) {
    return (
        <Card style={{ borderStyle: "none", borderRadius: 0, backgroundColor: "transparent" }}>
            {props.gallery ?
                <a href={props.linkPath}>
                    <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />
                </a>
                : <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />}
            <Card.Body>
                <Card.Title as="h3" className="text-center">{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                {props.linkPath ?
                    <div className="text-center"><a href={props.linkPath}><FaChevronDown /></a></div>
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
                <a href={props.linkPath}>
                    <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />
                </a>
                : <Card.Img variant="top" src={props.image} style={{ borderRadius: 10 }} />}
            <Card.Body>
                <Card.Title as="h3" className="text-center">{props.title}</Card.Title>
                <Card.Text>
                    <ul>
                        {arr}
                    </ul>
                </Card.Text>
                {props.linkPath ?
                    <div className="text-center"><a href={props.linkPath}><FaChevronDown /></a></div>
                    : <></>}
            </Card.Body>
        </Card>
    )
}


export default CardComponent
export { CardListContent }