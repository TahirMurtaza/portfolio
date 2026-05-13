import Link from "next/link";
import Animate from "../animation/Animate";

interface DataType {
    id?: number;
    title?: string;
    description?: string;
    icon?: string;
    price?: number;
    animation?: string;
    delay?: string;
    features: string[];
    buttonText?: string;
}

const SinglePriceV1 = ({ plan }: { plan: DataType }) => {
    const { title, description, icon, price, animation, delay, features, buttonText } = plan;

    return (
        <>
            <Animate className={animation} delay={delay}>
                <div className="col-lg-6 pricing-one-single">
                    <div className="pricing-style-one wow fadeInUp" data-wow-delay={delay}>
                        <div className="pricing-top">
                            <div className="right">
                                <i className={icon} />
                            </div>
                            <div className="left">
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="price">
                                <h2>
                                    <sup>$</sup>
                                    {price}
                                </h2>
                            </div>
                            <ul>
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className="button mt-30">
                                <Link className="btn-style-regular" href="/contact">
                                    <span>{buttonText}</span> <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SinglePriceV1;
