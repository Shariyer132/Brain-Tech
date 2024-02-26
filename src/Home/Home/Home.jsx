import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs.jsx/ContactUs";
import PricingPlan from "../PricingPlan/PricingPlan";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import WorkPlanning from "../WorkPlanning/WorkPlanning";

const Home = () => {
    return (
        <div>
        <Banner/>
        <AboutUs/>
        <Services/>
        <ContactUs/>
        <WorkPlanning/>
        <Projects/>
        <PricingPlan/>
        <Testimonials/>
        <Blogs/>
        </div>
    );
};

export default Home;