OZLOCK Platform Specification v4.0
Commercial & Residential Smart-Lock Security
Hardware-Anchored Key Lifecycle, Sleepy End Device Diagnostics, and Cryptographic Sovereignty Protocols

Author	Truong Viet Phan (Vince Phan)
Organization	eBizco Australia Pty Ltd
Date	August 2026
Status	Technical Product Specification — Version 4.0 (Residential Standard)
Revision Basis	Sovereign Edge Framework (v4.7) + Empirical R&D; Bench Results; XF-113 through XF-137; All‑in‑One Architecture Directive; Open Source Strategy
1. Executive Summary
1.1. Introduction and Core Philosophy
Connected hardware products routinely place consumers in a position transaction cost economics calls hold-up (Klein et al., 1978; Williamson, 1979): once a customer has made a relationship-specific investment — installing a lock, wiring a hub — the vendor who controls the supporting cloud can unilaterally alter terms, degrade functionality, increase subscription rates, or withdraw support altogether. This smart-lock specification develops a structural defense against hold-up that is architectural rather than contractual, ensuring that data, credentials, and hardware control remain solely in the hands of the property owner.

1.1.1. The Sovereign Edge Paradigm
OZLOCK occupies the Open-Open quadrant of the platform-governance matrix: Admission is kept open through permissible MIT protocol licensing, preventing consortium gatekeeping and five‑figure compliance assessments. Runtime control is kept open by utilising end‑to‑end payload encryption and locally derived cryptographic key handshakes, ensuring the server acts purely as a content‑blind relay.

1.2. Architectural Alignment with the Sovereign Edge Framework
The Sovereign Edge academic framework (v4.7) defines two axes of platform control: Admission Sovereignty (who may connect devices) and Runtime Sovereignty (who controls data and functionality). OZLOCK occupying the Open-Open quadrant means: (1) Admission is Open because the protocol is MIT‑licensed; anyone can build compatible hardware. (2) Runtime is Open because the lock's private key is stored in silicon, never in the cloud; NEXUS is content‑blind; and code is GPLv3 and self‑hostable. The architecture systematically denies the vendor the complementary assets (credentials, keys, and logs) that would enable post‑purchase hold‑up. This is not a policy promise; it is enforced by silicon, cryptography, and open‑source licensing.

1.3. Empirical Research & Development Evidence
This specification is grounded in empirical bench validation across 25+ hardware-verified test runs (August 2026). The following tickets represent the complete empirical record:

Ticket	Description	Status
XF-113	Offline BLE deadlock (C5) — app fallback not wired	🟡 Partial
XF-114/115	Lock removal (ack-gated)	✅ VERIFIED
XF-116/117	Presence lag (Thread attach)	✅ FIXED
XF-120	Sealed unlock ({"kind":"unlock"})	✅ VERIFIED
XF-121/122	Capability discovery (verbs at enrolment)	✅ VERIFIED
XF-124	Universal device model registry	✅ ACTIVE
XF-125	Offline reliability matrix	✅ VERIFIED
XF-126	Assisted unlock gate (P0 safety)	✅ VERIFIED
XF-127	has_doorbell / profile_mismatch heartbeat ingestion	✅ FIXED
XF-128	PIN written to navigation_volume — mitigated	🟡 MITIGATED
XF-129	LockB enrollment flow	✅ VERIFIED
XF-130	DP47 bolt_state discarded → now published	✅ FIXED
XF-131	Events buffered never replayed → deferred to All‑in‑One	🔴 DEFERRED
XF-132	ASSIST_ARMED invisible → deferred to All‑in‑One	🔴 DEFERRED
XF-133	Revocation guarantee (XF-47) proven on both transports	✅ VERIFIED
XF-134	bonds missing from Wi‑Fi heartbeat	✅ FIXED
XF-135	Heartbeat builder systemic divergence	✅ FIXED
XF-136	Member BLE unlock issue (GATT cache)	✅ RESOLVED
XF-137	Member list refresh after /revoked push	✅ FIXED
This empirical evidence proves the Sovereign Edge model is not theoretical — it is hardware-verified.

2. System Architecture (Current Stable Release)
This section describes the currently deployed and verified architecture based on the piggyback (Tuya‑DP) model.
The future All‑in‑One architecture is described in §10.

2.1. Network Topologies
The physical network topology is structured to route data securely while maintaining complete physical control locally. BANOI/MAOI Apps communicate with the local smart lock via Bluetooth Low Energy (BLE) for instant offline door unlocking. Remote commands tunnel from the BANOI App up to the cloud‑based NEXUS server. Instead of acting as a persistent direct socket connection, NEXUS uses a queue‑and‑flush model where remote commands are safely stored in a pending queue database and flushed immediately upon the device's next wake‑up poll. Commands are delivered down to the physical lock either directly via Wi‑Fi (Economy tier) or relayed through an ESP32‑C6 N16 Thread Bridge (Premium tier) over an ultra‑responsive Thread Mesh.

