SOVEREIGN EDGE — COMPLETE APP FEATURE LIST
Based on OZLOCK v4.0, OZLODGE v2.4, OZPMS v1.1
1. EXECUTIVE SUMMARY
App	Target Market	Core Purpose	Lock Control
AURA (formerly BANOI)	Residential homeowners	Personal AI assistant — voice, video, chat, booking, calendar	Up to 10 locks per account
MAVEN (formerly MAOI)	Commercial (F&B, Retail, Service, Manufacturing)	Multi-purpose IVR AI POS — accounting, ERP, inventory, booking	Up to 3,000 locks per premises
OZPMS	Enterprise property management	"Mini Tuya" — self-hosted, multi-location, hierarchical	100,000+ properties worldwide
2. COMMON FEATURES — All Apps
2.1. Core Access Control
Feature	Description	Supported By
Remote Unlock	Unlock door from anywhere via app	AURA, MAVEN, OZPMS
BLE Unlock	Instant unlock at the door — no network required	AURA, MAVEN, OZPMS
Digital Passport (X25519)	Encrypted member bond — secure, offline, private	AURA, MAVEN, OZPMS
PIN Management	Generate, issue, revoke, time-bound PINs	AURA, MAVEN, OZPMS
RFID Card Management	Issue and revoke RFID cards	AURA, MAVEN, OZPMS
Fingerprint Management	Enroll and revoke fingerprints	AURA, MAVEN, OZPMS
Mechanical Key Override	Physical key backup (reported in audit)	AURA, MAVEN, OZPMS
Real-time Credential Programming	Add/revoke credentials in 5 seconds (not 10 minutes)	AURA, MAVEN, OZPMS
2.2. Real-time Monitoring & Notifications
Feature	Description	Supported By
Door Open Event	Real-time push notification (<1 second)	AURA, MAVEN, OZPMS
Door Close Event	Real-time push notification (<1 second)	AURA, MAVEN, OZPMS
Door Lock Event	Real-time push notification (<1 second)	AURA, MAVEN, OZPMS
Door Unlock Event	Real-time push notification (<1 second)	AURA, MAVEN, OZPMS
Failed Access Attempt	Real-time alert — security breach attempt	AURA, MAVEN, OZPMS
Tamper Alert	Real-time alert — lock tampering detected	AURA, MAVEN, OZPMS
Low Battery Warning	Real-time alert — battery needs replacement	AURA, MAVEN, OZPMS
Doorbell Press	Real-time push notification — visitor at door	AURA, MAVEN, OZPMS
Motion Detection	Real-time alert — camera detects motion	AURA, MAVEN, OZPMS
2.3. Audit & Compliance
Feature	Description	Supported By
Access History	Who opened which door, when, and how	AURA, MAVEN, OZPMS
Failed Attempt Log	Failed access attempts logged and stored	AURA, MAVEN, OZPMS
Credential Lifecycle Audit	Full audit of credential issuance, expiry, revocation	AURA, MAVEN, OZPMS
Self-Hosted Audit Logs	All logs stored on your own server	AURA, MAVEN, OZPMS
Export Reports	Export audit logs for compliance	MAVEN, OZPMS
Compliance Reports	AS1905.1, AS1428.1, Privacy Act reports	MAVEN, OZPMS
2.4. Security Architecture
Feature	Description	Supported By
End-to-End Encryption	AES-256-GCM sealed envelopes — server cannot read	AURA, MAVEN, OZPMS
Content-Blind Relay	NEXUS routes sealed envelopes — cannot decrypt	AURA, MAVEN, OZPMS
eFuse Root of Trust	X25519 private key burned in silicon — unextractable	AURA, MAVEN, OZPMS
Replay Protection	Monotonic counters prevent command replay	AURA, MAVEN, OZPMS
No Plaintext Credentials	PINs, RFID, biometrics never stored in cloud	AURA, MAVEN, OZPMS
Lock is the Authority	Credentials verified locally — offline	AURA, MAVEN, OZPMS
Self-Hosted Option	Point bridge to your own server — no vendor lock-in	AURA, MAVEN, OZPMS
Open Source / GPLv3	Fork, modify, exit anytime	AURA, MAVEN, OZPMS
3. AURA — RESIDENTIAL PERSONAL ASSISTANT
3.1. AURA Overview
Aspect	Description
Target Market	Residential homeowners, privacy-conscious consumers
Core Purpose	AI personal assistant — voice, video, chat, booking, calendar
Lock Control	Up to 10 locks per account
Lock Transport	Wi-Fi Direct (primary), BLE (offline/local)
Platform	iOS / Android app
3.2. AURA AI Features
Feature	Description
Voice Commands	"AURA, open the front door" — natural language
Face Recognition	AURA sees who you are — unlocks automatically
Emotion Detection	AURA reads your face — knows how you're feeling
Memory of Conversations	AURA remembers past conversations and context
Proactive AI	AURA initiates conversations — doesn't wait to be asked
Recording & Playback	Record and replay conversations
Search	Search conversations — "What did I say about the plumber?"
Context-Aware Automation	AURA learns your routines — adapts to your needs
Self-Hosted AI	All conversations stay on your server — no cloud
3.3. AURA — Residential Lock Control
Feature	Description
Digital Passport	Invite members with time-limited X25519 bonds
Temporary PIN	Issue time-bound PINs for guests
Remote Unlock	Unlock from anywhere — real-time (5 seconds)
BLE Unlock	Instant unlock at the door — no network
Voice Unlock	"AURA, open the door" — hands-free
Auto-Unlock	AURA detects you're near — unlocks automatically
Access History	View who opened the door, when, and how
Guest Management	Issue, manage, and revoke guest access
Battery Status	Real-time battery level and low battery alerts
Lock Status	Real-time lock/unlock status
3.4. AURA — Residential Smart Home
Feature	Description
Booking Calendar	Manage appointments, bookings, schedules
Video Chat	Video calls with AURA
Chat Interface	Text chat with AURA — natural language
Calendar Integration	Sync with your calendar — AURA knows your schedule
Task Management	AURA helps you manage tasks and reminders
Home Automation	AURA controls other IoT devices (future)
Security Dashboard	Real-time security status — doors, cameras, sensors
Privacy Controls	Granular control over data sharing and storage
4. MAVEN — COMMERCIAL IVR AI POS
4.1. MAVEN Overview
Aspect	Description
Target Market	F&B, Retail, Service, Manufacturing
Core Purpose	Multi-purpose IVR AI POS — accounting, ERP, inventory, booking
Lock Control	Up to 3,000 locks per premises (depends on server hardware)
Lock Transport	Wi-Fi Direct (primary), BLE (offline/local)
Platform	Tablet (iPad), Web Dashboard, Self-Service Kiosk
4.2. MAVEN — Four Market Segments
Segment	Use Cases
F&B	Coffee shops, restaurants, bakeries, cake shops
Retail	Grocery shops, hardware stores, general retail
Service	Hotels, motels, rentals, property management, hire, hairdressers, doctors, dentists, personal care
Manufacturing	Farming, factories, warehouses
4.3. MAVEN — Core POS & Business Features
Feature	Description
IVR AI Voice Commands	"Record sale — 5kg pork, $45" — spoken, not typed
Voice-Based Sales Recording	Record sales, refunds, adjustments by voice
Voice-Based Sales Reporting	"What were today's total sales?" — spoken response
Inventory Management	Track stock, reorder alerts, supplier management
Accounting Integration	Invoicing, expense tracking, tax reporting
ERP Control	Enterprise resource planning — procurement, production, logistics
Staff Management	Shift scheduling, timesheets, staff access control
Customer Management	CRM, loyalty programs, customer history
Booking & Calendar	Room bookings, appointment scheduling, resource allocation
Reporting & Analytics	Sales reports, inventory reports, staff performance
4.4. MAVEN — Commercial Lock Control
Feature	Description
Front Desk Check-In/Out	Assign rooms, issue credentials, revoke access
Self-Service Kiosk	Lobby kiosk — guest self-check-in, RFID/PIN programming
Room Assignment	Allocate rooms, manage room roster
Staff Access	Time-limited staff PINs/RFID for housekeeping, maintenance
Master Credentials	Emergency override — manager access
Guest Credential Management	Issue, manage, revoke guest credentials
Time-Bound Access	Check-in/out dates, time-limited credentials
Audit Logs	Full access history — who, when, which door
PMS Integration	Deep local sync via /pms/rooms (upsert/reconcile)
OTA Room Roster Sync	Room definitions, room types, occupancy status
Remote Unlock	Unlock any door from the front desk
Emergency Unlock	Fire, police, medical — immediate access
Door Status Dashboard	Real-time lock/unlock status, battery status, connectivity
Geofencing	500m radius — guest check-in only when at property
Network Resilience	Bridges automatically form Thread mesh fallback if Wi-Fi fails — locks stay connected
5. OZPMS — ENTERPRISE PROPERTY MANAGEMENT
5.1. OZPMS Overview
Aspect	Description
Target Market	Property managers, defence housing, government, public housing
Core Purpose	"Mini Tuya" — self-hosted, multi-location, hierarchical
Lock Control	100,000+ properties worldwide
Lock Transport	Wi-Fi Direct (primary), BLE (offline/local)
Platform	Self-hosted VPS, Web Dashboard, Mobile App
5.2. OZPMS — Hierarchy Management (4 Levels)
Level	Role	Access
Level 1: Super Admin	Platform-wide control	Full access — all properties, all tenants, all settings
Level 2: Regional Manager	Regional control	Multiple properties in a region
Level 3: Property Manager	Single property control	All units, all tenants, all access
Level 4: Tenant	Self-service	Own unit only
5.3. OZPMS — Property Management Features
Feature	Description
Tenant Management	View all tenants, leases, contact details
Rent Roll	Track rent payments, arrears, due dates
Lock Provisioning	Pair locks to properties, issue tenant credentials
Credential Lifecycle	Issuance, expiry, non-renewal, tribunal-ordered revocation
Lawful Credential Management	Time-bound expiry — credential lapses at lease end
No Unlawful Lockout	No "lockout" button — lawful revocation only
Temporary Access	Time-bound PINs/bonds for tradespeople, contractors
Audit Logs	Full access history — who, when, which door
Maintenance	Track repairs, schedule access for contractors
Compliance Reporting	Privacy Act, AS1905.1, AS1428.1 compliance reports
Multi-Property Dashboard	All properties, all tenants, all locks
Tenant Self-Service	Remote unlock, guest PIN issuance, access history
Tenant Communication	Email, SMS, in-app messaging
Rent Payment	Integrated payment gateway
5.4. OZPMS — Cloud Options
Option	Who Hosts	Data Location	Use Case
PM Cloud (AWS/Azure)	PM company	Australian region	Most private PM firms
On-Premises	PM company's servers	PM facility	Defence, government
Hybrid	PM company + cloud	Australian region	Flexibility, DR
5.5. OZPMS — Scale & Performance
Component	10,000 Properties	100,000 Properties	1,000,000 Properties
API nodes	2	8	50+
Database	Single MySQL	MySQL Cluster	Sharded PostgreSQL
Message queue	Redis	Redis Cluster	Kafka
MQTT broker	EMQX (single)	EMQX (cluster)	EMQX (multi-region)
Storage	100 GB	1 TB	10 TB
Monthly cost	$1,000	$10,000	$100,000+
6. APP COMPARISON TABLE
Feature	AURA	MAVEN	OZPMS
Target Market	Residential	Commercial (F&B, Retail, Service, Manufacturing)	Enterprise property management
Lock Control	Up to 10 locks	Up to 3,000 locks	100,000+ properties
Lock Transport	Wi-Fi + BLE	Wi-Fi + BLE	Wi-Fi + BLE
AI Voice (IVR)	✅ Personal assistant	✅ POS + voice commands	❌ N/A
Face Recognition	✅	❌	❌
Emotion Detection	✅	❌	❌
Video Chat	✅	❌	❌
Booking Calendar	✅	✅	❌
POS & Accounting	❌	✅	❌
ERP & Inventory	❌	✅	❌
Property Management	❌	❌	✅
Hierarchy Management	❌	❌	✅ (4 levels)
Self-Hosted	✅	✅	✅
Content-Blind Relay	✅	✅	✅
Real-time Credential Management	✅	✅	✅
Real-time Door Open Reporting	✅	✅	✅
Offline Operation (BLE)	✅	✅	✅
Audit Logs	✅	✅	✅ (PM-owned)
PMS Integration	❌	✅	❌
Multiple Locations	❌	✅	✅ (worldwide)
Tenant Self-Service	❌	❌	✅
7. KEY DIFFERENTIATORS — What We Can Do That Tuya Cannot
7.1. AURA vs Tuya/TTLock
Feature	Tuya/TTLock	AURA
Voice AI	❌ No	✅ Yes — personal assistant
Face Recognition	❌ No	✅ Yes
Emotion Detection	❌ No	✅ Yes
Memory of Conversations	❌ No	✅ Yes
Proactive AI	❌ No	✅ Yes
Real-time Door Open	Delayed (5-10 min)	Real-time (<1 sec)
Self-Hosted	❌ No	✅ Yes
No Vendor Lock-in	❌ No	✅ Yes
Offline Operation	❌ Limited	✅ Yes (BLE, PIN)
7.2. MAVEN vs Tuya/TTLock
Feature	Tuya/TTLock	MAVEN
Voice POS	❌ No	✅ Yes — IVR AI
ERP & Inventory	❌ No	✅ Yes
Accounting Integration	❌ No	✅ Yes
Lock Control	Limited	Up to 3,000 locks
PMS Integration	❌ Limited	✅ Full /pms/rooms sync
Self-Service Kiosk	❌ No	✅ Yes
Self-Hosted	❌ No	✅ Yes
Network Resilience	❌ No	✅ Thread fallback (bridges)
7.3. OZPMS vs Tuya/TTLock
Feature	Tuya/TTLock	OZPMS
Cloud Owner	Tuya (third-party)	PM company
Data Sovereignty	❌ No	✅ Yes
Credentials Stored	Plaintext in cloud	Sealed envelopes — never stored
Hierarchy Management	❌ No	✅ 4 levels
Multiple Locations	❌ Limited	✅ Worldwide
Scale	Limited	100,000+ properties
Self-Hosted	❌ No	✅ Yes
No Vendor Lock-in	❌ No	✅ Yes
8. SELLING POINTS — The Sovereign Edge
For Homeowners (AURA)
"Your home should be smart. But it shouldn't spy on you.

