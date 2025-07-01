import SectionTitle from "../Common/SectionTitle";
const HowWork = () => {
  return (
    <section className="work-process-section section-padding fix">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto">
            <SectionTitle
              SubTitle="How Midas ERP Works"
              Title="Fast Setup. Full Control. Real Results."
            />
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <img
                src="/assets/images/shape/workProcessShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="row gy-4">
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step">STEP - 01</div>
                  <div className="title">Business Discovery</div>
                  <div className="text">
                    We assess your current processes, identify operational gaps,
                    and determine the right modules from Accounting to
                    Manufacturing that align with your business goals.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 child2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="step">STEP - 02</div>
                  <div className="title">Customization & Integration</div>
                  <div className="text">
                    We tailor the cloud-based ERP system to your exact needs and
                    ensure seamless integration with existing tools and zero
                    disruption to daily operations.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="step">STEP - 03</div>
                  <div className="title">Launch & Ongoing Support</div>
                  <div className="text">
                    Go live with comprehensive training and 24/7 support. Our
                    team ensures you maximize ROI and scale efficiently as your
                    business grows.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWork;
