import Link from "next/link";

const SocialShareV2 = () => {
    return (
        <>
            <li className='facebook'>
                <Link href="http://facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></Link>
            </li>
            <li className='twitter'>
                <Link href="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></Link>
            </li>
            <li className='pinterest'>
                <Link href="http://pinterest.com" target='_blank'> <i className="fab fa-pinterest-p"></i></Link>
            </li>
            <li className='linkedin'>
                <Link href="http://linkedin.com" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
            </li>
        </>
    );
};

export default SocialShareV2;