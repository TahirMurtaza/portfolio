"use client"
import Image from 'next/image';
import shape10 from "@/assets/img/shape/10.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json";
import SingleTestimonialV1 from './SingleTestimonialV1';

interface DataType {
    sectionClass?: string;
}

const TestimonialV1 = ({ sectionClass }: DataType) => {

    return (
        <>
            <div className={`testimonial-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-left-top">
                    <Image src={shape10} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-xl-6">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title">Clients Testimonials</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-style-one-items">
                                <Swiper
                                    modules={[Keyboard, Autoplay, Pagination, EffectFade]}
                                    direction={"horizontal"}
                                    loop={true}
                                    autoplay={true}
                                    // pagination
                                    pagination={{
                                        el: '.swiper-pagination',
                                        type: 'bullets',
                                        clickable: true,
                                    }}
                                    // Navigation arrows
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"
                                    }}
                                >
                                    {TestimonialV1Data.map(testimonial =>
                                        <SwiperSlide className="swiper-slide" key={testimonial.id}>
                                            <SingleTestimonialV1 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                                {/* Navigation */}
                                <div className="testimonial-pagination">
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;