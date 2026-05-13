import shape15 from "@/assets/img/shape/15.png"
import Image from 'next/image';
import PriceV1Data from "@/assets/jsonData/price/PriceV1Data.json"
import SinglePriceV1 from "./SinglePriceV1";

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode
}

const PriceV1 = ({ sectionClass, hasTitle }: DataType) => {
    return (
        <>
            <div id="pricing" className={`pricing-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-right-top">
                    <Image src={shape15} alt="Image Not Found" />
                </div>

                {/* Title */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Pricing</h4>
                                    <h2 className="title">The best pricing plans to get your best</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        {PriceV1Data.map(plan =>
                            <SinglePriceV1 plan={plan} key={plan.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;