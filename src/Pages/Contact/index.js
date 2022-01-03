import Navigation from '../../Components/Navigation'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function ContactPage() {
    return (
        <div className="contactPage">
            <Navigation />
            <div className="contentSection"><Contact /></div>
            <Footer />
        </div>
    )
}

export default ContactPage
