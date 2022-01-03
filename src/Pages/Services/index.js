import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import Services from '../../Components/Services'
import { ContactCTA } from '../../Components/Contact'
import Quotes from '../../Components/Quotes'
import Footer from '../../Components/Footer'

import './style.css'

function ServicesPage() {
    const bannerObject =
    {
        header: "BannerHeader",
        image: "./images/about.jpg",
    }

    return (
        <div className="servicesPage">
            <Navigation />
            <Banner data={bannerObject} />
            <Services />
            <div className="text-center"><ContactCTA /></div>
            <Quotes />
            <Footer />
        </div>
    )
}

export default ServicesPage