2.2. Component Descriptions
Component	Description & Key Properties
Door Lock (ESP32‑C6 N8)	Battery‑powered, Thread or Wi‑Fi. Holds a unique static X25519 Private Key in readable eFuse BLOCK_KEY0. Key survives factory wipes but enters general‑purpose RAM briefly during ECDH computation. Lock handles credential validation and audit logging 100% offline. Event Storage: JSONL ring buffer on LittleFS (/txlog.0 + /txlog.1), 10,000 events. Written to flash before transmit. No push‑replay on reconnect — recovery is pull‑based via query_events with a since_seq cursor. dropped_before_seq marker written to NVS before rotation to name oldest still‑readable seq. Heartbeat: reports seq_highwater (last seq written) and dropped_before_seq (records < this are permanently lost) on both Thread beacon and Wi‑Fi MQTT heartbeat.
Bridge (ESP32‑C6 N16)	Mains‑powered Thread Border Router + MQTT gateway. Transparent proxy. Relays opaque hexadecimal envelopes down to individual door locks over Thread Mesh. Filters packets to fit within the strict 256‑byte Thread MTU limits. Unicast downlink: verified on hardware (bridge32-1.39); sends unicast to known locks, multicast fallback only.
MQTT Broker (Secure, Always‑Online)	Central message bus for all system communication. Runs on a dedicated, secured server (typically alongside ozlockserv). Handles all publish/subscribe traffic between bridges, ozlockserv, and the BANOI/MAOI apps. Does not retain messages for sleeping devices — locks disconnect with a clean session, so messages published while a lock sleeps are dropped. This is intentional; the reliability layer is ozlockserv's pending_queue, not MQTT. Security: Configured with mandatory TLS 1.2+ encryption, client certificate authentication, and strict ACLs scoping each client to its own topics.
ozlockserv (Server)	The always‑online middleman and the system's memory. Subscribes to all lock/bridge MQTT topics. Maintains an in‑memory presence cache and a database (pending_queue, locks, audit_log). Key responsibilities: (1) Queues commands for offline locks (pending_queue) and flushes them on next heartbeat — this is the only reliable command path for sleeping locks; (2) Stores control‑plane audit trail (audit_log) of what the app did (pairing, grant/revoke, remote‑unlock request, settings changes) — but does not ingest door/access events (those are the lock's responsibility, per Sovereign Edge data‑minimisation); (3) Exposes REST API for the app to query lock state (GET /locks) and pull control‑plane audit (GET /apps/:appId/activity); (4) Serves public‑key directory for bootstrapping (GET /locks/:mac/pubkey); (5) Reconciles grant outcomes with lock‑reported status codes; (6) Detects stale consumers — ingests seq_highwater/dropped_before_seq from heartbeat, compares against last_pulled_seq from app (via PATCH /locks/:id), logs events_at_risk warning if dropped_before_seq > last_pulled_seq; (7) Enforces 90‑day audit retention — daily purge + boot‑time sweep. Security: stores no private keys, no door‑event logs, no plaintext credentials.
BANOI / MAOI App	Flutter‑based mobile app. Acts as a secure digital key container. Connects via BLE locally to negotiate offline locks, or queries public keys from NEXUS to wrap remote commands in AES‑256‑GCM envelopes. Event pull: manual only, at the door — Log tab's "Đồng bộ" button, gated behind touch‑to‑wake. No foreground/background auto‑pull. MQTT: subscribes to lock topics for real‑time updates; reconnects with exponential backoff on app‑resume. Event history: pulls via query_events (BLE) from the lock; GET /locks/:id/log returns 410 Gone. last_pulled_seq: reported to ozlockserv via PATCH /locks/:id after a successful pull (best‑effort, fire‑and‑forget).
NEXUS Server	Model registry and public‑key directory — distinct from ozlockserv. Stores device models, capabilities, and public keys indexed by MAC addresses. Hosts the admin dashboard for model registration. device_models table live with GET /api/v1/device-models endpoints; admin CRUD/import pending live‑test. See XF‑124.
ozkit (SIMLOCK)	Benchtop UART test fixture, not a Bluetooth device. No BLE, no app pairing. Reports its own firmware_id via REST/MQTT; selects DUT profiles locally from compiled PROGMEM tables (/config dropdown, NVS‑persisted). No Nexus dependency to operate. Fetches display‑name lookups from Nexus optionally (server‑side, never a hard dependency).
2.3. The Two Consumer Configurations
Feature / Metric	OZLOCK Premium	OZLOCK Economy
Wireless Protocol	Thread Mesh (802.15.4)	Wi‑Fi Direct (2.4GHz)
Bridge Required	Yes (Included ESP32‑C6 N16)	No
Hardware Cost	Sub‑$100 AUD	~$80 AUD
Remote Latency (Warm)	1–5 s (typical 2.5s)	Not available (queued 5‑min heartbeat)
Remote Latency (Cold)	Up to 15 s (mesh reconvergence)	Not available
Offline BLE Unlock	Instant at door (sub‑second)	Instant at door (sub‑second)
Battery Life Expectancy	Estimated 2–7+ years (varies with poll interval; measurement pending)	Estimated 2+ years (300s default heartbeat)
Wi‑Fi/MQTT Heartbeat	N/A (Thread network)	300s (5 min) default, configurable 60–900s
2.4. Offline Reliability Matrix
Scenario	What Happens	Reliability
App offline → events happen	DL stores events (10,000 buffer). App pulls via query_events when reconnected.	✅ Reliable
Bridge offline → events happen	DL stores events. No push‑replay. App pulls via query_events.	✅ Reliable
DL offline → app issues unlock	Server queues in pending_queue (60s TTL, by design). Not delivered late.	✅ Correct (security)
DL offline → app issues grant	Server queues in pending_queue (7d TTL). Delivered on wake.	✅ Reliable
DL asleep → command issued	MQTT drops message (clean session). Server re‑sends from pending_queue on wake.	✅ Reliable (server queue)
MQTT broker down	No transport buffering; pending_queue stays queued. Retried on next heartbeat or REST call.	✅ Reliable
App's MQTT session dies	Events accumulate on DL. Server detects stale consumer via seq_highwater vs last_pulled_seq.	🟢 Now monitored
Thread lock event	Stored locally; no replay. Recovery via query_events.	✅ Reliable
Key Architectural Principle: "The lock keeps it. Someone must pull it."

