import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import DOMPurify from 'dompurify'
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
                    <div style={{ fontSize: 'small' }}>{moment(i.published).format('MMMM Do YYYY')}</div>
                    {/* <p>{i.content}</p> */}
                    {/* </Col> */}
                </Link>
            </Row >

        ))
    }

    return posts
}

export const ExpandedBlog = () => {
    const [loading, setLoading] = useState(true)
    const [postData, setPostData] = useState()
    const { postId } = useParams()
    let post = null
    console.log('ID IS', postId)

    useEffect(() => {
        axios.get(`https://www.googleapis.com/blogger/v3/blogs/3028947027384433257/posts/${postId}?key=AIzaSyDIaK6M-3YSxi_ToWRM622BOXA2ErVkbZk&fields=published, title, content`)
            .then(res => {
                console.log(res.data)
                setPostData(res.data)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))

    }, [])

    if (!loading) {
        const clean = DOMPurify.sanitize(postData.content)
        const postDate = moment(postData.published).format('MMMM Do YYYY')
        /**
         * TODO: edit published to be readable
         * TODO: style title and container
         * TODO: figure out how to adjust image size inside html (look up string methods)
         * replace, with global flag? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#replacing_a_fahrenheit_degree_with_its_celsius_equivalent
         */
        post =
            <>
                {postData.title}
                {postDate}
                <div dangerouslySetInnerHTML={{ __html: clean }} style={{ maxWidth: 200, backgroundColor: 'pink' }}></div>
            </>
    }
    return post
}

