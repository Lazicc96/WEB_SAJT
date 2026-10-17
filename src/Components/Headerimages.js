// Slika za header svake stranice (ruta -> putanja u /public)
// Slike su u: public/images/headers/
// VAŽNO: ključevi su pisani MALIM slovima. getHeaderImage ispod pretvara
// trenutnu rutu u mala slova, pa radi i za /Web-Application-Pen-Testing.
// Ključevi moraju da se poklapaju sa path-ovima iz routera (sa tvojim pravopisom: assesment, awarenes, readines).
export const HEADER_IMAGES = {
  // Opšte stranice
  "/": "/images/headers/home.svg",
  "/contact": "/images/headers/contact.svg",
  "/managed-services": "/images/headers/managed-services.svg",

  // Kategorije
  // "/professional-services/penetration-testing": "/images/headers/penetration-testing.svg",
  "/professional-services/assessments-training": "/images/headers/assessments-training.svg",
  "/professional-services/compliance-advisory": "/images/headers/compliance-advisory.svg",

  // Penetration Testing
  "/professional-services/web-application-pen-testing": "/images/headers/web-application-pen-testing.svg",
  "/professional-services/external-network-pen-testing": "/images/headers/external-network-pen-testing.svg",
  "/professional-services/internal-network-pen-testing": "/images/headers/internal-network-pen-testing.svg",
  "/professional-services/llm-ai-pen-testing": "/images/headers/llm-ai-pen-testing.svg",
  "/professional-services/social-engineering": "/images/headers/social-engineering.svg",
  "/professional-services/red-team-ops": "/images/headers/red-team-ops.svg",
  "/professional-services/iot-hardware-hacking": "/images/headers/iot-hardware-hacking.svg",

  // Assessments & Training (ključevi sa tvojim pravopisom iz routera)
  "/professional-services/vulnerability-assesment": "/images/headers/vulnerability-assessment.svg",
  "/professional-services/cloud-audit-assesment": "/images/headers/cloud-audit-assessment.svg",
  "/professional-services/sec-awarenes-training": "/images/headers/security-awareness-training.svg",

  // Compliance and advisory
  "/professional-services/fractional-ciso": "/images/headers/fractional-ciso.svg",
  "/professional-services/compliance-readines": "/images/headers/compliance-readiness.svg",
  "/professional-services/remediation-assistance": "/images/headers/remediation-assistance.svg",

  // Incident Response i Digital Forensic
  "/professional-services/incident-response": "/images/headers/incident-response.svg",
  "/professional-services/digital-forensic": "/images/headers/digital-forensic.svg",

  // Ranije stranice (ostaju)
  "/professional-services/network-assessment": "/images/headers/network-assessment.svg",
  "/professional-services/physical-security-systems-assessment": "/images/headers/physical-security-systems-assessment.svg",
  "/professional-services/skyrocket-accelerated-gap-analysis": "/images/headers/skyrocket-accelerated-gap-analysis.svg",
  "/professional-services/api-security-assessment": "/images/headers/api-security-assessment.svg",
  "/professional-services/compromise-assessment": "/images/headers/compromise-assessment.svg",
  "/professional-services/vciso-service": "/images/headers/vciso-service.svg",
  "/professional-services/policy-development": "/images/headers/policy-development.svg",
  "/professional-services/solution-implementation-cybersecurity": "/images/headers/solution-implementation-cybersecurity.svg",
  "/professional-services/training-tabletop-exercise": "/images/headers/training-tabletop-exercise.svg",
  "/professional-services/training-user-awareness": "/images/headers/training-user-awareness.svg",
  "/professional-services/training-phishing-exercises": "/images/headers/training-phishing-exercises.svg",
};

export const DEFAULT_HEADER_IMAGE = "/images/headers/home.svg";

// Vraća sliku za trenutnu rutu
export function getHeaderImage(pathname) {
  const key = pathname.toLowerCase();

  if (HEADER_IMAGES[key]) {
    return HEADER_IMAGES[key];
  }
  return DEFAULT_HEADER_IMAGE;
}