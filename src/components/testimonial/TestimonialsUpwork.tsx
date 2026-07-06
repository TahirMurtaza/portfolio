"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import FeedbackData from "@/assets/jsonData/testimonial/UpworkFeedbackData.json";
import RatingsStar from '../utilities/RatingsStar';

interface DataType {
    sectionClass?: string;
}

const TestimonialsUpwork = ({ sectionClass }: DataType) => {
    return (
        <>
            <div id="testimonials" className={`testimonials-upwork-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title">Client Feedback on Upwork</h2>
                                <p className="upwork-summary">
                                    <span className="stars"><RatingsStar ratings={4.9} /></span>
                                    4.9 rating &middot; 43 reviews &middot; 100% Job Success
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        spaceBetween={30}
                        autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
                        pagination={{ el: '.upwork-tm-pagination', clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    >
                        {FeedbackData.map(fb => (
                            <SwiperSlide key={fb.id}>
                                <div className="upwork-feedback-card">
                                    <div className="rating-row">
                                        <RatingsStar ratings={fb.rating} />
                                        <span>{fb.rating.toFixed(1)}</span>
                                    </div>
                                    <p className="quote">&ldquo;{fb.text}&rdquo;</p>
                                    <div className="meta">
                                        <h5>{fb.title}</h5>
                                        <span>{fb.date}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="upwork-tm-pagination" />
                    <div className="text-center mt-30">
                        <a href="https://www.upwork.com/freelancers/~011ca0d955c081903a" target="_blank" rel="noopener noreferrer" className="upwork-profile-link">
                            View all reviews on Upwork <i className="fas fa-arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialsUpwork;
