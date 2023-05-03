import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact } from '../../Sections'
import Container from 'react-bootstrap/Container'
import './style.css'

export const FAQ = () => {
    // TODO: Customize Client Object
    const heroObject =
    {
        image: "./images/logo.png",
        tagline: "This is the Hero Tagline",
        cta: true
    }

    const faqList = [
        {
            question: 'How do I pay dues?',
            answer: '2023 Dues comprised of two payments one to KWAC and to HWOPS canoe club. First: HWOPS club dues electronically via Venmo: (Fee structure on Membership form): https://account.venmo.com/u/HuiWaa-PugetSound Second: $20 KWAC Outrigger Membership Fee via paypal:  https://www.kenmorewac.org/kwac-membership/',

        },
        {
            question: 'Where can i obtain the Membership form?',
            answer: 'Membership form on TeamCowboy',
            link: 'https://www.teamcowboy.com/.../2023%2520Club.../23138'
        },
        {
            question: 'Where do i send the completed registration form?',
            answer: 'Email to HWOPS.contact@gmail.com',

        },
        {
            question: 'How do I know when the next practice is?',
            answer: `As of May 1, Paddle Schedule is as follows:\nStandard Practices start:\nTues/Thurs 5:45 PM\nSun 9 AM\nKeiki Practice:\nMon/Wed 4:30-6PM\nUse online team scheduler Team Hero App to reserve your seat:`,
            link: 'https://hwopscanoeclub.teamcowboy.com/'
        },
        {
            question: 'I am bringing a visitor or its my first day, what form do I need to fill out before practice?',
            answer: 'Online Release if Liability Waiver:',
            link: 'https://form.jotform.com/230735968762166'
        },
        {
            question: 'Where does HWOPS practice?',
            answer: '7515 NE 175th St, Kenmore, WA 98028',
            link: 'https://www.kenmorewa.gov/.../FacilityDirectory/12/103'
        },
        {
            question: 'Is HWOPS hosting a Regatta this year?',
            answer: 'YES! On June 10, 2023 on Silver Lake, Everett',
            link: 'https://pnworca.org/events/silverlake-sprints/'
        },
        {
            question: 'Information about HWOPS via Kenmore Water Activities Center.',
            answer: '',
            link: 'https://www.kenmorewac.org/outrigger/'
        },
        {
            question: 'Information about canoe clubs via Pacific Northwest Outrigger Racing Canoe Association.',
            answer: '',
            link: 'https://pnworca.org/directory/'
        },

    ]

    const RenderFAQs = (props) => {
        const renderItem = (i) => {
            return (
                <Container>
                    <h3>{i.question}</h3>
                    {i.answer}
                    {i.link && <a href={i.link}>Click here</a>}
                </Container>
            )
        }
        const rendered = props.data.map((i) => {
            return renderItem(i)
        })
        return rendered
    }

    return (
        <div className="pageView">
            <Navigation />
            {/* <Hero data={heroObject} /> */}
            <Container>
                <h1>FAQs</h1>
                <RenderFAQs data={faqList} />
            </Container>
            <Contact />
            <Footer />
        </div>
    )
}

