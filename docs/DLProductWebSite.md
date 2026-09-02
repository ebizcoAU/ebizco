eBizCo Australia — Complete Website Design Specification
Sovereign Lock Platform — Hospitality Technology
1. Executive Summary
1.1. Purpose
This document specifies the complete redesign of ebizco.com.au — transforming it from a generic IT services website into a premium hospitality technology brand showcasing the Sovereign Lock Platform (OZLOCK, OZLODGE, OZPMS).

1.2. Core Business Model
Element	Description
Primary Revenue	10% OTA commission on bookings made through the platform
Entry Point	Door lock hardware (OZLOCK / OZLODGE)
Platform	Self-hosted, decentralised, content-blind relay
Differentiator	Data sovereignty — no third-party cloud, no vendor lock-in
1.3. Brand Positioning Statement
"eBizCo provides decentralised self-check-in technology for hotels, motels, and short-term rentals. Our Sovereign Lock Platform gives property owners complete control over their data, their guests, and their future — no third-party cloud, no vendor lock-in, no compromises."

2. Brand Identity
2.1. Brand Personality
Attribute	Description
Confident	Assertive headlines, clear claims, no jargon
Architectural	Clean lines, structured layouts, premium materials
Honest	Transparent about trade-offs — no overclaiming
Disruptive	Comparison grids showing how we beat incumbents
Australian	Proudly local, trustworthy, straightforward
2.2. Visual Identity
Element	Specification	Rationale
Primary Colour	Deep Blue (#1a2a4a)	Trust, stability, premium B2B
Secondary Colour	Silver/Grey (#e8eaed)	Professional, clean, architectural
Accent Colour	Orange (#f5a623)	Calls-to-action, energy, differentiation
Background	White (#ffffff) / Light Grey (#f8f9fa)	Clean, readable
Headline Font	Playfair Display	Premium, elegant, architectural
Body Font	Inter	Clean, modern, highly readable
Tone of Voice	Professional, confident, accessible	No jargon — clear and direct
2.3. Logo Usage
Element	Specification
Primary Logo	eBizCo wordmark in Deep Blue
Lock Icon	Optional — simple lock outline integrated with text
Tagline	"Sovereign Lock Platform" — below or beside logo
Colour Variants	White version for dark backgrounds
3. Product Architecture
3.1. The Three Product Tiers
Product	Target Market	Key Features
OZLOCK	Residential homeowners	Self-hosted, encrypted, BLE unlock, no cloud dependency【OZLOCK v4.0†L1-L2】
OZLODGE	Hotels, motels, short-stay	PMS integration, self-check-in (kiosk + app), 10% OTA commission【OZLODGE v2.4†L7】
OZPMS	Property managers, government	100,000+ properties, hierarchy management, lawful credential lifecycle【OZPMS†L1-L2】
3.2. Technical Architecture
Component	Description
Door Lock	ESP32-C6 N8, Wi-Fi Direct (primary), BLE (offline)
Thread Bridge	ESP32-C6 N16, Wi-Fi (primary), Thread (fallback bridge-to-bridge)
Local Server	ozlodgeserv / ozpms — on-premises, customer-owned
Cloud Relay	ozlockserv — content-blind, routing-only, open source GPLv3【OZLODGE v2.4†L4】
Apps	AURA (consumer), MAVEN (commercial POS) — Flutter-based
Encryption	AES-256-GCM sealed envelopes — server cannot read【OZLODGE v2.4†L6】
Hardware Root	X25519 eFuse private key — unextractable【OZLODGE v2.4†L6】
3.3. Network Architecture — Corrected
Component	Primary	Fallback	Why
Door Lock	Wi-Fi Direct (2.4GHz)	BLE (offline unlock)	Wi-Fi is primary. Thread is not used in the lock.
Bridge	Wi-Fi (to cloud/server)	Thread (bridge-to-bridge fallback)	Thread ensures network resilience when Wi-Fi fails.
Key Marketing Message:

"Our bridges don't just connect to Wi-Fi — they support each other. If Wi-Fi fails, bridges automatically form a Thread mesh fallback. Your locks stay connected. Your business keeps running."

4. Target Audiences
4.1. Audience Segmentation
Audience	Pain Points	What They Need	Where to Reach Them
Hotel/Motel Owners	Staff costs, OTA commissions (15-25%), after-hours check-in	Automated self-check-in, 10% commission, data control	NoVacancy, AHICE, direct outreach
Property Managers	Tenant turnover, vendor lock-in, compliance audits	Scalable platform, lawful credential lifecycle, audit trails【OZPMS†L5】	Property Council, industry events
Developers/Builders	Compliance costs, fire rating, accessibility	AS1905.1, AS1428.1, commercial-grade hardware【OZLODGE v2.4†L6-L7】	Security Exhibition, developer forums
Tech-Savvy Owners	Privacy, vendor lock-in, subscriptions	Self-hosted, open source, no subscriptions【OZLOCK v4.0†L11-L12】	Home Assistant, social media
5. Website Structure
5.1. Sitemap
text
ebizco.com.au
│
├── Homepage
│   ├── Hero Section
│   ├── Problem / Solution
│   ├── Product Tiles (3)
│   ├── How It Works
│   ├── Trust Signals
│   ├── Comparison Grid
│   ├── Testimonials (placeholder)
│   └── CTA
│
├── Products
│   ├── OZLOCK (Residential)
│   │   ├── Features
│   │   ├── Specifications
│   │   ├── Comparison (vs Tuya/TTLock)
│   │   └── CTA
│   │
│   ├── OZLODGE (Hospitality)
│   │   ├── Features
│   │   ├── Specifications
│   │   ├── Comparison (vs Tuya/TTLock)
│   │   ├── Hotelier Pitch
│   │   └── CTA
│   │
│   └── OZPMS (Enterprise)
│       ├── Features
│       ├── Specifications
│       ├── Comparison (vs Tuya/TTLock)
│       ├── Hierarchy Management
│       └── CTA
│
├── Technology
│   ├── Security Architecture
│   ├── Encryption (AES-256-GCM)
│   ├── eFuse Hardware Root
│   ├── Content-Blind Relay
│   ├── Network Resilience (Wi-Fi + Thread fallback)
│   ├── Open Source Licensing
│   └── Compliance (AS1905.1, AS1428.1, Privacy Act)
│
├── For Hoteliers
│   ├── The Problem (OTA commissions, staff costs)
│   ├── The Solution (10% commission, self-check-in)
│   ├── How It Works
│   ├── ROI Calculator (future)
│   └── CTA: "Start Free 60-Day Trial"
│
├── About
│   ├── Company Story
│   ├── Team (placeholder)
│   ├── Mission & Values
│   └── Contact
│
└── Contact
    ├── Contact Form
    ├── Phone
    ├── Email
    └── Office Location
6. Page-by-Page Specifications
6.1. Homepage
Section	Content	Visual Notes
Hero	"The Sovereign Lock Platform. Your data. Your server. Your rules." + CTA: "Book a Demo"	Full-width image: modern hotel corridor with a smart lock. Overlaid text. Deep blue background.
Problem/Solution	"Hotels lose 15-25% to OTAs. Staff costs are rising. Guest data is at risk. We solve all three."	Split screen: Problem (left), Solution (right). Icons for each.
Product Tiles	3 cards: OZLOCK (Residential), OZLODGE (Hospitality), OZPMS (Enterprise)	3-column grid. Each card: icon, title, 1-line description, "Learn More" link.
How It Works	3-step visual: (1) Install the lock, (2) Self-host the server, (3) Control via app	Horizontal flow with icons and captions. Clean, simple.
Trust Signals	Badges: S304 stainless steel, 120-min fire rating, 6.3-year battery life, open source GPLv3【OZLOCK v3.6†L4-L5】	Row of trust badges. Logos + text.
Comparison Grid	OZLODGE vs Tuya/TTLock — Cloud ownership, data sovereignty, offline operation【OZLODGE v2.4†L8】	Simple table with checkmarks and crosses. Highlight green for Sovereign Edge wins.
CTA	"Start your free 60-day trial" + "Book a Demo"	Two buttons side by side. Orange accent.
6.2. OZLODGE Product Page
Section	Content	Visual Notes
Hero	"The lock that checks itself in."	Product render: OZLODGE lock on a hotel room door.
Overview	"OZLODGE gives hotels, motels, and short-term rentals a fully automated self-check-in system — with complete data sovereignty."	2-column layout: text (left), image (right).
Key Features	• PMS integration via /pms/rooms sync【OZLODGE v2.4†L7】 • Lobby kiosk self-check-in (offline capable)【OZLODGE v2.4†L7】 • Mobile app check-in with 500m geofencing【OZLODGE v2.4†L7】 • Digital passport (X25519 bonds)【OZLODGE v2.4†L10】 • Guest data stays on your server【OZLODGE v2.4†L6】 • Full audit trail【OZLODGE v2.4†L6】	Grid of feature cards with icons.
Network Resilience	"If Wi-Fi fails, bridges automatically form a Thread mesh fallback. Your locks stay connected."	Diagram showing Wi-Fi primary → Thread fallback.
Comparison Table	OZLODGE vs Tuya/TTLock — Cloud ownership, data sovereignty, offline operation, PMS integration【OZLODGE v2.4†L8】	Full-width table. Highlight Sovereign Edge wins.
Hoteliers Pitch	"10% commission — half of Booking.com. Free 60-day trial. No lock-in contracts."	Banner with key numbers.
CTA	"Book a Demo" + "Start Free 60-Day Trial"	Two buttons. Orange accent.
6.3. Technology / Security Page
Section	Content	Visual Notes
Hero	"Security isn't a promise. It's architecture."	Dark background with abstract cryptographic imagery.
End-to-End Encryption	AES-256-GCM sealed envelopes — server cannot read commands【OZLODGE v2.4†L6】	Diagram showing sealed envelope flowing through server.
Hardware Root of Trust	X25519 private key burned in eFuse — unextractable【OZLODGE v2.4†L6】	Silicon chip graphic with locked key icon.
Content-Blind Relay	Server routes sealed envelopes — cannot decrypt【OZLODGE v2.4†L6】	3-step visual: App → Server (blind) → Lock.
Network Resilience	Wi-Fi primary → Thread fallback. Bridges self-heal.	Network diagram showing fallback path.
Open Source Licensing	MIT (protocol) + GPLv3 (server/app) — no vendor lock-in【OZLODGE v2.4†L2】	License badges with brief explanations.
Compliance	AS1905.1 fire rating, AS1428.1 accessibility, Australian Privacy Act【OZPMS†L9】	Compliance badges with certification logos.
6.4. For Hoteliers Page
Section	Content	Visual Notes
Hero	"Stop paying 15-25% to Booking.com. Take control of your bookings."	Image: hotel owner looking confident.
The Problem	"OTA commissions are eating your profits. Staff costs are rising. Guest data is at risk."	3 problem icons with captions.
The Solution	"10% commission. Free 60-day trial. No lock-in contracts."	3 solution icons with captions.
How It Works	(1) Install OZLODGE locks, (2) List your property, (3) Start booking — guests check themselves in	3-step visual flow.
The Offer	"Free 60-day trial. 10% commission. No lock-in contracts. Leave anytime."	Bold banner with key numbers.
CTA	"List Your Property — Free 60-Day Trial"	Large orange button.
7. Design Philosophy
7.1. Key Principles
Principle	Application
Mobile-First	Design for mobile first, then scale up to desktop
Speed	Target <3 second load time on mobile
Clarity	Every page has one primary message and one primary CTA
Trust	Compliance badges, technical specs, open source licensing visible throughout
Premium	High-quality imagery, generous whitespace, refined typography
7.2. User Experience Goals
Goal	How We Achieve It
Immediate understanding	Hero section explains the product in 1 sentence
Easy navigation	Clear menu structure, breadcrumbs, sticky header
Frictionless conversion	Contact form, "Book a Demo" button on every page
Credibility	Trust signals, comparison grids, technical transparency
8. Content Guidelines
8.1. Tone of Voice
Situation	Tone	Example
Headlines	Bold, confident	"The lock that checks itself in."
Body copy	Clear, accessible	"OZLODGE gives hotels, motels, and short-term rentals a fully automated self-check-in system — with complete data sovereignty."
Technical	Honest, transparent	"The server relays sealed envelopes. It cannot read your commands."【OZLODGE v2.4†L6】
Sales	Direct, benefit-focused	"10% commission — half of Booking.com. Free 60-day trial. No lock-in contracts."
8.2. Key Messages
Message	Use Case
"Your data. Your server. Your rules."	Brand tagline, hero section
"The lock that checks itself in."	OZLODGE headline
"10,000 doors. One server. Zero vendor lock-in."	OZPMS headline
"Your door. Your data. Your rules."	OZLOCK headline
"Security isn't a promise. It's architecture."	Technology page
9. Technical Requirements
9.1. Platform
Requirement	Specification
CMS	WordPress (recommended) or custom Next.js/React
Hosting	Australian VPS (AWS Sydney or local provider)
SSL	Mandatory — Let's Encrypt or paid certificate
CDN	Cloudflare or similar for global delivery
9.2. Performance Targets
Metric	Target
Time to First Byte (TTFB)	<500ms
Largest Contentful Paint (LCP)	<2.5s
First Input Delay (FID)	<100ms
Cumulative Layout Shift (CLS)	<0.1
9.3. SEO Requirements
Element	Specification
Meta Titles	<60 characters, include primary keyword
Meta Descriptions	<160 characters, include primary keyword
H1 Tags	One per page, includes primary keyword
Image Alt Text	Descriptive, includes keyword
XML Sitemap	Auto-generated
Robots.txt	Properly configured
10. AI Prompts for Website Generation
10.1. Homepage Design Prompt
"Generate a premium B2B website homepage design for an Australian hospitality technology company called eBizCo.

Brand: eBizCo — decentralised hotel technology platform. Sovereign door lock systems. Self-check-in technology.

Tagline: 'Your data. Your server. Your rules.'

Target Audience: Hotel owners, motel operators, property managers, developers.

Design Style: Clean, architectural, premium, trustworthy. Deep blue (#1a2a4a) and silver/grey (#e8eaed) with orange accent (#f5a623). Professional sans-serif typography.

Layout:

Hero section: Full-width image of a modern hotel corridor with a smart lock on a premium door. Overlaid text: 'The Sovereign Lock Platform. Your data. Your server. Your rules.' CTA button: 'Book a Demo'

Three product cards in a row: OZLOCK (Residential), OZLODGE (Hospitality), OZPMS (Enterprise) — each with a small icon and brief description

'How It Works' section: 3-step visual flow — (1) Install the lock, (2) Self-host the server, (3) Control via app

Trust indicators: S304 stainless steel badge, 120-min fire rating, 6.3-year battery life, open source GPLv3

Comparison table: OZLODGE vs Tuya/TTLock — Cloud ownership, data sovereignty, offline operation

Footer: Company name, contact, social links

Style: Photorealistic, 4K, architectural photography style, professional B2B SaaS aesthetic, warm lighting, modern interiors. Clean information hierarchy with ample whitespace. Mobile-responsive layout."

10.2. OZLODGE Product Page Prompt
"Generate a product page for OZLODGE — a hospitality self-check-in platform.

Headline: 'The lock that checks itself in.'

Sub-headline: 'OZLODGE gives hotels, motels, and short-term rentals a fully automated self-check-in system — with complete data sovereignty.'

Key Features:

PMS integration via /pms/rooms sync

Lobby kiosk self-check-in (offline capable)

Mobile app check-in with 500m geofencing

Digital passport (X25519 bonds) for BLE unlock

Guest data stays on your server — no third-party cloud

Full audit trail — who accessed which room, when

Network Resilience: 'If Wi-Fi fails, bridges automatically form a Thread mesh fallback. Your locks stay connected.'

Comparison Table: OZLODGE vs Tuya/TTLock — Cloud ownership, data sovereignty, offline operation, PMS integration.

Hoteliers Pitch: '10% commission — half of Booking.com. Free 60-day trial. No lock-in contracts.'

Style: Clean, professional B2B SaaS aesthetic. Deep blue and silver colour palette. High-quality images of hotel lobbies, kiosks, and app interfaces. 4K, mobile-responsive."

10.3. Technology Page Prompt
"Generate a Technology & Security page for eBizCo's Sovereign Lock Platform.

Headline: 'Security isn't a promise. It's architecture.'

Key Technical Features:

End-to-end encryption (AES-256-GCM sealed envelopes) — server cannot read commands

eFuse hardware root of trust — X25519 private key burned in silicon, unextractable

Content-blind relay — server routes sealed envelopes, cannot decrypt

Network resilience — Wi-Fi primary, Thread fallback for bridges

Open source licensing — MIT (protocol) + GPLv3 (server/app) — no vendor lock-in

Compliance: AS1905.1 fire rating, AS1428.1 accessibility, Australian Privacy Act

Style: Technical but accessible. Clean diagrams, comparison tables, trust badges. Dark background with blue accents. Professional B2B SaaS aesthetic."

11. Phased Implementation Plan
Phase	Activity	Timeline	Owner
1	Generate homepage design using AI prompt	Week 1	Alex
2	Develop OZLOCK, OZLODGE, OZPMS product pages	Week 2-3	Alex
3	Develop Technology / Security page	Week 4	Alex
4	Create For Hoteliers page	Week 5	Alex
5	Mobile optimisation and speed testing	Week 6	Alex
6	Launch	Week 7	Alex
12. Summary
12.1. What Changes
Aspect	Current	Target
Positioning	Vague IT services	Focused hospitality technology
Message	Confusing, multiple directions	Clear: decentralised self-check-in
Visual Identity	Inconsistent	Premium B2B SaaS design system
Trust Signals	Weak	Compliance badges, technical specs, open source
Conversion	Unclear CTA	Clear: 'Book a Demo' / 'Start Free Trial'
12.2. Key Messages
Message	Where Used
"Your data. Your server. Your rules."	Homepage hero, brand tagline
"The lock that checks itself in."	OZLODGE page
"10,000 doors. One server. Zero vendor lock-in."	OZPMS page
"Security isn't a promise. It's architecture."	Technology page
"10% commission — half of Booking.com. Free 60-day trial. No lock-in contracts."	For Hoteliers page
12.3. What Makes This Work
Advantage	Why It Matters
Clear positioning	Visitors understand what we do immediately
Trust signals	Technical specs, compliance badges build credibility
Comparison grids	Show our advantage over incumbents
Multiple CTAs	Generate leads from every page
Mobile-first design	Majority of B2B traffic is mobile