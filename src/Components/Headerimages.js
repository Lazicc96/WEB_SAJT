// Slika za header svake stranice (ruta -> putanja u 
// Slike stavi u: publicimage/headers/
export const HEADER_IMAGES = {
  "/": "/images/headers/home.svg",
  "/about": "/images/headers/about.svg",
  "/contact": "/images/headers/contact.svg",
  "/managed-services": "/images/headers/managed-services.svg",
  "/portfolio": "/images/headers/portfolio.svg",
  "/professional-services": "/images/headers/professional-services.svg",

  // Assessments
  "/professional-services/network-assessment": "/images/headers/network-assessment.svg",
  "/professional-services/physical-security-systems-assessment": "/images/headers/physical-security-systems-assessment.svg",
  "/professional-services/skyrocket-accelerated-gap-analysis": "/images/headers/skyrocket-accelerated-gap-analysis.svg",
  "/professional-services/api-security-assessment": "/images/headers/api-security-assessment.svg",
  "/professional-services/compromise-assessment": "/images/headers/compromise-assessment.svg",
  "/professional-services/penetration-testing": "/images/headers/penetration-testing.svg",

  // Strategic & Advisory
  "/professional-services/vciso-service": "/images/headers/vciso-service.svg",
  "/professional-services/policy-development": "/images/headers/policy-development.svg",

  // Solution Implementation
  "/professional-services/solution-implementation-cybersecurity": "/images/headers/solution-implementation-cybersecurity.svg",

  // Training Services
  "/professional-services/training-tabletop-exercise": "/images/headers/training-tabletop-exercise.svg",
  "/professional-services/training-user-awareness": "/images/headers/training-user-awareness.svg",
  "/professional-services/training-phishing-exercises": "/images/headers/training-phishing-exercises.svg",

  // Incident Response
  "/professional-services/incident-response": "/images/headers/incident-response.svg",
};

export const DEFAULT_HEADER_IMAGE = "/images/headers/home.svg";

// Vraca sliku za trenutnu rutu 
export function getHeaderImage(pathname) {
  if (HEADER_IMAGES[pathname]) {
    return HEADER_IMAGES[pathname];
  }
  return DEFAULT_HEADER_IMAGE;
}