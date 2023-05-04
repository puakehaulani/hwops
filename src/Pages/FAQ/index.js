import { Navigation } from '../../Components'
import { Hero, About, Services, Team, Footer, Contact } from '../../Sections'
import { Container, Accordion, Row } from 'react-bootstrap'
import './style.css'

export const FAQ = () => {


    const faqList = [
        {
            question: "I'm new, can I come to practice?",
            answer: [{ 'description': 'Reach out to our coaches on our contact form to join an upcoming practice', 'link': '/#contact', 'linktext': 'Click here' }],

        },
        {
            question: 'How do I pay dues?',
            answer: [{ 'description': '2023 Dues comprised of two payments: one to KWAC and one to HWOPS Canoe Club' }, { 'description': 'See fee structure on Membership form for payment amounts' }, { 'description': 'HWOPS club dues electronically via Venmo', 'link': 'https://account.venmo.com/u/HuiWaa-PugetSound', 'linktext': 'Click here' }, { 'description': 'KWAC Outrigger Membership Fee electronically via paypal', 'link': 'https://www.kenmorewac.org/kwac-membership/', 'linktext': 'Click here' }]

        },
        {
            question: 'Where can I obtain the membership form?',
            answer: [{ 'description': 'Membership form on TeamCowboy', 'link': 'https://www.teamcowboy.com/.../2023%2520Club.../23138', 'linktext': 'Click here' },],
        },
        {
            question: 'Where do I send the completed registration form?',
            answer: [{ 'description': 'Email forms to ', 'link': 'mailto:HWOPS.contact@gmail.com', 'linktext': 'HWOPS.contact@gmail.com' }],

        },
        {
            question: 'How do I know when the next practice is?',
            answer: [{ 'description': 'As of May 1, Paddle Schedule is as follows:' }, { 'description': 'Standard Practices start:' }, { 'description': 'Tues/Thurs 5:45 PM' }, { 'description': 'Sun 9 AM' }, { 'description': 'Keiki Practice:' }, { 'description': 'Mon/Wed 4:30-6PM' }, { 'description': 'Reserve your seat with our online team scheduler', 'link': 'https://hwopscanoeclub.teamcowboy.com/', 'linktext': 'Team Hero App' }],
        },
        {
            question: 'I am bringing a visitor or its my first day, what form do I need to fill out before practice?',
            answer: [{ 'link': 'https://form.jotform.com/230735968762166', 'linktext': 'Online Release of Liability Waiver' }],
        },
        {
            question: 'Where does HWOPS practice?',
            answer: [{ 'description': "ƛ̕ax̌ʷadis (Tl' awh- ah - dees) Park", 'link': 'https://goo.gl/maps/oN77V5pSbjxrpd3x5', 'linktext': '7515 NE 175th St, Kenmore, WA 98028' }],
        },
        {
            question: 'Is HWOPS hosting a Regatta this year?',
            answer: [{ 'description': 'YES! On June 10, 2023 on Silver Lake, Everett' }, { 'linktext': 'Click for more info', 'link': 'https://pnworca.org/events/silverlake-sprints/' }, { 'linktext': 'Silver Lake location', 'link': 'https://goo.gl/maps/VUyyA78CtHPXgj439' }],
        },
        {
            question: 'Information about HWOPS via Kenmore Water Activities Center.',
            answer: [{ 'linktext': 'Click here', 'link': 'https://www.kenmorewac.org/outrigger/' }],
        },
        {
            question: 'Information about Canoe Clubs via Pacific Northwest Outrigger Racing Canoe Association.',
            answer: [{ 'linktext': 'Click here', 'link': 'https://pnworca.org/directory/' }],
        },

    ]
    const RenderFAQs = (props) => {
        const renderItem = (i) => {
            const formattedAnswers = i?.answer?.map((i) => {
                const formattedLink = (i) => {
                    return (
                        <a href={i.link} target='_blank'>
                            {i.linktext}
                        </a>
                    )
                }
                return <Row>
                    {i.description && i.description}
                    {i.link && formattedLink(i)}
                </Row>
            })


            return (

                < Accordion.Item eventKey="0" >
                    <Accordion.Header>{i.question}</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {formattedAnswers}
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

