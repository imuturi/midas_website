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
              Title="Trusted by 1,500+ Businesses Worldwide"
            ></SectionTitle>
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_1.svg"
                    title="14+ Integrated Modules"
                    content="From Accounting to Manufacturing, choose only what you need and expand as you grow."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_2.svg"
                    title="Cloud-Based SaaS Platform"
                    content="Access your ERP securely from anywhere with automatic updates and zero maintenance."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_3.svg"
                    title="Seamless Integrations"
                    content="Connect with existing systems effortlessly for a unified, streamlined workflow."
                  ></FeatureCard>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <img src="/assets/images/wcu/wcuThumb1_1.png" alt="thumb" />
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
                    title="Expert Support & Training"
                    content="Comprehensive onboarding, user training, and 24/7 support to ensure your success."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_5.svg"
                    title="Real-Time Analytics"
                    content="Make data-driven decisions with live dashboards, automated reporting, and trend forecasting."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_6.svg"
                    title="Enterprise-Grade Security"
                    content="Industry-compliant data protection with automated backups and top-tier security measures."
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