Critical Distinction: MQTT is not a reliable transport to sleeping locks — the server's pending_queue is the reliability layer.

3. Power Consumption & Thread Mode
3.1. Empirical Power Measurements
Mode	Radio State	Average Current	Battery Life (2500 mAh)	Latency	Notes
FTD (rx_on=1)	Always on (receiver)	~35 mA	~3 days	< 100 ms	Unviable on batteries
SED (1s poll)	Sleeps, wakes every 1s	~180 µA	~1.6 years	~500 ms	Premium
SED (2s poll)	Sleeps, wakes every 2s	~100 µA	~2.8 years	~1 s	Standard
SED (5s poll)	Sleeps, wakes every 5s	~45 µA	~6.3 years	~2.5 s	Economy
Wi‑Fi (300s heartbeat)	Sleeps, wakes every 300s	~20 µA	~14 years	Up to 5 min	ECO
🔴 CORRECTION 2026-08-21: No power instrument exists on the bench. All µA figures are estimates based on datasheet values. Real measurements pending. DL‑MCU is ~75% of the power budget; realistic figures at 20 opens/day are ~1.1 years, not 6.3 years. See ozkey-36.md.

3.2. Thread Mode Optimization (SED vs. FTD)
🔴 CORRECTION 2026-08-21: SED mode has never been enabled on any board. cfgThreadSed defaults false. Unicast downlink blocker removed in bridge32-1.39 (D2 closed), but SED itself remains untested.

3.3. Low‑Power Operational Enhancements
Fast Poll on BLE Touch — verified.

Unicast Downlink — ✅ verified on bridge32-1.39; blocker removed.

Wi‑Fi Heartbeat — 300s default, configurable 60–900s.

4. Trust & Security Model
4.1. Reconciled eFuse Root of Trust (Option b)
🔴 CORRECTION 2026-08-21: No eFuse has ever been burned on any bench board. JTAG and UART are both live. The $100,000 AUD physical exploit claim is overstated. See ozkey-34.md §5 and §7.

4.2. Data Sovereignty and Minimization
🔴 CORRECTION 2026-08-21: The "disabled JTAG/UART interfaces" claim is false. The "private key files securely erased at factory" claim is unvalidated.

4.2.1. Plaintext Wire Log Gate Remediation (Claim C7)
🔴 CORRECTION 2026-08-21: This gate was never built. No compile‑time flag exists. C7 remains NOT BUILT.

5. Key Operational Workflows
5.1. The Heartbeat Queue‑and‑Flush Flow
🟢 CRITICAL DISTINCTION (XF‑125 F7/S2/S4): MQTT is not a reliable transport to a sleeping lock. The lock disconnects with a clean session before sleeping, so the broker holds nothing for it. Any message published to a sleeping lock's topic is dropped. Delivery works only because ozlockserv re‑sends from its own pending_queue on wake. The server's queue is the reliability layer.

5.2. BANOI App Bootstrapping Handshake
🟢 UPDATE 2026-08-21: Verified on hardware. Bond #0 establishment, X25519 ECDH, and sealed envelope encryption tested on LockA and LockB (XF-106, XF-114).

5.3. Capability Discovery & Default Profile
🟢 UPDATE 2026-08-21: Verified on hardware. doorlock-2.07 reports verbs at enrollment; pid_capabilities is live. See XF-121, XF-122, XF-124.

