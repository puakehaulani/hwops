import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact } from '../../Sections'
import './style.css'

export const Home = () => {
    // TODO: Customize Client Object
    const heroObject =
    {
        image: "./images/logo.png",
        tagline: "",
        // cta: true
    }

    return (
        <div className="pageView">
            <Navigation />
            <Hero data={heroObject} />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

