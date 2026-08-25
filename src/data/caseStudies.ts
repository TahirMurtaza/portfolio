export interface CaseStudyAgent {
    name: string;
    text: string;
}

export interface CaseStudyBuiltSection {
    heading: string;
    paragraphs: string[];
    agents?: CaseStudyAgent[];
}

export interface CaseStudy {
    slug: string;
    badge: string;
    title: string;
    summary: string;
    primaryImpact: string;
    metrics: { value: string; label: string }[];
    deliverables: string[];
    problem: string[];
    built: CaseStudyBuiltSection[];
    flow: { step: string; title: string; text: string }[];
    shipped: string[];
    hard: { title: string; text: string }[];
    technology?: { label: string; value: string }[];
    ctaText?: string;
}

const caseStudies: CaseStudy[] = [
    {
        slug: "voice-ai-clinical-trial-recruitment",
        badge: "Voice AI",
        title: "Autonomous Voice AI for Clinical Trial Recruitment",
        summary:
            "Full-cycle voice AI that phones patients, screens eligibility, verifies identity, books appointments, and hands off to human recruiters — all without a coordinator touching the call.",
        primaryImpact: "24/7 autonomous call coverage",
        metrics: [
            { value: "24/7", label: "Call Coverage" },
            { value: "< 8s", label: "Average Answer-to-Agent Time" },
            { value: "90%+", label: "Flow Compliance Rate" },
            { value: "$6K–$10K", label: "Saved Monthly in Coordinator Hours" },
        ],
        deliverables: [
            "Multi-agent voice AI with 5 conversation flows handling the full recruitment funnel",
            "Real-time LangGraph state machine for dynamic questionnaire branching and eligibility tracking",
            "Warm conference-based transfer to human recruiters with zero audio gap",
            "Twilio SIP outbound calls with voicemail detection validated against real recorded fixtures",
            "Azure production deployment with HIPAA-compliant logging and per-call audit trails",
        ],
        problem: [
            "Clinical trial sites lose 30–60% of potential participants to unreachable phone numbers, voicemails, and coordinator bandwidth. A recruiter can make 40–60 calls a day. An AI agent can run hundreds in parallel, but the ones that existed were brittle — they broke on real phone lines, couldn't handle a patient going off-script, and had no way to hand off gracefully when a human was needed.",
            "The clinics running Comforce needed something that could survive hostile phone conditions, follow complex branching questionnaires without losing track, verify patient identity before disclosing study details, and reach a human recruiter in under 10 seconds when the patient was ready to engage. And it had to be HIPAA-compliant by architecture, not afterthought.",
        ],
        built: [
            {
                heading: "5-Agent Squad Architecture",
                paragraphs: [
                    "Each conversation state is handled by a specialized agent — not one monolithic prompt trying to do everything. The squad runs in sequence, each agent handing off to the next via structured output rather than prompt-based routing.",
                ],
                agents: [
                    { name: "Greeting Agent", text: "Introduces the call, detects voicemail vs. live answer, identifies the right person, and routes to screening or callback scheduling depending on availability." },
                    { name: "Screening Agent", text: "Runs the eligibility questionnaire with full branching logic. Handles interruptions, partial answers, topic changes, and re-asks gracefully without losing the patient's place in the flow." },
                    { name: "DOB Verification Agent", text: "Verifies patient identity before any study details are shared. On mismatch, triggers a configurable transfer message and hands off to a human rather than repeating indefinitely." },
                    { name: "Scheduling Agent", text: "Fetches real-time appointment availability via the slot manager API and books confirmed appointments with the patient before ending the call." },
                    { name: "Call Transfer Agent", text: "Manages warm handoff to a live human recruiter when the patient requests one or when the screening outcome requires it." },
                ],
            },
            {
                heading: "LangGraph State Machine for Conversation Flow",
                paragraphs: [
                    "Squad switching handles which agent is talking. LangGraph handles what that agent does when the conversation goes sideways.",
                    "Every incoming utterance runs through a compiled state graph: process_answer → detect_conversation_state → conditional routing into one of several handler nodes — clarification, follow-up, interruption, transcription confirmation, silence endpointing — then back to check_eligibility and the next question.",
                    "The detect_conversation_state node classifies what the patient just said before any routing decision is made. Did they answer the current question? Ask something about the study? Change an answer they gave two questions ago? Say something that could be a partial utterance or a complete one? Each path is handled differently. Interruptions pause the question queue, resolve the side conversation, and resume from exactly where the machine left off.",
                    "State is checkpointed to Redis after every node. If a call drops mid-screening and the patient calls back, the machine resumes from the exact question they were on — no starting over, no re-asking what was already answered. Concurrent calls are fully isolated; no state bleeds between threads.",
                    "The branching questionnaire structure is parsed from a graph at startup. Conditional edges are built dynamically from eligibility rules — adding a new study with a different question tree is a JSON config change, not a code change.",
                ],
            },
            {
                heading: "Warm Transfer — Conference-First Architecture",
                paragraphs: [
                    "When a patient asks for a human, the handoff needs to feel seamless. A blind transfer where the patient is put on hold while the AI disappears is not seamless.",
                    "We implemented a conference-first model. When the patient answers the initial call, Twilio places them directly into a named conference room. The AI agent joins the same conference via a bridged VAPI leg. When the transfer is triggered, a human recruiter is dialed into that same conference — the patient never experiences a hold state, the recruiter joins while the AI is still present, and the handoff happens mid-conversation with full context.",
                    "The underlying Twilio leg SID is resolved from the VAPI call object and cached before the recruiter leg dials, which prevents a race condition when two transfers fire simultaneously. The AI mutes itself once the recruiter is confirmed in conference, then disconnects cleanly.",
                ],
            },
            {
                heading: "Twilio SIP Outbound & Voicemail Detection",
                paragraphs: [
                    "All outbound calls run over Twilio SIP trunks with dynamic caller ID selection based on the patient's metro area — matching the area code increases answer rates measurably.",
                    "Voicemail detection uses Twilio AMD tuned against a fixture suite of 11 real recorded edge cases: carrier announcements, Google Voice screening calls, voicemails with 3 seconds of silence before the beep, and recordings that use a human-sounding voice as the greeting. We validated the detection settings — machineDetectionSpeechThreshold, machineDetectionSpeechEndThreshold, machineDetectionSilenceTimeout, and machineDetectionTimeout — independently against each fixture type before shipping. The detection fires on machine_end_beep, machine_end_silence, and machine_end_other, triggering a pre-recorded voicemail message and logging the outcome.",
                ],
            },
            {
                heading: "Endpointing & Silence Handling",
                paragraphs: [
                    "Insurance and clinical phone lines don't behave like consumer calls. Hold music triggers false positives. Reps pause mid-sentence. Patients take 6 seconds to finish a thought. A fixed silence timeout that works for one scenario breaks another.",
                    "We built a custom endpointing layer with two configurable thresholds: a nudge timeout (default 3 seconds) that prompts the patient gently if they've gone quiet, and a skip-offer timeout (8 seconds) that offers to move on if silence continues. Both are driven by environment variables so they can be tuned per study or per payer without a redeploy. The STT pipeline is muted during hold states and mid-transfer so hold music never reaches the language model.",
                ],
            },
            {
                heading: "Per-Agent Configuration Without Code Changes",
                paragraphs: [
                    "Every agent reads its behavioral parameters from a JSON config blob stored in the database per agent record. Compensation ranges, voicemail callback numbers, calling hours windows, call duration estimates, DOB failure transfer messages — all of it is swappable at runtime. When a new clinic onboards with a different study and different contact details, the engineering team doesn't touch code. The config is updated, the agent picks it up on the next call.",
                ],
            },
            {
                heading: "HIPAA-Compliant Production Infrastructure",
                paragraphs: [
                    "Running on Azure App Service with secrets managed via Key Vault — no credentials in environment variables or code. All call logs are written to Application Insights with per-call-attempt dimension filtering, so any individual call's full trace is queryable in under 10 seconds. Test and development calls run on fully synthetic patient data; no real patient information is used outside of production with BAA coverage in place.",
                ],
            },
        ],
        flow: [
            { step: "01", title: "Outbound Dial", text: "Twilio SIP trunk places the call with metro-matched caller ID. AMD runs in parallel. If voicemail is detected, a pre-recorded message is left and the call is logged." },
            { step: "02", title: "Live Answer Detection", text: "On live answer, the Greeting Agent identifies whether the right person picked up, handles \"who is this\" questions, and either proceeds to screening or schedules a callback." },
            { step: "03", title: "Eligibility Screening", text: "The Screening Agent runs the questionnaire through the LangGraph state machine. Branching logic adjusts the question queue in real time based on answers. The patient can interrupt, clarify, or change answers without losing their place." },
            { step: "04", title: "Identity Verification", text: "The DOB Verification Agent confirms patient identity against the record on file before any study-specific information is shared. Mismatch triggers a graceful transfer message." },
            { step: "05", title: "Eligibility Decision", text: "The state machine evaluates completed answers against study eligibility rules. Eligible patients proceed to scheduling or transfer. Ineligible patients receive an appropriate close and are logged with reason codes." },
            { step: "06", title: "Scheduling or Warm Transfer", text: "Eligible patients are either booked into a real appointment slot pulled live from the slot manager API, or transferred directly to a human recruiter via the conference bridge." },
            { step: "07", title: "Post-Call Logging", text: "Full call transcript, eligibility outcome, question-by-question responses, and transfer disposition are written to the database and Application Insights for audit and compliance." },
        ],
        shipped: [
            "Fully autonomous outbound voice agent covering the complete clinical trial recruitment funnel",
            "5-agent squad with structured hand-offs and per-agent database configuration",
            "LangGraph state machine with Redis checkpointing for resumable, concurrent-safe questionnaire flow",
            "Conference-based warm transfer with race-condition-safe SID resolution",
            "Twilio AMD voicemail detection validated against real recorded edge cases",
            "Custom endpointing layer with per-study tunable silence thresholds",
            "Real-time appointment booking via slot manager API integration",
            "Azure production deployment with Key Vault, Application Insights, and HIPAA-compliant audit logging",
        ],
        hard: [
            { title: "Conversation State Under Real Conditions", text: "Patients don't follow scripts. They answer two questions at once, interrupt to ask about compensation, give a partial answer and then correct it three turns later. A simple prompt-based flow falls apart immediately. Building a state machine that could classify conversation intent before routing — and resume cleanly after an interruption — was the core engineering problem, not the phone integration." },
            { title: "Warm Transfer Reliability", text: "The conference bridge model sounds straightforward until you're debugging a race condition where the recruiter's leg connects before the AI's Twilio SID has been resolved and cached, causing the bridge to fail silently. Or hold music bleeding into the STT stream during the seconds between transfer trigger and recruiter pickup, causing the agent to respond to dead air. These failures only appear on live calls under real timing conditions — no staging environment catches them." },
            { title: "Voicemail Detection at the Edges", text: "The easy voicemails are easy. The hard ones — carrier announcements that sound like a live person for 2 seconds, Google Voice screening that asks \"who's calling?\" before routing to voicemail, recordings with atypical silence patterns — require validated threshold tuning, not just default settings. We built a fixture harness and ran it before every detection config change." },
            { title: "HIPAA Logging Without Over-Logging", text: "Application Insights traces everything. The challenge is making per-call audit trails complete enough for compliance review without logging anything that shouldn't persist. Building the per-call-attempt dimension filter so any individual call is fully traceable — while keeping PII out of log messages — required deliberate architecture decisions at every logging callsite." },
        ],
    },
    {
        slug: "adology-competitive-ad-intelligence",
        badge: "Full-Stack AI Engineering",
        title: "AI-Powered Competitive Ad Intelligence Platform",
        summary:
            "I architected and built Adology's backend intelligence layer: an event-driven platform that continuously acquires competitor ads, understands image and video creative with multimodal AI, and turns market patterns into actionable campaign recommendations.",
        primaryImpact: "24/7 automated creative intelligence",
        metrics: [
            { value: "24/7", label: "Automated Acquisition & Processing" },
            { value: "10", label: "Serverless Functions in the AWS Stack" },
            { value: "1,024D", label: "Multimodal Embedding Vectors" },
            { value: "Image + Video", label: "Unified Intelligence Pipeline" },
        ],
        deliverables: [
            "Event-driven AWS backend for ingesting and processing Meta ad-library data",
            "Multimodal AI for image analysis, video-frame understanding, and audio transcription",
            "Semantic search and creative clustering with Titan embeddings, FAISS, and DBSCAN",
            "Brand-profile generation from normalized asset-level observations",
            "Competitor gap analysis and evidence-backed creative recommendations",
            "Scheduled refreshes, queue isolation, persistent state, and dead-letter recovery",
        ],
        problem: [
            "Competitive ad research is easy to start and difficult to scale. Useful intelligence means collecting every creative, preserving metadata, understanding images and videos, normalizing inconsistent AI labels, comparing patterns across brands, and repeating the process as campaigns change.",
            "Adology needed to turn a constantly changing stream of unstructured advertising creative into structured, queryable intelligence while handling network-heavy ingestion, large media files, long-running AI workloads, bursty queues, duplicate assets, partial failures, and probabilistic model output.",
            "The core engineering challenge was not simply calling an LLM. It was designing the distributed pipeline around it: choosing the right compute for each stage, preserving lineage across asynchronous hand-offs, converging image and video analysis into one schema, and synthesizing raw observations into dependable brand-level recommendations.",
        ],
        built: [
            {
                heading: "Event-Driven Serverless Acquisition",
                paragraphs: [
                    "Scheduled AWS jobs identify brands that need a refresh and publish brand-scoped work to FIFO queues. Lightweight Lambda functions validate and route messages, while AWS Batch runs acquisition and AI workloads that need more memory, compute, or execution time.",
                    "The acquisition service normalizes Meta ad-library data, separates images from videos, preserves every asset's archive ID, and dispatches bounded batches concurrently through SQS. MongoDB keeps processing state and product data queryable, while S3 stores original media and generated JSON and CSV artifacts.",
                ],
            },
            {
                heading: "Multimodal Image and Video Intelligence",
                paragraphs: [
                    "Static creatives are analyzed by vision-capable language models using configurable prompts and optional JSON Schema response contracts. Work runs concurrently across model clients and returns structured attributes rather than free-form prose.",
                    "For video, the pipeline samples frames at roughly one per second, builds compact contact sheets, extracts and transcribes audio, and analyzes visual progression, copy, narrative, and speech together. Both image and video results converge into one asset schema that retains creative type, transcript, source file, library ID, start date, and brand association.",
                ],
            },
            {
                heading: "Structured Output and Dynamic Prompting",
                paragraphs: [
                    "Analysis dimensions are configuration-driven. Prompt definitions can include JSON Schema, so a new research framework can be introduced without rebuilding the processing engine. The platform supports strict structured output as well as flexible JSON-object analysis.",
                    "Results are flattened into analysis-ready records and saved as raw JSON and tabular CSV, giving the product a reliable machine-readable source while keeping exports accessible to strategists.",
                ],
            },
            {
                heading: "Semantic Embeddings and Creative Clustering",
                paragraphs: [
                    "Images are encoded with Amazon Titan Multimodal Embeddings into 1,024-dimensional vectors. Video frames are embedded across the timeline and pooled into one representation for the complete ad. Embeddings are cached by asset URL to prevent duplicate model spend.",
                    "FAISS powers vector operations and DBSCAN discovers natural creative clusters without requiring a fixed number of groups. Representative ads expose visual convergence, repeated creative systems, overused styles, and underexplored territory that metadata alone cannot reveal.",
                ],
            },
            {
                heading: "Brand Intelligence From Noisy Asset Labels",
                paragraphs: [
                    "A two-stage brand-description pipeline extracts unique attributes, maps noisy variations into consistent categories, consolidates themes and ad concepts, and writes normalized output back to each brand profile.",
                    "Normalization runs asynchronously in chunks and reuses existing mappings, so repeated jobs strengthen the taxonomy rather than recreate it. Expensive synthesis stays in independently retryable Batch stages, away from request-response APIs.",
                ],
            },
            {
                heading: "Competitor Gap Analysis and Recommendations",
                paragraphs: [
                    "The recommendation engine compares a primary brand with selected competitors, chunks large inputs to stay within model limits, identifies concepts competitors use where the primary brand is absent, and generates brand-specific creative guidance.",
                    "Cross-competitor recommendations are deduplicated, grouped under canonical themes, summarized, and linked to supporting ads. Intermediate and final artifacts remain inspectable in S3, creating traceability from source analysis to the recommendation shown in the product.",
                ],
            },
            {
                heading: "Reliability, Recovery, and Visibility",
                paragraphs: [
                    "The system expects source URLs to expire, downloads to time out, files to be malformed, and models to occasionally return invalid JSON. Bounded batches, explicit status records, acknowledgement only after successful processing, idempotent embedding lookup, and dedicated dead-letter handlers make failures recoverable without rerunning an entire brand.",
                    "AWS X-Ray and structured Lambda logs provide infrastructure-level tracing. Processing records capture counts, timestamps, progress, and completion state, while scheduled jobs pace queue submissions so recurring refreshes do not overwhelm downstream services.",
                ],
            },
        ],
        flow: [
            { step: "01", title: "Schedule and Discover", text: "EventBridge queries MongoDB for brands due for acquisition or analysis and publishes brand-scoped work to FIFO SQS queues." },
            { step: "02", title: "Acquire Ad Metadata", text: "AWS Batch collects Meta ad-library records, normalizes payloads, extracts media URLs, preserves ad-to-asset mappings, and creates bounded batches." },
            { step: "03", title: "Persist Creative Assets", text: "Concurrent workers stream media into S3 while MongoDB tracks expected and completed batches before advancing the workflow." },
            { step: "04", title: "Analyze Images and Videos", text: "Images use structured vision analysis; videos combine sampled frame grids and audio transcripts. Both produce one normalized asset schema." },
            { step: "05", title: "Generate Embeddings", text: "Amazon Titan creates multimodal vectors; cached vectors prevent duplicate work while FAISS and DBSCAN reveal similarity groups." },
            { step: "06", title: "Build the Brand Profile", text: "Batch jobs consolidate asset-level attributes, normalize generated labels, map recurring themes, and update the persistent profile." },
            { step: "07", title: "Compare Competitors", text: "The recommendation service identifies creative gaps, groups overlapping ideas, and generates evidence-backed campaign guidance." },
            { step: "08", title: "Serve Product Insights", text: "MongoDB exposes current product state while S3 retains source media and versioned analysis artifacts for the UI, exports, and reprocessing." },
        ],
        shipped: [
            "AWS SAM infrastructure with ten Python Lambda functions, active tracing, structured logs, and environment-specific deployment support",
            "Containerized AWS Batch workloads for acquisition, analysis, embeddings, brand profiles, and recommendations",
            "SQS orchestration with FIFO ordering, controlled fan-out, explicit acknowledgement, and dead-letter recovery",
            "Async S3 ingestion with separate image and video batches plus completion tracking",
            "Schema-driven multimodal analysis for static advertisements and video understanding from frame grids plus audio",
            "Amazon Titan multimodal embeddings with caching and 1,024-dimensional output",
            "FAISS similarity processing and DBSCAN creative clustering",
            "MongoDB models spanning brands, ads, assets, attributes, embeddings, processing state, and operational logs",
            "Multi-stage brand synthesis and competitor-aware creative recommendations",
            "Scheduled refresh and re-analysis workflows for continuously updated intelligence",
        ],
        hard: [
            { title: "Different Compute Profiles", text: "Metadata fetching, media streaming, video decoding, multimodal inference, and vector clustering need very different resources. Coordination lives in Lambda, durable hand-offs in SQS, binary assets in S3, and compute-heavy stages in containerized Batch jobs." },
            { title: "Understanding Video Efficiently", text: "A thumbnail misses narrative while every frame is prohibitively expensive. Timeline sampling, compact contact sheets, and audio transcription preserve creative sequence and messaging while keeping inference bounded." },
            { title: "Turning Probabilistic Output Into Product Data", text: "LLMs vary their labels across runs. JSON Schema constrains the first layer; later mapping passes consolidate synonyms, reuse prior categories, group concept titles, and deduplicate recommendations before results reach the product." },
            { title: "Maintaining Identity Across the Pipeline", text: "One Meta ad can contain multiple cards, images, previews, and videos. Explicit mapping records and deterministic S3 keys preserve the correct brand and archive ID through concurrent download, analysis, and embedding jobs." },
            { title: "Recovering From Partial Failure", text: "Bad URLs and transient providers are inevitable at scale. Per-batch progress, idempotent embedding lookup, delayed acknowledgement, and DLQ processors retry the failed unit without rerunning an entire brand." },
        ],
        technology: [
            { label: "Backend", value: "Python 3.12, async I/O, concurrent futures, REST integrations" },
            { label: "AI", value: "OpenAI multimodal models, structured outputs, audio transcription, Amazon Titan embeddings" },
            { label: "Data", value: "MongoDB, Amazon S3, Pandas, JSON/CSV artifacts" },
            { label: "Search & ML", value: "FAISS, DBSCAN, NumPy, OpenCV" },
            { label: "Cloud", value: "AWS Lambda, Batch, SQS, EventBridge, SAM, ECR, X-Ray" },
            { label: "Delivery", value: "Docker, infrastructure as code, environment-aware serverless deployments" },
        ],
        ctaText: "From ingestion and multimodal analysis to recommendations and cloud infrastructure, I build the complete AI system — not just the model call.",
    },
];

export default caseStudies;
