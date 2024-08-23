import { Container } from 'react-bootstrap';

// component
import NavbarGrid from 'components/navbars/NavbarGrid';
import BackToTop from 'components/BackToTop';
import Footer from 'pages/landings/Agency/Footer';

import Hero from './Hero';
import Gallery from './Gallery';

// dummy data
import { galleryItems } from './data';

const PortfolioGrid = () => {
    return (
        <>
            {/* header */}
            <div>
                <NavbarGrid navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero />
            </div>

            {/* gallery */}
            <section className="overflow-hidden py-5 py-md-6 py-lg-7">
                <Container>
                    <Gallery galleryItems={galleryItems} />
                </Container>
            </section>

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default PortfolioGrid;
