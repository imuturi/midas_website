const ServiceDetails = () => {
  return (
    <div className="service-details-section">
      <div className="service-details-container-wrapper section-padding fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div
              className="main-thumb img-custom-anim-right wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <img
                src="/assets/images/services/servicesDetailsThumb1_1.jpg"
                alt="thumb"
              />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay=".3s">
              Powerful ERP Solutions for Modern Businesses
            </h2>
            <div className="tagcloud">
              <div className="tag">
                <a href="#">ERP</a>
              </div>
              <div className="tag">
                <a href="#">Automation</a>
              </div>
              <div className="tag">
                <a href="#">Analytics</a>
              </div>
              <div className="tag">
                <a href="#">Efficiency</a>
              </div>
            </div>

            <div className="details-box1">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Service Overview
              </h3>
              <div className="row gy-3">
                <div className="col-xl-7">
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                    Midas ERP is designed to optimize your operations by
                    integrating finance, inventory, HR, and CRM into a
                    centralized platform. Whether you're a small business or an
                    enterprise, our ERP adapts to your workflow and improves
                    decision-making with real-time insights.
                  </p>
                </div>
                <div className="col-xl-5">
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                    Our solution ensures automation, accuracy, and scalability —
                    so you can reduce manual processes, eliminate redundancies,
                    and focus on growing your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="details-box2">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Benefits With Our Service
              </h3>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div
                    className="feature-wrapper wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <ul className="feature">
                      <li>Real-time performance monitoring & analytics</li>
                      <li>Modular design tailored to your needs</li>
                      <li>Improved team collaboration across departments</li>
                    </ul>
                    <ul className="feature">
                      <li>Faster decision-making through live dashboards</li>
                      <li>Reduced manual work and human error</li>
                      <li>Highly customizable with user role management</li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="progress-wrap">
                    <div className="progress-meta">
                      <div className="title">Process Automation</div>
                      <div className="percentage">95%</div>
                    </div>
                    <div className="progress-container">
                      <div
                        className="progress-bar"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-wrap mb-0">
                    <div className="progress-meta">
                      <div className="title">Business Intelligence</div>
                      <div className="percentage">90%</div>
                    </div>
                    <div className="progress-container">
                      <div
                        className="progress-bar"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="thumb-wrapper">
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <div
                      className="thumb img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <img
                        src="/assets/images/services/servicesDetailsThumb1_2.jpg"
                        alt="ERP demo"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="thumb img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <img
                        src="/assets/images/services/servicesDetailsThumb1_3.jpg"
                        alt="ERP analytics"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text1 wow fadeInUp" data-wow-delay=".3s">
                With Midas ERP, your business gains the visibility and control
                needed to succeed. From automating repetitive tasks to
                generating reports that matter, our software is built for
                performance and growth.
              </p>
              <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                Join companies already optimizing their workflows with Midas ERP
                and unlock the full potential of your operations — all from one
                intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
