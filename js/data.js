/* ==========================================================
   ALL YOUR CONTENT LIVES HERE (taken from Arsalan_Akram_CV3.pdf).
   Edit the text and the pages update automatically.
   For images, put a file path in any `img` field
   (e.g. "images/project1.jpg"); leave "" to keep the placeholder.
   ========================================================== */

const SITE = {
  name: "Muhammad Arsalan Akram",
  shortName: "Arsalan Akram",
  initials: "MA",
  title: "Senior Optical Engineer / Team Lead",
  headline: "Telecom & Network Professional",
  tagline: "15+ years designing, delivering and operating optical transport networks.",
  email: "engineer_arsalan@hotmail.com",
  phone: "+966 54 198 6741",
  location: "Riyadh, Saudi Arabia",
  availability: "Open for relocation",
  linkedin: "",          // add your LinkedIn address here to show a LinkedIn link
  linkedinLabel: "",
  cv: "Arsalan_Akram_CV3.pdf",
  photo: "images/Picture.jpeg"
};

const ABOUT = {
  paragraphs: [
    "Senior Optical Network / Telecom Professional with 15+ years of experience in network design, engineering planning, deployment & commissioning, integration, and operation & maintenance.",
    "Extensive hands-on experience with Nokia, Infinera, Huawei, NSN and Ciena optical platforms across Metro, Long-Haul and submarine networks.",
    "Proven experience leading technical teams, coordinating field / NOC / customer / vendor activities, supporting product evaluation, procurement, costing and commercial activities, and improving network quality, reliability and efficiency.",
    "Holds multiple internationally recognized technical and management certifications, and is open for relocation."
  ],
  facts: [
    ["Based in", "Riyadh, Saudi Arabia"],
    ["Experience", "15+ years"],
    ["Current role", "Senior Optical Engineer / Team Lead, Nokia"],
    ["Languages", "English, Urdu, Arabic"],
    ["Status", "Open for relocation"]
  ],
  stats: [
    ["15+", "Years of experience"],
    ["3", "Employers"],
    ["5", "Optical vendors"],
    ["6", "Certifications"]
  ]
};

