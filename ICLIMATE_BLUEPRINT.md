# ICLIMATE — Project Specification & Design System Blueprint
**Platform Name:** ICLIMATE (Indonesia Climate & Ecosystem Voice Platform)  
**Document Version:** 1.0.0  
**Status:** Approved Architectural Specification  
**Architecture Strategy:** Frontend-First Next.js (App Router) + Apple HIG Design System + Supabase Backend Integration  

---

## 1. Project Overview & Core Mission

### 1.1 Executive Summary
**ICLIMATE (Indonesia Climate & Ecosystem Voice Platform)** is an urgent environmental journalism, visual storytelling, and civic action platform amplifying frontline ecological crises across the Indonesian archipelago. The platform bridges hard scientific data, investigative journalism, citizen reporting, and grassroots mobilization into a cohesive digital experience.

### 1.2 Core Purpose & The 3 Impact Pillars
ICLIMATE documents, highlights, and accelerates direct civic response to critical environmental emergencies across Nusantara:
1. **For the Forest (Hutan Tropis & Gambut):** Peatland degradation, mega-fires in Sumatra & Central Kalimantan, illegal concession logging, and biodiversity corridor depletion.
2. **For the Animal (Satwa Endemik Terancam Punah):** Critical wildlife conservation focusing on critically endangered umbrella species—such as the Ujung Kulon Javan Rhinoceros (*Rhinoceros sondaicus*), Sumatran Tigers, Orangutans, and marine sanctuaries.
3. **For the People (Komunitas Adat & Pesisir):** Tidal flooding and land subsidence in Northern Java (Semarang/Pekalongan/Jakarta), indigenous land rights displacement, and frontline environmental defender security.

### 1.3 Target Audience Demographics
| Segment | Primary Needs & Use Cases | Platform Touchpoints |
| :--- | :--- | :--- |
| **Students & Youth Activists** | Fast-paced viral stories, petition signing, shareable Instagram/X snippets, reporting local eco-abuses. | `/`, `/stories`, `/movements` |
| **University Researchers & Academics** | High-fidelity scientific citations, satellite thermal data, downloadable verified PDF fact sheets. | `/about`, `/stories` (deep-dives) |
| **Environmental Activists & NGOs** | Petition hosting, coalition building, public movement directories, citizen report verification. | `/movements`, `/admin/movements` |
| **Journalists & Editorial Professionals** | High-credibility whistleblower evidence inbox, GPS metadata inspection, long-form scrollytelling. | `/admin/reports`, `/admin/stories` |

---

## 2. Visual Identity & Apple Human Interface Guidelines (HIG) Standards

### 2.1 Aesthetic Direction: "Cupertino Precision Meets Frontline Urgency"
The visual language merges **extreme Apple-inspired minimalism** (generous whitespace, optical precision, subtle translucent glassmorphism, refined micro-borders) with **raw urban street-graffiti brush accents**. 
- The clean Apple framework establishes scientific authority, trust, and premium editorial readability.
- The raw brush/graffiti touches inject urgent activist energy and emotional resonance, preventing the platform from feeling cold or bureaucratic.

### 2.2 Color System Token Matrix

