import ResumeV1Data from "@/assets/jsonData/resume/ResumeV1Data.json"
import SingleResumeV1 from "./SingleResumeV1";

interface DataType {
    sectionClass?: string;
}

const ResumeV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div id="resume" className={`timeline-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="time-line-style-one-box">
                        <div className="row guttex-xl">

                            {ResumeV1Data.map(section =>
                                <div className="col-lg-6" key={section.id}>
                                    <h2>{section.sectionTitle}</h2>
                                    <div className="time-style-one-items">

                                        {section.items.map(item =>
                                            <SingleResumeV1 item={item} key={item.id} />
                                        )}

                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeV1;