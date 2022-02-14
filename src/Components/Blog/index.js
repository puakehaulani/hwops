import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { TwoColTextRight } from '../TwoCol'

import './style.css'

export const FeaturedBlog = (props) => {
    return (
        <Row xs={1} sm={2}>
            <Col className="image-container">
                <Image src={props.data.image} height={400} width={400} rounded fluid />
            </Col>
            <Col className=" my-auto textContainerAbout">
                <h1 className="">Featured Post</h1>
                <h2 className="">{props.data.subtitle}</h2>
                <h3 className="">{props.data.date}</h3>
                {props.data.text}
            </Col>
        </Row>
    )
}

export const BlogPostList = (props) => {
    console.log("blog post list props", props)
    const posts = props.data.map(i => (
        // console.log(i)
        <Row key={i.id} className="blogListRow">
            {/* <Col md={3}>
                <Image src={i.image} height={400} width={400} rounded fluid />
            </Col> */}
            {/* <Col> */}
            <h1>{i.title}</h1>
            <div style={{ fontSize: 'small' }} >{i.date}</div>
            <p>{i.text}</p>
            {/* </Col> */}
        </Row>
    ))
    // console.log(posts)
    return posts
}

export const ExpandedBlog = () => {
    return (
        <>Expanded Blog</>
    )
}

