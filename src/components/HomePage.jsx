import FAQ from "./FAQ";
import Hero from "./Hero";
import Jumbotron from "./Jumbotron";
import Service from "./Service";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

const HomePage = () => {
    return (
        <>
        <Hero />
        <Service />
        <WhyUs />
        <Testimonial />
        <Jumbotron />
        <FAQ />
        </>
    )
}

export default HomePage;