| Token Name | Hex Code | Tailwind Utility Class | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Primary Off-White Canvas** | `#F5F5F7` | `bg-[#F5F5F7]` / `bg-canvas` | Default light mode backdrop, reminiscent of Apple hardware matte finish |
| **Deep Obsidian Dark Mode** | `#0D100E` | `bg-[#0D100E]` / `bg-obsidian` | Dark mode base, atmospheric hero banners, floating toolbars, and deep night themes |
| **Deep Twilight Surface** | `#141815` | `bg-[#141815]` / `bg-surface` | Elevated containers within dark mode heroes and cards |
| **Canopy Deep Green** | `#0F2A1D` | `bg-[#0F2A1D]` / `bg-surface-container`| Secondary dark green surface accentuating rainforest themes |
| **Primary Charcoal Ink** | `#1D1D1F` | `text-[#1D1D1F]` / `text-ink` | Ultra-high contrast primary typography in light mode |
| **Secondary Muted Text** | `#6E6E73` | `text-[#6E6E73]` / `text-muted` | Sub-headlines, metadata timestamps, footnote disclaimers |
| **Dark Mode Muted Text** | `#A1A1A6` | `text-[#A1A1A6]` / `text-muted-dark` | Captions and secondary labels in dark surfaces |
| **Urgent Alert Burnt-Orange** | `#E85D2A` | `bg-[#E85D2A]` / `text-alert` | Critical action buttons, signature progress fills, wildfire alert tags |
| **Deep Alert Ink** | `#C44114` | `text-[#C44114]` / `text-alert-ink`| Active hover/pressed state for urgent alert elements |
| **Canopy Gold / Amber** | `#D99B26` | `text-[#D99B26]` / `bg-accent`| Secondary highlights, high-importance data badges, animal alerts |
| **Refined Border Outline** | `#3A423D` / `rgba(255,255,255,0.08)` | `border-outline` | 1px subtle hairline boundaries on cards, glass panels, and dividers |

### 2.3 Apple Squircle Corner Geometry
In strict compliance with Apple Human Interface Guidelines, curvature follows hierarchical geometric squircle continuity:

```
+-----------------------------------------------------------+
| Hero & Dark Master Containers (28px - rounded-[28px])    |
|   +---------------------------------------------------+   |
|   | Content, Story & Petition Cards (20px - rounded-[20px])|
|   |   +-------------------------------------------+   |   |
|   |   | Form Inputs & Active Items (12px - rounded-[12px])|
|   |   +-------------------------------------------+   |   |
|   |                                                   |   |
|   |   ( Pill Buttons, Navbars, Tags: rounded-full )   |   |
|   +---------------------------------------------------+   |
+-----------------------------------------------------------+
```

| Component Hierarchy | Radius Value | Tailwind Class | Implementation Target |
| :--- | :--- | :--- | :--- |
| **Tier 1: Master Outer Containers** | `28px` | `rounded-[28px]` | Giant hero banners, fullscreen dark modal backdrops, major bento wrappers |
| **Tier 2: Content & Feature Cards** | `20px` | `rounded-[20px]` | Story cards, petition metric cards, Bento boxes, admin dashboard widgets |
| **Tier 3: Form Elements & Small Cards**| `12px` | `rounded-[12px]` | Text inputs, dropdown selects, textareas, active sidebar list items |
| **Tier 4: Capsule & Pill Controls** | `9999px` (Full) | `rounded-full` | Floating navbar, CTA buttons, progress bars, category filter tags, status badges |

### 2.4 Typography & Hierarchy Guidelines

```
1. Editorial Body & Headers : Plus Jakarta Sans / Inter (-0.03em to -0.04em tracking)
2. Street Urgent Accents     : Permanent Marker / Sedgwick Ave Display (10% to 15% ratio)
```

- **Primary UI & Editorial Body:** `Plus Jakarta Sans` or `Inter`
  - Body copy: `text-[15px]` to `text-[17px]`, leading `1.6`, neutral charcoal `#1D1D1F`.
  - Section Headlines: `text-[28px]` to `text-[42px]`, semibold/bold, tight tracking (`tracking-[-0.03em]`).
  - Giant Hero Headlines: `text-[56px]` to `text-[84px]`, extra-bold, tight tracking (`tracking-[-0.04em]`).
- **Graffiti Urgency Display Accent:** `Permanent Marker` or `Sedgwick Ave Display`
  - Usage rule: Strictly constrained to **10%–15% ratio** of display text.
  - Applied specifically to hero title emphasis (e.g. *"Suara dari Garis Depan Nusantara"* with *Nusantara* in graffiti style), urgent emergency badge banners, and signature counter highlights.

---

