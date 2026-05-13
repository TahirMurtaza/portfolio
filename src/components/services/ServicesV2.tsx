"use client"
import ServicesData from "@/assets/jsonData/services/ServicesData.json"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrow from "@/assets/img/icon/arrow.png";

const ServicesV2 = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div id="services" className={`services-style-one-area bottom-less default-padding-bottom`}>
                <div className="container">
                    <div className="row">
                        {ServicesData.map((service, index) => (
                            <div className={`col-xl-3 col-md-6 mb-30 wow fadeInUp`} key={service.id}>
                                <div
                                    className={`service-style-one-item ${activeIndex === index ? "active" : ""}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    <Image src={`/assets/img/icon/${service.icon}`} alt="Image Not Found" width={82} height={65} />
                                    <h4><Link href={`/services-details/${service.id}`}>{service.title}</Link></h4>
                                    <p>{service.text}</p>
                                    <Link href={`/services-details/${service.id}`} className="btn-style-four">
                                        <div className="icon"><Image src={arrow} alt="Image Not Found" /></div> Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;