import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import { ContactCTA } from '../../Components/Contact'
import About from '../../Components/About'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Footer from '../../Components/Footer'

import './style.css'

function Landing() {
    const heroObject =
    {
        image: "./images/logo.png",
        tagline: "This is the Hero Tagline",
        cta: true
    }

    return (
        <div className="pageView">
            <Navigation />
            <Hero data={heroObject} />
            <div className="text-center"><ContactCTA /></div>
            <About />
            <Services />
            <div className="text-center"><ContactCTA /></div>
            <Team />
            <div className="text-center"><ContactCTA /></div>
            <Footer />
        </div>
    )
}

export default Landing