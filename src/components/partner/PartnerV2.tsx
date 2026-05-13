import Image from 'next/image';
import PartnerV1LightData from "@/assets/jsonData/partner/PartnerV1LightData.json"
import Animate from '../animation/Animate';

const PartnerV2 = () => {
    return (
        <>
            <div className="partner-style-one-area text-center default-padding bottom-less overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Partner</h4>
                                <h2 className="title">With The World Premier 80+ Brands</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="partner-style-one-items">
                                {PartnerV1LightData.logoLeft.map(partner =>
                                    <Animate className={partner.animation} key={partner.id}>
                                        <div className="partner-style-one-item">
                                            <Image src={`/assets/img/partner/${partner.logo}`} alt="Image Not Found" width={256} height={256} />
                                        </div>
                                    </Animate>
                                )}
                            </div>

                            <div className="partner-style-one-items">
                                {PartnerV1LightData.logoRight.map(partner =>
                                    <Animate className={partner.animation} key={partner.id}>
                                        <div className="partner-style-one-item">
                                            <Image src={`/assets/img/partner/${partner.logo}`} alt="Image Not Found" width={256} height={256} />
                                        </div>
                                    </Animate>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV2;