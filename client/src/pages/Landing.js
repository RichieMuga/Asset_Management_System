import IntroductionSection from "../components/LandingPageSmallerSections/introductionSection"
import AboutPageSection from "../components/LandingPageSmallerSections/aboutPageSection"
import TestimonialsSection from "../components/LandingPageSmallerSections/testimonialsSection"
import Message from "../components/LandingPageSmallerSections/message"
import FaqSection from "../components/LandingPageSmallerSections/faqSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import Wrapper from "../assets/css/Landing"
const Landing = () => {
    return (
        <>
            <Header />
            <IntroductionSection />
            <AboutPageSection />
            <TestimonialsSection />
            <FaqSection />
            <Message />
            <Footer />
        </>
    )
}

export default Landing