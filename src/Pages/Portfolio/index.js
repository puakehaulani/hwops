import Navigation from '../../Components/Navigation'
import { BannerCarousel } from '../../Components/Banner'
import CardGrid from '../../Components/CardGrid'
import { ContactCTA } from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function Portfolio() {
    const bannerObject =
    {
        header: "HEADER",
        text: "text text text",
        carousel: [
            {
                title: "title1",
                image: "./images/about.jpg"
            },
            {
                title: "title2",
                image: "./images/about.jpg"
            },
            {
                title: "title3",
                image: "./images/about.jpg"
            },
            {
                title: "title4",
                image: "./images/about.jpg"
            },
        ],
        cta: true
    }
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
        <div className="portfolioPage">
            <Navigation />
            <BannerCarousel data={bannerObject} />
            <div className="portfolioFolders section-container"><CardGrid data={portfolioObject} /></div>
            <div className="text-center"><ContactCTA /></div>
            <Footer />
        </div>
    )
}

export default Portfolio