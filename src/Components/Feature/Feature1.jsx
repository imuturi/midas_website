import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle
              SubTitle="Why Choose Midas ERP"
              Title="Trusted by Startups, SMEs & Enterprises"
            ></SectionTitle>
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_1.svg"
                    title="Modular & Scalable"
                    content="Choose only the ERP modules you need, and scale seamlessly as your business grows."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_2.svg"
                    title="Cloud-Based Access"
                    content="Access your ERP securely from anywhere — no infrastructure required."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_3.svg"
                    title="Custom Integrations"
                    content="Easily integrate with your existing tools and platforms for a unified experience."
                  ></FeatureCard>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <img
                      // src="/assets/images/wcu/wcuThumb1_1.png"
                      alt=""
                    />
                  </div>
                  <div className="shape">
                    <img
                      src="/assets/images/shape/wcuThumbShape1_1.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_4.svg"
                    title="24/7 Expert Support"
                    content="Our dedicated support team ensures smooth operations and rapid resolution of issues."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_5.svg"
                    title="Real-Time Analytics"
                    content="Monitor performance, track KPIs, and make informed decisions with live dashboards."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_6.svg"
                    title="Data Security & Compliance"
                    content="Your data is protected with enterprise-grade security and global compliance standards."
                  ></FeatureCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
