import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Portfolio</h1>
                        <p className="fs-17 text-muted">Explore some of our latest website projects.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
