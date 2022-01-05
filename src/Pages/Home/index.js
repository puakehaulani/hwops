import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import Skills from '../../Components/Skills'
import Team from '../../Components/Team'
import Footer from '../../Components/Footer'

import './style.css'

function Landing() {
    const bannerObject =
    {
        header: "aloha, i'm lexi",
        text: "i like making stuff",
        image: "./images/about.jpg",
    }

    return (
        <div className="landingPage">
            <Navigation />
            <Banner data={bannerObject} />
            <Skills />
            <Team />
            <Footer />
        </div>
    )
}

export default Landing