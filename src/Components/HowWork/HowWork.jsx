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
            ></SectionTitle>
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <img
                src="/assets/images/shape/workProcessShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step">STEP - 01</div>
                  <div className="title">Assessment</div>
                  <div className="text">
                    We begin by understanding your business needs and
                    recommending the right ERP modules tailored to your
                    workflow.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 child2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="step">STEP - 02</div>
                  <div className="title">Customize & Integrate</div>
                  <div className="text">
                    Our team configures your ERP system, integrates it with your
                    existing tools, and ensures a seamless experience.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="step">STEP - 03</div>
                  <div className="title">Onboard & Scale</div>
                  <div className="text">
                    We train your team, support your go-live, and help you scale
                    the system as your business grows.
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
