import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact, CarouselComponent } from '../../Sections'
import './style.css'

export const Home = () => {
    // TODO: Customize Client Object
    const heroObject =
    {
        image: "./images/logo.png",
        tagline: "",
    }


    return (
        <div className="pageView">
            <Navigation />
            <Hero data={heroObject} />
            <About />
            {/* <div className={'text-center'}><h3 style={{ backgroundColor: 'white', padding: 10, margin: 20, color: 'red' }}>(HOLD FOR SOCIAL EMBED)</h3></div> */}
            <Contact />
            <Footer />
        </div>
    )
}