const EXPERIENCE = [
  {
    role: "Senior Optical Engineer / Team Lead",
    company: "Nokia",
    period: "May 2019 – Present",
    location: "Saudi Arabia",
    summary: "Lead end-to-end delivery of DWDM/OTN optical projects for major customers including Saudi Electricity Company / National Grid and Saudi Telecom Company (STC).",
    bullets: [
      "Cover design, planning, deployment, integration, commissioning and operations & maintenance.",
      "Lead design team for signal flow, HLD/LLD, SOW, MOP and BOQ using Visio, AutoCAD, MS Word, etc.",
      "Hands-on experience across the Nokia 1830 PSS optical platform family, including PSS-32/16/8/4, PSS-24x/16x/8x/64, PSS-ONE, associated WDM/OTN cards and network elements: configuration, service provisioning, protection, upgrades, troubleshooting and network expansion.",
      "Apply optical transport experience with Infinera DTN-X, GX Series, XTM and Transcend technologies to support engineering, platform operations, service assurance, troubleshooting and migration activities.",
      "Perform optical engineering and planning using EPT (Engineering Planning Tool), supporting network architecture, capacity expansion, connectivity, signal-flow and implementation design.",
      "Drive optical scaling activities including fiber/link quality assessment, capacity planning, optical cutsheets, configurations and deployment documentation (MOP).",
      "Implement network upgrades using Nokia CLI and automation/scripting-assisted processes, improving configuration consistency and deployment efficiency.",
      "Develop and use automation workflows for configuration preparation, validation, network upgrade activities and operational processes.",
      "Manage optical network visibility, monitoring and operation using Nokia Eco system and Infinera TNMS.",
      "Coordinate field, NOC, engineering, customer and vendor teams to deliver rollout activities within project schedules, technical requirements and operational standards.",
      "Lead complex optical troubleshooting, RCA and provide technical direction for network-impacting issues.",
      "Support technical product evaluation, vendor coordination, procurement, costing and commercial activities.",
      "Provide technical leadership and mentoring, supporting decision-making on technical solutions, resources, risks, timelines and project costs.",
      "Supervise and coordinate field/vendor implementation including equipment installation, fibre connectivity, ODF/interface work, labelling and deployment documentation.",
      "Review implementation readiness, MOPs, installation records and acceptance evidence; track punch-list items and coordinate closure of technical deviations and corrective actions.",
      "Provide technical assistance to create, monitor, prioritize and restore tickets, and lead service support for incidents with deep testing/troubleshooting across teams, stakeholders and customers.",
      "Manage customer network and its software such as ARCGIS for NE tool, FUP, NFTS, TFS, JIRA, HUB, etc."
    ],
    tags: ["Nokia 1830 PSS", "Infinera", "DWDM / OTN", "HLD / LLD", "MOP / BOQ", "EPT", "Automation", "Team lead"]
  },
  {
    role: "Subsea NOC Engineer, NMS/Application Lead",
    company: "Transworld",
    period: "Jun 2015 – May 2019",
    location: "Pakistan",
    summary: "Supported 24/7 operations of large-scale DWDM, OTN, SDH, GPON, FTTx and IP/MPLS networks, and led the TAC department for submarine network troubleshooting.",
    bullets: [
      "Led TAC (Technical Assistance Center) for deep troubleshooting of submarine networks: Ciena, Alcatel-Lucent and Huawei.",
      "Maintained service availability and SLA/KPI compliance for international submarine and terrestrial connectivity; coordinated incident resolution to minimize disruption and improve MTTR.",
      "Managed optical monitoring, service provisioning, performance analysis, fault management and restoration; supported NMS and application administration, operational reporting, incident tracking and service assurance.",
      "Operated multi-vendor optical platforms including Huawei OptiX 9800/8800/7500/3500/1500, Metro 5000/1000/500, NSN HiT 7065, Subcom DWDM, 1520LM Alcatel-Lucent and Huahuan.",
      "Worked with Ciena optical transport technologies including Ciena 6500, WaveLogic Ai/5e (WL5e), Reconfigurable Line System (RLS), MCP and SAOS.",
      "Led fault isolation, root-cause analysis, escalation management and service restoration, improving major-incident response and reducing recurring faults.",
      "Supervised landing-station operations: racks, power, fibre routing, ODF/MMR termination, labelling and documentation.",
      "Supported optical network planning, implementation, configuration and capacity expansion.",
      "Coordinated international bandwidth and submarine cable services with carriers and vendors (SEA-ME-WE 3/4/5, IME-WE, SMW, TATA, Epsilon, Cogent, Google, Telecom Italia Sparkle, SingTel, DU, ITC-KSA, Etisalat, Omantel and others).",
      "Supported IP/MPLS operations using Juniper MX-series and Huawei routers and switches for IP transit, IPLC, DPLC and gateway services, plus data-center interconnect (DCI) and network optimization.",
      "Supported the SEA-ME-WE 5 100G submarine cable network and 100G TW1 submarine system upgrade projects.",
      "Operated and maintained submarine optical systems including Huawei Marine, SMW5, Alcatel, Ciena, TE SubCom SLTE, PFE, LME and optical repeaters."
    ],
    tags: ["Submarine", "NOC / TAC", "Ciena 6500", "Huawei OptiX", "SLA / KPI", "RCA", "IP/MPLS"]
  },
  {
    role: "Fixed Network Engineer / Team Lead",
    company: "LCC International",
    period: "Feb 2012 – Jul 2015",
    location: "Pakistan",
    summary: "Led Level II Transmission and Access Network engineering across Huawei, Ericsson and ZTE environments.",
    bullets: [
      "Delivered DWDM, OTN, GPON/FTTH, MSAN, DSLAM and IP migration projects.",
      "Supported optical design, link budgeting, configuration, installation, commissioning and acceptance.",
      "Performed troubleshooting, NMS activities, network upgrades, PAT/ATP and network health checks.",
      "Coordinated engineers, field teams, vendors and customers during network rollout; worked on GPON MA5600T, U2000, MSAN and access-network service provisioning, testing and acceptance.",
      "Performed network health checks, NMS backup/restoration, vulnerability scanning and database access-control reviews."
    ],
    tags: ["DWDM / OTN", "GPON / FTTH", "Huawei U2000", "PAT / ATP", "Link budget"]
  }
];

const SKILLS = [
  { icon: "network", category: "Optical", items: ["DWDM", "OTN", "SDH", "ASON", "FTTH", "FTTB", "FTTX", "FTTS", "GPON"] },
  { icon: "network", category: "Submarine Networks", items: ["SMW systems", "Transworld", "SLTE", "PFE", "Repeaters", "IPLC"] },
  { icon: "check", category: "TAC & NOC Operations", items: ["24/7 NOC operations", "Troubleshooting", "Service assurance", "SLA/KPI monitoring", "Major incident management", "Escalation management", "Fault management", "RCA", "Incident restoration", "Problem management", "Change management", "Operational governance"] },
  { icon: "tools", category: "Network Management & Operations", items: ["Nokia NSP", "NFM-T", "Wavesuite NOC", "Ciena MCP", "Infinera Transcend", "Huawei iMaster NCE", "NSN TNMS", "Web LCT", "DCN", "Putty", "WebUI", "Ericsson ARCGIS"] },
  { icon: "network", category: "Networking", items: ["IP/MPLS", "BGP", "OSPF", "IS-IS", "Layer 1/2 troubleshooting", "Juniper & Huawei routers/switches", "Firewalls", "IP Transit", "IPLC", "DPLC", "Data Center Interconnect", "ODF/MMR connectivity"] },
  { icon: "tools", category: "Testing", items: ["OTDR", "Insertion loss", "ORL", "Optical power", "Receiver sensitivity", "OSNR", "Chromatic dispersion", "PMD", "Fiber/link quality assessment", "PAT/ATP", "OSA", "BERT meter", "Ethernet testers", "EXFO"] },
  { icon: "doc", category: "Automation, Scripting & Linux", items: ["Python", "CLI automation", "Configuration automation", "Test automation", "Configuration validation", "Network data processing", "Deployment workflows", "Linux/Unix CLI operations"] },
  { icon: "people", category: "Project & Technical Delivery", items: ["Network design", "Deployment", "Integration", "Commissioning", "MOPs", "Technical documentation", "Test procedures", "Acceptance testing", "Punch lists", "NCR management", "Corrective actions", "Vendor management", "Product evaluation", "Risk management"] }
];

