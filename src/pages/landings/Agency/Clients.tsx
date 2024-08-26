import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/indosat.svg';
import google from 'assets/images/brands/gesits.svg';
import paypal from 'assets/images/brands/logo.svg';
import spotify from 'assets/images/brands/Trust.svg';
import pelindo from 'assets/images/brands/Pelindo.svg';

const brands = [amazon, google, paypal, spotify, pelindo];

const Clients = () => {
    return (
        <section className="section py-4 py-sm-8 bg-soft-orange position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row className="py-4">
                    <Col lg={11}>
                        <Row>
                            <Col lg={12}>
                                <Badge pill bg="" className="badge-soft-orange px-2 py-1 mb-2">
                                    Our Customers
                                </Badge>
                            </Col>
                            <Col lg={6}>
                                <h1 className="display-5 fw-semibold mb-1">We do our best to make our clients happy</h1>
                            </Col>
                            <Col lg={6} className="ps-6">
                                <p className="mt-2 text-secondary">
                                    With our best team, you can get beautiful and customized applications to enhance
                                    your business. From ERP, Marketplace, Internal System, E-Commerce, Mobile Apps, Web
                                    Apps we always ready for you
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            {(brands || []).map((brand, index) => {
                                return (
                                        <Col className="d-block d-md-none" key={index.toString()}>
                                            <img src={brand} alt="brand" height="16" className="mb-2 mb-xl-0" />
                                        </Col>
                                );
                            })}
                            {(brands || []).map((brand, index) => {
                                return (
                                        <Col className="d-none d-md-block" key={index.toString()}>
                                            <img src={brand} alt="brand" height="32" className="mb-2 mb-xl-0" />
                                        </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="divider bottom d-none d-sm-block"></div>
        </section>
    );
};

export default Clients;
