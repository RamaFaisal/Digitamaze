import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import Logo from 'assets/images/logo.png';

const Footer = () => {
    return (
        <div className="pt-5 pb-3 position-relative bg-light">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="me-5">
                            <Link to="/home" className="navbar-brand me-lg-4 me-auto">
                                <img src={Logo} alt="logo" height="30" className="d-inline-block align-top" />
                            </Link>
                            <p className="mt-4">
                                Jl. Tanjungsari I No.18, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269
                            </p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold">About</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <a href="#home" className="text-muted">
                                                Home
                                            </a>
                                        </li>
                                        <li className="my-2">
                                            <a href="#services" className="text-muted">
                                                Service
                                            </a>
                                        </li>
                                        <li className="my-2">
                                            <a href="#portfolio" className="text-muted">
                                                Portfolio
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold">Get in touch</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-1">
                                            <a
                                                href="mailto:mail.dimasrizal@gmail.com"
                                                target="_blank"
                                                className="text-muted">
                                                mail.dimasrizal@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a
                                                href="https://www.instagram.com/digitamaze.studio?igsh=MTQ2Z3J0cWVlZW1hOA=="
                                                target="_blank"
                                                className="text-muted">
                                                <FeatherIcon icon="instagram" className="icon-xs" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <p className="pb-0 mb-0 fs-14 text-center text-muted">
                            {new Date().getFullYear()} © Digitamaze. All rights reserved. With love with {''}
                            <a href="/home">Digitamaze</a> &#10084;
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
