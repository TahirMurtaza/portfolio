import { Link } from 'react-scroll';
import NextLink from 'next/link';

const ScrollMenu = ({ closeMenu }) => {
    return (
        <>
            <li>
                <Link className="smooth-menu" to="services" offset={-50} onClick={closeMenu}>Services</Link>
            </li>
            <li>
                <NextLink href="/case-studies" onClick={closeMenu}>Case Studies</NextLink>
            </li>
            <li>
                <Link className="smooth-menu" to="resume" offset={-50} onClick={closeMenu}>Resume</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="testimonials" offset={-50} onClick={closeMenu}>Testimonials</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="contact" offset={-50} onClick={closeMenu}>Contact</Link>
            </li>
        </>
    );
};

export default ScrollMenu;
