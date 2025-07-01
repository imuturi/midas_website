import { Link } from "react-router-dom";

const Cta2 = () => {
    return (
        <section className="service-section-3">
            <div className="container">
                <div className="service-thumb section-padding pb-0 img-custom-anim-left wow fadeInLeft" data-wow-delay=".3s">
                    <img src="/assets/images/services/servicesThumb1_1.jpg" alt="ERP dashboard" />
                </div>
            </div>
            <div className="service-container-wrapper style3 section-padding fix">
                <div className="shape1 fix">
                    <img src="/assets/images/shape/testimonialShape2_1.png" alt="shape" />
                </div>
                <div className="shape2 fix">
                    <img src="/assets/images/shape/testimonialShape2_2.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="service-wrapper style3">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Ready to Streamline Your Business with Midas ERP?
                        </h2>
                        <p className="text wow fadeInUp" data-wow-delay=".5s">
                            From accounting to inventory, HR to CRM — Midas ERP brings all your business processes under one roof.
                            Boost productivity, improve decision-making, and scale effortlessly with our customizable ERP solution.
                        </p>

                        <Link to="/contact">
                            <span className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                Get Started Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_199_944)">
                                        <path
                                            d="M11.6123 3.61183L10.8996 4.32455L14.0711 7.49604H0.000488281V8.50399H14.0711L10.8996 11.6754L11.6123 12.3882L16.0005 7.99998L11.6123 3.61183Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_199_944">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta2;
