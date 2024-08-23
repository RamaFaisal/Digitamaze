import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Hero5 = () => {
    return (
        <section className="position-relative hero-5 pb-4 pt-7 pb-sm-0 hero-with-shapes" id="home">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>

            <Container className="position-relative zindex-1">
                <Row className="align-items-center">
                    <Col lg={12}>
                        <h1 className="hero-title fw-medium">
                            We Bring your idea into{' '}
                            <span className="highlight highlight-warning d-inline-block">reality</span>
                        </h1>

                        <p className="mt-4 fs-18 mb-3 mb-sm-6 w-75">
                            We're a top-notch digital agency, our team helps businesses craft meaningful and interactive
                            product experiences.
                        </p>

                        <a href="#portfolio" className="btn btn-secondary">
                            <FeatherIcon icon="arrow-down" className="icon-xxs me-2" />
                            View Our Work
                        </a>
                    </Col>
                </Row>
            </Container>

            <div className="align-items-end links-social d-sm-block d-none">
                <ul className="list-inline text-muted text-uppercase fw-medium">
                    <li className="list-inline-item py-2">
                        <a href="https://www.instagram.com/digitamaze.studio?igsh=MTQ2Z3J0cWVlZW1hOA==" target="_blank">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>

            <div className="shape bottom">
                <svg
                    width="1440px"
                    height="40px"
                    viewBox="0 0 1440 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="shape-b" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero5;