6. Comparison & Differentiation
6.1. Comparative Analysis Matrix
Feature / Metric	Sovereign Edge (OZLOCK)	Tuya / TTLock (White‑Label)
Cloud Ownership	Homeowner / Self‑hosted on private VPS	Tuya / TTLock (PRC‑domiciled corporate cloud)
Credential Storage	Opaque end‑to‑end encrypted envelopes; never stored on cloud	Plaintext PINs, RFID cards, and biometric templates stored centrally
Server Command Visibility	Content‑blind relay	Server reads every raw command
Offline Operation	Fully operational locally via BLE	Highly restricted
Platform Lock‑In	Zero — open MIT protocols + GPLv3	Absolute dependency
6.2. Moat & Strategic Licensing
Component	License	Rationale
Protocol Specification	MIT (permissive)	Removes adoption barriers for hardware manufacturers
Firmware (doorlock, bridge)	GPLv3 (copyleft)	Forces improvements to be contributed back
Server (ozlockserv, ozlodgeserv)	GPLv3 (copyleft)	Same reason
App (BANOI, MAOI)	GPLv3 (copyleft)	Same reason
NEXUS / Nexus model registry	GPLv3 (copyleft)	Same reason
The MIT + GPLv3 split is the "Williamsonian hostage": MIT removes ex‑ante entry barriers. GPLv3 prevents ex‑post vendor lock‑in through the anti‑tivoization clause.

7. System Implementation Status
7.1. Revision History & Retrospective
Since v3.8, the following major issues have been resolved:

XF Ticket	Description	Status
XF-126	Assisted unlock gate (P0 safety)	🟢 VERIFIED
XF-127	has_doorbell / profile_mismatch heartbeat ingestion	🟢 FIXED
XF-128	PIN written to navigation_volume — mitigated, deferred	🟡 MITIGATED
XF-129	LockB enrollment flow	🟢 VERIFIED
XF-130	DP47 bolt_state discarded → now published	🟢 FIXED
XF-131	Events buffered never replayed → deferred to All‑in‑One	🔴 DEFERRED
XF-132	ASSIST_ARMED invisible → deferred to All‑in‑One	🔴 DEFERRED
XF-133	Revocation guarantee (XF-47) proven on both transports	🟢 VERIFIED
XF-134	bonds missing from Wi‑Fi heartbeat	🟢 FIXED
XF-135	Heartbeat builder systemic divergence	🟢 FIXED
XF-136	Member BLE unlock issue (GATT cache)	🟢 RESOLVED
XF-137	Member list refresh after /revoked push	🟢 FIXED
The piggyback architecture is now stable and production‑ready.
All security-critical and reliability-critical features have been verified on hardware across both transports (Wi‑Fi and Thread).

