import Container from 'react-bootstrap/Container'
import { Navigation } from '../../Components'
import { Banner, ExpandedBlog, BlogPostList, CustomContactCTA, Footer } from '../../Sections'
import './style.css'

// TODO: Customize Client Object
const bannerObject =
{
    header: "HEADER FOR BLOG",
    text: "Subheader for BLOG",
    image: "./images/about.jpg",
    cta: false
}


// TODO: Customize Client Object
const customContactObject = {
    text: 'Like what you see? Let me build your blog!',
    button: 'Connect'
}

export const BlogPost = () => {
    return (
        <div className='pageView'>
            <Navigation />
            <Container className='pageContent'>
                <ExpandedBlog />
                <div className="text-center">
                    <CustomContactCTA data={customContactObject} />
                </div>
            </Container>
            <Footer />
        </div>

    )
}

export const BlogScroll = () => {
    return (
        <div className="pageView">
            <Navigation />
            <Container className="pageContent">
                <Banner data={bannerObject} />
                <div className="title-text">Company Blog</div>
                <div className=" section-container">
                    {/* <CardGrid data={blogObject} /> */}
                    <BlogPostList />
                </div>
                <div className="text-center">
                    <CustomContactCTA data={customContactObject} />
                </div>
            </Container>
            <Footer />
        </div>
    )
}