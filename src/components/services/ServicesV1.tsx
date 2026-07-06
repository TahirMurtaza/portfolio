"use client"
import ServicesData from "@/assets/jsonData/services/ServicesData.json"
import Image from "next/image";
import { useEffect, useRef } from "react";

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode
}

const ServicesV1 = ({ sectionClass, hasTitle }: DataType) => {

    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let x = 0;
        let boost = 0;
        let lastY = window.scrollY;
        let paused = false;
        let raf = 0;
        let last = performance.now();

        // Page scroll gives the strip an extra push
        const onScroll = () => {
            const dy = window.scrollY - lastY;
            lastY = window.scrollY;
            boost += dy * 0.6;
        };

        const onEnter = () => { paused = true; };
        const onLeave = () => { paused = false; };

        const tick = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.1);
            last = now;
            const half = track.scrollWidth / 2;

            if (!paused) x -= 35 * dt; // constant auto-scroll speed (px/s)

            if (Math.abs(boost) > 0.05) {
                x -= boost * 0.12; // apply scroll push, decaying smoothly
                boost *= 0.9;
            } else {
                boost = 0;
            }

            if (half > 0) {
                x = -(((-x % half) + half) % half); // seamless wrap
            }
            track.style.transform = `translateX(${x}px)`;
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        window.addEventListener('scroll', onScroll, { passive: true });
        track.addEventListener('mouseenter', onEnter);
        track.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScroll);
            track.removeEventListener('mouseenter', onEnter);
            track.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    // Duplicate the list for a seamless infinite loop
    const items = [...ServicesData, ...ServicesData];

    return (
        <>
            <div id="services" className={`services-style-one-area bottom-less ${sectionClass ? sectionClass : ""}`}>

                {/* Title  */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Services</h4>
                                    <h2 className="title">My Quality Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="services-marquee">
                    <div className="services-marquee-track" ref={trackRef}>
                        {items.map((service, index) => (
                            <div className="service-style-one-item" key={index}>
                                <Image src={`/assets/img/icon/${service.icon}`} alt={service.title} width={82} height={65} />
                                <h4>{service.title}</h4>
                                <p>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