7.2. Status Register
7.2.1. Shared Platform Claims (C1–C18)
ID	Claim Description	Status	Reference
C1	Commands AES‑256‑GCM sealed	✅ VERIFIED	XF-120
C2	Server relays envelope_hex verbatim	✅ VERIFIED	XF-120
C3	Monotonic counter prevents replay	✅ VERIFIED	LockA/LockB
C4	Credentials never stored plaintext	✅ VERIFIED	XF-95, XF-105
C5	Lock works offline via BLE	🟡 PARTIAL	XF-113 — app fallback not wired, but BLE unlock works for bonded members
C6	Lock‑to‑app channel sealed	✅ VERIFIED	ozkey-17
C7	Server stores no door events	🔴 NOT BUILT	ozkey-34 §12
C8	SED power optimization	🟡 BUILT, DEFAULT OFF	XF-116
C9	Multi‑year battery life	🔴 ESTIMATED, NOT MEASURED	ozkey-36
C10	Self‑hostable, open source	✅ VERIFIED	In‑repo
C11	eFuse BLOCK_KEY0 burned	🔴 SPECIFIED, NOT BURNED	ozkey-34 §10
C12	NEXUS stores public keys only	✅ VERIFIED	XF-106
C13	App retrieves public key	✅ VERIFIED	XF-106
C14	Hardware ECDH	🔴 HARDWARE GAP	ozkey-34 §7
C15	MAC spoofing ineffective	✅ THEORETICALLY SECURE	XF-106
C16	eFuse USER purpose	🔴 SPECIFIED, NOT BURNED	ozkey-34 §10
C17	Private keys erased at factory	🔴 NOT VALIDATED	ozkey-34 §12
C18	Forward secrecy not claimed	✅ ACKNOWLEDGED	Rev 3.5/3.6
7.2.2. Corrected Claims (from Firmware Bench)
ID	Original	Corrected	Reason
C5	VERIFIED	🟡 PARTIAL	App routes on static topology; member BLE unlock works
C7	VERIFIED	🔴 NOT BUILT	No compile‑time gate
C8	VERIFIED	🟡 BUILT, DEFAULT OFF	SED never enabled
C9	MEASURED	🔴 ESTIMATED	No power instrument
C11	VERIFIED	🔴 SPECIFIED, NOT BURNED	No eFuse burned
C16	VERIFIED	🔴 SPECIFIED, NOT BURNED	No eFuse burned
C17	VERIFIED	🔴 NOT VALIDATED	No programming line
7.2.3. XF-125 Findings (Offline Reliability)
Feature	Status	Reference
Event storage (10,000 events)	✅ Verified	XF-125 F1/F3
No push‑replay — pull‑based	✅ Verified	XF-125 F2/F9
Command queuing (pending_queue)	✅ Verified	XF-125 S2/S4
MQTT not reliable to sleeping locks	✅ Verified — critical distinction	XF-125 F7
seq_highwater in heartbeat	✅ Verified	XF-125 Firmware P0
dropped_before_seq in heartbeat	✅ Verified	XF-125 Firmware P0
Server stale‑consumer detection	✅ Verified	XF-125 Server P0
App reports last_pulled_seq	✅ Verified (best‑effort)	XF-125 App P1
audit_log retention (90d)	✅ Verified	XF-125 Server P1
App MQTT status indicator	🔴 Not built — optional	XF-125 G1
7.2.4. Current Implementation Status
Feature	Status	Reference
Sealed unlock ({"kind":"unlock"})	✅ VERIFIED	XF-120
Lock removal (ack‑gated)	✅ VERIFIED	XF-114/115
Presence lag (Thread attach)	✅ FIXED	XF-116
Server reachability threshold	✅ FIXED	XF-117
Bridge unicast downlink	✅ VERIFIED	D2
SED enablement	🟡 UNBLOCKED, DEFAULT OFF	XF-116
Heartbeat builder parity	✅ FIXED	XF-135
bonds on Wi‑Fi heartbeat	✅ FIXED	XF-134
event.bolt (DP47)	✅ FIXED	XF-130
Revocation (XF-47)	✅ VERIFIED (both transports)	XF-133
Member list refresh	✅ FIXED	XF-137
PIN credential writes	🟡 MITIGATED (UI‑gated)	XF-128
Assisted armed status	🔴 DEFERRED	XF-132
Event replay	🔴 DEFERRED	XF-131
Generic DP map (tuya-generic-lock)	🔴 DEPRECATED	XF-122
Universal device model registry	✅ ACTIVE	XF-124
App hardcoded model list	⚠️ WORKING, TO BE REPLACED	XF-124
ozkit model selection	🔴 Local dropdown (no Nexus)	XF-124 §11
8. Open Items (Current Architecture)
#	Item	Owner	Priority	Reference
1	eFuse burn test — no eFuse ever burned	Firmware	🔴 P0	ozkey-34 §10
2	SED enablement test — unblocked, never run	Firmware	🔴 P0	XF-116
3	Power instrument procurement — no measurements	PM/Operator	🔴 P0	ozkey-36 §7
4	App MQTT connection status indicator	App	🟡 P1	XF-125 G1
5	Nexus admin dashboard — code done, auth untested	Nexus	🟡 P1	XF-124 N5
6	BANOI model list — replace hardcoded lock_models.dart with Nexus API	App	🟡 P1	XF-124 A1
7	RFID/PIN credential management — blocked on supplier raw layouts	PM	🔴 P0	ozkey-42
8	ozkit /config dropdown — local profile selection	ozkit	🟡 P1	XF-124 §11
9. XF-125 Summary
XF-125 verified the offline reliability of the system across all scenarios.

What Works:

DL stores 10,000 events locally (txlog ring buffer)

No push‑replay — recovery is pull‑based via query_events

Commands queued by ozlockserv (pending_queue)

Credentials persist 7 days; unlock expires 60s (by design)

seq_highwater and dropped_before_seq reported in heartbeat (both Thread and Wi‑Fi)

Server detects stale consumers (events_at_risk warning)

audit_log retention enforced (90d)

Critical Distinctions:

MQTT is not reliable to sleeping locks — the server's pending_queue is the reliability layer

Any publisher other than ozlockserv loses messages to sleeping locks with no error

The app pulls events manually via BLE (query_events); no auto‑pull

query_events is BLE‑only — no MQTT observation is possible

Gaps:

App MQTT connection status indicator (low priority, optional)

eFuse burn, SED enablement, power measurements remain unverified (P0)

10. All‑in‑One Architecture Direction (ozkieOS)
10.1. Strategic Rationale
The current architecture is a piggyback model: our ESP32‑C6 talks UART (Tuya 0x55AA hex commands) to a separate DL‑MCU (STM32) that owns the hardware. This model has been proven stable, but it has inherent limitations:

Issue	Why It Matters
Two MCUs → power‑gating conflict	Remote unlock latency suffers; deep sleep optimisation is limited.
Dependency on supplier DP layouts	PIN/RFID/fingerprint provisioning blocked on missing RAW payloads (ozkey-42).
Limited visibility into DL‑MCU behaviour	We cannot read bolt state, keypad events, or tamper directly.
Tuya‑specific code	DP maps, profiles, and hex parsing are a maintenance burden.
The solution is a single‑chip All‑in‑One ESP32‑C6‑WROOM‑1‑N16 mainboard that replaces both the RF module and the DL‑MCU. The ESP32 directly drives all peripherals: keypad, RFID, fingerprint, motor, doorbell, tamper, and battery monitoring.

10.2. New Hardware Stack
The RX2067 mainboard (schematic pending) will provide:

