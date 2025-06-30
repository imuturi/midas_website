import About3 from "../Components/About/About3";
import Blog1 from "../Components/Blog/Blog1";
import Brand3 from "../Components/Brand/Brand3";
import Counter1 from "../Components/Counter/Counter1";
import Feature4 from "../Components/Feature/Feature4";
import Feature5 from "../Components/Feature/Feature5";
import Feature6 from "../Components/Feature/Feature6";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import HowWork3 from "../Components/HowWork/HowWork3";
import Pricing3 from "../Components/Pricing/Pricing3";
import Testimonial3 from "../Components/Testimonial/Testimonial3";

const Home3 = () => {
  return (
    <div>
      <HeroBanner3
        bgimg="/assets/images/hero/hero-bg.jpg"
        subtitle="Powering Business Efficiency"
        title="Integrated ERP to <span>Transform Your Workflow</span>"
        content="From Accounting to HR, Manufacturing to Sales — Midas Software delivers cloud-based, intuitive ERP solutions to streamline operations and drive growth."
        btnname="Get Started Now"
        btnurl="/contact"
        btnname2="Explore Features"
        btnurl2="/about"
        img1="/assets/images/hero/01.png"
        img2="/assets/images/hero/mobile.png"
      ></HeroBanner3>
      <Feature4
        img="/assets/images/about/01.png"
        subtitle="Our Solutions"
        title="All-in-One Cloud ERP for Modern Businesses"
        content="Our ERP suite includes everything you need to manage your business—from finances and HR to inventory and manufacturing. Designed to scale, integrate, and simplify."
        FeatureList={[
          "<b>Modular Design:</b> <span>Choose the tools you need</span>",
          "<b>Cloud-Based Access:</b> <span>Anytime, anywhere</span>",
          "<b>Custom Integration:</b> <span>Works with your current systems</span>",
          "<b>Expert Support:</b> <span>With you every step of the way</span>",
        ]}
        btnname="Learn More"
        btnurl="/about"
      ></Feature4>
      <Feature5></Feature5>
      <Feature6></Feature6>
      <HowWork3></HowWork3>
      {/* <Pricing3></Pricing3> */}
      <Counter1></Counter1>
      <About3
        img1="/assets/images/what-do.png"
        subtitle="What We Do"
        title="We offer a one-stop shop for all IT solutions."
        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        boxtitle1="Highly Expert Team Members"
        boxcontent1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        boxtitle2="Highly Expert Team Members"
        boxcontent2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
      ></About3>
      <Brand3></Brand3>
      <Testimonial3></Testimonial3>
      {/* <Blog1></Blog1> */}
    </div>
  );
};

export default Home3;
