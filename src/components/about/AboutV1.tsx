import FactV1 from '../fact/FactV1';

const AboutV1 = () => {
    return (
        <>
            <div id="about" className="about-style-one-area bg-gray default-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <FactV1 />
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one-info">
                                <p>
                                    Full Stack AI Engineer with a proven track record of delivering AI-powered products that reduce manual effort and accelerate decision-making. I specialize in building intelligent automation solutions — from voice AI agents and LLM pipelines to scalable full-stack applications — for domains like healthcare, recruitment, and e-commerce. Fluent in Python, React, FastAPI, and cloud platforms (AWS, Azure).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;
