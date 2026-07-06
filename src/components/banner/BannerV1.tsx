"use client";
import SocialShareV1 from '../social/SocialShareV1';
import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import hand from "@/assets/img/icon/hand.png";

const BannerV1 = () => {

    const textLines = [
        "<b>Full Stack AI Engineer</b>",
        "<b>LLM Prompt Engineer</b>",
        "<b>Voice AI Specialist</b>"
    ]

    return (
        <>
            <div className="banner-style-one-area bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="banner-style-one-items">
                                <div className="info">
                                    <h1>Hey <Image src={hand} alt="Icon" /> {`I’m Tahir`} </h1>
                                    <h2>
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper">
                                                    <ReactTyped
                                                        strings={textLines} typeSpeed={35} backSpeed={35} backDelay={2000} loop>
                                                    </ReactTyped>
                                                </span>
                                            </span>
                                        </span>
                                    </h2>
                                    <p>
                                        {`Full Stack AI Engineer with a strong track record of delivering AI-powered products that streamline operations and improve efficiency. Experienced in building intelligent automation solutions for healthcare, recruitment, and business operations.`}
                                    </p>
                                    <div className="flex-social mt-40">
                                        <div className="button">
                                            <a className="btn-style-regular" href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}><span>Let&apos;s Talk</span> <i className="fas fa-arrow-right" /></a>
                                        </div>
                                        <ul className="social-info">
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <Image src="/assets/img/illustration/tahir.jpg" alt="Tahir Murtaza" width={600} height={780} style={{ borderRadius: '12px', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;