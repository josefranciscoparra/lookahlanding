export const pricingTiers = [
  {
    id: 1,
    title: "Essentials",
    description: "For creating impressive tools that generate results.",
    price: "$19 USD",
    priceInfo: "Seat per month, 2 seats max",
    buttonLabel: "Start a free trial",

    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
  },
  {
    id: 2,
    title: "Business",
    description: "For seamless integrations and sending tools in bulk.",
    price: "$49 USD",
    priceInfo: "Seat cost per month",
    buttonLabel: "Start a free trial",

    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    popular: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
];
export const tiers = [
  {
    id: 1,
    plan: "Basic plan",
    price: "$49",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",

    highlight: false,
  },
  {
    id: 2,
    plan: "Business plan",
    price: "$79",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Basic</b> features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    icon: "unicon-course",
    buttonText: "Start a free trial",

    highlight: true,
  },
  {
    id: 3,
    plan: "Enterprise plan",
    price: "$199",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Business</b> features",
      "Unlimited files uploads",
      "Real-time team collaboration",
      "SSO support and custom user roles",
      "Bulk send & Forms",
    ],
    icon: "unicon-building",
    buttonText: "Book a demo",

    highlight: false,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    description: "For creating impressive tools that generate results.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    linkText: "Get started",

    additionalClasses: "",
  },
  {
    title: "Pro",
    price: "$79",
    description: "For seamless integrations and sending tools in bulk.",
    features: [
      "Access to all Starter features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    linkText: "Start a free trial",

    additionalClasses:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
    badge: "Popular",
  },
];

export const tiers2 = [
  {
    name: "Gratis",
    price: "$0",
    description: "Prueba nuestra <b>IA de moda</b> sin compromiso.",
    details: "5 imágenes al mes",
    buttonClass: "btn-secondary",
    features: [
      "5 generaciones mensuales",
      "Resolución estándar (1024x1024)",
      "Modelos básicos incluidos",
      "Biblioteca básica de prendas",
      "Marca de agua",
      "Soporte por email",
    ],
  },
  {
    name: "Profesional",
    price: "$49",
    description: "Para tiendas online y <b>catálogos profesionales</b>.",
    details: "100 imágenes al mes",
    buttonClass: "btn-primary",
    features: [
      "100 generaciones mensuales",
      "Alta resolución (2048x2048)",
      "Todos los modelos premium",
      "Biblioteca completa de prendas",
      "Sin marca de agua",
      "Soporte prioritario 24/7",
    ],
    offer: "Más Popular",
  },
  {
    name: "Empresa",
    price: "$199",
    description: "Solución completa para <b>grandes marcas</b>",
    details: "Imágenes ilimitadas",
    buttonClass: "btn-secondary",
    features: [
      "Generaciones ilimitadas",
      "Ultra HD (4K)",
      "Modelos personalizados",
      "API dedicada",
      "Entrenamiento de IA personalizado",
      "Soporte dedicado y SLA",
    ],
  },
];

export const tiers3 = [
  {
    title: "Essentials",
    description: "For creating impressive tools that generate results.",
    price: "$19 USD",
    yearlyPrice: "$12 USD",
    priceDetails: "Seat per month, 2 seats max",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
    isPopular: false,
  },
  {
    title: "Business",
    description: "For seamless integrations and sending tools in bulk.",
    price: "$49 USD",
    yearlyPrice: "$32 USD",
    priceDetails: "Seat cost per month",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    description: "For large companies with complex Tool workflows.",
    price: "Let’s talk",
    yearlyPrice: "Let’s talk",
    priceDetails: "Per‑seat or per‑tool pricing",
    linkText: "Contact sales",
    linkSubtext: "Respond within 24 hrs max",
    features: [
      "Unlimited files uploads",
      "Real-time tracking and notifications",
      "User performance",
      "SSO support and custom user roles",
      "Bulk send & Forms*",
    ],
    isPopular: false,
  },
];