## 3. Complete Sitemap & Architecture (11 Screens Total)

```
                            [ICLIMATE PLATFORM]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
   [PUBLIC PORTAL]                                        [SUPERADMIN CMS]
         |                                                       |
  +------+------+------+                                  +------+------+------+------+
  |      |      |      |                                  |      |      |      |      |
  /  /stories /movements /about                       /login  /admin /stories /movements ...
                                                                 |      |      |
                                                            /reports /resources /settings
```

### 3.1 Public Experience Pages (4 Pages)

#### Page 1: `/` — Home (Public Portal Entry)
- **Header:** Floating glassmorphic capsule navbar (`bg-white/70 dark:bg-obsidian/70 backdrop-blur-xl border border-white/20 rounded-full`) with active indicator and quick "Suarakan" CTA.
- **Hero Section:** Atmospheric twilight rainforest background image with dark vignette, giant typography *"Selamatkan Nafas Terakhir Nusantara"*, dual CTAs (Urgent Petisi & Baca Investigasi), and live crisis ticker.
- **3 Pillars Bento Grid:**
  1. *For the Forest* (Kalimantan/Sumatra peatland alert with hotspot counts).
  2. *For the Animal* (Ujung Kulon Javan Rhino sanctuary tracker).
  3. *For the People* (Pantura coastal subsidence flood resilience report).
- **Voices in Motion (Suara Aksi Terkini):** Dark action list featuring real-time community signatures and verified field updates.
- **Sedang Ramai Dibicarakan (Viral Feed):** Grid of top-trending investigative dispatches with share buttons and bookmarking.

#### Page 2: `/stories` — Stories & Viral (Investigative Journal & Scrollytelling)
- **Category Filter Rail:** Capsule pill filters (`Semua`, `Hutan & Gambut`, `Satwa Terancam`, `Pesisir & Iklim`, `Masyarakat Adat`, `Transisi Energi`).
- **Featured Deep-Dive Story Card:** Full-width hero story with high-resolution editorial photography, reading time estimate, and author byline.
- **3-Column Curated Stories Grid:** Infinite scrollable/paginated cards featuring burnt-orange tags, view counts, and engagement metrics.
- **Scrollytelling Interactive Modal / Reader View:** Immersive reading view with sticky table of contents, 100% data callout quote blocks in `#0D100E`, and scientific glossary tooltips on complex environmental terms.

#### Page 3: `/movements` — Movements & Raise Your Voice (Civic Action Center)
- **Active Petitions Section:** Petition cards with real-time signature counter, target threshold, burnt-orange continuous progress bars (`rounded-full`), and 1-click modal signing.
- **Grassroots Community Directory:** Interactive directory of local environmental collectives (e.g. Walhi, Save Borneo, Ujung Kulon Guard) with contact and join links.
- **Suarakan Kondisi Alam di Daerahmu (Public Report Form):**
  - Dark obsidian styled container (`rounded-[28px] bg-[#0D100E]`).
  - Multi-step form:
    1. Incident category & location coordinates / kabupaten.
    2. Incident description & date of occurrence.
    3. Visual evidence upload (photos, drone videos, document scans).
    4. Whistleblower protection toggle (*Kirim Secara Anonim*).
    5. Agreement with 3-Step Verification Guidelines.

#### Page 4: `/about` — About & Sources (Manifesto & Scientific Transparency)
- **Editorial Manifesto:** Statement of principles detailing why independent environmental journalism matters for Indonesia's future.
- **4 Official Open-Data & Scientific Sources Verification:**
  1. **BMKG (Badan Meteorologi, Klimatologi, dan Geofisika):** Real-time meteorological data, air quality index (ISPU), and rainfall anomalies.
  2. **KLHK & Sipongi+:** Karhutla hotspot monitoring and forest fire perimeter data.
  3. **NASA FIRMS & Global Forest Watch:** Satellite VIIRS/MODIS thermal anomalies and tree cover loss geospatial layers.
  4. **BRIN & IUCN Red List:** Endemic biodiversity extinction risk levels and wildlife population census.
