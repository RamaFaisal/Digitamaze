import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <a href="/home" className="nav-link btn me-2 shadow-none">
                    Home
                </a>
            </Nav.Item>

            <Nav.Item as="li">
                <a href="#services" className="nav-link btn me-2 shadow-none">
                    Service
                </a>
            </Nav.Item>

            <Nav.Item as="li">
                <a href="#portfolio" className="nav-link btn me-2 shadow-none">
                    Portfolio
                </a>
            </Nav.Item>

            <Nav.Item as="li">
                <a href="/blog" className="nav-link btn me-2 shadow-none">
                    Blog
                </a>
            </Nav.Item>

            <Nav.Item as="li">
                <a href="mailto:mail.dimasrizal@gmail.com" target="_blank" className="nav-link btn me-2 shadow-none">
                    Email
                </a>
            </Nav.Item>

            <Nav.Item as="li">
                <a
                    href="https://www.upwork.com/fl/~01e44c82ae41443475?mp_source=share"
                    target="_blank"
                    className="nav-link btn me-2 shadow-none">
                    Upwork
                </a>
            </Nav.Item>

            <Nav.Item as="li">
                <a href="http://wa.me/+6281327272428" target="_blank" className="nav-link btn me-2 shadow-none">
                    Whatsapp
                </a>
            </Nav.Item>
            {/* {showDownload && (
                <>
                    {loggedInUser ? (
                        <Nav.Item as="li">
                            <NavLink to="/auth/logout" className="nav-link btn me-2 shadow-none">
                                Logout
                            </NavLink>
                        </Nav.Item>
                    ) : (
                        <Nav.Item as="li">
                            <NavLink to="/auth/login" className="nav-link btn me-2 shadow-none">
                                Upwork
                            </NavLink>
                        </Nav.Item>
                    )}
                </>
            )} */}
        </Nav>
    );
};

export default Menu;