const PLATFORMS = [
  { vendor: "Nokia", detail: "1830 PSS-32/16/8/4, PSS-24x/16x/8x/64, PSS-ONE" },
  { vendor: "Infinera", detail: "DTN-X, GX Series, XTM, Transcend" },
  { vendor: "Huawei", detail: "OptiX 9800/8800/7500/3500/1500, Metro 5000/1000/500" },
  { vendor: "Ciena", detail: "6500, WaveLogic Ai/5e, RLS, MCP, SAOS" },
  { vendor: "NSN / others", detail: "HiT 7065, Subcom DWDM, Alcatel-Lucent 1520LM, Juniper MX" }
];

const PROJECTS = [
  { tag: "Nokia · Saudi Arabia", title: "Saudi Electricity Company / National Grid", desc: "Optical network design, integration and support.", tone: "blue", img: "" },
  { tag: "Nokia · Saudi Arabia", title: "Saudi Telecom Company (STC)", desc: "Nokia optical transport deployment, upgrades and operations.", tone: "purple", img: "" },
  { tag: "Transworld", title: "SEA-ME-WE 5", desc: "100G submarine cable network operations and maintenance.", tone: "teal", img: "" },
  { tag: "Transworld", title: "Ciena upgradation project", desc: "Optical platform upgrade.", tone: "navy", img: "" },
  { tag: "Transworld / LCC", title: "100G TW1 submarine system & MSAN upgrade", desc: "Huawei OTN.", tone: "amber", img: "" }
];

/* Cards shown in the purple "Career in action" banner on the home page */
const HIGHLIGHTS = [
  { tag: "May 2019 – Present", title: "Nokia", desc: "Senior Optical Engineer / Team Lead", tone: "blue", img: "" },
  { tag: "Jun 2015 – May 2019", title: "Transworld", desc: "Subsea NOC Engineer, NMS/Application Lead", tone: "teal", img: "" },
  { tag: "Feb 2012 – Jul 2015", title: "LCC International", desc: "Fixed Network Engineer / Team Lead", tone: "navy", img: "" }
];

const CERTS = [
  { tag: "Project Management Institute", title: "PMP Certified", desc: "October 2026", tone: "blue", img: "" },
  { tag: "Cisco", title: "CCNP Certified", desc: "September 2026", tone: "teal", img: "" },
  { tag: "Nokia", title: "Nokia Services Expert", desc: "July 2026", tone: "navy", img: "" },
  { tag: "Nokia", title: "Nokia Optical Professional", desc: "May 2026", tone: "purple", img: "" },
  { tag: "Nokia", title: "Nokia DWDM Project Training", desc: "July 2019", tone: "blue", img: "" },
  { tag: "Huawei", title: "Huawei Transmission Project Training", desc: "April 2019", tone: "amber", img: "" }
];

const EDUCATION = [
  { degree: "BS Electronics Engineering", school: "Sir Syed University of Engineering & Technology, Karachi, Pakistan", period: "2008 – 2011 · CGPA 3.1" },
  { degree: "Intermediate", school: "Govt. College Formen, Karachi, Pakistan", period: "2006 – 2007 · A Grade" },
  { degree: "High School", school: "Placid High School, Karachi, Pakistan", period: "2005 · A1 Grade" }
];

const AFFILIATIONS = [
  "Pakistan Engineering Council — Electronics/Electrical Engineering registration",
  "Saudi Council of Engineers — Engineering registration"
];

const LANGUAGES = [["English", "Professional"], ["Urdu", "Native"], ["Arabic", "Basic"]];

const QUICK_LINKS = [
  { icon: "doc", label: "Download my CV (PDF)", href: SITE.cv, external: true },
  { icon: "briefcase", label: "Work experience", href: "experience.html" },
  { icon: "tools", label: "Core technical skills", href: "index.html#skills" },
  { icon: "mail", label: "Contact me", href: "contact.html" }
];

const PAGES = [
  { id: "home", label: "Home", href: "index.html", icon: "home", desc: "Profile, skills and certifications" },
  { id: "experience", label: "Experience", href: "experience.html", icon: "briefcase", desc: "Career timeline, projects and education" },
  { id: "contact", label: "Contact", href: "contact.html", icon: "mail", desc: "Get in touch" }
];
