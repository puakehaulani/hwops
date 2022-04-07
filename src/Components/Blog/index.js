import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { TwoColTextRight } from '../TwoCol'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

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
    const [postsRaw, setPostsRaw] = useState()
    const [loading, setLoading] = useState(true)
    let posts = null

    useEffect(() => {
        console.log("posts raw response", postsRaw)
    }, [postsRaw])

    useEffect(() => {
        axios.get('https://www.googleapis.com/blogger/v3/blogs/3028947027384433257/posts?key=AIzaSyDIaK6M-3YSxi_ToWRM622BOXA2ErVkbZk&fields=items(id,published, title)')
            .then(res => {
                console.log(res.data.items)
                setPostsRaw(res.data.items)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))

    }, [])
    if (!loading) {
        posts = postsRaw.map(i => (
            // console.log(i)

            <Row className="blogListRow" key={i.id}>
                <Link to={{ pathname: `/blog/post/${i.id}` }} >
                    {/* <Col md={3}>
                    <Image src={i.image} height={400} width={400} rounded fluid />
                </Col> */}
                    {/* <Col> */}
                    <h1>{i.title}</h1>
                    <div style={{ fontSize: 'small' }}>{i.published}</div>
                    {/* <p>{i.content}</p> */}
                    {/* </Col> */}
                </Link>
            </Row >

        ))
    }

    return posts
}

export const ExpandedBlog = () => {
    const { postId } = useParams()
    console.log('ID IS', postId)
    return (
        <>Expanded Blog </>
    )
}

