import Container from 'react-bootstrap/Container'

import CarouselComponent from "../Carousel";
import './style.css'

function Quotes() {
    const quoteObject = [
        {
            image: "./images/about.jpg",
            linkPath: "/portfolio",
            quote: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick.",
            author: "Author Name 1"
        },
        {
            image: "./images/about.jpg",
            quote: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth.",
            author: "Author Name 2"
        },
        {
            image: "./images/about.jpg",
            quote: " Cliche occupy humblebrag, swag actually VHS vape normcore bespoke keffiyeh hammock trust fund paleo.",
            linkPath: "/portfolio",
            author: "Author Name 3"
        }
    ]
    return (
        <Container className="section-container" id="quotes">
            <div className="text-center">
                <h1>What People Are Saying</h1>
            </div>
            <CarouselComponent data={quoteObject} />
        </Container>
    )
}

export default Quotes