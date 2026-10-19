import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import Strelica from "./Strelica.jsx";
import TiersSection from "./TierSection.jsx";
import MiddleComponent from "./middleComponent.jsx";

function ClaudAuditAssesment() {
  return (
    <>
      <HeaderComponent
        HeaderText={"Cloud Audit Assessment"}
        pageHeaderText={`Misconfiguration is the #1 cause of cloud breaches. We manually review your IAM roles, S3 permissions, and Kubernetes clusters to ensure you aren't the next headline. We map findings against CIS Benchmarks and best practices.`}
      />

      <TiersSection
        eyebrow="Cloud Security Audit Lifecycle"
        heading={["From Access Review", "to Hardened Policies."]}
        tiers={[
          {
            title: "Access Review",
            lead: "Identifying who has the keys.",
            text: "Full review of IAM roles, service accounts, and human identities to find over-permissioned paths.",
            to: "/professional-services/cloud-audit-assesment",
          },
          {
            title: "Public Exposure & Secrets",
            lead: "Hunting for exposed resources.",
            text: "We scan for public buckets, exposed databases, and hardcoded credentials scattered across your environment.",
            to: "/professional-services/cloud-audit-assesment",
          },
          {
            title: "Hardening",
            lead: "Actionable policy remediation.",
            text: "You receive concrete JSON policies and configuration changes to lock down your cloud tenancy.",
            to: "/professional-services/cloud-audit-assesment",
          },
        ]}
        buttonLabel="View Service Details"
      />

      <MiddleComponent />
      <Strelica />
      <FooterComponent />
    </>
  );
}

export default ClaudAuditAssesment;