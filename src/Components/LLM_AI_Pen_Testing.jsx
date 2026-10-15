import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import MiddleComponent from "./middleComponent.jsx";
import TiersSection from "./TierSection.jsx";
import Strelica from './Strelica.jsx'

//  eyebrow = "Options to match your timeline, budget, and maturity.",
//   heading = ["Flexible Tiers.", "Confidence, Delivered."], // svaki element = jedan red naslova
//   tiers = DEFAULT_TIERS,
//   buttonLabel = "View Service Details",

function LLM_AI_Pen_Testing(){

    return (
    <>
            <HeaderComponent HeaderText={'LLM & AI Pen Testing'} pageHeaderText={'Your LLM features are a new attack surface. We attack your chatbots, copilots, RAG pipelines, and agent workflows with prompt injection, jailbreaking, system-prompt extraction, training-data and PII exfiltration, and tool-use abuse. Every finding is mapped against the OWASP LLM Top 10, and we show you exactly what an attacker could make your model do.'}/>
            <TiersSection
  eyebrow="AI Security Lifecycle"
  heading={["From Attack Surface Mapping", "to Reproducible Mitigations."]}
  tiers={[
    {
      title: "AI Attack Surface Mapping",
      lead: "Models, endpoints, agents, data flows.",
      text: "Full inventory of every model, endpoint, agent, and data flow that makes up your AI system.",
      to: "/professional-services/llm-ai-pen-testing",
    },
    {
      title: "Adversarial Prompting",
      lead: "Jailbreaks and injection chains.",
      text: "Manual jailbreaks and injection chains against your guardrails — no automated scanner does this properly.",
      to: "/professional-services/llm-ai-pen-testing",
    },
    {
      title: "Agent Abuse & Reporting",
      lead: "Function calling and plugins.",
      text: "Escalation through function calling, plugins, and connected systems — with reproducible attack transcripts and mitigations for your ML team.",
      to: "/professional-services/llm-ai-pen-testing",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default LLM_AI_Pen_Testing;