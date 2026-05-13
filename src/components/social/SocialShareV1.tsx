import Link from "next/link";

const SocialShareV1 = () => {
    return (
        <>
            <li>
                <Link href="https://linkedin.com/in/tahir-murtaza-203131b6" target='_blank'>
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/TahirMurtaza" target='_blank'>
                    <i className="fab fa-github" />
                </Link>
            </li>
            <li>
                <Link href="mailto:tahirmurtaza5152@gmail.com">
                    <i className="fas fa-envelope" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV1;