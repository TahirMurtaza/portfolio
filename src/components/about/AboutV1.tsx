"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import shape3 from "@/assets/img/shape/3.png"
import shape8 from "@/assets/img/shape/8.png"
import about1 from "@/assets/img/about/1.jpg"
import about2 from "@/assets/img/about/2.jpg"
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import FactV1 from '../fact/FactV1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {

    // Modal Video
    const [isOpen, setOpen] = useState(false);

    // Scroll Animation 
    useEffect(() => {
        const upDown_Scroll = document.querySelector(".upDownScrol");

        if (upDown_Scroll) {
            gsap.set(upDown_Scroll, { yPercent: 105 });

            const scrollAnimation = gsap.to(upDown_Scroll, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: upDown_Scroll,
                    end: "bottom center",
                    scrub: 1,
                },
            });

            // Cleanup function to kill the animation on unmount
            return () => {
                scrollAnimation.kill();
                const scrollTriggers = ScrollTrigger.getAll();
                scrollTriggers.forEach((trigger) => trigger.kill());
            };
        }
    }, []);


    return (
        <>
            <div id="about" className="about-style-one-area bg-gray default-padding">
                <div className="shape-style-one">
                    <Image src={shape3} alt="Image Not Found" />
                    <Image className="upDownScrol" src={shape8} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <FactV1 />
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one-info">
                                <p>
                                    Full Stack AI Engineer with a proven track record of delivering AI-powered products that reduce manual effort and accelerate decision-making. I specialize in building intelligent automation solutions — from voice AI agents and LLM pipelines to scalable full-stack applications — for domains like healthcare, recruitment, and e-commerce. Fluent in Python, React, FastAPI, and cloud platforms (AWS, Azure).
                                </p>
                                <Link className="btn-style-regular btn-border" href="#" scroll={false}><span>Learn More</span> <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="about-style-one-bottom-info mt-50">
                        <div className="row">
                            <div className="col-lg-8 pr-60 pr-md-15 pr-xs-15">
                                <div className="img-container">
                                    <Image src={about1} alt="Image Not Found" />
                                    <Link href="#" className="popup-youtube video-play-button" onClick={() => setOpen(true)} scroll={false}>
                                        <i className="fas fa-play" />
                                        <div className="effect" />
                                    </Link>
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <Image src={about2} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;