- **Downloadable PDF Fact Sheets:** Curated monthly scientific dossiers free to download with file size and SHA checksum details.

---

### 3.2 Superadmin CMS Pages (7 Pages)

#### Page 5: `/admin/login` — Split-Screen Editorial & 2FA Portal
- **Left Column:** Full-height atmospheric dark editorial visual showing frontline rangers with an inspirational climate quote.
- **Right Column:** Clean minimalist Apple-style login card with email/password input, remembered device switch, and automated 6-digit TOTP (Two-Factor Authentication) verification step.

#### Page 6: `/admin` — Dashboard Overview (Central Command)
- **Navigation:** Floating dark persistent sidebar with Apple squircle navigation items (`rounded-[12px]`).
- **Top Bar:** Role badge (`Superadmin`), system health indicator, and real-time notification bell.
- **4 KPI Metric Summary Cards:**
  1. *Total Verified Signatures* (e.g. 142,850+).
  2. *Active Investigative Stories* (e.g. 38 Published).
  3. *Pending Field Reports Queue* (e.g. 17 Needing Review).
  4. *Direct Civic Impact Score* (e.g. 84.6% Policy Response Rate).
- **Pending Public Reports Quick Review Queue:** Live feed of incoming citizen reports awaiting verification.
- **Homepage Spotlight Quick Toggles:** Instant toggle switches to feature/unfeature items on the live public home hero.

#### Page 7: `/admin/stories` — Stories & Viral Manager
- **Story Table View:** Interactive table with thumbnail, title, category, author, status (`Published`, `Draft`, `Archived`), and live view count.
- **"Sorot di Home" Instant Switch:** Green toggle button directly pushing stories to the homepage viral carousel.
- **Rich-Text Scrollytelling Editor Drawer / Page:** Markdown/WYSIWYG editor supporting custom scientific callout blocks, photo credit meta-tags, and interactive data widgets.

#### Page 8: `/admin/movements` — Petitions & Grassroots Manager
- **Petition Roster:** List of active and archived campaigns with current signature tallies, target numbers, and petition creator information.
- **Petition Moderator:** Controls to verify petition legitimacy, edit goal numbers, publish official responses from targeted government ministries, and toggle home display.
- **Grassroots Directory Editor:** Add/edit/verify local environmental NGO directory listings.

#### Page 9: `/admin/reports` — Split-Pane Voice Reports Inbox
- **Master Left Pane:** Scrollable list of incoming reports with urgency badges (`Kritis`, `Perlu Validasi`, `Selesai`, `Spam/Hoaks`).
- **Detail Right Pane (Inspector View):**
  - **Visual Evidence Inspector:** Fullscreen zoom and EXIF inspection for uploaded evidence files.
  - **GPS & Geospatial Coordinates:** Interactive map thumbnail confirming coordinate veracity.
  - **Whistleblower Anonymity Badge:** Indicators ensuring whistleblower identity is cryptographically masked.
  - **3-Step Credibility Checklist:**
    - [ ] Geolocation & timestamp match satellite anomalies (Sipongi/NASA).
    - [ ] Visual evidence shows no digital tampering or recycled footage.
    - [ ] Local field corroboration verified by network contact.
  - **Action Controls:** *Validasi & Terbitkan ke Publik*, *Minta Bukti Tambahan*, *Arsipkan sebagai Intelijen*, *Tolak Laporan*.

#### Page 10: `/admin/resources` — Fact Sheets & Partner Data Manager
- **PDF Fact Sheet Uploader:** Drag-and-drop file uploader with title, author agency (e.g. BRIN/BMKG), revision number, and category metadata.
- **Download Analytics Table:** Track community and researcher downloads per fact sheet.
- **Data Source API Connector Settings:** View status and latency for NASA FIRMS, BMKG, and Sipongi API feeds.

