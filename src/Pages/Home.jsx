import About1 from "../Components/About/About1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroBanner1
        subtitle="<span>All-in-One ERP</span> to Power Your Business"
        title="Transform How You Work with Smart, Scalable Solutions"
        content="At Midas Software, we help businesses automate workflows, improve decision-making, and grow faster through a customizable, cloud-based ERP platform trusted across industries."
        btnname="Request a Demo"
        btnurl="/contact"
        btntwo="Learn More"
        btn2url="/about"
        cusimg="/assets/images/intro/introProfileThumb1_1.png"
        cusnumber="2,291"
        cuscontent="Happy Customers"
        rating="4.8/5"
        ratingcon="Customer Rating"
        img="/assets/images/intro/introThumb1_1.png"
      />

      <Brand1></Brand1>
      <About1
        img1="/assets/images/about/aboutThumb1_1.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="About Midas Software"
        title="Your Trusted Partner in Business Transformation"
        content="We are dedicated to transforming how businesses operate through innovative, easy-to-use ERP solutions. With deep understanding of organizational challenges, we design integrated systems that streamline operations, enhance decision-making, and boost productivity across all departments - from startups to established enterprises."
        FeatureList={[
          "14+ integrated modules for all business functions",
          "Cloud-based SaaS with 24/7 accessibility",
          "Scalable solutions that grow with your business",
          "Expert customization and integration support",
          "Top-tier security with industry compliance",
        ]}
        btnname="Explore Our Solutions"
        btnurl="/products"
      />

      <HowWork></HowWork>
      <Choose1
        subtitle="Why Choose Midas?"
        title="14+ Integrated Modules, Backed by Expert Support"
        content="Midas Software delivers a complete business transformation platform with modules spanning every department from Accounting to Manufacturing, HR to Quality Management  all powered by secure, scalable cloud infrastructure designed for sustainable growth."
        FeatureList={[
          "Accounting, Sales, CRM, HR, Payroll & Manufacturing",
          "Point of Sale, Procurement, Stock & Quality Management",
        ]}
        FeatureList2={[
          "Cloud-Based SaaS with Real-Time Analytics & Reporting",
          "Custom Integrations, User Training & 24/7 Support",
        ]}
        btnname="Explore All Modules"
        btnurl="/products"
      />

      <Feature1></Feature1>
      <Counter1></Counter1>
      <Faq1></Faq1>
      <Testimonial></Testimonial>
      <Feature2></Feature2>
      {/* <Pricing1></Pricing1> */}
      {/* <Cta1
        subtitle="Our App"
        title="Download our app and start your free trail to get started today!"
        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
        btnurl1="https://play.google.com/store"
        btnurl2="https://www.apple.com/store"
        img="/assets/images/cta/ctaThumb1_1.png"
      ></Cta1> */}
      {/* <Blog1></Blog1> */}
    </div>
  );
};

export default Home;
