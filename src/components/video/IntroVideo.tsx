const VIDEO_URL = "https://www.youtube.com/watch?v=-e_WWXYJzHU";
const EMBED_URL = "https://www.youtube-nocookie.com/embed/-e_WWXYJzHU?rel=0";

const IntroVideo = () => {
    return (
        <section id="video" className="intro-video-area default-padding">
            <div className="container">
                <div className="intro-video-grid">
                    <div className="intro-video-copy">
                        <span className="intro-video-eyebrow">A quick introduction</span>
                        <h2>Beyond the résumé</h2>
                        <p>
                            Hear directly from me about how I approach AI engineering,
                            product development, and building systems that work reliably in production.
                        </p>
                        <a
                            href={VIDEO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="intro-video-link"
                        >
                            Watch on YouTube <i className="fas fa-external-link-alt" />
                        </a>
                    </div>

                    <div className="intro-video-frame">
                        <iframe
                            src={EMBED_URL}
                            title="Tahir Murtaza — Introduction"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroVideo;
