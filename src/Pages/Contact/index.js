import { Navigation } from '../../Components'
import { Banner, Contact, Footer } from '../../Sections'
import './style.css'

export const ContactPage = () => {
    // TODO: Customize Client Object
    const bannerObject = {
        header: "HEADER FOR CONTACT",
        text: "Subheader for Contact",
        image: "./images/about.jpg",
        cta: false
    }
    return (
        <div className="pageView">
            <Navigation />
            <Banner data={bannerObject} />
            <Contact />
            <Footer />
        </div>
    )
}