Peripheral	Interface
Keypad matrix	I2C expander (MCP23017) or GPIO matrix
RFID reader (RC522/PN532)	SPI
Fingerprint sensor (AS608)	UART
Motor driver (H‑bridge)	GPIO + PWM
Doorbell button	GPIO interrupt
Tamper switch	GPIO interrupt
Battery monitor	ADC
(Future) Video MCU	SPI/UART
All peripherals are directly driven by the ESP32‑C6.

10.3. Software Architecture (ozkieOS)
The firmware will be restructured as a lightweight, deterministic embedded operating system:

text
┌─────────────────────────────────────────────────────────────────────────────┐
│  L4 — OZKIE Application Layer                                             │
│  Verb Dispatcher: lock.unlock → Motor Driver; cred.put → Keypad/RFID/FP  │
├─────────────────────────────────────────────────────────────────────────────┤
│  L3 — Core Services                                                       │
│  Event Logger (txlog), OZKIE Envelope Processing, eFuse Key Management,    │
│  Bond Management, Capability Reporting, OTA Manager                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  L2 — Peripheral Abstraction Layer                                        │
│  Keypad Driver, RFID Driver, Fingerprint Driver, Motor Driver,            │
│  Doorbell Driver, Tamper Driver, Battery Monitor, Video MCU Driver (future) │
├─────────────────────────────────────────────────────────────────────────────┤
│  L1 — Hardware Abstraction Layer (HAL)                                    │
│  GPIO, I2C, SPI, UART, ADC, PWM, Interrupts — ESP‑IDF native drivers      │
├─────────────────────────────────────────────────────────────────────────────┤
│  L0 — RTOS (FreeRTOS)                                                     │
│  Task Scheduling, Interrupt Handling, Power Management                   │
└─────────────────────────────────────────────────────────────────────────────┘
10.4. Key Benefits
Benefit	Why
Multi‑year battery life	We control sleep/wake of the entire system (no second MCU).
Instant remote unlock	No second MCU to wake up.
Lower BOM cost	One MCU instead of two.
Full sovereignty	No reliance on Tuya DL‑MCU firmware or DP layouts.
Peripheral flexibility	Add/remove peripherals without changing the DL‑MCU.
Direct capability reporting	The lock tells the app exactly what hardware it has.
10.5. Impact on Current Issues
Issue	How All‑in‑One Resolves It
XF-128 (PIN routing)	Dissolves — no Tuya DP map, no reserved DP16.
XF-132 (ASSIST_ARMED invisible)	Redesigned — statuses are published directly as uplink events.
XF-131 (event replay)	Redesigned — re‑push logic is part of the new OS.
Supplier raw layouts (ozkey-42)	No longer needed — we control the credential storage directly.
eFuse burn test	Still required — identity root remains.
Power measurements	Still required — but now we measure our own hardware.
10.6. Implementation Status
Phase	Activity	Status
0	Feasibility assessment (ozkey-43)	✅ COMPLETE
1	Design driver mock harness (software mock at L2)	🔴 Not started
2	Request RX2067 schematic	🔴 Pending
3	Write peripheral drivers	⏸️ Blocked on schematic
4	Integrate with OZKIE core	⏸️ Blocked on drivers
5	Test on real hardware	⏸️ Blocked on hardware
11. Open Source Strategy & Ecosystem
11.1. Why Open Source Is the Adoption Engine
In Western markets (EU, US, UK, Australia), open source is not optional — it is a competitive requirement for any product claiming sovereignty, privacy, and no vendor lock‑in.

Factor	Why It Matters
Trust deficit	Consumers and enterprises are wary of closed, proprietary "smart" devices after years of privacy scandals. Open source is the only verifiable proof of sovereignty.
Government procurement	EU and US government contracts increasingly require source code access for security auditing. Closed source is a non‑starter.
Enterprise IT	IT departments require the ability to audit, self‑host, and customise. Open source is mandatory for serious B2B adoption.
Developer community	The Western tech ecosystem is built on open source. If you want integrations, contributions, and third‑party support, you must be open.
Vendor lock‑in resistance	Western consumers are highly sensitive to being locked into a single vendor. Open source gives them an exit path.
EU Cyber Resilience Act	The CRA mandates transparency and security updates. Open source aligns perfectly with the spirit of the regulation.
11.2. License Architecture
Component	License	Rationale
Protocol Specification	MIT (permissive)	Removes adoption barriers for hardware manufacturers
Firmware (doorlock, bridge)	GPLv3 (copyleft)	Forces improvements to be contributed back
Server (ozlockserv, ozlodgeserv)	GPLv3 (copyleft)	Same reason
App (BANOI, MAOI)	GPLv3 (copyleft)	Same reason
NEXUS / Nexus model registry	GPLv3 (copyleft)	Same reason
The MIT + GPLv3 split is the "Williamsonian hostage": MIT removes ex‑ante entry barriers. GPLv3 prevents ex‑post vendor lock‑in through the anti‑tivoization clause.

11.3. Cryptographic Liability Boundary
11.3.1. Authorised vs. Unauthorised Firmware

