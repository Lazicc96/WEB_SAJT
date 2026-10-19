// tab(naslov, tekst, [tačke])
const tab = (title, text, points = []) => ({ title, text, points });

// Usluga: uvek Scope / Approach / Outcome, svaki sa [tekst, [tačke]]
const t = (scope, approach, outcome) => [
  tab("Scope", scope[0], scope[1]),
  tab("Approach", approach[0], approach[1]),
  tab("Outcome", outcome[0], outcome[1]),
];

export const PAGE_TABS = {
  /*  Sve stranice \ */
  "/": [
    tab(
      "Offensive Security",
      "We attack your systems the way a real adversary would: web applications, networks, cloud, AI features and even your people. Instead of a scanner printout full of noise, you get proof of what can actually be broken, how an attacker would chain it together and what it would cost you.",
      ["Web, network, cloud and AI testing", "Manual work by experienced testers", "Findings proven, never guessed"]
    ),
    tab(
      "Advisory & Compliance",
      "Most growing companies don't have a security leader, but customers, auditors and insurers still expect one. We provide fractional CISO leadership, practical policies and audit preparation, so security becomes a clear plan with owners and deadlines instead of a pile of questionnaires.",
      ["Fractional and virtual CISO", "Policies written for your business", "Audit and customer review readiness"]
    ),
    tab(
      "Response & Training",
      "When something goes wrong, speed and clarity decide how much damage is done. We contain incidents, work out how the attacker got in and help you recover. Before that happens, we train your people and rehearse the worst day so nobody is improvising under pressure.",
      ["Incident response and forensics", "Phishing simulations and awareness", "Tabletop crisis exercises"]
    ),
  ],

  "/managed-services": [
    tab(
      "Always-on Coverage",
      "A yearly audit tells you how secure you were on one day. Managed services keep watching afterwards: recurring testing, continuous monitoring and regular reviews of what changed in your environment. New systems, new people and new vulnerabilities appear every week, and your protection moves with them.",
      ["Recurring testing and reviews", "Monitoring between engagements", "Coverage that adapts as you grow"]
    ),
    tab(
      "Real People",
      "You work with a named team that learns your infrastructure, your risks and your business priorities. When something looks wrong, you talk to someone who already knows the context, not to a rotating help desk that starts every conversation from zero.",
      ["A dedicated, named team", "Direct line when something is urgent", "Context that builds over time"]
    ),
    tab(
      "Reports You Can Read",
      "Every month you get a short, plain-language report: what we found, what was fixed, what is still open and which decisions need your attention. It is written for managers and engineers alike, so security stays a business conversation instead of a technical mystery.",
      ["Clear monthly summaries", "Open risks with recommended decisions", "Progress you can show to management"]
    ),
  ],

  /* ---------- Kategorije ---------- */
  "/professional-services/penetration-testing": [
    tab(
      "Applications",
      "Your web applications, APIs and AI-powered features are the front door for customers and attackers alike. We test them manually, going beyond automated checks to find the logic flaws, broken access controls and chained weaknesses that scanners cannot see.",
      ["Web applications and APIs", "AI and LLM-powered features", "Business logic and access control flaws"]
    ),
    tab(
      "Networks",
      "We look at your network from both sides of the wall: what an outsider can reach from the internet, and how far a single compromised device could get once inside. The goal is a real attack path, not a theoretical list of open ports.",
      ["External exposure testing", "Internal movement and escalation", "Segmentation and Active Directory review"]
    ),
    tab(
      "People & Devices",
      "Some of the most effective attack paths never touch your firewall. Social engineering, full red team operations and hardware hacking test the human and physical layers that technical controls alone cannot protect.",
      ["Phishing, calls and impersonation", "Goal-driven red team operations", "IoT and embedded device testing"]
    ),
  ],

  "/professional-services/assessments-training": [
    tab(
      "Assessments",
      "Assessments give you an honest map of your security posture. Vulnerability, cloud, network, API and physical reviews show where you are weak, how serious each weakness is and what should be fixed first, so your budget goes where it reduces the most risk.",
      ["Vulnerability and cloud reviews", "Network, API and physical checks", "Prioritized by real risk"]
    ),
    tab(
      "Awareness",
      "Technology cannot stop an employee who has never been taught what an attack looks like. Our awareness programs run throughout the year and turn your staff from the most common entry point into an active layer of defense.",
      ["Role-based awareness programs", "Short, practical sessions", "Measurable improvement over time"]
    ),
    tab(
      "Exercises",
      "Policies on paper only matter if people can follow them under stress. Phishing simulations and tabletop exercises test how your people and processes actually behave, and show you the gaps while the stakes are still low.",
      ["Realistic phishing campaigns", "Facilitated crisis scenarios", "Lessons turned into action items"]
    ),
  ],

  "/professional-services/compliance-advisory": [
    tab(
      "Leadership",
      "A full-time CISO is out of reach for many companies, yet security decisions still need an owner. Our fractional and virtual CISO services bring senior leadership into your team on a flexible schedule, from strategy and risk management to board and customer communication.",
      ["Fractional and virtual CISO", "Strategy, risk and reporting", "Senior experience without a full-time cost"]
    ),
    tab(
      "Readiness",
      "Frameworks and regulations become manageable once you know exactly where you stand. We run gap analyses, write the policies and prepare the evidence, so audits and customer security reviews stop being last-minute emergencies.",
      ["Gap analysis against your framework", "Policies and procedures", "Audit preparation and evidence"]
    ),
    tab(
      "Remediation",
      "Findings only reduce risk when they are closed. We work alongside your team to fix the issues, deploy the right controls and verify the result, so your report ends with solved problems instead of a longer to-do list.",
      ["Hands-on help with fixes", "Security tool deployment", "Retesting to confirm closure"]
    ),
  ],

  /* ---------- Penetration Testing ---------- */
  "/professional-services/web-application-pen-testing": t(
    ["We cover the whole application your customers rely on: login and session handling, access control, input handling, file uploads, payment flows and the business logic that makes your product unique. Testing follows the OWASP Top 10 and goes well beyond it.", ["Authentication and sessions", "Injection and access control", "Business logic abuse"]],
    ["Automated tools find the easy bugs, so we use them only as a starting point. The real work is manual: reading how the application behaves, thinking like an attacker and chaining small weaknesses into something that actually reaches your data.", ["Manual testing first", "Authenticated and unauthenticated views", "Safe, agreed testing windows"]],
    ["You receive a report written for two audiences: an executive summary for management and a technical section for developers. Every finding includes evidence, severity, business impact and clear fix guidance, followed by a retest once you have patched.", ["Proof for every finding", "Developer-ready fix steps", "Retest after remediation"]]
  ),

  "/professional-services/external-network-pen-testing": [
    tab(
      "Scope",
      "Everything of yours that faces the internet: servers, VPN gateways, mail systems, remote access, exposed admin panels and forgotten subdomains. Companies are often surprised by how much of their footprint they no longer remember owning.",
      ["Servers, VPNs and mail gateways", "Forgotten and shadow assets", "Exposed admin and test systems"]
    ),
    tab(
      "Approach",
      "We start the way an attacker does: mapping your public footprint from the outside, identifying what is reachable and testing each service for weaknesses, weak credentials and misconfigurations. Anything exploitable is verified carefully and documented.",
      ["Attack surface discovery", "Service and credential testing", "Careful, non-destructive exploitation"]
    ),
    tab(
      "Outcome",
      "A clear picture of what the internet can see and what it can break into. You get a prioritized list of exposures, which ones are actually exploitable and what to close first, so the highest risks disappear quickly.",
      ["Complete exposure inventory", "Exploitable issues ranked first", "Concrete hardening steps"]
    ),
  ],

  "/professional-services/internal-network-pen-testing": [
    tab(
      "Scope",
      "The inside of your network: Active Directory, file shares, internal applications, workstation and server configuration, network segmentation and the paths that let a low-privilege user become an administrator.",
      ["Active Directory and identity", "Shares, services and segmentation", "Privilege escalation paths"]
    ),
    tab(
      "Approach",
      "We assume a breach, because sooner or later one happens. Starting from a single compromised laptop or guest connection, we show how far an attacker can move, which credentials they can collect and which systems fall one after another.",
      ["Assumed-breach starting point", "Lateral movement testing", "Credential and trust abuse"]
    ),
    tab(
      "Outcome",
      "You see the exact attack path from the first foothold to full control of the domain, with evidence at each step. Then you get the targeted fixes that break that path, so a single mistake can no longer turn into a company-wide incident.",
      ["Step-by-step attack narrative", "Fixes that break the path", "Retest of the critical chain"]
    ),
  ],

  "/professional-services/llm-ai-pen-testing": [
    tab(
      "Scope",
      "Chatbots, copilots, retrieval systems and any feature that sends user input to a language model. We look at the prompts, the model, the connected tools and plugins, and the data the AI can reach on your behalf.",
      ["Prompt injection and jailbreaks", "Data leakage and over-sharing", "Abuse of connected tools"]
    ),
    tab(
      "Approach",
      "The real risk of AI features lives in how they connect to everything else. We test whether the model can be tricked into revealing private data, calling tools it should not use or acting on instructions hidden in documents and web pages.",
      ["Direct and indirect injection", "Tool and plugin abuse testing", "Access control around AI features"]
    ),
    tab(
      "Outcome",
      "You get demonstrations of what your AI can be talked into doing, with practical guardrails and architecture changes to stop it. The result is an AI feature you can put in front of customers without hoping nobody tries to abuse it.",
      ["Proof-of-concept attack examples", "Guardrail and design fixes", "Safer rollout decisions"]
    ),
  ],

  "/professional-services/social-engineering": [
    tab(
      "Scope",
      "Attackers often skip the firewall and go straight to your people. We cover phishing, phone-based pretexting, impersonation and, where authorized, on-site attempts, always within rules agreed in advance.",
      ["Email and SMS phishing", "Phone-based pretexting", "Impersonation scenarios"]
    ),
    tab(
      "Approach",
      "Campaigns are realistic and tailored to your company, using the kind of pretexts real attackers use against organizations like yours. Results are measured honestly and used to improve training, never to shame individual employees.",
      ["Authorized, tailored campaigns", "Honest, anonymous reporting", "No blame culture"]
    ),
    tab(
      "Outcome",
      "You get real numbers: who clicked, who reported and who handed over access. Those results point directly to where training, technical controls and reporting processes need to improve first.",
      ["Click and report rates", "Technical control gaps", "Training priorities that follow the data"]
    ),
  ],

  "/professional-services/red-team-ops": [
    tab(
      "Scope",
      "A red team operation is a full-scope attack aimed at a defined objective, such as reaching customer data or controlling a critical system. It spans technology, people and process, and it tests your defenders as much as your defenses.",
      ["Objective-based attack scenarios", "Technology, people and process", "Defined rules of engagement"]
    ),
    tab(
      "Approach",
      "We operate quietly and patiently, the way a determined adversary would, using multiple techniques over time. The point is not to find every vulnerability but to see whether your team can detect and stop a real intrusion.",
      ["Stealth and persistence", "Chained, multi-stage attacks", "Detection and response testing"]
    ),
    tab(
      "Outcome",
      "You receive a complete attack narrative, a map of what your monitoring did and did not see, and a joint debrief with your defenders. Every lesson is turned into a concrete improvement to detection and response.",
      ["Full attack storyline", "Detection gap analysis", "Debrief with your blue team"]
    ),
  ],

  "/professional-services/iot-hardware-hacking": [
    tab(
      "Scope",
      "Connected products are more than a circuit board. We assess the hardware, firmware, debug interfaces, wireless protocols, and the mobile apps and cloud services the device depends on.",
      ["Hardware and debug interfaces", "Firmware and update process", "Radio, mobile and cloud links"]
    ),
    tab(
      "Approach",
      "We open the device, extract the firmware and analyze it layer by layer, looking for hardcoded secrets, weak update mechanisms and insecure communication. Then we test how a weakness in one device could affect the whole fleet.",
      ["Firmware extraction and analysis", "Physical interface testing", "Backend and fleet impact"]
    ),
    tab(
      "Outcome",
      "You get verified vulnerabilities with clear reproduction steps and mitigations your engineers can realistically ship, whether that means a firmware patch, a design change or a better update process for future releases.",
      ["Reproducible findings", "Practical engineering fixes", "Guidance for future designs"]
    ),
  ],

  /* ---------- Assessments & Training ---------- */
  "/professional-services/vulnerability-assesment": t(
    ["Servers, workstations, network devices and applications across your environment, checked for known weaknesses such as missing patches, insecure configurations and outdated software. Broad coverage is the goal here.", ["Servers and workstations", "Network devices", "Applications and services"]],
    ["We run authenticated scans for accurate results, then validate the findings by hand. That removes false alarms and shows which issues are real, so your IT team does not waste time chasing noise.", ["Authenticated scanning", "Manual validation", "False positives removed"]],
    ["A risk-ranked remediation list tells your team exactly what to patch first and why. Repeat assessments let you show measurable progress to management, auditors and customers.", ["Ranked by real risk", "Clear patching priorities", "Trackable progress"]]
  ),

  "/professional-services/cloud-audit-assesment": t(
    ["Your AWS, Azure or Google Cloud environment: identity and access, storage, networking, logging, encryption and secrets management. Cloud breaches usually start with one misconfiguration nobody noticed.", ["Identity and permissions", "Storage and network exposure", "Logging and secrets"]],
    ["We compare your configuration with recognized benchmarks and manually test the mistakes attackers look for first, such as public storage, over-privileged roles and exposed credentials.", ["Benchmark-based review", "Manual misconfiguration hunting", "Least-privilege checks"]],
    ["You get a cloud security scorecard and a fix plan ordered by risk, with concrete configuration changes for your engineers, so the most dangerous gaps are closed first.", ["Clear risk scorecard", "Prioritized fix plan", "Actionable configuration guidance"]]
  ),

  "/professional-services/network-assessment": t(
    ["Your network architecture, segmentation, firewalls, wireless and remote access across offices and infrastructure. We look at how the network is designed as well as how it is configured.", ["Architecture and segmentation", "Firewalls and remote access", "Wireless networks"]],
    ["Configuration review is combined with hands-on testing, so we can show whether the design holds up in practice and not just on a diagram.", ["Configuration review", "Hands-on validation", "Design weakness analysis"]],
    ["You get a clear picture of where your network is weak and a practical roadmap to harden it, in an order that fits your team and budget.", ["Weak points identified", "Hardening roadmap", "Priorities your team can follow"]]
  ),

  "/professional-services/api-security-assessment": t(
    ["REST, GraphQL and SOAP APIs: authentication, authorization, rate limiting, data exposure and business logic abuse. APIs often expose more than the application on top of them.", ["Authentication and authorization", "Excessive data exposure", "Rate limiting and abuse"]],
    ["We test each endpoint the way an attacker would, including undocumented and forgotten ones, and check whether one user can reach another user's data.", ["Endpoint-by-endpoint testing", "Undocumented endpoint discovery", "Object-level access checks"]],
    ["Findings are mapped to the OWASP API Security Top 10 and come with fixes your developers can apply immediately, plus guidance to prevent the same issues in new endpoints.", ["OWASP API Top 10 mapping", "Developer-ready fixes", "Secure design guidance"]]
  ),

  "/professional-services/physical-security-systems-assessment": t(
    ["Access control, cameras, alarm systems and the networked devices that protect your premises. Physical security increasingly runs on software, and software can be attacked.", ["Access control systems", "Cameras and alarms", "Networked security devices"]],
    ["On-site review and testing of the weak links that let someone walk in, clone a badge or switch systems off, always under authorization and with agreed boundaries.", ["On-site inspection", "Badge and lock testing", "Device and network review"]],
    ["A realistic view of how easily your premises can be breached, with prioritized fixes that combine technical, procedural and physical improvements.", ["Realistic breach assessment", "Prioritized improvements", "Procedure recommendations"]]
  ),

  "/professional-services/compromise-assessment": t(
    ["Endpoints, servers, user accounts and logs, examined for signs that an attacker is inside your environment right now or has been in the past.", ["Endpoints and servers", "Accounts and authentication logs", "Persistence mechanisms"]],
    ["We hunt across your environment using indicators of compromise and behavior analysis, looking for the quiet traces attackers leave when they try to stay hidden.", ["Threat hunting", "Indicator and behavior analysis", "Log and artifact review"]],
    ["A definitive answer to the question \"are we breached?\", backed by evidence. If the answer is yes, you also get immediate next steps for containment and investigation.", ["Evidence-based conclusion", "Containment guidance", "Hand-off to incident response"]]
  ),

  "/professional-services/sec-awarenes-training": t(
    ["A year-round awareness program for the whole company, covering phishing, passwords, data handling, social engineering and safe remote work, tailored to each role.", ["Phishing and passwords", "Data handling and privacy", "Safe remote work"]],
    ["Short, engaging modules delivered on a schedule, so security stays in people's minds instead of being a once-a-year checkbox. Content is adjusted to different teams and risk levels.", ["Short, regular modules", "Role-based content", "Scheduled reinforcement"]],
    ["Fewer risky clicks, more reported incidents and clear metrics you can share with management, auditors and customers who ask about your security culture.", ["Better reporting behavior", "Measurable metrics", "Audit-friendly evidence"]]
  ),

  "/professional-services/training-user-awareness": t(
    ["Live sessions for employees, managers and executives on the threats they really face: fake invoices, stolen accounts, impersonation and careless data sharing.", ["Employees and managers", "Executive-focused sessions", "Real-world threat examples"]],
    ["Practical, jargon-free workshops built around real attack examples, with room for questions. People learn by seeing what an attack looks like, not by reading policy text.", ["Interactive workshops", "No technical jargon", "Real attack walkthroughs"]],
    ["People who recognize an attack when they see it, know exactly who to tell and feel comfortable reporting something suspicious without fear of blame.", ["Faster recognition", "Clear reporting path", "A stronger security culture"]]
  ),

  "/professional-services/training-phishing-exercises": t(
    ["Simulated phishing across email, SMS and phone, tuned to look like the messages your staff will actually receive, from fake delivery notices to executive impersonation.", ["Email, SMS and phone", "Company-specific lures", "Different difficulty levels"]],
    ["Campaigns are authorized, controlled and increase in difficulty over time. Anyone who falls for one gets instant, friendly coaching at the moment it matters most.", ["Controlled, authorized campaigns", "Instant coaching", "Gradual difficulty increase"]],
    ["Click and report rates tracked over time, so you can see human risk going down and show real progress, backed by numbers rather than impressions.", ["Trend reporting", "Department-level insights", "Proof of improvement"]]
  ),

  "/professional-services/training-tabletop-exercise": t(
    ["A simulated crisis, such as ransomware or a data breach, played out with your leadership, IT, legal and communications teams around one table.", ["Ransomware and breach scenarios", "Leadership and IT together", "Legal and communications included"]],
    ["A facilitator walks the group through an evolving scenario and forces real decisions: who calls whom, what gets shut down, when customers are told. Confusion shows up here instead of in a real incident.", ["Facilitated, evolving scenario", "Decision-making under pressure", "Role and process gaps exposed"]],
    ["A refined incident response plan, a list of concrete improvements and a team that has already rehearsed the worst day before it arrives.", ["Updated response plan", "Action list with owners", "A better prepared team"]]
  ),

  /* ---------- Compliance & Advisory ---------- */
  "/professional-services/fractional-ciso": t(
    ["Security strategy, risk management, board and executive reporting, vendor oversight and incident readiness, led by an experienced security executive on a part-time basis.", ["Strategy and risk management", "Board and executive reporting", "Vendor and incident oversight"]],
    ["A senior security leader joins your team on a fixed schedule and works with your people day to day, with direct access when something urgent comes up in between.", ["Fixed monthly engagement", "Embedded in your team", "Direct access for urgent issues"]],
    ["Senior security leadership and a clear roadmap at a fraction of the cost of a full-time hire, with real ownership of decisions that otherwise get postponed.", ["Clear security roadmap", "Lower cost than a full-time CISO", "Decisions with an owner"]]
  ),

  "/professional-services/vciso-service": t(
    ["Ownership of your security program: policy direction, risk register, customer security questionnaires, vendor reviews and answers for auditors, handled for you.", ["Program ownership", "Customer questionnaires", "Vendor risk reviews"]],
    ["A virtual CISO adapts to your size, budget and growth stage, working remotely with regular check-ins and stepping up when a deal, audit or incident demands more attention.", ["Flexible engagement size", "Regular check-ins", "Scales with your needs"]],
    ["A security program that grows with your business and stops deals from stalling in security review, because customers see a mature, documented approach.", ["Faster customer approvals", "Documented, mature program", "Growth without security debt"]]
  ),

  "/professional-services/compliance-readines": t(
    ["The frameworks and regulations your customers and regulators ask about, such as ISO 27001, SOC 2, GDPR and NIS2. We help you work out which ones actually apply to you.", ["Framework selection", "Requirement mapping", "Scope definition"]],
    ["We map your current state to each requirement, close the gaps with practical controls and prepare the evidence and people for the audit itself.", ["Gap analysis", "Control implementation support", "Audit rehearsal"]],
    ["Audit-ready evidence, controls that work in daily operations and no surprises on audit day, plus a routine that keeps you compliant afterwards.", ["Organized evidence", "Working controls", "Ongoing compliance routine"]]
  ),

  "/professional-services/skyrocket-accelerated-gap-analysis": t(
    ["A fast, focused review of your security posture against the framework or customer requirement you must meet, without waiting months for a full assessment.", ["One framework, clearly scoped", "Policies, processes and technology", "Built for tight deadlines"]],
    ["Structured interviews and evidence checks compressed into days, so we reach a clear picture quickly and your team spends minimal time in meetings.", ["Short, structured interviews", "Evidence sampling", "Minimal disruption"]],
    ["A prioritized gap report and a realistic roadmap, ready to hand to your team, your auditor or the customer who asked for it.", ["Prioritized gap report", "Realistic roadmap", "Shareable summary"]]
  ),

  "/professional-services/policy-development": t(
    ["Security policies, procedures and standards: access control, incident handling, acceptable use, backup, vendor management and more, matched to the frameworks you follow.", ["Core security policies", "Procedures and standards", "Framework alignment"]],
    ["Documents are written for your actual business, with your tools and your processes, rather than copied from a template nobody has read.", ["Tailored to your company", "Plain, readable language", "Reviewed with your team"]],
    ["Clear, auditable policies that your people can follow and your auditors will accept, along with a simple process for keeping them up to date.", ["Audit-ready documents", "Policies people can follow", "Easy review cycle"]]
  ),

  "/professional-services/remediation-assistance": t(
    ["Fixing the findings from pen tests, assessments and audits: patching, hardening, configuration changes and code-level fixes across systems and applications.", ["Infrastructure and configuration", "Application-level fixes", "Hardening and patching"]],
    ["Our engineers work alongside your team, prioritizing by real risk and explaining each change, so fixes are made correctly and your people learn along the way.", ["Work alongside your team", "Risk-based prioritization", "Knowledge transfer"]],
    ["Findings are closed instead of just documented, and every fix is verified by a retest so you know the problem is actually gone.", ["Findings closed", "Verification by retest", "Updated risk picture"]]
  ),

  "/professional-services/solution-implementation-cybersecurity": t(
    ["Security tools that close the gaps your assessments uncovered: endpoint protection, monitoring, multi-factor authentication, email security and backup protection.", ["Endpoint and email security", "Monitoring and logging", "MFA and backup protection"]],
    ["Vendor-neutral selection, careful deployment and tuning, so the tool is really working and protecting you instead of being installed and forgotten.", ["Vendor-neutral selection", "Deployment and tuning", "Integration with your environment"]],
    ["Security tooling that fits your environment, is configured properly and is owned by your team, with documentation and training to run it long term.", ["Properly configured tools", "Documentation and training", "Clear ownership"]]
  ),

  /* ---------- Incident Response & Forensics ---------- */
  "/professional-services/incident-response": t(
    ["Ransomware, business email compromise, data breaches and active intrusions, handled from the first alert to full recovery.", ["Ransomware and extortion", "Account and email compromise", "Active intrusions and breaches"]],
    ["Rapid triage, containment and eradication, with clear communication to management throughout, so decisions are made on facts instead of panic.", ["Fast triage and containment", "Eradication of the attacker", "Clear updates to leadership"]],
    ["The attack is stopped, the cause is understood and you leave with a plan that makes sure it does not happen twice, including lessons for your team and your tools.", ["Attacker removed", "Root cause identified", "Recovery and prevention plan"]]
  ),

  "/professional-services/digital-forensic": t(
    ["Computers, servers, mobile devices, cloud accounts and logs, examined after an incident, a fraud case or an insider threat to establish exactly what happened.", ["Computers and servers", "Mobile devices and cloud accounts", "Logs and communications"]],
    ["Careful evidence collection and analysis that preserves the chain of custody, so findings hold up under scrutiny from insurers, regulators or in legal proceedings.", ["Forensically sound collection", "Chain of custody", "Detailed technical analysis"]],
    ["A factual timeline of what happened, who did it and what was affected, written so management, insurers and legal teams can all use it.", ["Event timeline", "Scope of impact", "Report for management and legal"]]
  ),
};

export const DEFAULT_TABS = PAGE_TABS["/"];

// Vraća tabove za trenutnu rutu (isti princip kao getHeaderImage)
export function getPageTabs(pathname) {
  const key = pathname.toLowerCase().replace(/\/$/, "") || "/";
  return PAGE_TABS[key] || DEFAULT_TABS;
}