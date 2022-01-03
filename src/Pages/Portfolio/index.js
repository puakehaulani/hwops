import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import CardGrid from '../../Components/CardGrid'
import { ContactCTA } from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function Portfolio() {
    const bannerObject =
    {
        header: "HEADER",
        image: "./images/about.jpg",
    }
    const portfolioObject = [
        {
            title: "Portfolio 1",
            image: "./images/about.jpg",
            text: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick."
        },
        {
            title: "Portfolio 2",
            image: "./images/about.jpg",
            text: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth."
        },
        {
            title: "Portfolio 3",
            image: "./images/about.jpg",
            text: " Cliche occupy humblebrag, swag actually VHS vape normcore bespoke keffiyeh hammock trust fund paleo."
        },
        {
            title: "Portfolio 4",
            image: "./images/about.jpg",
            text: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick."
        },
        {
            title: "Portfolio 5",
            image: "./images/about.jpg",
            text: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth."
        },
        {
            title: "Portfolio 6",
            image: "./images/about.jpg",
            text: " Cliche occupy humblebrag, swag actually VHS vape normcore bespoke keffiyeh hammock trust fund paleo."
        },
        {
            title: "Portfolio 7",
            image: "./images/about.jpg",
            text: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick."
        },
        {
            title: "Portfolio 8",
            image: "./images/about.jpg",
            text: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth."
        }
    ]
    return (
        <div className="portfolioPage">
            <Navigation />
            <Banner data={bannerObject} />
            <div className="portfolioFolders"><CardGrid data={portfolioObject} /></div>
            <div className="text-center"><ContactCTA /></div>
            <Footer />
        </div>
    )
}

export default Portfolio