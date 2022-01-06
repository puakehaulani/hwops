import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function ContactPage() {

    const bannerObject = {
        header: "have your people call my people",
        text: "",
        image: "./images/about.jpg",
        cta: false
    }
    return (
        <div className="contactPage">
            <Navigation />
            <Banner data={bannerObject} />
            <div className="contentSection"><Contact /></div>
            <Footer />
        </div>
    )
}

export default ContactPage
