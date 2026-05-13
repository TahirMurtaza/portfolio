"use client"
import Image from 'next/image';
import projects9 from "@/assets/img/projects/9.jpg"
import projects4 from "@/assets/img/projects/4.jpg"
import banner2 from "@/assets/img/banner/2.jpg"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json"

interface DataType {
    thumbFull?: any;
    id?: number;
}

interface ProjectSingleProps {
    projectInfo?: DataType;
    totalProject?: number;
}

const ProjectDetailsContent = ({ projectInfo, totalProject }: ProjectSingleProps) => {
    const { id, thumbFull } = projectInfo || {};

    // Image Scroll Animation 
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Project Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalProject : currentId - 1;
    const nextId = currentId === totalProject ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousProject = PortfolioData.find((blog) => blog.id === previousId);
    const nextProject = PortfolioData.find((blog) => blog.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "No Title";

    return (
        <>
            <div className="banner-animation-zoom overflow-hidden">
                <div className="container">
                    <div className="image-move-bg">
                        <div className="animation-zoom-banner" id="js-hero"
                            style={{ width: `${100 + scroll / 18}%` }}
                        >
                            <Image src={`/assets/img/projects/${thumbFull}`} alt="Image Not Found" width={1600} height={700} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-items default-padding">
                <div className="container">
                    <div className="top-info">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 left-info mb-xs-40 mb-md-50">
                                <div className="project-single-info">
                                    <ul>
                                        <li>
                                            Client <span>themeforest.validthemes.com</span>
                                        </li>
                                        <li>
                                            Date <span>25 February, 2022</span>
                                        </li>
                                        <li>
                                            Service <span>Web Development</span>
                                        </li>
                                        <li>
                                            Address <span>1401, 21st Street STE R4569, California</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-info col-xl-8 col-lg-7 pl-50 pl-md-15 pl-xs-15 mt-md-10">
                                <h2>Description</h2>
                                <p>
                                    Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos.
                                </p>
                                <p>
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-items default-padding-bottom">
                <div className="container">
                    <div className="project-thumb mt-md--25 mt-xs--25">
                        <div className="row">
                            <div className="col-md-7">
                                <Image src={projects9} alt="Image Not Found" />
                            </div>
                            <div className="col-md-5">
                                <Image src={projects4} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-items default-padding bg-gray">
                <div className="container">
                    <div className="item-grid-container">
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info">
                                    <h2>Background</h2>
                                </div>
                                <div className="right-info">
                                    <p>
                                        Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                    </p>
                                    <p>
                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info">
                                    <h2>The Challenges</h2>
                                </div>
                                <div className="right-info">
                                    <p>
                                        Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                    </p>
                                    <p>
                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                    <h3>Continue indulged speaking the horrible for domestic.</h3>
                                    <ul className="list-style-one">
                                        <li>Social media marketing</li>
                                        <li>Search engine optimization (seo)</li>
                                        <li>Public Relations</li>
                                    </ul>
                                    <Image src={banner2} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info">
                                    <h2>The Solution</h2>
                                </div>
                                <div className="right-info">
                                    <p>
                                        Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                    </p>
                                    <p>
                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-pagination default-padding-bottom bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-paginvation-items mt-xs--25 mt-md--25">

                                <div className="project-previous">
                                    <Link href={`/project-details/${previousId}`}>
                                        <div className="icon"><i className="fas fa-angle-double-left" /></div>
                                        <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousProject?.title)}</h5></div>
                                    </Link>
                                </div>

                                <div className="project-all">
                                    <Link href="#"><i className="fas fa-th-large" /></Link>
                                </div>

                                <div className="project-next">
                                    <Link href={`/project-details/${nextId}`}>
                                        <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextProject?.title)}</h5></div>
                                        <div className="icon"><i className="fas fa-angle-double-right" /></div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;