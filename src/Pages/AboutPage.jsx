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
        subtitle="About Midas ERP"
        title="Powerful ERP, Seamless Automation & Real-Time Insights"
        content="Midas ERP simplifies your operations by integrating core business functions — from finance and inventory to HR and CRM — into one intelligent platform. Get real-time visibility, automate workflows, and make data-driven decisions with ease."
        FeatureList={[
          "Modular ERP tailored to your business needs",
          "Real-time dashboards and custom reports",
          "Trusted by businesses across multiple industries",
        ]}
        // btnname="Discover More"
        // btnurl="/about"
      ></About4>
      <Choose2
        img1="/assets/images/wcu/wcuThumb2_1.png"
        img2="/assets/images/wcu/wcuThumb2_2.png"
        img3="/assets/images/wcu/wcuThumb2_3.png"
        subtitle="Customization & Insights"
        title="Empower Your Team with Smart ERP Collaboration"
        content="Midas ERP enables your teams to collaborate across departments, streamline operations, and gain actionable insights from real-time data — all in one centralized platform tailored to your workflow."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Seamless Team Collaboration"
        boxcontent1="Connect finance, HR, sales, and operations teams effortlessly with centralized data and task tracking."
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Flexible & Scalable Solutions"
        boxcontent2="Customize modules to fit your business processes and scale effortlessly as your company grows."
      />
      <HowWork></HowWork>
      <Choose4></Choose4>
      <Testimonial4></Testimonial4>
    </div>
  );
};

export default AboutPage;
