import { Navigation } from '../../Components'
import { Hero, ContactCTA, About, Services, Team, Footer } from '../../Sections'
import './style.css'

export const Home = () => {
    // TODO: Customize Client Object
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
            <About />
            <Services />
            <div className="text-center"><ContactCTA /></div>
            <Team />
            <div className="text-center"><ContactCTA /></div>
            <Footer />
        </div>
    )
}

