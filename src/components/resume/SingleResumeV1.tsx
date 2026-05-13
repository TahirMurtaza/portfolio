import Animate from "../animation/Animate";

interface DataType {
    id: number;
    title?: string;
    organization?: string;
    duration?: string;
    description?: string;
    animation?: string;
}

const SingleResumeV1 = ({ item }: { item: DataType }) => {
    const { title, organization, duration, description, animation } = item;

    return (
        <>
            <Animate className={animation}>
                <div className="timeline-style-one-item">
                    <div className="timeline-header">
                        <div className="left">
                            <h4>{title}</h4>
                            <p>
                                {organization}
                            </p>
                        </div>
                        <div className="right">
                            <span>{duration}</span>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleResumeV1;