#### Page 11: `/admin/settings` — Platform Settings & RBAC Access Control
- **Hero Customizer:** Live preview controls to update home hero headline, background image URL, tagline, and toggle graffiti accent font on/off.
- **Team Role-Based Access Control (RBAC):**
  - `Superadmin`: Unrestricted access across CMS, settings, and database backups.
  - `Editor Berita`: Access to `/admin/stories` and `/admin/resources`.
  - `Verifikator Laporan`: Dedicated access to `/admin/reports` with evidence verification rights.

---

## 4. Technical Stack & Architecture

```
Frontend: Next.js 15+ (App Router) + TypeScript + Tailwind CSS
UI Standard: Apple Human Interface Guidelines (HIG) + Lucide React Icons
Typography: Plus Jakarta Sans / Inter + Permanent Marker (Accents)
State & Mock: React Context / Zustand + src/data/mockData.ts
Backend & DB: Supabase (PostgreSQL, Auth, Row Level Security, Storage Buckets)
Deployment: Vercel Serverless Platform
```

### 4.1 Folder Structure Standard
```
iclimate/
├── ICLIMATE_BLUEPRINT.md               # This architectural specification
├── package.json
├── tailwind.config.ts                   # Apple HIG tokens, squircle curves, colors
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Global fonts, root metadata, theme provider
│   │   ├── page.tsx                     # 1. / (Home)
│   │   ├── stories/
│   │   │   ├── page.tsx                 # 2. /stories (List & filters)
│   │   │   └── [slug]/page.tsx          # Scrollytelling Reader View
│   │   ├── movements/
│   │   │   └── page.tsx                 # 3. /movements (Petitions & Report Form)
│   │   ├── about/
│   │   │   └── page.tsx                 # 4. /about (Manifesto, Sources & PDFs)
│   │   └── admin/
│   │       ├── login/page.tsx           # 5. /admin/login
│   │       ├── layout.tsx               # Admin persistent dark sidebar wrapper
│   │       ├── page.tsx                 # 6. /admin (Overview KPI)
│   │       ├── stories/page.tsx         # 7. /admin/stories
│   │       ├── movements/page.tsx       # 8. /admin/movements
│   │       ├── reports/page.tsx         # 9. /admin/reports
│   │       ├── resources/page.tsx       # 10. /admin/resources
│   │       └── settings/page.tsx        # 11. /admin/settings
│   ├── components/
│   │   ├── ui/                          # Capsule buttons, squircle cards, inputs
│   │   ├── public/                      # Navbar, Hero, BentoGrid, Ticker, Petitions
│   │   └── admin/                       # Sidebar, KPICard, ReportsInspector, Switches
│   ├── data/
│   │   └── mockData.ts                  # Comprehensive mock database for initial phases
│   └── types/
│       └── index.ts                     # TypeScript schemas for Stories, Petitions, Reports
```

---

## 5. Development Roadmap (Frontend-First Strategy)

```
[Phase 1] Core Setup & Tokens  --->  [Phase 2] 4 Public Pages
              |                                    |
              v                                    v
[Phase 4] Supabase Backend     <---  [Phase 3] 7 Admin CMS Pages
```

### Phase 1: Foundation, Apple HIG Design System & Mock Data
- [ ] Initialize Next.js 15+ App Router codebase with TypeScript and Tailwind CSS.
- [ ] Configure `tailwind.config.ts` with custom colors (`#F5F5F7`, `#0D100E`, `#E85D2A`, etc.), squircle border radiuses (`28px`, `20px`, `12px`), and fonts.
- [ ] Install and configure Google Fonts (`Plus Jakarta Sans` for UI, `Permanent Marker` for graffiti accents).
- [ ] Create `src/data/mockData.ts` with full realistic data for:
  - 3 Bento pillars (Forest, Animals, People).
  - 6+ In-depth investigative stories with Markdown contents.
  - 4+ Active climate action petitions with live signature counts.
  - 6+ Public voice reports (various statuses and coordinates).
  - 4 Scientific data sources with metadata and fact sheet downloads.