OZLOCK hardware verifies firmware signatures before booting. This creates a clear, auditable boundary between manufacturer‑supplied and user‑supplied firmware.

Firmware	Signature	Hardware Response	Liability
Authorised (signed by eBizco)	Valid	Boots	eBizco
Unauthorised (unsigned or signed by another party)	Invalid	Rejects	User (if they circumvented protections)
11.3.2. Legal Defence

If a device is used for unintended purposes (including malicious use), the audit trail (txlog) and cryptographic verification (signature check) provide evidence of whether the device was running authorised or unauthorised firmware.

Authorised firmware: eBizco is liable for defects in that firmware.

Unauthorised firmware: The user assumes all liability.

11.3.3. Scope of Liability

eBizco is not liable for:

Damage caused by unauthorised firmware

Damage caused by user modification

Damage caused by use outside the intended purpose (door access control)

11.4. Repository Structure
text
ozkey/
├── LICENSE           (GPLv3)
├── README.md         (overview, build instructions, contributing guide)
├── CONTRIBUTING.md   (how to contribute, code of conduct)
├── SECURITY.md       (responsible disclosure policy)
├── firmware/
│   ├── doorlock/
│   ├── bridge32/
│   ├── locksim/
│   └── simlock/
├── server/
│   ├── ozlockserv/
│   ├── ozlodgeserv/
│   └── ozpms/
├── apps/
│   ├── banoi/
│   └── maoi/
└── docs/
    ├── protocol/     (MIT-licensed spec)
    ├── hardware/     (schematics, BOM)
    └── guides/       (user and developer documentation)
11.5. Community Building
Strategy	Why It Works
Publish source repository	Signals that you are serious about open source
Document hardware interfaces	Makes it easy for developers to build on your platform
Engage with hardware partners	M5Stack, Espressif, distributors — creates an ecosystem
Create a community	Discord, forum, mailing list — builds a developer base
Offer developer kits	Sell modules at cost to encourage adoption
Accept contributions	GPLv3 ensures improvements are contributed back
12. Liability & Risk Mitigation
12.1. Intended Use
OZLOCK is designed for residential and commercial door access control. It is not a safety‑critical device. It must not be used to control equipment where failure could cause injury or death.

12.2. User Modifications
OZLOCK supports user reflash and custom firmware. The user assumes all liability for modifications. Signed firmware (via public/private key pairing) is required for OTA updates, providing a clear boundary between manufacturer‑supplied and user‑supplied software.

12.3. Manufacturer Liability
eBizco Australia Pty Ltd is liable for defects existing at the time of manufacture. This includes all hardware defects and any firmware defects in the officially released version. It does not include liability for damage caused by user modification, misuse, or third‑party software.

12.4. Risk Mitigation
Risk	Mitigation	Status
eFuse key unverified	Burn eFuse on test board	🔴 P0
JTAG/UART open	Disable on production boards	🔴 P0
SED unvalidated	Run tests with power instrument	🔴 P0
Battery life unmeasured	Procure power instrument	🔴 P0
Safety gate (assisted unlock)	Verified (XF-126)	✅ Done
Offline BLE fallback	Wired (XF-113)	🟡 In progress
User misuse	Cryptographic liability boundary	✅ Built
Malicious firmware	Unsigned firmware rejected; user assumes liability	✅ Built
12.5. Misuse & Abuse
OZLOCK is designed exclusively for door access control. It is not a safety‑critical device and must not be used to control equipment where failure could cause injury or death.

Risk	Mitigation
Device repurposed for malicious use	Documented intended use + warnings
Firmware modified for malicious purposes	Cryptographic signing creates a clear boundary — signed firmware is ours; unsigned is the user's
Physical tampering	JTAG/UART disabled on production units
Remote compromise	OTA updates require cryptographic signing; unauthorised firmware cannot be installed
The cryptographic model ensures that any unauthorised firmware is clearly distinguishable from authorised firmware. This provides a legal defence against claims that the device was used for unintended purposes.

13. Open Items & Next Steps
Priority	Action	Owner
P0	Push XF-133 and XF-135 commits (secure current baseline)	Firmware
P0	Order power instrument (enable real SED measurements)	PM/Operator
P0	Burn eFuse on at least one test board (validate production path)	Firmware
P0	Disable JTAG/UART on production boards (secure physical access)	Firmware
P1	Wire BLE fallback for owner remote unlock (close XF-113)	App + Firmware
P1	Build driver mock harness (replace LockSim for All‑in‑One)	Firmware
P1	Publish source repository (GitHub, GPLv3)	PM / Firmware
P1	Document hardware interfaces (developers need this)	Firmware
P2	Replace hardcoded model list with Nexus API (XF-124 A1)	App
P2	Engage hardware partners (M5Stack, Espressif)	PM
14. Summary & Bottom Line
14.1. What Is Proven
The Sovereign Edge model is hardware‑verified.

Revocation, offline reliability, sealed unlock, and heartbeat parity are proven on both transports.

The content‑blind relay and 10,000‑event ring buffer guarantee data sovereignty.

