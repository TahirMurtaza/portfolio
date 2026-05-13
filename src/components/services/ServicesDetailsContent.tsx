import TestimonialV1 from '../testimonial/TestimonialV1';
import PromoV1 from '../promo/PromoV1';
import Image from 'next/image';
import about1 from "@/assets/img/about/1.jpg"
import ProcessV1 from '../process/ProcessV1';

interface DataType {
    title?: string;
    thumbFull?: string;
}

const ServicesDetailsContent = ({ serviceInfo }: { serviceInfo: DataType }) => {
    const { title, thumbFull } = serviceInfo

    return (
        <>
            <div className="services-details-area default-padding-bottom">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="service-single-thumb">
                                    <Image src={`/assets/img/services/${thumbFull}`} alt="Thumb" width={1900} height={860} />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-7">
                                <h2>Best influencer {title}</h2>
                                <p>
                                    We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology. Dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.
                                </p>
                            </div>
                            <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                <p>
                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data.
                                </p>
                                <ul className="list-style-one">
                                    <li>Social media marketing</li>
                                    <li>Search engine optimization (seo)</li>
                                    <li>Public Relations</li>
                                </ul>
                            </div>
                            <div className="mt-50 mt-xs-40">
                                <h2>My work process</h2>
                                <ProcessV1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-details-area default-padding bg-gray">
                <div className="container">
                    <div className="services-details-items">
                        <div className="d-grid colums-2">
                            <div className="thumb-style-two">
                                <Image src={about1} alt="Image Not Found" />
                            </div>
                            <div className="item">
                                <h2>Any questions find here.</h2>
                                <div className="accordion" id="faqAccordion">
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                May i see your work samples?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What are your rates?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do you prefer to communicate?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How to create an custom order?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TestimonialV1 />
            <PromoV1 />
        </>
    );
};

export default ServicesDetailsContent;