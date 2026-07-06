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
        const wrapper = track.parentElement as HTMLElement;

        let x = 0;
        let vel = 0;          // fling velocity after a drag
        let paused = false;
        let dragging = false;
        let lastMoveX = 0;
        let raf = 0;
        let last = performance.now();

        // Trackpad / mouse horizontal wheel
        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                x -= e.deltaX;
                e.preventDefault();
            }
        };

        // Drag / swipe to scroll
        const onPointerDown = (e: PointerEvent) => {
            dragging = true;
            vel = 0;
            lastMoveX = e.clientX;
            track.style.cursor = 'grabbing';
            track.setPointerCapture(e.pointerId);
        };
        const onPointerMove = (e: PointerEvent) => {
            if (!dragging) return;
            const dx = e.clientX - lastMoveX;
            lastMoveX = e.clientX;
            x += dx;
            vel = dx;
        };
        const onPointerUp = () => {
            dragging = false;
            track.style.cursor = 'grab';
        };

        const onEnter = () => { paused = true; };
        const onLeave = () => { paused = false; onPointerUp(); };

        const tick = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.1);
            last = now;
            const half = track.scrollWidth / 2;

            if (!paused && !dragging) x -= 35 * dt; // constant auto-scroll speed (px/s)

            // Momentum after releasing a drag
            if (!dragging && Math.abs(vel) > 0.1) {
                x += vel;
                vel *= 0.93;
            }

            if (half > 0) {
                x = -(((-x % half) + half) % half); // seamless wrap
            }
            track.style.transform = `translateX(${x}px)`;
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        wrapper.addEventListener('wheel', onWheel, { passive: false });
        track.addEventListener('pointerdown', onPointerDown);
        track.addEventListener('pointermove', onPointerMove);
        track.addEventListener('pointerup', onPointerUp);
        track.addEventListener('pointercancel', onPointerUp);
        track.addEventListener('mouseenter', onEnter);
        track.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(raf);
            wrapper.removeEventListener('wheel', onWheel);
            track.removeEventListener('pointerdown', onPointerDown);
            track.removeEventListener('pointermove', onPointerMove);
            track.removeEventListener('pointerup', onPointerUp);
            track.removeEventListener('pointercancel', onPointerUp);
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
                                <Image src={`/assets/img/icon/${service.icon}`} alt={service.title} width={82} height={65} draggable={false} />
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
