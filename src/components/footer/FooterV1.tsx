import Link from 'next/link';

const FooterV1 = () => {
    return (
        <>
            <footer className="default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <Link href="/" className="footer-logot" style={{ fontWeight: 800, fontSize: '2rem', letterSpacing: '2px', color: 'inherit', textDecoration: 'none' }}>TM</Link>
                                <p>Copyright &copy; {(new Date().getFullYear())} Tahir Murtaza. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
