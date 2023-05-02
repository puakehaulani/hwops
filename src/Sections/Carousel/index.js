import Carousel from 'react-bootstrap/Carousel'
import './style.css'

export const CarouselComponent = (props) => {
    const carouselItems = props.data.map(i => (
        < Carousel.Item key={i.title} >
            <img
                className="d-block w-100 carouselImg"
                src={i.image}
                alt={i.title}
                height={400}
                width={800}
            />
            <Carousel.Caption>
                <h3>{i.title}</h3>
                {i.text ? <p>{i.text}.</p> : <></>}
                {i.quote ? <q>{i.quote}</q> : <></>}
                <a href={i.linkPath}><h5>{i.author}</h5></a>
            </Carousel.Caption>
        </Carousel.Item >
    )
    )

    return (
        <Carousel className="carouselContainer" variant="dark">
            {carouselItems}
        </Carousel>
    )
}

