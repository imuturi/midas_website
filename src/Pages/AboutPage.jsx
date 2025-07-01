import About4 from "../Components/About/About4";
import Choose2 from "../Components/Choose/Choose2";
import Choose4 from "../Components/Choose/Choose4";
import BreadCumb from "../Components/Common/BreadCumb";
import HowWork from "../Components/HowWork/HowWork";
import Testimonial4 from "../Components/Testimonial/Testimonial4";

const AboutPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="About Us"
      ></BreadCumb>
      <About4
        img1="/assets/images/about/aboutThumb1_1.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="About Midas Software"
        title="Transforming Business Operations Through Innovation"
        content="At Midas Software, we are dedicated to transforming the way businesses operate through innovative, easy-to-use ERP solutions. With a deep understanding of the challenges organizations face, we design and support integrated systems that streamline operations, enhance decision-making, and boost productivity across all departments."
        FeatureList={[
          "Comprehensive suite of modules for businesses of all sizes",
          "From small startups to established enterprises",
          "Expert support ensuring long-term client success",
          "Commitment to quality, innovation, and customer satisfaction",
        ]}
      />
      <Choose2
        img1="/assets/images/wcu/wcuThumb2_1.png"
        img2="/assets/images/wcu/wcuThumb2_2.png"
        img3="/assets/images/wcu/wcuThumb2_3.png"
        subtitle="Our Approach"
        title="Empowering Growth Through Integrated Solutions"
        content="From Accounting to HR and Payroll, Manufacturing to Sales, our comprehensive suite of modules empowers businesses to take control of their workflows. We pride ourselves on delivering intuitive, customizable solutions backed by expert support."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Complete Business Integration"
        boxcontent1="Seamlessly connect all departments with our comprehensive ERP modules covering every aspect of your business operations."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Trusted Partnership"
        boxcontent2="Whether you're a small startup or an established enterprise, we're your trusted partner in simplifying processes and unlocking growth opportunities."
      />
      <HowWork></HowWork>
      <Choose4></Choose4>
      <Testimonial4></Testimonial4>
    </div>
  );
};

export default AboutPage;
