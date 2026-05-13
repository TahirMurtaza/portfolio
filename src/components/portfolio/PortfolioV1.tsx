"use client"
import shape from "@/assets/img/shape/9.png"
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from "next/link";

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode;
}

// Dynamically import the IsotopeGallery component with SSR disabled
const IsotopeGallery = dynamic(() => import('../project/IsotopeGallery'), { ssr: false });

const PortfolioV1 = ({ sectionClass, hasTitle }: DataType) => {
    return (
        <>
            <div id="portfolio" className={`portfolio-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-top-left">
                    <Image src={shape} alt="Image Not Found" />
                </div>

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Portfolio</h4>
                                    <h2 className="title">My Recent Work</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 gallery-content">
                            <div className="magnific-mix-gallery gallery-masonary">
                                <IsotopeGallery />
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="load-more-info text-center mt-60 mt-xs-30">
                                        <p>
                                            Are you interested to show more portfolios? <Link href="#" scroll={false}>Load More</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV1;