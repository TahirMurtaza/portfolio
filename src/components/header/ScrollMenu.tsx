import { Link } from 'react-scroll';

const ScrollMenu = ({ closeMenu }) => {
    return (
        <>
            <li>
                <Link className="smooth-menu" to="services" offset={-50} onClick={closeMenu}>Services</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="portfolio" offset={-50} onClick={closeMenu}>Portfolio</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="resume" offset={-50} onClick={closeMenu}>Resume</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="testimonials" offset={-50} onClick={closeMenu}>Testimonials</Link>
            </li>
<li>
                <Link className="smooth-menu" to="contact" offset={-50} onClick={closeMenu}>contact</Link>
            </li>
        </>
    );
};

export default ScrollMenu;