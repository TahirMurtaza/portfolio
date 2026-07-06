"use client"
import Image from "next/image";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Animate from "../animation/Animate";

interface DataType {
    id: number;
    title?: string;
    organization?: string;
    duration?: string;
    description?: string;
    animation?: string;
    logo?: string;
    website?: string;
    letter?: string;
}

const SingleResumeV1 = ({ item }: { item: DataType }) => {
    const { title, organization, duration, description, animation, logo, website, letter } = item;

    return (
        <>
            <Animate className={animation}>
                <div className="timeline-style-one-item">
                    <div className="timeline-header">
                        <div className="left">
                            <div className="timeline-org">
                                {logo &&
                                    <a className="company-logo" href={website} target="_blank" rel="noopener noreferrer" aria-label={organization}>
                                        <Image src={`/assets/img/companies/${logo}`} alt={organization || "Company"} width={48} height={48} />
                                    </a>
                                }
                                <div>
                                    <h4>{title}</h4>
                                    <p>
                                        {website
                                            ? <a href={website} target="_blank" rel="noopener noreferrer">{organization}</a>
                                            : organization
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <span>{duration}</span>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <p>
                            {description}
                        </p>
                        {letter &&
                            <PhotoProvider>
                                <PhotoView src={`/assets/img/letters/${letter}`}>
                                    <button type="button" className="letter-link">
                                        <i className="far fa-file-alt" /> View Recommendation Letter
                                    </button>
                                </PhotoView>
                            </PhotoProvider>
                        }
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleResumeV1;
