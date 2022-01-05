import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import Skills from '../../Components/Skills'
import Team from '../../Components/Team'
import Footer from '../../Components/Footer'

import gif from '../../assets/images/banner.gif'
import './style.css'

function Landing() {
    const bannerObject =
    {
        header: "aloha, i'm lexi",
        text: "i'm a web developer",
        image: gif,
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