AURA is a personal AI assistant that talks, listens, sees, and remembers. It recognises your face, knows how you're feeling, and opens the door before you reach it.

Everything stays on your own server. No cloud. No third-party access. No vendor lock-in.

Your home. Your data. Your rules."

For Commercial Operators (MAVEN)
"You run a business. You need POS, inventory, accounting, and staff management — all in one place.

MAVEN is a voice-driven AI POS that does all of that — plus controls up to 3,000 door locks from a single premises.

Everything stays on your own server. No cloud dependency. Full Privacy Act compliance.

Your business. Your data. Your rules."

For Property Managers (OZPMS)
"You manage thousands of properties. You can't be locked into a vendor who controls your tenants' access.

OZPMS gives you a 'mini Tuya' that you own. Your server. Your data. Your rules.

Manage 100,000+ properties worldwide — with 4 levels of hierarchy, full audit trails, and lawful credential lifecycle.

Your properties. Your data. Your rules."

9. SUMMARY
Category	AURA	MAVEN	OZPMS
AI	Personal assistant (voice, face, emotion, memory)	IVR POS (voice sales, reporting)	N/A
Lock Transport	Wi-Fi + BLE	Wi-Fi + BLE	Wi-Fi + BLE
Lock Control	Up to 10 locks	Up to 3,000 locks	100,000+ properties
Target	Residential	Commercial (F&B, Retail, Service, Manufacturing)	Enterprise property management
Platform	iOS/Android app	Tablet, Web, Kiosk	Self-hosted VPS, Web, Mobile
Self-Hosted	✅	✅	✅
Real-time	✅ (<1 sec)	✅ (<1 sec)	✅ (<1 sec)
Sovereignty	✅	✅	✅
No Lock-in	✅	✅	✅
Offline	✅ (BLE, PIN)	✅ (BLE, PIN)	✅ (BLE, PIN)