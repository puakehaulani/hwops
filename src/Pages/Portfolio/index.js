import Container from 'react-bootstrap/Container'
import { Navigation, CardGrid, CardList } from '../../Components'
import { BannerCarousel, ContactCTA, Quotes, Footer } from '../../Sections'
import './style.css'

export const Portfolio = () => {
    // TODO: Customize Client Object
    const bannerObject =
    {
        header: "HEADER FOR PORTFOLIO",
        text: "Subheader for Portfolio",
        carousel: [
            {
                title: "title 1",
                text: "text optional here",
                image: "./images/about.jpg"
            },
            {
                title: "title 2",
                text: "text optional here",
                image: "./images/about.jpg"
            },
            {
                title: "title 3",
                text: "text optional here",
                image: "./images/about.jpg"
            }
        ],
        cta: true
    }
    // TODO: Customize Client Object
    const portfolioObject = [
        {
            title: "Title 1",
            image: "./images/about.jpg",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            linkPath: "https://www.google.com",
            gallery: true
        },
        {
            title: "Title 2",
            image: "./images/about.jpg",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            linkPath: "https://www.google.com",
            gallery: true
        },
        {
            title: "Title 3",
            image: "./images/about.jpg",
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            linkPath: "https://www.google.com",
            gallery: true
        },
        {
            title: "Title 4",
            image: "./images/about.jpg",
            text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            linkPath: "https://www.google.com",
            gallery: true
        },
        {
            title: "Title 5",
            image: "./images/about.jpg",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            linkPath: "https://www.google.com",
            gallery: true
        },

    ]
    return (
        <div className="pageView">
            <Navigation />
            <Container className="pageContent">
                <BannerCarousel data={bannerObject} />
                <div className="portfolioFolders section-container">
                    <CardGrid data={portfolioObject} />
                </div>
                <CardList data={portfolioObject} />
                <div className="text-center">
                    <ContactCTA />
                </div>
                <Quotes />
            </Container>
            <Footer />
        </div>
    )
}
