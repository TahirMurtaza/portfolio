import Image from "next/image";
import partner9 from "@/assets/img/partner/9.png"
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id?: number;
    count?: string;
    thumbLight?: string;
    name?: string;
    role?: string;
    reviewText?: string;
    reviewCount?: number;
    ratings: number;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { count, thumbLight, name, role, reviewText, reviewCount, ratings } = testimonial;

    return (
        <>
            <div className="testimonial-style-one">
                <div className="item">
                    <div className="thumb">
                        <div className="inner">
                            <Image src={`/assets/img/illustration/${thumbLight}`} alt="Image Not Found" width={512} height={512} />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tm-review">
                            <div className="top">
                                <h5>Reviews On</h5>
                                <RatingsStar ratings={ratings} />
                            </div>
                            <div className="bottom">
                                <Image src={partner9} alt="Image Not Found" />
                                <p>{ratings}/ {reviewCount} Reviews</p>
                            </div>
                        </div>
                        <p>
                            {reviewText}
                        </p>
                        <div className="tm-footer">
                            <div className="provider">
                                <h4>{name}</h4>
                                <span>{role}</span>
                            </div>
                            <span>{count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;