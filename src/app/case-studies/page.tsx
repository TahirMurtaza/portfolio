import Link from "next/link";
import caseStudies from "@/data/caseStudies";
import FooterV1 from "@/components/footer/FooterV1";

export const metadata = {
    title: "Tahir Murtaza — Case Studies",
    description: "Deep dives into production AI systems I've built — voice AI agents, LLM workflows, and full-stack platforms.",
};

const CaseStudiesPage = () => {
    return (
        <>
            <nav className="cs-topbar">
                <div className="container">
                    <Link href="/" className="cs-brand">TM</Link>
                    <Link href="/" className="cs-back"><i className="fas fa-arrow-left" /> Back to Home</Link>
                    <a href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer" className="btn-style-regular cs-talk">
                        <span>{`Let's Talk`}</span>
                    </a>
                </div>
            </nav>

            <div className="case-study-area">
                <div className="container">
                    <div className="site-heading text-center" style={{ marginBottom: '60px' }}>
                        <h4 className="sub-title">Case Studies</h4>
                        <h2 className="title">Production Systems, In Depth</h2>
                    </div>

                    <div className="cs-index-grid">
                        {caseStudies.map(cs => (
                            <Link href={`/case-studies/${cs.slug}`} className="cs-index-card" key={cs.slug}>
                                <span className="cs-badge">{cs.badge}</span>
                                <h3>{cs.title}</h3>
                                <p>{cs.summary}</p>
                                <div className="cs-index-metrics">
                                    {cs.metrics.slice(0, 3).map((m, i) => (
                                        <div key={i}>
                                            <strong>{m.value}</strong>
                                            <span>{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="service-case-link">Read Case Study <i className="fas fa-arrow-right" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <FooterV1 />
        </>
    );
};

export default CaseStudiesPage;
