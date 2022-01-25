import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function ContactPage() {

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

export default ContactPage
