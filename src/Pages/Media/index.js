
import { Col, Row, Image, Container } from 'react-bootstrap'
import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact, CarouselComponent } from '../../Sections'
import './style.css'

export const Media = () => {
    // TODO: Customize Client Object
    const heroObject =
    {
        image: "./images/logo.png",
        tagline: "",
    }

    const images = [
        './media/img-1.jpeg',
        './media/img-2.jpeg',
        './media/img-3.jpeg',
        './media/img-4.jpeg',
        './media/img-5.jpeg',
        './media/img-6.jpeg',
        './media/img-7.jpeg',
    ]

    const RenderMedia = (props) => {
        const renderItem = (item) => {
            console.log('itemm', JSON.stringify(item, null, 2))
            return (
                <Col className="image-container" style={{ paddingTop: 10 }} >
                    <Image src={require(`${item}`)} width={400} rounded fluid />
                </Col>
            )
        }
        const renderGallery = props?.data.map((i) => {
            console.log('i', JSON.stringify(i, null, 2))
            return renderItem(i)
        })
        return (
            <div style={{ margin: 20 }}>
                <Row lg={3} md={3} sm={1} xs={1}>
                    {renderGallery}
                </Row>
            </div>
        )
    }


    return (
        <div className="pageView">
            <Navigation />
            <Hero data={heroObject} />
            <RenderMedia data={images} />
            <Contact />
            <Footer />
        </div>
    )
}

