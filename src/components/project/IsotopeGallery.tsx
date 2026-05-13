"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json";
import Isotope from "isotope-layout";
import Image from "next/image";
import Link from "next/link";

const IsotopeGallery = () => {
    const galleryRef = useRef<HTMLDivElement | null>(null); // ✅ Properly typed ref
    const imagesLoadedRef = useRef(0); // useRef to avoid triggering re-renders
    const isotopeInstance = useRef<Isotope | null>(null);
    const [isReady, setIsReady] = useState(false);

    // Callback to increment loaded image count without re-render
    const handleImageLoad = useCallback(() => {
        imagesLoadedRef.current += 1;
        if (imagesLoadedRef.current === PortfolioData.length) {
            setIsReady(true); // Trigger Isotope init only once
        }
    }, []);

    useEffect(() => {
        if (isReady && galleryRef.current) {
            isotopeInstance.current = new Isotope(galleryRef.current, {
                itemSelector: ".gallery-item",
                layoutMode: "masonry",
            });

            const timeout = setTimeout(() => {
                isotopeInstance.current?.layout();
            }, 300);

            return () => {
                clearTimeout(timeout);
                isotopeInstance.current?.destroy();
                isotopeInstance.current = null;
            };
        }
    }, [isReady]);

    return (
        <div
            id="gallery-masonary"
            className="gallery-items colums-3"
            ref={galleryRef}
        >
            {PortfolioData.map((portfolio) => (
                <div className="gallery-item" key={portfolio.id}>
                    <div className="gallery-style-one">
                        <Image
                            src={`/assets/img/projects/${portfolio.thumb}`}
                            alt="Thumb"
                            width={700}
                            height={760}
                            onLoad={handleImageLoad}
                            priority
                        />
                        <div className="info">
                            <div className="overlay">
                                <div className="content">
                                    <ul className="pf-tags">
                                        {portfolio.tags.map((tag, index) => (
                                            <li key={index}>
                                                <Link href="#" scroll={false}>
                                                    {tag}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="icon">
                                    <Link href={`/project-details/${portfolio.id}`}>
                                        <i className="fas fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <h4>
                                <Link href={`/project-details/${portfolio.id}`}>
                                    {portfolio.title}
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IsotopeGallery;
