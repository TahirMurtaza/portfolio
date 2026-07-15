import Link from "next/link";
import { notFound } from "next/navigation";
import caseStudies from "@/data/caseStudies";
import FooterV1 from "@/components/footer/FooterV1";

export async function generateStaticParams() {
    return caseStudies.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = caseStudies.find(c => c.slug === slug);
    return {
        title: cs ? `${cs.title} — Tahir Murtaza` : "Case Study — Tahir Murtaza",
        description: cs?.summary,
    };
}

const CaseStudyPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const cs = caseStudies.find(c => c.slug === slug);
    if (!cs) notFound();

    return (
        <>
            <nav className="cs-topbar">
                <div className="container">
                    <Link href="/" className="cs-brand">TM</Link>
                    <Link href="/#services" className="cs-back"><i className="fas fa-arrow-left" /> Back to Home</Link>
                    <a href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer" className="btn-style-regular cs-talk">
                        <span>{`Let's Talk`}</span>
                    </a>
                </div>
            </nav>

            <div className="case-study-area">
                <div className="container">

                    {/* Hero */}
                    <div className="cs-hero">
                        <div className="cs-hero-main">
                            <span className="cs-badge">{cs.badge}</span>
                            <h1>{cs.title}</h1>
                            <p className="cs-summary">{cs.summary}</p>
                            <Link className="btn-style-regular" href="/#contact"><span>Get in Touch</span> <i className="fas fa-arrow-right" /></Link>
                        </div>
                        <div className="cs-snapshot">
                            <h5>Outcome Snapshot</h5>
                            <div className="cs-metrics">
                                {cs.metrics.map((m, i) => (
                                    <div className="cs-metric" key={i}>
                                        <strong>{m.value}</strong>
                                        <span>{m.label}</span>
                                    </div>
                                ))}
                            </div>
                            <h5 className="mt-20">Deliverables</h5>
                            <ul className="cs-list">
                                {cs.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Problem */}
                    <div className="cs-section">
                        <h2>The Problem</h2>
                        {cs.problem.map((p, i) => <p key={i}>{p}</p>)}
                    </div>

                    {/* What We Built */}
                    <div className="cs-section">
                        <h2>What We Built</h2>
                        {cs.built.map((section, i) => (
                            <div className="cs-built-block" key={i}>
                                <h3>{section.heading}</h3>
                                {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                                {section.agents &&
                                    <ul className="cs-agent-list">
                                        {section.agents.map((a, j) => (
                                            <li key={j}><strong>{a.name}</strong> — {a.text}</li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        ))}
                    </div>

                    {/* System Flow */}
                    <div className="cs-section">
                        <h2 className="text-center">System Flow</h2>
                        <p className="text-center cs-flow-sub">Stage by stage, in plain language.</p>
                        <div className="cs-flow">
                            {cs.flow.map((f, i) => (
                                <div className="cs-flow-item" key={i}>
                                    <span className="cs-flow-step">{f.step}</span>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipped / Hard */}
                    <div className="cs-two-col">
                        <div>
                            <h2>What Shipped</h2>
                            <ul className="cs-list">
                                {cs.shipped.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2>What Made It Hard</h2>
                            {cs.hard.map((h, i) => (
                                <div className="cs-hard-item" key={i}>
                                    <h4>{h.title}</h4>
                                    <p>{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="cs-cta text-center">
                        <h2>Want something like this for your workflow?</h2>
                        <p>Scripts, screening logic, scheduling, and integrations — customized for your use case.</p>
                        <a className="btn-style-regular" href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer"><span>Book a Call</span> <i className="fas fa-arrow-right" /></a>
                    </div>

                </div>
            </div>
            <FooterV1 />
        </>
    );
};

export default CaseStudyPage;