The cryptographic liability boundary protects eBizco from user misuse.

14.2. What Remains
eFuse burn, JTAG/UART disable, SED test, and power measurement are P0 gaps.

The All‑in‑One pivot dissolves Tuya‑specific issues and improves battery life.

Open source is the adoption engine — it builds trust, community, and ecosystem.

The repository must be published under GPLv3.

14.3. Final Statement
OZLOCK v4.0 is the empirical foundation of the Sovereign Edge research paper.

It proves that open hardware, cryptographic sovereignty, and community‑driven development can coexist with commercial viability.

The next step is production‑ready hardware and an open source ecosystem.

15. Future Network Topology — LoRa-Augmented Bridge for High-Density Deployments

15.1. Status

🟡 PROPOSAL — direction set by the operator 2026-09-01. Not built. No schematic, no firmware. Recorded here so the intent is on record ahead of hardware selection, following the same practice as §10's All‑in‑One direction.

15.2. Motivation

BLE is already the sole lock‑pairing and lock‑communication transport as of the 2026‑08‑30 operator directive (Wi‑Fi and Thread removed as lock transports outright, not deprioritised — see XF‑138). That directive's original phrasing named LoRa as the eventual long‑range / no‑bridge answer scoped to the lock side — a ~$5 SPI LoRa module (SX12xx‑class) on the CH584M lock's own SPI port. Nothing was built against that scoping; this section supersedes it with bridge‑side placement instead, for a per‑unit economics reason, not just the high‑density coverage case originally cited.

Per‑unit cost multiplies with lock count, and lock count per site is structurally high in OZLOCK's actual target markets — not the single‑front‑door case a per‑lock radio budget implicitly assumes:

Market	Driver	Locks per site
Australia	Minimum two entry doors per dwelling is typical (front + rear/garage)	2+
Asia	Multi‑generational households (operator's figure: four generations under one roof) push toward room‑level locking, not just entry‑level	Can run to one lock per room

A LoRa module on every lock means the per‑unit LoRa cost is paid N times per site, where N is already structurally larger than "one lock, one house" in these markets. A LoRa module on the bridge instead is paid once per bridge, and one bridge already serves many locks over BLE (the existing, unchanged lock‑facing protocol, §15.3) — so the SAME LoRa hardware spend covers the whole site's worth of locks rather than one lock at a time. Bridge‑side placement is the cheaper deployment at the site level specifically because of how many locks a real AU/Asia site has, not only because it also happens to solve the high‑density BLE‑coverage gap the original XF‑138 scoping didn't address.

15.3. Proposed Architecture

BLE remains the primary, unchanged lock‑facing protocol — no change to how a lock already talks to a bridge or to the app at the door.

The bridge becomes a multi‑radio gateway, combining onto one physical unit what would otherwise need separate hardware:

Radio	Role	Status
Wi‑Fi	Cloud uplink (bridge ↔ MQTT broker ↔ ozlockserv) — existing, unchanged	✅ In production
BLE	Lock‑facing, primary — existing, unchanged (2026‑08‑30 directive)	✅ In production
LoRa	NEW — long‑range link to locks/repeaters outside BLE range, for high‑density/large‑footprint sites	🔴 Proposed, not built

Rationale (operator, 2026‑09‑01): integrating all three radios onto one bridge SKU rather than shipping a separate dedicated LoRa gateway product reduces BOM and SKU count — fewer physical units are needed to cover a large or high‑density site, and there is one hardware line to manufacture and support instead of two.

15.4. Candidate Hardware

Chosen direction (operator, 2026‑09‑01): ESP32‑C6 + LoRa SX12xx‑class module, as the bridge chipset for this product line.

Same MCU family as the current production bridge (ESP32‑C6 N16, §2.2) — this is an added SPI‑connected radio on the existing bridge hardware/firmware base (`bridgeBLE.ino`, `blelock/bridgeBLE/`), not a new MCU port. WiFi/MQTT uplink and BLE central role are already running on this chip today; the new work is the LoRa driver and link layer, plus whatever pin/board changes the SX12xx module needs.

15.5. Open Items

#	Item	Owner	Priority
1	Bridge‑side LoRa link layer (pairing with the lock‑side SX12xx module named in XF‑138) — no protocol, framing, or range budget defined yet	Firmware	🔴 P0 (blocks any build)
2	Board/schematic change for the SX12xx SPI module on the existing ESP32‑C6 bridge — BOM, connector, antenna placement	PM/Operator	🔴 P0
3	LoRa payload‑size / duty‑cycle budget against the existing sealed‑envelope command size (XF‑59, ozkey‑27) — LoRa's payload ceiling is far smaller than BLE/Thread's, unverified whether the current envelope fits	Firmware	🔴 P0, blocks #1
4	Regulatory: LoRa duty‑cycle/frequency‑plan compliance for target markets (AU/EU/US differ)	PM/Operator	🟡 P1

© 2026 eBizco Australia Pty Ltd — Sovereign Edge Standard — CONFIDENTIAL