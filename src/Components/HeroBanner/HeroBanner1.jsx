import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const HeroBanner1 = ({subtitle,title,content,btnname,btnurl,btntwo,btn2url,cusimg,cusnumber,cuscontent,rating,ratingcon,img}) => {
    return (
        <section className="intro-section">
        <div className="intro-container-wrapper style1">
            <div className="container">
                <div className="intro-wrapper style1 fix">
                    <div className="shape1"><img src="/assets/images/shape/introShape1_1.png" alt="shape" /></div>
                    <div className="shape2"><img src="/assets/images/shape/introShape1_2.png" alt="shape" /></div>
                    <div className="shape3 d-none d-xxl-block cir36"><img src="assets/images/shape/introShape1_3.png"
                            alt="shape" /></div>
                    <div className="shape4 d-none d-xxl-block cir36"><img src="/assets/images/shape/introShape1_4.png"
                            alt="shape" /></div>
                    <div className="shape5 d-none d-xxl-block cir36"><img src="/assets/images/shape/introShape1_5.png"
                            alt="shape" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 order-2 order-xl-1">
                                <div className="intro-content">
                                    <div className="intro-section-title">
                                        <div className="intro-subtitle">
                                            {parse(subtitle)} <img
                                                src="/assets/images/icon/fireIcon.svg" alt="icon" />
                                        </div>
                                        <h1 className="intro-title wow fadeInUp" data-wow-delay=".2s">{title}</h1>
                                        <p className="intro-desc wow fadeInUp" data-wow-delay=".4s">{content}</p>
                                    </div>
                                    <div className="btn-wrapper style1 wow fadeInUp" data-wow-delay=".6s">
                                        <Link className="theme-btn" to={btnurl}>{btnname}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_11_22)">
                                                    <path
                                                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_11_22">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </Link>
                                        <Link className="theme-btn style2 wow fadeInUp" data-wow-delay=".2s"
                                            to={btn2url}>{btntwo}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_11_27)">
                                                    <path
                                                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                        fill="#282C32" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_11_27">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="fancy-box-wrapper style1">
                                        <div className="fancy-box style1 wow fadeInUp" data-wow-delay=".2s">
                                            <div className="item">
                                                <img src={cusimg} alt="" />
                                            </div>
                                            <div className="item">
                                                <h6>{cusnumber}</h6>
                                                <p>{cuscontent}</p>
                                            </div>
                                        </div>
                                        <div className="fancy-box style5 wow fadeInUp" data-wow-delay=".4s">
                                            <h6>{rating}</h6>
                                            <div className="rating">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="13"
                                                    viewBox="0 0 77 13" fill="none">
                                                    <g clipPath="url(#clip0_20_34)">
                                                        <path
                                                            d="M12.3738 4.23335L8.62048 3.8926L7.13714 0.419814C7.02762 0.164672 6.77843 0 6.50107 0C6.22371 0 5.97442 0.164672 5.8656 0.419814L4.38226 3.8926L0.62834 4.23335C0.353159 4.25875 0.120139 4.44515 0.0340334 4.70793C-0.0515761 4.9712 0.0274862 5.25997 0.235608 5.4425L3.07282 7.93034L2.23627 11.6148C2.17506 11.8857 2.28022 12.1659 2.505 12.3284C2.62583 12.4162 2.76778 12.46 2.91023 12.46C3.03265 12.46 3.15516 12.4275 3.26458 12.362L6.50107 10.4268L9.73697 12.362C9.97436 12.5038 10.2728 12.4909 10.4971 12.3284C10.7219 12.1659 10.8271 11.8857 10.7659 11.6148L9.92932 7.93034L12.7665 5.4425C12.9746 5.25997 13.0537 4.9718 12.9681 4.70793C12.8825 4.44465 12.649 4.25825 12.3738 4.23335Z"
                                                            fill="#ECC132" />
                                                        <path
                                                            d="M28.3758 4.23335L24.6224 3.8926L23.1391 0.419814C23.0296 0.164672 22.7804 0 22.503 0C22.2257 0 21.9764 0.164672 21.8676 0.419814L20.3842 3.8926L16.6303 4.23335C16.3551 4.25875 16.1221 4.44515 16.036 4.70793C15.9504 4.9712 16.0294 5.25997 16.2376 5.4425L19.0748 7.93034L18.2382 11.6148C18.177 11.8857 18.2822 12.1659 18.507 12.3284C18.6278 12.4162 18.7697 12.46 18.9122 12.46C19.0346 12.46 19.1571 12.4275 19.2665 12.362L22.503 10.4268L25.7389 12.362C25.9763 12.5038 26.2748 12.4909 26.4991 12.3284C26.7239 12.1659 26.829 11.8857 26.7678 11.6148L25.9313 7.93034L28.7685 5.4425C28.9765 5.25997 29.0557 4.9718 28.9701 4.70793C28.8845 4.44465 28.6509 4.25825 28.3758 4.23335Z"
                                                            fill="#ECC132" />
                                                        <path
                                                            d="M44.3777 4.23335L40.6244 3.8926L39.141 0.419814C39.0315 0.164672 38.7823 0 38.505 0C38.2276 0 37.9783 0.164672 37.8695 0.419814L36.3862 3.8926L32.6322 4.23335C32.3571 4.25875 32.124 4.44515 32.0379 4.70793C31.9523 4.9712 32.0314 5.25997 32.2395 5.4425L35.0767 7.93034L34.2402 11.6148C34.179 11.8857 34.2841 12.1659 34.5089 12.3284C34.6297 12.4162 34.7717 12.46 34.9141 12.46C35.0366 12.46 35.1591 12.4275 35.2685 12.362L38.505 10.4268L41.7409 12.362C41.9783 12.5038 42.2768 12.4909 42.501 12.3284C42.7258 12.1659 42.831 11.8857 42.7698 11.6148L41.9332 7.93034L44.7704 5.4425C44.9785 5.25997 45.0576 4.9718 44.972 4.70793C44.8864 4.44465 44.6529 4.25825 44.3777 4.23335Z"
                                                            fill="#ECC132" />
                                                        <path
                                                            d="M60.3797 4.23335L56.6263 3.8926L55.143 0.419814C55.0335 0.164672 54.7843 0 54.5069 0C54.2296 0 53.9803 0.164672 53.8715 0.419814L52.3881 3.8926L48.6342 4.23335C48.359 4.25875 48.126 4.44515 48.0399 4.70793C47.9543 4.9712 48.0333 5.25997 48.2415 5.4425L51.0787 7.93034L50.2421 11.6148C50.1809 11.8857 50.2861 12.1659 50.5109 12.3284C50.6317 12.4162 50.7736 12.46 50.9161 12.46C51.0385 12.46 51.161 12.4275 51.2704 12.362L54.5069 10.4268L57.7428 12.362C57.9802 12.5038 58.2787 12.4909 58.503 12.3284C58.7278 12.1659 58.8329 11.8857 58.7717 11.6148L57.9352 7.93034L60.7724 5.4425C60.9804 5.25997 61.0596 4.9718 60.974 4.70793C60.8884 4.44465 60.6548 4.25825 60.3797 4.23335Z"
                                                            fill="#ECC132" />
                                                        <path opacity="0.3"
                                                            d="M76.3816 4.23335L72.6283 3.8926L71.145 0.419814C71.0354 0.164672 70.7862 0 70.5089 0C70.2315 0 69.9822 0.164672 69.8734 0.419814L68.3901 3.8926L64.6362 4.23335C64.361 4.25875 64.128 4.44515 64.0418 4.70793C63.9562 4.9712 64.0353 5.25997 64.2434 5.4425L67.0806 7.93034L66.2441 11.6148C66.1829 11.8857 66.288 12.1659 66.5128 12.3284C66.6336 12.4162 66.7756 12.46 66.918 12.46C67.0405 12.46 67.163 12.4275 67.2724 12.362L70.5089 10.4268L73.7448 12.362C73.9822 12.5038 74.2807 12.4909 74.505 12.3284C74.7297 12.1659 74.8349 11.8857 74.7737 11.6148L73.9371 7.93034L76.7743 5.4425C76.9824 5.25997 77.0615 4.9718 76.9759 4.70793C76.8903 4.44465 76.6568 4.25825 76.3816 4.23335Z"
                                                            fill="#565656" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_20_34">
                                                            <rect width="77.0099" height="12.46" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                {ratingcon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 order-1 order-xl-2">
                                <div className="intro-thumb">
                                    <div className="thumbShape1"><img src="/assets/images/shape/introThumbShape1_1.png"
                                            alt="thumbShape" /></div>
                                    <div className="thumbShape2"><img src="/assets/images/shape/introThumbShape1_2.png"
                                            alt="thumbShape" /></div>
                                    <img className="main-thumb img-custom-anim-right wow fadeInUp" data-wow-delay=".4s"
                                        src={img} alt="thumb" />
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

export default HeroBanner1;