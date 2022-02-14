import Container from 'react-bootstrap/Container'

import { Navigation } from '../../Components/Navigation'
import { Banner } from '../../Components/Banner'
import { FeaturedBlog, ExpandedBlog, BlogPostList } from '../../Components/Blog'
import CardGrid from '../../Components/CardGrid'
import { CustomContactCTA } from '../../Components/Contact'
import { Footer } from '../../Components/Footer'
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
const blogObject = [
    {
        id: 1,
        title: "Title 1",
        image: "./images/about.jpg",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "1/1/22",
        // linkPath: "https://www.google.com",
        // gallery: true
    },
    {
        id: 2,
        title: "Title 2",
        image: "./images/about.jpg",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        date: "1/1/22",
        // linkPath: "https://www.google.com",
        // gallery: true
    },
    {
        id: 3,
        title: "Title 3",
        image: "./images/about.jpg",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        date: "1/1/22",
        // linkPath: "https://www.google.com",
        // gallery: true
    },
    {
        id: 4,
        title: "Title 4",
        image: "./images/about.jpg",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: "1/1/22",
        // linkPath: "https://www.google.com",
        // gallery: true
    },
    {
        id: 5,
        title: "Title 5",
        image: "./images/about.jpg",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        date: "1/1/22",
        // linkPath: "https://www.google.com",
        // gallery: true
    },

]
// TODO: Customize Client Object
const featuredPostObject = {
    title: 'Featured Post',
    image: './images/about.jpg',
    subtitle: 'post title',
    date: 'date here',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    linkPath: 'https://www.google.com',

}
// TODO: Customize Client Object
const customContactObject = {
    text: 'Like what you see? Let me build your blog!',
    button: 'Connect'
}

export const BlogHub = () => {
    return (
        <div className="pageView">
            <Navigation />
            <Container className="pageContent">
                <Banner data={bannerObject} />
                <div className="title-text">Company Blog</div>
                <FeaturedBlog data={featuredPostObject} />
                <div className=" section-container">
                    <CardGrid data={blogObject} />
                </div>
                <div className="text-center">
                    <CustomContactCTA data={customContactObject} />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export const BlogPost = () => {
    return <ExpandedBlog />
}

export const BlogScroll = () => {
    return (
        <div className="pageView">
            <Navigation />
            <Container className="pageContent">
                <Banner data={bannerObject} />
                <div className="title-text">Company Blog</div>
                <FeaturedBlog data={featuredPostObject} />
                <div className=" section-container">
                    {/* <CardGrid data={blogObject} /> */}
                    <BlogPostList data={blogObject} />
                </div>
                <div className="text-center">
                    <CustomContactCTA data={customContactObject} />
                </div>
            </Container>
            <Footer />
        </div>
    )
}