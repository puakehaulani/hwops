
import { Col, Row, Image, Container } from 'react-bootstrap'
import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact, CarouselComponent } from '../../Sections'
import './style.css'
import img1 from './media/img-1.jpg'
import img2 from './media/img-2.jpg'
import img3 from './media/img-3.jpg'
import img4 from './media/img-4.jpg'
import img5 from './media/img-5.jpg'
import img6 from './media/img-6.jpg'
import img7 from './media/img-7.jpg'
import img8 from './media/img-8.jpg'
import img9 from './media/img-9.jpg'

export const Media = () => {
    // TODO: Customize Client Object
    const heroObject =
    {
        image: "./images/logo.png",
        tagline: "",
    }

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9
    ]

    const RenderMedia = (props) => {
        const renderItem = (item) => {
            return (
                <Col className="image-container" style={{ paddingTop: 10 }} >
                    <Image src={item} width={400} rounded fluid />
                </Col>
            )
        }
        const renderGallery = props?.data.map((i) => {
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