### Phase 2: Public Experience Implementation (4 Screens)
- [ ] **Screen 1 (`/`):** Implement floating glassmorphic navbar, dark atmospheric hero with graffiti title, Bento Grid, live action ticker, and trending feed.
- [ ] **Screen 2 (`/stories`):** Implement category pills, featured story banner, 3-column story grid, and interactive scrollytelling article reader modal.
- [ ] **Screen 3 (`/movements`):** Implement petition progress cards with burnt-orange progress bars, grassroots community directory, and the dark 4-step voice reporting form.
- [ ] **Screen 4 (`/about`):** Implement editorial manifesto, 4 scientific data source transparency cards, and downloadable PDF cards.
- [ ] **Quality Audit:** Ensure smooth responsive transitions between iPhone/mobile viewports and widescreen monitors.

### Phase 3: Superadmin CMS Implementation (7 Screens)
- [ ] **Screen 5 (`/admin/login`):** Atmospheric split-screen layout with email/password and simulated 2FA 6-digit TOTP verification.
- [ ] **Screen 6 (`/admin`):** Dark floating sidebar layout, 4 KPI cards, pending review queue, and quick homepage spotlight switches.
- [ ] **Screen 7 (`/admin/stories`):** Story management table with instant "Sorot di Home" toggles and article writer drawer.
- [ ] **Screen 8 (`/admin/movements`):** Petition tracking table with signature count edits and NGO partner list.
- [ ] **Screen 9 (`/admin/reports`):** Split-pane Voice Reports Inbox with image zoom, GPS metadata reader, and 3-step verification checklist.
- [ ] **Screen 10 (`/admin/resources`):** PDF uploader UI, download metrics, and API health indicators.
- [ ] **Screen 11 (`/admin/settings`):** Live hero customization preview and Team Role Access Control table.

### Phase 4: Supabase Backend & Database Integration
- [ ] Provision Supabase project with PostgreSQL schema:
  - `stories` table (title, slug, content, category, is_spotlight, views).
  - `petitions` table (title, target, current_signatures, urgent_tag, is_active).
  - `signatures` table (petition_id, user_name, user_email, created_at).
  - `voice_reports` table (category, description, lat, lng, is_anonymous, status, evidence_urls).
  - `fact_sheets` table (title, source, download_count, file_url).
  - `admin_users` table with RBAC roles (`superadmin`, `editor`, `verifier`).
- [ ] Implement Supabase Auth with TOTP Multi-Factor Authentication (MFA).
- [ ] Setup Supabase Storage buckets for visual evidence (with secure access rules) and downloadable PDFs.
- [ ] Enable Row Level Security (RLS) policies ensuring public read access and role-restricted CMS mutations.

---

## 6. Verification & Quality Acceptance Criteria

| Area | Acceptance Test | Status |
| :--- | :--- | :--- |
| **Typography & Styling** | Headings use tight `-0.03em` tracking; graffiti font strictly restricted to accent words. | `Pending Verification` |
| **Squircle Compliance** | Master banners use `28px`, content cards use `20px`, form fields use `12px`, CTAs use capsule pills. | `Pending Verification` |
| **Public UX** | All 4 public routes render seamlessly without layout shifts; petition progress animates cleanly. | `Pending Verification` |
| **Reporting Form** | Multi-step form validates inputs, respects anonymity toggle, and previews uploaded imagery. | `Pending Verification` |
| **Admin Controls** | All 7 admin routes provide interactive mock responses for toggles, filters, and inspector panes. | `Pending Verification` |
| **Mobile Responsiveness**| High fidelity tested across viewport widths (390px, 768px, 1024px, 1440px+). | `Pending Verification` |

---
*Blueprint created and maintained by the ICLIMATE Engineering & Design Architecture Team.*
