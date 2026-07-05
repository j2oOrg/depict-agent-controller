const categories = [
  {
    id: "commerce",
    label: "Commerce",
    rail: "Sell",
    color: "#101014",
    options: [
      {
        name: "Depict",
        tag: "AI-native storefront",
        checkout: "Depict storefront",
        metrics: { conversion: 95, data: 88, launch: 82, clarity: 92, tracking: 86, load: 42 },
      },
      {
        name: "Shopify",
        tag: "Fast DTC launch",
        checkout: "Shopify storefront",
        metrics: { conversion: 87, data: 76, launch: 96, clarity: 90, tracking: 74, load: 30 },
      },
      {
        name: "Centra",
        tag: "Fashion enterprise",
        checkout: "Centra storefront",
        metrics: { conversion: 89, data: 82, launch: 70, clarity: 76, tracking: 80, load: 58 },
      },
    ],
  },
  {
    id: "storefront",
    label: "Storefront",
    rail: "Experience",
    color: "#ff6b57",
    options: [
      {
        name: "Headless React",
        tag: "Custom front end",
        metrics: { conversion: 91, data: 84, launch: 70, clarity: 78, tracking: 82, load: 62 },
      },
      {
        name: "Premium theme",
        tag: "Editorial launch",
        metrics: { conversion: 84, data: 72, launch: 93, clarity: 88, tracking: 72, load: 34 },
      },
      {
        name: "Mobile app shell",
        tag: "Loyalty surface",
        metrics: { conversion: 88, data: 86, launch: 74, clarity: 72, tracking: 86, load: 66 },
      },
      {
        name: "Marketplace",
        tag: "Multi-seller flow",
        metrics: { conversion: 80, data: 78, launch: 61, clarity: 64, tracking: 78, load: 74 },
      },
    ],
  },
  {
    id: "acquisition",
    label: "Acquisition",
    rail: "Acquire",
    color: "#27c7df",
    options: [
      {
        name: "Google Ads",
        tag: "Search demand",
        logo: { type: "image", src: "https://cdn.simpleicons.org/googleads", alt: "Google Ads logo" },
        metrics: { conversion: 91, data: 82, launch: 86, clarity: 86, tracking: 82, load: 38 },
      },
      {
        name: "Microsoft Ads",
        tag: "Bing intent",
        logo: { type: "microsoft", alt: "Microsoft Ads logo" },
        metrics: { conversion: 84, data: 78, launch: 86, clarity: 84, tracking: 78, load: 34 },
      },
      {
        name: "Meta Ads",
        tag: "Social discovery",
        logo: { type: "image", src: "https://cdn.simpleicons.org/meta", alt: "Meta logo" },
        metrics: { conversion: 82, data: 86, launch: 84, clarity: 78, tracking: 88, load: 44 },
      },
      {
        name: "TikTok Ads",
        tag: "Creator demand",
        logo: { type: "image", src: "https://cdn.simpleicons.org/tiktok", alt: "TikTok logo" },
        metrics: { conversion: 79, data: 82, launch: 78, clarity: 72, tracking: 82, load: 48 },
      },
      {
        name: "TrafficJunky",
        tag: "High-volume media",
        metrics: { conversion: 74, data: 69, launch: 74, clarity: 62, tracking: 70, load: 55 },
      },
    ],
  },
  {
    id: "discovery",
    label: "Search and recs",
    rail: "Convert",
    color: "#37c989",
    options: [
      {
        name: "Depict",
        tag: "AI recommendations",
        metrics: { conversion: 96, data: 88, launch: 84, clarity: 88, tracking: 88, load: 38 },
      },
      {
        name: "Algolia",
        tag: "Search-led catalog",
        metrics: { conversion: 88, data: 80, launch: 82, clarity: 82, tracking: 80, load: 46 },
      },
      {
        name: "Constructor",
        tag: "Enterprise discovery",
        metrics: { conversion: 92, data: 86, launch: 70, clarity: 76, tracking: 84, load: 60 },
      },
      {
        name: "Elastic",
        tag: "Custom relevance",
        metrics: { conversion: 84, data: 74, launch: 66, clarity: 64, tracking: 74, load: 72 },
      },
    ],
  },
  {
    id: "payment",
    label: "Payments",
    rail: "Pay",
    color: "#7d6af2",
    options: [
      {
        name: "Klarna",
        tag: "Pay later lift",
        cta: "Checkout with Klarna",
        metrics: { conversion: 93, data: 78, launch: 86, clarity: 84, tracking: 76, load: 40 },
      },
      {
        name: "Stripe",
        tag: "Developer friendly",
        cta: "Checkout with Stripe",
        metrics: { conversion: 89, data: 84, launch: 90, clarity: 90, tracking: 84, load: 34 },
      },
      {
        name: "Adyen",
        tag: "Global enterprise",
        cta: "Checkout with Adyen",
        metrics: { conversion: 91, data: 86, launch: 72, clarity: 76, tracking: 86, load: 58 },
      },
      {
        name: "PayPal",
        tag: "Wallet trust",
        cta: "Checkout with PayPal",
        metrics: { conversion: 85, data: 74, launch: 88, clarity: 82, tracking: 72, load: 38 },
      },
      {
        name: "Mollie",
        tag: "EU payments",
        cta: "Checkout with Mollie",
        metrics: { conversion: 86, data: 76, launch: 86, clarity: 84, tracking: 76, load: 36 },
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping",
    rail: "Fulfill",
    color: "#d6aa46",
    options: [
      {
        name: "Ingrid",
        tag: "Delivery experience",
        metrics: { conversion: 90, data: 80, launch: 84, clarity: 86, tracking: 78, load: 40 },
      },
      {
        name: "FedEx",
        tag: "Global carrier",
        metrics: { conversion: 82, data: 72, launch: 88, clarity: 82, tracking: 70, load: 34 },
      },
      {
        name: "Airmee",
        tag: "Urban same day",
        metrics: { conversion: 88, data: 76, launch: 82, clarity: 82, tracking: 74, load: 38 },
      },
      {
        name: "DHL",
        tag: "International reach",
        metrics: { conversion: 84, data: 74, launch: 86, clarity: 82, tracking: 72, load: 36 },
      },
      {
        name: "PostNord",
        tag: "Nordic coverage",
        metrics: { conversion: 83, data: 72, launch: 88, clarity: 84, tracking: 70, load: 32 },
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    rail: "Measure",
    color: "#2a8cff",
    options: [
      {
        name: "Mixpanel + GA4",
        tag: "Product and traffic",
        metrics: { conversion: 88, data: 94, launch: 84, clarity: 86, tracking: 96, load: 42 },
      },
      {
        name: "Segment",
        tag: "CDP routing",
        metrics: { conversion: 87, data: 96, launch: 72, clarity: 78, tracking: 96, load: 60 },
      },
      {
        name: "Amplitude",
        tag: "Product analytics",
        metrics: { conversion: 86, data: 92, launch: 80, clarity: 84, tracking: 92, load: 46 },
      },
      {
        name: "GTM server-side",
        tag: "Durable tags",
        metrics: { conversion: 86, data: 90, launch: 74, clarity: 76, tracking: 94, load: 58 },
      },
    ],
  },
  {
    id: "retention",
    label: "Retention",
    rail: "Retain",
    color: "#f05a8a",
    options: [
      {
        name: "Klaviyo",
        tag: "Email and SMS",
        metrics: { conversion: 90, data: 84, launch: 88, clarity: 88, tracking: 84, load: 36 },
      },
      {
        name: "Customer.io",
        tag: "Lifecycle journeys",
        metrics: { conversion: 88, data: 88, launch: 78, clarity: 78, tracking: 88, load: 52 },
      },
      {
        name: "Mailchimp",
        tag: "Lean campaigns",
        metrics: { conversion: 80, data: 74, launch: 92, clarity: 86, tracking: 74, load: 28 },
      },
      {
        name: "Attentive",
        tag: "SMS commerce",
        metrics: { conversion: 87, data: 80, launch: 82, clarity: 80, tracking: 80, load: 44 },
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    rail: "Operate",
    color: "#6e7681",
    options: [
      {
        name: "Gorgias",
        tag: "Support desk",
        metrics: { conversion: 84, data: 76, launch: 88, clarity: 86, tracking: 74, load: 34 },
      },
      {
        name: "Loop Returns",
        tag: "Returns flow",
        metrics: { conversion: 86, data: 78, launch: 84, clarity: 84, tracking: 76, load: 38 },
      },
      {
        name: "NetSuite",
        tag: "ERP backbone",
        metrics: { conversion: 84, data: 88, launch: 62, clarity: 66, tracking: 84, load: 78 },
      },
      {
        name: "Ongoing WMS",
        tag: "Warehouse flow",
        metrics: { conversion: 83, data: 82, launch: 72, clarity: 74, tracking: 80, load: 60 },
      },
    ],
  },
];

const presets = {
  nordic: {
    commerce: "Depict",
    storefront: "Headless React",
    acquisition: "Google Ads",
    discovery: "Depict",
    payment: "Klarna",
    shipping: "Ingrid",
    analytics: "Mixpanel + GA4",
    retention: "Klaviyo",
    operations: "Gorgias",
  },
  speed: {
    commerce: "Shopify",
    storefront: "Premium theme",
    acquisition: "Google Ads",
    discovery: "Algolia",
    payment: "Stripe",
    shipping: "FedEx",
    analytics: "Mixpanel + GA4",
    retention: "Mailchimp",
    operations: "Loop Returns",
  },
  enterprise: {
    commerce: "Centra",
    storefront: "Headless React",
    acquisition: "Microsoft Ads",
    discovery: "Constructor",
    payment: "Adyen",
    shipping: "DHL",
    analytics: "Segment",
    retention: "Customer.io",
    operations: "NetSuite",
  },
  performance: {
    commerce: "Shopify",
    storefront: "Mobile app shell",
    acquisition: "Meta Ads",
    discovery: "Depict",
    payment: "Stripe",
    shipping: "Airmee",
    analytics: "GTM server-side",
    retention: "Attentive",
    operations: "Gorgias",
  },
};

const state = { ...presets.nordic };

const railPicker = document.querySelector("#railPicker");
const flowCanvas = document.querySelector("#flowCanvas");
const stackList = document.querySelector("#stackList");
let draggedProvider = null;
let activeCategoryId = "payment";
let activePresetId = "nordic";
let activeAgentGoalId = "ltv";
let activeVisitorContextId = "paid";

const eventTemplates = [
  "Product viewed",
  "Recommendation clicked",
  "Add to cart",
  "Checkout started",
  "Payment selected",
  "Delivery promise viewed",
  "Purchase completed",
];

const visitorContexts = {
  paid: {
    title: "Controller-ranked catalog for paid-search intent",
    hero: "Outerwear first, matched for intent.",
    order: ["jacket", "trouser", "knit"],
    reasons: {
      jacket: "Agent promotes campaign match",
      trouser: "Agent builds coordinated set",
      knit: "Agent waits for browse depth",
    },
    metrics: [
      { label: "Source", value: "acquisition" },
      { label: "Intent score", value: "91" },
      { label: "Predicted AOV", value: "€410" },
    ],
    event: "Agent matched paid intent",
  },
  vip: {
    title: "Controller-ranked catalog for higher LTV",
    hero: "Welcome back, styled from your history.",
    order: ["knit", "jacket", "trouser"],
    reasons: {
      jacket: "Agent expands repeat basket",
      trouser: "Agent matches prior tailoring interest",
      knit: "Agent leads with lifecycle history",
    },
    metrics: [
      { label: "Source", value: "retention" },
      { label: "Repeat signal", value: "34%" },
      { label: "LTV lift", value: "+18%" },
    ],
    event: "Agent matched retention segment",
  },
  delivery: {
    title: "Promise-aware ranking from the controller",
    hero: "Ready-to-ship pieces, ranked first.",
    order: ["trouser", "knit", "jacket"],
    reasons: {
      jacket: "Agent defers slower option",
      trouser: "Agent surfaces fast promise",
      knit: "Agent prioritizes in-stock item",
    },
    metrics: [
      { label: "Source", value: "shipping" },
      { label: "Delivery promise", value: "1-2d" },
      { label: "Checkout lift", value: "+8%" },
    ],
    event: "Agent applied delivery promise",
  },
};

const providerLogoCatalog = {
  Depict: faviconLogo("depict.ai", "Depict logo"),
  Shopify: simpleIcon("shopify", "Shopify logo"),
  Centra: faviconLogo("centra.com", "Centra logo"),
  "Headless React": simpleIcon("react", "React logo"),
  TrafficJunky: faviconLogo("trafficjunky.com", "TrafficJunky logo"),
  Algolia: simpleIcon("algolia", "Algolia logo"),
  Constructor: faviconLogo("constructor.com", "Constructor logo"),
  Elastic: simpleIcon("elastic", "Elastic logo"),
  Klarna: simpleIcon("klarna", "Klarna logo"),
  Stripe: simpleIcon("stripe", "Stripe logo"),
  Adyen: simpleIcon("adyen", "Adyen logo"),
  PayPal: simpleIcon("paypal", "PayPal logo"),
  Mollie: faviconLogo("mollie.com", "Mollie logo"),
  Ingrid: faviconLogo("ingrid.com", "Ingrid logo"),
  FedEx: simpleIcon("fedex", "FedEx logo"),
  Airmee: faviconLogo("airmee.com", "Airmee logo"),
  DHL: simpleIcon("dhl", "DHL logo"),
  PostNord: faviconLogo("postnord.com", "PostNord logo"),
  "Mixpanel + GA4": simpleIcon("mixpanel", "Mixpanel logo"),
  Segment: faviconLogo("segment.com", "Segment logo"),
  Amplitude: faviconLogo("amplitude.com", "Amplitude logo"),
  "GTM server-side": simpleIcon("googletagmanager", "Google Tag Manager logo"),
  Klaviyo: faviconLogo("klaviyo.com", "Klaviyo logo"),
  "Customer.io": faviconLogo("customer.io", "Customer.io logo"),
  Mailchimp: simpleIcon("mailchimp", "Mailchimp logo"),
  Attentive: faviconLogo("attentive.com", "Attentive logo"),
  Gorgias: faviconLogo("gorgias.com", "Gorgias logo"),
  "Loop Returns": faviconLogo("loopreturns.com", "Loop Returns logo"),
  NetSuite: faviconLogo("netsuite.com", "NetSuite logo"),
  "Ongoing WMS": faviconLogo("ongoingwarehouse.com", "Ongoing WMS logo"),
};

const graphPositions = {
  commerce: { x: 50, y: 11 },
  storefront: { x: 73, y: 21 },
  acquisition: { x: 84, y: 44 },
  discovery: { x: 75, y: 70 },
  payment: { x: 57, y: 86 },
  shipping: { x: 34, y: 83 },
  analytics: { x: 16, y: 64 },
  retention: { x: 16, y: 39 },
  operations: { x: 29, y: 21 },
};

const graphCenter = { x: 50, y: 52 };

const presetLabels = {
  nordic: "Nordic fashion launch",
  speed: "Fast Shopify launch",
  enterprise: "Enterprise headless build",
  performance: "Performance growth build",
};

const providerControlNotes = {
  commerce: "Catalog + orders",
  storefront: "UX + content rules",
  acquisition: "Campaign signals",
  discovery: "Search + recommendations",
  payment: "Checkout rules",
  shipping: "Delivery promise",
  analytics: "Events + attribution",
  retention: "Lifecycle journeys",
  operations: "Support + ops",
};

const loginCategoryRules = {
  commerce: {
    method: "API key",
    key: "admin_live_xxxxxxxxxxxx",
    endpoint: "https://mcp.commerce.example/catalog",
    scope: "Catalog, orders, products",
    status: "Key needed",
    action: "Add key",
    health: 48,
  },
  storefront: {
    method: "MCP",
    key: "deploy_token_xxxxxxxxxxxx",
    endpoint: "https://mcp.storefront.example/deploy",
    scope: "Pages, components, preview deploys",
    status: "Connected",
    action: "Manage",
    health: 82,
  },
  acquisition: {
    method: "OAuth",
    key: "oauth_refresh_xxxxxxxxxxxx",
    endpoint: "https://mcp.ads.example/events",
    scope: "Campaigns, conversions, budgets",
    status: "Connected",
    action: "Refresh",
    health: 86,
  },
  discovery: {
    method: "API key",
    key: "search_key_xxxxxxxxxxxx",
    endpoint: "https://mcp.discovery.example/relevance",
    scope: "Search, recs, catalog signals",
    status: "Connected",
    action: "Rotate",
    health: 88,
  },
  payment: {
    method: "API key",
    key: "payment_key_xxxxxxxxxxxx",
    endpoint: "https://mcp.payments.example/checkout",
    scope: "Payment methods, checkout messaging",
    status: "Add key",
    action: "Add key",
    health: 42,
  },
  shipping: {
    method: "API key",
    key: "ship_key_xxxxxxxxxxxx",
    endpoint: "https://mcp.shipping.example/promises",
    scope: "Delivery promises, carrier rates",
    status: "Test pending",
    action: "Test",
    health: 62,
  },
  analytics: {
    method: "Token",
    key: "project_token_xxxxxxxxxxxx",
    endpoint: "https://mcp.analytics.example/events",
    scope: "Events, cohorts, attribution",
    status: "Connected",
    action: "Manage",
    health: 92,
  },
  retention: {
    method: "API key",
    key: "private_key_xxxxxxxxxxxx",
    endpoint: "https://mcp.retention.example/journeys",
    scope: "Segments, email, SMS journeys",
    status: "Connected",
    action: "Rotate",
    health: 80,
  },
  operations: {
    method: "OAuth",
    key: "ops_refresh_xxxxxxxxxxxx",
    endpoint: "https://mcp.ops.example/tickets",
    scope: "Tickets, returns, support notes",
    status: "Connected",
    action: "Manage",
    health: 78,
  },
};

const loginProviderOverrides = {
  "commerce:Depict": {
    method: "Native",
    key: "Included with Depict",
    endpoint: "depict://commerce-core",
    scope: "Storefront, catalog, orders",
    status: "Included",
    action: "Included",
    health: 100,
  },
  "discovery:Depict": {
    method: "Native",
    key: "Included with Depict",
    endpoint: "depict://search-recs",
    scope: "Search, recommendations, ranking",
    status: "Included",
    action: "Included",
    health: 100,
  },
  "commerce:Centra": {
    method: "API key",
    key: "centra_api_xxxxxxxxxxxx",
    endpoint: "https://mcp.centra.com/commerce",
    status: "Add key",
    action: "Add key",
    health: 44,
  },
  "payment:Klarna": {
    method: "API key",
    key: "klarna_key_xxxxxxxxxxxx",
    endpoint: "https://mcp.klarna.com/payments",
    status: "Add key",
    action: "Add key",
    health: 38,
  },
  "payment:Stripe": {
    method: "OAuth",
    key: "stripe_oauth_xxxxxxxxxxxx",
    endpoint: "https://mcp.stripe.com/payments",
    status: "Connected",
    action: "Manage",
    health: 84,
  },
  "payment:PayPal": {
    method: "OAuth",
    key: "paypal_oauth_xxxxxxxxxxxx",
    endpoint: "https://mcp.paypal.com/checkout",
    status: "Connect",
    action: "Connect",
    health: 58,
  },
  "analytics:Mixpanel + GA4": {
    method: "Token",
    key: "mp_project_xxxxx + G-XXXXXXX",
    endpoint: "https://mcp.mixpanel.com/events",
    status: "Connected",
    action: "Manage",
    health: 94,
  },
  "analytics:GTM server-side": {
    method: "MCP",
    key: "gtm_server_xxxxxxxxxxxx",
    endpoint: "https://mcp.googletagmanager.com/server",
    status: "Test pending",
    action: "Test",
    health: 64,
  },
  "acquisition:Google Ads": {
    endpoint: "https://mcp.googleads.com/conversions",
    status: "Connected",
    action: "Refresh",
    health: 88,
  },
  "acquisition:Microsoft Ads": {
    endpoint: "https://mcp.microsoftads.com/conversions",
    status: "Connected",
    action: "Refresh",
    health: 82,
  },
  "acquisition:Meta Ads": {
    endpoint: "https://mcp.meta.com/ads",
    status: "Connect",
    action: "Connect",
    health: 58,
  },
  "acquisition:TikTok Ads": {
    endpoint: "https://mcp.tiktok.com/ads",
    status: "Connect",
    action: "Connect",
    health: 56,
  },
  "operations:NetSuite": {
    method: "MCP",
    key: "netsuite_mcp_xxxxxxxxxxxx",
    endpoint: "https://mcp.netsuite.com/erp",
    status: "Add MCP key",
    action: "Add key",
    health: 40,
  },
};

const agentGoalConfigs = {
  ltv: {
    title: "LTV expansion",
    prompt:
      "Increase customer lifetime value by coordinating recommendations, retention journeys, payment messaging, and delivery promises. Prioritize margin-positive repeat purchases over discount-heavy growth.",
    kpis: [
      { label: "LTV lift", value: "+18%", trend: "Projected 90 days" },
      { label: "Repeat rate", value: "34%", trend: "+6.2 pts" },
      { label: "Margin guardrail", value: "42%", trend: "Healthy" },
    ],
    plan: [
      { agent: "Discovery agent", action: "Build returning-customer recommendation slots for high-margin categories." },
      { agent: "Retention agent", action: "Trigger post-purchase journeys from Klaviyo with product affinity segments." },
      { agent: "Analytics agent", action: "Watch cohort LTV, second-purchase lag, and discount dependency." },
    ],
    activity: [
      "Synced product affinity events from Mixpanel + GA4.",
      "Prepared retention audience for customers with one purchase in 45 days.",
      "Flagged payment-message test for high-AOV categories.",
    ],
  },
  marketing: {
    title: "Marketing efficiency",
    prompt:
      "Improve acquisition efficiency without lowering order quality. Reallocate budget toward campaigns and products with strong checkout completion, healthy margin, and high predicted second-purchase probability.",
    kpis: [
      { label: "ROAS", value: "4.6x", trend: "+12%" },
      { label: "CAC", value: "-9%", trend: "Improving" },
      { label: "Paid CVR", value: "3.8%", trend: "+0.5 pts" },
    ],
    plan: [
      { agent: "Acquisition agent", action: "Compare Google Ads cohorts against product-level conversion and LTV signals." },
      { agent: "Merchandising agent", action: "Promote best-converting discovery slots for campaign landing traffic." },
      { agent: "Attribution agent", action: "Send cleaned purchase and checkout events to campaign reporting." },
    ],
    activity: [
      "Detected paid-search traffic with high add-to-cart but low shipping completion.",
      "Queued landing page recommendations for campaign SKU groups.",
      "Mapped conversion events to Google Ads and Mixpanel reporting.",
    ],
  },
  retention: {
    title: "Retention recovery",
    prompt:
      "Recover customers before churn by coordinating email, SMS, product discovery, and delivery incentives. Avoid blanket discounts; use personalized replenishment, category affinity, and return-friendly promises.",
    kpis: [
      { label: "Churn risk", value: "-14%", trend: "Projected" },
      { label: "Winback CVR", value: "7.1%", trend: "+1.8 pts" },
      { label: "Email revenue", value: "22%", trend: "Share of sales" },
    ],
    plan: [
      { agent: "Retention agent", action: "Create lifecycle segments from purchase recency and category preference." },
      { agent: "Discovery agent", action: "Personalize product blocks for winback and replenishment journeys." },
      { agent: "Fulfillment agent", action: "Surface fast delivery promises for customers likely to return." },
    ],
    activity: [
      "Built VIP-at-risk segment using order history and browse signals.",
      "Drafted replenishment journey with personalized product blocks.",
      "Added delivery-promise condition to retention offers.",
    ],
  },
};

function findOption(categoryId, optionName = state[categoryId]) {
  const category = categories.find((item) => item.id === categoryId);
  return category.options.find((option) => option.name === optionName) || category.options[0];
}

function selectedItems() {
  return categories.map((category) => ({
    category,
    option: findOption(category.id),
  }));
}

function averageMetric(metric) {
  const items = selectedItems();
  const total = items.reduce((sum, item) => sum + item.option.metrics[metric], 0);
  return Math.round(total / items.length);
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
}

function simpleIcon(slug, alt) {
  return { type: "image", src: `https://cdn.simpleicons.org/${slug}`, alt };
}

function faviconLogo(domain, alt) {
  return { type: "image", src: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`, alt };
}

function renderProviderMark(option, category, className) {
  const logo = option.logo || providerLogoCatalog[option.name];

  if (logo?.type === "image") {
    return `
      <span class="${className} has-logo" style="--mark-color:${category.color}">
        <img src="${logo.src}" alt="${logo.alt}" loading="lazy" />
      </span>
    `;
  }

  if (logo?.type === "microsoft") {
    return `
      <span class="${className} has-logo microsoft-logo" style="--mark-color:${category.color}" aria-label="${logo.alt}">
        <i></i><i></i><i></i><i></i>
      </span>
    `;
  }

  return `<i class="${className}" style="background:${category.color}" aria-hidden="true"></i>`;
}

function renderRailIcon(categoryId) {
  const icons = {
    commerce: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9.5h14l-1.1 9.2H6.1L5 9.5Z"></path>
        <path d="M8.3 9.5a3.7 3.7 0 0 1 7.4 0"></path>
      </svg>
    `,
    storefront: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 10.2h15l-1-4.7h-13l-1 4.7Z"></path>
        <path d="M6 10.2v8.3h12v-8.3"></path>
        <path d="M9 18.5v-5h6v5"></path>
      </svg>
    `,
    acquisition: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13.5 15.5 6v12L4 13.5Z"></path>
        <path d="M15.5 9.2h2.2a2.8 2.8 0 0 1 0 5.6h-2.2"></path>
        <path d="m7.2 15.5 1.3 3"></path>
      </svg>
    `,
    discovery: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.6" cy="10.6" r="5.6"></circle>
        <path d="m15 15 4.2 4.2"></path>
        <path d="M8.3 10.6h4.6"></path>
      </svg>
    `,
    payment: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="6.5" width="16" height="11" rx="2"></rect>
        <path d="M4 10h16"></path>
        <path d="M7 14.5h4"></path>
      </svg>
    `,
    shipping: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.8 7.5h10.5v9H3.8z"></path>
        <path d="M14.3 10.2h3.3l2.6 3.1v3.2h-5.9"></path>
        <circle cx="7.2" cy="17.2" r="1.6"></circle>
        <circle cx="17.5" cy="17.2" r="1.6"></circle>
      </svg>
    `,
    analytics: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 18.5V11"></path>
        <path d="M12 18.5V5.5"></path>
        <path d="M18.5 18.5v-8.8"></path>
        <path d="M4.5 18.5h15"></path>
      </svg>
    `,
    retention: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19s-6.6-3.7-7.8-8.2C3.3 7.4 7.3 5 9.8 7.4L12 9.5l2.2-2.1c2.5-2.4 6.5 0 5.6 3.4C18.6 15.3 12 19 12 19Z"></path>
      </svg>
    `,
    operations: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.1"></circle>
        <path d="M12 4.5v2"></path>
        <path d="M12 17.5v2"></path>
        <path d="m6.7 6.7 1.4 1.4"></path>
        <path d="m15.9 15.9 1.4 1.4"></path>
        <path d="M4.5 12h2"></path>
        <path d="M17.5 12h2"></path>
        <path d="m6.7 17.3 1.4-1.4"></path>
        <path d="m15.9 8.1 1.4-1.4"></path>
      </svg>
    `,
  };

  return icons[categoryId] || icons.operations;
}

function renderPicker() {
  const activeCategory = categories.find((category) => category.id === activeCategoryId) || categories[0];
  const activeOption = findOption(activeCategory.id);
  const tabs = categories
    .map((category) => {
      const selected = category.id === activeCategory.id ? " is-active" : "";
      return `
        <button
          class="rail-tab${selected}"
          type="button"
          data-rail-tab="${category.id}"
          style="--tab-color:${category.color}"
          aria-pressed="${selected ? "true" : "false"}"
        >
          <span class="rail-tab-icon">${renderRailIcon(category.id)}</span>
          <span>${category.label}</span>
        </button>
      `;
    })
    .join("");

  const modules = activeCategory.options
    .map((option) => {
      const selected = state[activeCategory.id] === option.name ? " is-selected" : "";
      return `
        <button
          class="provider-option${selected}"
          type="button"
          draggable="true"
          data-category="${activeCategory.id}"
          data-option="${option.name}"
          aria-pressed="${selected ? "true" : "false"}"
          title="${option.name}"
        >
          <span class="provider-grip" aria-hidden="true"></span>
          <span class="provider-top">
            ${renderProviderMark(option, activeCategory, "provider-dot")}
            <span class="provider-name">${option.name}</span>
          </span>
          <span class="provider-tag">${option.tag}</span>
        </button>
      `;
    })
    .join("");

  railPicker.innerHTML = `
    <div class="dock-tabs" aria-label="Commerce rails">${tabs}</div>
    <section class="module-dock" style="--dock-color:${activeCategory.color}" aria-labelledby="module-dock-title">
      <div class="dock-status">
        <span class="dock-orb" aria-hidden="true"></span>
        <div>
          <span>${activeCategory.rail} rail</span>
          <strong id="module-dock-title">${activeCategory.label}</strong>
        </div>
        <em>${activeOption.name}</em>
      </div>
      <div class="provider-grid">${modules}</div>
    </section>
  `;
}

function renderFlow() {
  const items = selectedItems();
  const links = items
    .map(({ category }) => {
      const position = graphPositions[category.id];
      const path = graphPath(position);
      return `
        <path class="graph-link-shadow" d="${path}"></path>
        <path class="graph-link" d="${path}" style="--link-color:${category.color}"></path>
      `;
    })
    .join("");

  const slots = items
    .map(({ category, option }) => {
      const outcome = outcomeFor(category.id, option.name);
      const position = graphPositions[category.id];
      const active = category.id === activeCategoryId ? " is-active" : "";
      return `
        <button
          class="diagram-slot${active}"
          type="button"
          data-category="${category.id}"
          style="--slot-x:${position.x}%; --slot-y:${position.y}%; --slot-color:${category.color}"
          aria-label="${category.label} node. Current provider ${option.name}."
        >
          <span class="slot-orb" aria-hidden="true">
            ${renderProviderMark(option, category, "slot-logo")}
          </span>
          <div class="slot-provider">
            <div>
              <span>${category.label}</span>
              <strong>${option.name}</strong>
            </div>
          </div>
          <span class="slot-hint">${outcome.title}</span>
        </button>
      `;
    })
    .join("");

  flowCanvas.innerHTML = `
    <div class="graph-stage" id="graphStage">
      <svg class="graph-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${links}
      </svg>
      <div class="commerce-core">
        <span>Agentic control layer</span>
        <strong>Depict Agent Controller</strong>
        <em>${items.length} commerce agents live</em>
      </div>
      ${slots}
    </div>
  `;
}

function graphPath(position) {
  const midX = (graphCenter.x + position.x) / 2;
  const midY = (graphCenter.y + position.y) / 2;
  const bend = position.x < graphCenter.x ? -7 : 7;
  return `M ${graphCenter.x} ${graphCenter.y} Q ${midX + bend} ${midY} ${position.x} ${position.y}`;
}

function outcomeFor(categoryId, optionName) {
  const outcomes = {
    commerce: { title: "Store core", detail: "Catalog and orders" },
    storefront: { title: "Experience", detail: "Customer surface" },
    acquisition: { title: "Traffic", detail: optionName.includes("Ads") ? "Paid media" : "Media buying" },
    discovery: { title: "Intent", detail: "Search and recs" },
    payment: { title: "Checkout", detail: "Tender choice" },
    shipping: { title: "Promise", detail: "Delivery layer" },
    analytics: { title: "Events", detail: "Attribution feed" },
    retention: { title: "Lifecycle", detail: "Repeat demand" },
    operations: { title: "Back office", detail: "Service and ops" },
  };

  return outcomes[categoryId];
}

function renderStackList() {
  stackList.innerHTML = selectedItems()
    .map(
      ({ category, option }) => `
        <div class="stack-item" style="--item-color:${category.color}">
          ${renderProviderMark(option, category, "stack-logo")}
          <div>
            <span>${category.label}</span>
            <strong>${option.name}</strong>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderAgentConsole() {
  const goal = agentGoalConfigs[activeAgentGoalId];
  const items = selectedItems();
  const health = Math.round((averageMetric("conversion") + averageMetric("data") + averageMetric("launch")) / 3);
  const workspaceTitle = activePresetId ? presetLabels[activePresetId] : "Custom commerce stack";
  const prompt = document.querySelector("#agentPrompt");
  const providerGrid = document.querySelector("#adminProviderGrid");
  const kpiGrid = document.querySelector("#adminKpiGrid");
  const planList = document.querySelector("#agentPlanList");
  const activity = document.querySelector("#agentActivity");
  const healthBar = document.querySelector(".admin-health i");

  setText("#agentGoalTitle", goal.title);
  setText("#adminWorkspaceTitle", workspaceTitle);
  setText("#adminHealthScore", `${health}%`);

  if (healthBar) {
    healthBar.style.width = `${health}%`;
  }

  if (prompt && document.activeElement !== prompt) {
    prompt.value = goal.prompt;
  }

  document.querySelectorAll("[data-agent-goal]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.agentGoal === activeAgentGoalId);
  });

  if (providerGrid) {
    providerGrid.innerHTML = items
      .map(
        ({ category, option }) => `
          <article class="provider-control" style="--provider-color:${category.color}">
            ${renderProviderMark(option, category, "provider-control-logo")}
            <div class="provider-control-copy">
              <div class="provider-control-head">
                <span>${category.label}</span>
                <em>Live</em>
              </div>
              <strong>${option.name}</strong>
              <small>${providerControlNotes[category.id]}</small>
            </div>
          </article>
        `,
      )
      .join("");
  }

  if (kpiGrid) {
    kpiGrid.innerHTML = goal.kpis
      .map(
        (kpi) => `
          <article>
            <span>${kpi.label}</span>
            <strong>${kpi.value}</strong>
            <em>${kpi.trend}</em>
          </article>
        `,
      )
      .join("");
  }

  if (planList) {
    planList.innerHTML = goal.plan
      .map(
        (step, index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${step.agent}</strong>
              <p>${step.action}</p>
            </div>
          </article>
        `,
      )
      .join("");
  }

  if (activity) {
    activity.innerHTML = `
      <div class="admin-panel-heading">
        <span>Recent agent activity</span>
        <strong>Controller log</strong>
      </div>
      <ol>
        ${goal.activity.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    `;
  }
}

function connectionForItem(category, option) {
  const key = `${category.id}:${option.name}`;
  return {
    ...loginCategoryRules[category.id],
    ...loginProviderOverrides[key],
  };
}

function connectionStatusClass(connection) {
  if (connection.status === "Included") {
    return "is-included";
  }

  if (connection.health >= 78) {
    return "is-connected";
  }

  if (connection.health >= 58) {
    return "is-test";
  }

  return "is-needed";
}

function renderLoginConsole() {
  const items = selectedItems();
  const connections = items.map(({ category, option }) => ({
    category,
    option,
    connection: connectionForItem(category, option),
  }));
  const activeCategory = categories.find((category) => category.id === activeCategoryId) || categories[0];
  const activeOption = findOption(activeCategory.id);
  const activeConnection = connectionForItem(activeCategory, activeOption);
  const connectedCount = connections.filter((item) => item.connection.health >= 58).length;
  const healthPct = Math.round((connectedCount / connections.length) * 100);
  const connectorList = document.querySelector("#loginConnectorList");
  const healthBar = document.querySelector("#loginHealthBar");
  const eventLog = document.querySelector("#loginEventLog");
  const credential = document.querySelector("#loginCredentialValue");
  const endpoint = document.querySelector("#loginMcpEndpoint");

  setText("#loginHealthScore", `${connectedCount}/${connections.length}`);
  setText("#loginConnectorCount", `${connections.length} providers`);
  setText("#loginActiveProvider", `${activeOption.name} ${activeCategory.label.toLowerCase()}`);
  setText("#credentialProviderName", activeOption.name);

  if (credential) {
    credential.value = activeConnection.key;
  }

  if (endpoint) {
    endpoint.value = activeConnection.endpoint;
  }

  if (healthBar) {
    healthBar.style.width = `${healthPct}%`;
  }

  if (connectorList) {
    connectorList.innerHTML = connections
      .map(
        ({ category, option, connection }) => `
          <article class="connector-row ${connectionStatusClass(connection)}" style="--provider-color:${category.color}">
            ${renderProviderMark(option, category, "connector-logo")}
            <div class="connector-name">
              <span>${category.label}</span>
              <strong>${option.name}</strong>
            </div>
            <div class="connector-method">
              <span>Method</span>
              <strong>${connection.method}</strong>
            </div>
            <div class="connector-key">
              <span>Secure key</span>
              <code>${connection.key}</code>
            </div>
            <div class="connector-scope">
              <span>Agent scope</span>
              <strong>${connection.scope}</strong>
            </div>
            <em>${connection.status}</em>
            <button type="button">${connection.action}</button>
          </article>
        `,
      )
      .join("");
  }

  if (eventLog) {
    const missingCount = connections.length - connectedCount;
    eventLog.innerHTML = `
      <div class="admin-panel-heading">
        <span>Secure events</span>
        <strong>Connection log</strong>
      </div>
      <ol>
        <li>${connectedCount} provider connectors are ready for the agent.</li>
        <li>${activeOption.name} uses ${activeConnection.method} with scoped ${activeConnection.scope.toLowerCase()} access.</li>
        <li>${missingCount || "No"} connector${missingCount === 1 ? "" : "s"} need a key, OAuth grant, or MCP token.</li>
      </ol>
    `;
  }
}

function scoreLabel(scores) {
  if (scores.launch >= 88 && scores.conversion >= 86) {
    return "Fast conversion stack";
  }

  if (scores.data >= 90) {
    return "Data-rich growth stack";
  }

  if (findOption("commerce").name === "Centra") {
    return "Enterprise commerce stack";
  }

  return "Balanced growth stack";
}

function updateScores() {
  const scores = {
    conversion: averageMetric("conversion"),
    data: averageMetric("data"),
    launch: averageMetric("launch"),
    clarity: averageMetric("clarity"),
    tracking: averageMetric("tracking"),
    load: averageMetric("load"),
  };

  setText("#conversionScore", scores.conversion);
  setText("#dataScore", scores.data);
  setText("#launchScore", scores.launch);
  setText("#stackMode", scoreLabel(scores));
  setText("#heroLaunch", "Goal-directed");
  setText("#heroData", scores.data >= 90 ? "Data-rich" : "Event-ready");
  setText("#heroConversion", scores.conversion >= 90 ? "Personalized" : "Adaptive");

  document.querySelector("#clarityMeter").style.width = `${scores.clarity}%`;
  document.querySelector("#trackingMeter").style.width = `${scores.tracking}%`;
  document.querySelector("#loadMeter").style.width = `${scores.load}%`;
}

function updatePreview() {
  const commerce = findOption("commerce");
  const payment = findOption("payment");
  const shipping = findOption("shipping");
  const analytics = findOption("analytics");
  const discovery = findOption("discovery");
  const acquisition = findOption("acquisition");
  const retention = findOption("retention");
  const context = visitorContexts[activeVisitorContextId] || visitorContexts.paid;
  const sourceValue = {
    paid: acquisition.name,
    vip: retention.name,
    delivery: shipping.name,
  }[activeVisitorContextId];

  setText("#previewPlatform", "Depict Agent Controller");
  setText(".store-hero h3", context.hero);
  setText("#previewPayment", payment.cta || `Checkout with ${payment.name}`);
  setText("#paidContextLabel", acquisition.name);
  setText("#vipContextLabel", `${retention.name} VIP`);
  setText("#deliveryContextLabel", `${shipping.name} promise`);
  setText("#controllerSignalAcquisition", acquisition.name);
  setText("#controllerSignalAnalytics", analytics.name);
  setText("#controllerSignalRetention", retention.name);
  setText("#controllerSignalShipping", shipping.name);
  setText("#catalogExperienceTitle", context.title);
  setText(
    "#catalogExperienceReason",
    `The controller combines ${sourceValue}, ${analytics.name}, ${discovery.name}, and ${shipping.name} signals, then changes sort order, message, and checkout promise.`,
  );
  setText("#previewDiscovery", context.reasons.jacket);
  setText("#previewData", context.reasons.trouser);
  setText("#previewShipping", context.reasons.knit);
  setText("#previewAd", acquisition.name);
  setText("#previewShip", shipping.name);
  setText("#previewAnalytics", analytics.name);
  setText("#eventStack", `${analytics.name} + controller log`);

  document.querySelectorAll("[data-visitor-context]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.visitorContext === activeVisitorContextId);
  });

  context.order.forEach((productId, index) => {
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (!card) {
      return;
    }

    card.style.order = index + 1;
    card.classList.toggle("is-priority", index === 0);
    const priority = card.querySelector(".product-priority");
    if (priority) {
      priority.textContent = String(index + 1).padStart(2, "0");
    }
  });

  const metricGrid = document.querySelector("#experienceMetricGrid");
  if (metricGrid) {
    metricGrid.innerHTML = context.metrics
      .map((metric) => {
        const value =
          metric.value === "acquisition"
            ? acquisition.name
            : metric.value === "retention"
              ? retention.name
              : metric.value === "shipping"
                ? shipping.name
                : metric.value;

        return `
          <article>
            <span>${metric.label}</span>
            <strong>${value}</strong>
          </article>
        `;
      })
      .join("");
  }

  const list = document.querySelector("#eventList");
  const personalizedEvents = [context.event, ...eventTemplates.filter((eventName) => eventName !== context.event)];
  list.innerHTML = personalizedEvents
    .map((eventName) => {
      let owner = analytics.name;

      if (eventName.includes("Agent")) {
        owner = "Depict Agent Controller";
      } else if (eventName.includes("Paid")) {
        owner = acquisition.name;
      } else if (eventName.includes("Lifecycle")) {
        owner = retention.name;
      } else if (eventName.includes("Payment")) {
        owner = payment.name;
      } else if (eventName.includes("Delivery")) {
        owner = shipping.name;
      } else if (eventName.includes("Recommendation")) {
        owner = discovery.name;
      }

      return `
        <li>
          <div>
            <strong>${eventName}</strong>
            <span>${owner}</span>
          </div>
        </li>
      `;
    })
    .join("");
}

function insightCopy() {
  const commerce = findOption("commerce").name;
  const analytics = findOption("analytics").name;
  const acquisition = findOption("acquisition").name;
  const operations = findOption("operations").name;
  const payment = findOption("payment").name;
  const discovery = findOption("discovery").name;

  if (analytics === "Segment") {
    return "CDP routing gives the build a strong data spine. Pair it with a strict event taxonomy before launch.";
  }

  if (acquisition === "TrafficJunky") {
    return "High-volume media needs careful attribution, consent handling, and fraud checks before spend scales.";
  }

  if (commerce === "Shopify" && discovery === "Depict") {
    return "A fast Shopify core with Depict discovery is a strong path when merchandising speed matters.";
  }

  if (operations === "NetSuite") {
    return "The ERP rail adds operational depth. Give integration ownership to one team before checkout work starts.";
  }

  if (payment === "Klarna") {
    return "Klarna can improve checkout confidence when the delivery promise and return flow are visible early.";
  }

  return "This blueprint is balanced across launch speed, conversion surfaces, and measurement depth.";
}

function syncPresetButtons(activePreset) {
  document.querySelectorAll(".preset").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === activePreset);
  });
}

function hydrate(activePreset = activePresetId) {
  renderPicker();
  renderFlow();
  renderStackList();
  updateScores();
  updatePreview();
  renderAgentConsole();
  renderLoginConsole();
  setText("#insightNote", insightCopy());
  syncPresetButtons(activePreset);
}

railPicker.addEventListener("click", (event) => {
  const tab = event.target.closest(".rail-tab");
  if (tab) {
    activeCategoryId = tab.dataset.railTab;
    hydrate();
    return;
  }

  const button = event.target.closest(".provider-option");
  if (!button) {
    return;
  }

  activeCategoryId = button.dataset.category;
  activePresetId = "";
  state[button.dataset.category] = button.dataset.option;
  hydrate();
});

railPicker.addEventListener("dragstart", (event) => {
  const button = event.target.closest(".provider-option");
  if (!button) {
    return;
  }

  draggedProvider = {
    category: button.dataset.category,
    option: button.dataset.option,
  };

  button.classList.add("is-dragging");
  document.body.classList.add("is-dragging-provider");
  primeDropTarget(draggedProvider.category);
  event.dataTransfer.effectAllowed = "copy";
  event.dataTransfer.setData("text/plain", JSON.stringify(draggedProvider));
});

railPicker.addEventListener("dragend", (event) => {
  const button = event.target.closest(".provider-option");
  if (button) {
    button.classList.remove("is-dragging");
  }

  draggedProvider = null;
  document.body.classList.remove("is-dragging-provider");
  clearDropStates();
});

flowCanvas.addEventListener("dragover", (event) => {
  const slot = event.target.closest(".diagram-slot");
  if (!slot) {
    clearDropStates();
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  clearDropStates();
  slot.classList.add(slotMatchesDragged(slot) ? "is-drop-ready" : "is-drop-blocked");
});

flowCanvas.addEventListener("dragleave", (event) => {
  if (!flowCanvas.contains(event.relatedTarget)) {
    clearDropStates();
  }
});

flowCanvas.addEventListener("drop", (event) => {
  const slot = event.target.closest(".diagram-slot");
  if (!slot) {
    return;
  }

  event.preventDefault();
  const payload = draggedProvider || dragPayloadFromEvent(event);
  if (payload && slot.dataset.category === payload.category) {
    activeCategoryId = payload.category;
    activePresetId = "";
    state[payload.category] = payload.option;
    draggedProvider = null;
    hydrate();
    return;
  }

  slot.classList.add("is-drop-blocked");
  window.setTimeout(clearDropStates, 420);
});

flowCanvas.addEventListener("click", (event) => {
  const slot = event.target.closest(".diagram-slot");
  if (!slot) {
    return;
  }

  activeCategoryId = slot.dataset.category;
  hydrate();
});

function slotMatchesDragged(slot) {
  return draggedProvider && slot.dataset.category === draggedProvider.category;
}

function dragPayloadFromEvent(event) {
  try {
    return JSON.parse(event.dataTransfer.getData("text/plain"));
  } catch {
    return null;
  }
}

function clearDropStates() {
  flowCanvas.querySelectorAll(".diagram-slot").forEach((slot) => {
    slot.classList.remove("is-drop-ready", "is-drop-blocked");
  });
}

function primeDropTarget(category) {
  clearDropStates();
  const target = flowCanvas.querySelector(`.diagram-slot[data-category="${category}"]`);
  if (target) {
    target.classList.add("is-drop-ready");
  }
}

document.querySelectorAll(".preset").forEach((button) => {
  button.addEventListener("click", () => {
    activePresetId = button.dataset.preset;
    Object.assign(state, presets[button.dataset.preset]);
    hydrate(activePresetId);
  });
});

document.querySelector("#agentGoalControls")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-agent-goal]");
  if (!button) {
    return;
  }

  activeAgentGoalId = button.dataset.agentGoal;
  renderAgentConsole();
});

document.querySelector("#visitorContextControls")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-visitor-context]");
  if (!button) {
    return;
  }

  activeVisitorContextId = button.dataset.visitorContext;
  updatePreview();
});

hydrate("nordic");
