import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact } from '../../Sections'
import { Container, Accordion, Row } from 'react-bootstrap'
import './style.css'

export const FAQ = () => {


    const faqList = [
        {
            question: "I'm new, can I come to practice?",
            answer: ['Reach out to our coaches on our contact form to join an upcoming practice.'],
        },
        {
            question: 'How do I pay dues?',
            answer: ['2023 Dues comprised of two payments. One to KWAC and one to HWOPS Canoe Club.', 'HWOPS club dues electronically via Venmo - Fee structure on Membership form:', 'https://account.venmo.com/u/HuiWaa-PugetSound', 'KWAC Outrigger Membership Fee electronically via paypal - $20:', 'https://www.kenmorewac.org/kwac-membership/'],
        },
        {
            question: 'Where can I obtain the membership form?',
            answer: ['Membership form is available on Team Cowboy'],
            link: 'https://www.teamcowboy.com/.../2023%2520Club.../23138'
        },
        {
            question: 'Where do I send the completed registration form?',
            answer: ['Email forms to HWOPS.contact@gmail.com'],

        },
        {
            question: 'How do I know when the next practice is?',
            answer: ['As of May 1, Paddle Schedule is as follows:', 'Standard Practices start:', 'Tues/Thurs 5:45 PM', 'Sun 9 AM', 'Keiki Practice:', 'Mon/Wed 4:30-6PM', 'Use online team scheduler Team Hero App to reserve your seat:'],
            link: 'https://hwopscanoeclub.teamcowboy.com/'
        },
        {
            question: 'I am bringing a visitor or its my first day, what form do I need to fill out before practice?',
            answer: ['Online Release if Liability Waiver:'],
            link: 'https://form.jotform.com/230735968762166'
        },
        {
            question: 'Where does HWOPS practice?',
            answer: ['7515 NE 175th St, Kenmore, WA 98028'],
            link: 'https://www.kenmorewa.gov/.../FacilityDirectory/12/103'
        },
        {
            question: 'Is HWOPS hosting a Regatta this year?',
            answer: ['YES! On June 10, 2023 on Silver Lake, Everett'],
            link: 'https://pnworca.org/events/silverlake-sprints/'
        },
        {
            question: 'Information about HWOPS via Kenmore Water Activities Center.',
            answer: [''],
            link: 'https://www.kenmorewac.org/outrigger/'
        },
        {
            question: 'Information about canoe clubs via Pacific Northwest Outrigger Racing Canoe Association.',
            answer: [''],
            link: 'https://pnworca.org/directory/'
        },

    ]
    const RenderFAQs = (props) => {
        const renderItem = (i) => {
            const answers = i.answer.map((i) => {
                return <Row>
                    {i}
                </Row>
            })

            return (

                < Accordion.Item eventKey="0" >
                    <Accordion.Header>{i.question}</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {answers}
                        </Row>
                        <Row>
                            {i.link && <a href={i.link}>Click here</a>}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item >
            )
        }
        const rendered = props.data.map((i) => {
            return (
                <Accordion defaultActiveKey={['0']} alwaysOpen>{renderItem(i)}
                </Accordion>
            )
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

