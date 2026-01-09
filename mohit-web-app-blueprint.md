# MOHIT NEXUS - WEB APPLICATION BLUEPRINT & BUILD DOCUMENTATION

## TABLE OF CONTENTS
1. Project Overview
2. Site Architecture & Information Hierarchy
3. Visual Design System
4. Page-by-Page Layout Specifications
5. Technical Architecture & Stack Recommendations
6. AI Agent Implementation Guide
7. Development Phases & Milestones
8. 600-Line AI Developer SOP

---

## 1. PROJECT OVERVIEW

### Project Name
**MOHIT NEXUS** (or THE MOHIT PROTOCOL) - Brand Universe Portal

### Project Type
Premium portfolio/brand showcase website with integrated AI assistant, community hub, and future e-commerce capabilities

### Design Philosophy
- **Dark, Premium, Futuristic** — Inspired by Liquid Brokers + HackerRank dark themes
- **3D Interactive Elements** — Glassmorphic spheres, fluid animations, depth
- **Space Odyssey Aesthetic** — Starfields, orbital mechanics, cosmic scale
- **High-End Simplicity** — Clean, breathable, not cluttered despite complexity

### Primary Goals
1. Establish Mohit as visionary builder/creator
2. Showcase projects across multiple domains
3. Capture email leads for newsletter
4. Guide visitors to appropriate sub-brands
5. Create "cult brand" first impression

---

## 2. SITE ARCHITECTURE & INFORMATION HIERARCHY

### Primary Navigation Structure

```
MOHIT NEXUS (Parent Brand)
│
├── HOME (Landing/Hero)
│
├── ABOUT
│   ├── Mohit's Story
│   ├── Philosophy & Mission
│   └── Current Focus Areas
│
├── UNIVERSE (Sub-Brands Portal)
│   ├── MOHITBUILDS → Engineering/Robotics/Hardware
│   ├── MOHITCREATES → Design/Software/Digital
│   ├── MOHITFILES → Travel/Exploration/Vlogs
│   ├── MOHITLABS → Experimental/R&D
│   ├── MOHITSYSTEMS → Frameworks/Methodology
│   ├── MOHITCOLLECTIVE → Community Hub
│   └── MOHITFORGE → Products/Tools (Future)
│
├── PROJECTS
│   ├── Featured Showcase
│   ├── Filter by Category
│   └── Case Study Deep-Dives
│
├── CONNECT
│   ├── Newsletter Signup
│   ├── Community Access
│   ├── Social Links
│   └── Contact Form
│
└── SERVICES (Future Phase)
    ├── Consulting
    ├── Workshops
    └── Custom Builds
```

### AI Agent Placement
- **Persistent Bottom-Right Float** — Available on all pages
- **Proactive Triggers** — Opens after 15 seconds on homepage, or on exit intent
- **Context-Aware** — Different prompts based on which page user is viewing

---

## 3. VISUAL DESIGN SYSTEM

### Color Palette

**Primary Colors:**
- `#0A0A0F` — Deep Space Black (main background)
- `#1A1A24` — Dark Navy (cards, elevated surfaces)
- `#6366F1` — Electric Indigo (primary accent)
- `#3B82F6` — Bright Blue (secondary accent)
- `#8B5CF6` — Purple (tertiary accent for MOHITCREATES)

**Accent Colors:**
- `#10B981` — Emerald (success, nature symmetry references)
- `#F59E0B` — Amber (highlights, energy)
- `#EF4444` — Red (urgency, CTAs)

**Neutral Grays:**
- `#F9FAFB` — Off-White (headings, primary text)
- `#D1D5DB` — Light Gray (body text)
- `#6B7280` — Medium Gray (secondary text)
- `#374151` — Dark Gray (borders, dividers)

**Glassmorphism:**
- `rgba(255, 255, 255, 0.05)` — Glass surface
- `rgba(255, 255, 255, 0.1)` — Glass border
- Backdrop blur: 20px

### Typography

**Heading Font:** 
- **Inter** (700-900 weight) or **Space Grotesk** (700-900) for futuristic feel
- Large sizes: 64px-96px for hero
- Section headers: 32px-48px

**Body Font:**
- **Inter** (400-500 weight) for readability
- Body text: 16px-18px
- Line height: 1.6-1.8

**Accent Font (optional):**
- **JetBrains Mono** for code snippets, technical labels

### Spacing System
- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96, 128px
- Container max-width: 1440px
- Content max-width: 1200px

### Animation Principles
- **Smooth & Fluid** — Ease-in-out curves, 0.3-0.6s durations
- **Parallax Scrolling** — Different layers move at different speeds
- **Hover States** — Glow effects, scale transforms (1.05x), color shifts
- **Page Transitions** — Fade + slide combos
- **3D Elements** — Rotating spheres, orbital paths, depth perception

---

## 4. PAGE-BY-PAGE LAYOUT SPECIFICATIONS

### 4.1 HOME PAGE (Landing)

#### Section 1: Hero (100vh)
**Layout:**
```
┌─────────────────────────────────────────────┐
│  [Logo]           [Nav Menu]      [CTA]     │
│                                              │
│              MOHIT NEXUS                     │
│                                              │
│        Build. Create. Explore.               │
│         The Future. Together.                │
│                                              │
│          [Join The Collective]               │
│                                              │
│      [Large 3D Animated Sphere/Planet]       │
│         (Glassmorphic, rotating)             │
│                                              │
│          [Scroll Indicator ↓]                │
└─────────────────────────────────────────────┘
```

**Elements:**
- **3D Sphere:** Gradient-filled, slow rotation, reflects mouse position
- **Particle Background:** Subtle stars/dots drifting
- **Headline:** Large (72-96px), gradient text effect
- **Subheading:** 24px, gray-300
- **CTA Button:** Glassmorphic pill, hover glow effect
- **Stats Overlay (optional):** Small cards showing "10+ Projects Built" "5 Domains Conquered" with animated counters

**Interactions:**
- Mouse parallax on sphere and background layers
- CTA button scale + glow on hover
- Smooth scroll to next section

---

#### Section 2: Philosophy Statement (60vh)
**Layout:**
```
┌─────────────────────────────────────────────┐
│                                              │
│     "Stop waiting for the future.            │
│              Build it."                      │
│                                              │
│  [Short paragraph about the mission]         │
│  [Why this exists, who it's for]             │
│                                              │
└─────────────────────────────────────────────┘
```

**Styling:**
- Centered text, max-width 800px
- Large quote in 48px, rest in 18px
- Fade-in animation on scroll

---

#### Section 3: Universe Grid (Sub-Brands) (100vh)
**Layout:**
```
┌─────────────────────────────────────────────┐
│          Explore The Universe                │
│                                              │
│  ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐│
│  │BUILD  │  │CREATE │  │FILES  │  │ LABS  ││
│  │ [Icon]│  │[Icon] │  │[Icon] │  │[Icon] ││
│  │Eng/Rob│  │Design │  │Travel │  │  R&D  ││
│  └───────┘  └───────┘  └───────┘  └───────┘│
│                                              │
│  ┌───────┐  ┌───────┐  ┌───────┐            │
│  │SYSTEM │  │COLLEC │  │FORGE  │            │
│  │[Icon] │  │[Icon] │  │[Icon] │            │
│  │Method │  │Commun │  │Products            │
│  └───────┘  └───────┘  └───────┘            │
└─────────────────────────────────────────────┘
```

**Card Design:**
- Glassmorphic cards with gradient borders
- 280px x 320px each
- Hover: Lift effect (translateY -8px), glow border
- Icon: 64px, custom designed or from Lucide
- Title: 24px bold
- Description: 14px, 2 lines max
- Click → Navigate to sub-brand page

**Grid:**
- CSS Grid, 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Gap: 32px

---

#### Section 4: Featured Projects (80vh)
**Layout:**
```
┌─────────────────────────────────────────────┐
│           Latest Creations                   │
│                                              │
│  ┌─────────────────┐  ┌─────────────────┐  │
│  │                 │  │                 │  │
│  │  [Project Img]  │  │  [Project Img]  │  │
│  │                 │  │                 │  │
│  │  Project Title  │  │  Project Title  │  │
│  │  Category Tag   │  │  Category Tag   │  │
│  └─────────────────┘  └─────────────────┘  │
│                                              │
│  ┌─────────────────┐  ┌─────────────────┐  │
│  │  [Project 3]    │  │  [Project 4]    │  │
│  └─────────────────┘  └─────────────────┘  │
│                                              │
│         [View All Projects →]                │
└─────────────────────────────────────────────┘
```

**Project Cards:**
- 2x2 grid on desktop
- Image: 16:9 ratio, 600x340px
- Overlay gradient on hover revealing description
- Tag pills showing category (Build/Create/etc)
- Click → Project detail page or modal

---

#### Section 5: Community CTA (60vh)
**Layout:**
```
┌─────────────────────────────────────────────┐
│                                              │
│         Join 10,000+ Builders                │
│                                              │
│   Get weekly insights, project breakdowns,   │
│   and early access to new experiments        │
│                                              │
│     ┌────────────────────────────────┐      │
│     │ [Email Input Field]     [→]    │      │
│     └────────────────────────────────┘      │
│                                              │
│   ✓ No spam  ✓ Unsubscribe anytime           │
│                                              │
└─────────────────────────────────────────────┘
```

**Styling:**
- Large centered content
- Email input: Glassmorphic, 500px wide, 56px tall
- Submit button: Arrow icon, gradient background
- Micro-copy benefits (checkmarks)

---

#### Section 6: Footer (40vh)
**Layout:**
```
┌─────────────────────────────────────────────┐
│  [Logo]                                      │
│                                              │
│  Universe          Connect        Legal      │
│  • Builds          • Twitter      • Privacy  │
│  • Creates         • YouTube      • Terms    │
│  • Files           • LinkedIn                │
│  • Labs            • Email                   │
│                                              │
│  Built with obsession by Mohit Yadav         │
│  © 2026 MOHIT NEXUS                          │
└─────────────────────────────────────────────┘
```

**Styling:**
- 4 columns on desktop, stack on mobile
- Links in gray-400, hover to white
- Social icons with hover glow

---

### 4.2 ABOUT PAGE

#### Hero Section (50vh)
- Large headline: "The Builder Behind The Universe"
- Subhead: "Engineer. Creator. Explorer."
- Background: Animated constellation lines connecting dots

#### Story Section (Scrollable)
- **Timeline Layout** — Vertical timeline with key milestones
- **Photo + Bio** — Professional portrait, personal story
- **Philosophy Cards** — 3-4 beliefs/principles as separate cards
- **Current Focus** — What Mohit is building right now

#### Stats Section
- Projects completed, domains explored, community size
- Animated counters on scroll into view

---

### 4.3 UNIVERSE (SUB-BRANDS) PAGE

#### Hero (40vh)
- "Seven Dimensions. One Mission."
- Brief intro to the ecosystem

#### Sub-Brand Deep Dive
For each sub-brand (7 sections):

```
┌─────────────────────────────────────────────┐
│  [MOHITBUILDS]                               │
│                                              │
│  ┌─────────────┐  Description (right side)  │
│  │             │  • What it covers           │
│  │  [Icon/Img] │  • Who it's for             │
│  │             │  • Recent projects          │
│  └─────────────┘                             │
│                                              │
│  [Visit MOHITBUILDS →]                       │
└─────────────────────────────────────────────┘
```

**Alternating Layout:**
- Odd sections: Image left, text right
- Even sections: Text left, image right
- Each has unique accent color from palette

**CTA Buttons:**
- Link to sub-domain or dedicated page
- Opens in same window with smooth transition

---

### 4.4 PROJECTS PAGE

#### Hero (30vh)
- "Things We've Built"
- Filter pills: All / Builds / Creates / Files / Labs

#### Projects Grid
- Masonry layout or standard grid
- Each card: Image, title, category, tech tags, brief description
- Hover: Zoom image slightly, show "View Details" overlay
- Click: Opens project modal or dedicated page

#### Project Modal/Page
- Hero image carousel (if multiple images)
- Title + Category badge
- Full description (problem, solution, tech used, outcome)
- Links: Live demo, GitHub, case study
- Related projects at bottom

---

### 4.5 CONNECT PAGE

#### Hero (40vh)
- "Let's Build Together"
- Subhead: "Join the collective, share your vision, or just say hi"

#### Newsletter Section
- Large email capture form
- Benefits list with icons
- Testimonial/social proof (optional)

#### Community Links
- Discord/Circle community
- Social media grid with follower counts

#### Contact Form
- Name, Email, Message
- Purpose dropdown (Collaboration / Question / Feedback / Business)
- Submit button

#### Social Proof
- "Trusted by builders from:" + logo grid (if applicable)
- Or: Testimonials from community members

---

## 5. TECHNICAL ARCHITECTURE & STACK RECOMMENDATIONS

### Recommended Tech Stack

#### Frontend Framework
**Next.js 14+ (React)**
- **Why:** SSR/SSG for SEO, built-in routing, API routes, image optimization
- **Alternative:** Astro (if prioritizing speed over interactivity)

#### Styling
**Tailwind CSS**
- **Why:** Rapid development, consistent design system, built-in dark mode
- **Add-ons:** 
  - `tailwindcss-animate` for animations
  - Custom config for glassmorphism utilities

#### 3D Graphics
**Three.js + React Three Fiber (R3F)**
- **Why:** Powerful 3D rendering in browser, React integration
- **Use Cases:** Hero sphere, orbital animations, interactive backgrounds
- **Add-ons:**
  - `@react-three/drei` for helpers (OrbitControls, etc.)
  - `@react-three/postprocessing` for visual effects

#### Animations
**Framer Motion**
- **Why:** Best-in-class React animation library, gesture support
- **Use Cases:** Page transitions, scroll animations, hover effects, parallax

#### AI Chatbot
**Option A: Custom with Claude API**
- Build custom chat interface
- Use Anthropic Claude API (Sonnet or Haiku)
- Store conversation context in session storage
- **Pros:** Full control, brand consistency, best responses
- **Cons:** More dev work, API costs

**Option B: Widget Services**
- Intercom, Drift, or Chatbase
- Train on custom knowledge base
- **Pros:** Fast implementation, built-in features
- **Cons:** Less control, monthly costs

**Recommendation:** Option A for brand consistency

#### Form Handling
**React Hook Form + Zod**
- **Why:** Type-safe validation, great DX
- Send via API route to email service (Resend, SendGrid) or database

#### Email Newsletter
**ConvertKit, Mailchimp, or Beehiiv**
- Integrate API for email capture
- Store leads in their platform
- **Recommendation:** ConvertKit for creator-focused features

#### Database (Future E-commerce)
**Supabase (PostgreSQL)**
- **Why:** Postgres DB, auth, storage, real-time all-in-one
- **Use Cases:** User accounts, project data, product inventory
- **Alternative:** Firebase (easier setup, less control)

#### Hosting & Deployment
**Vercel**
- **Why:** Built by Next.js team, zero-config deployments, edge functions
- **Alternative:** Netlify (similar features, good for Astro)

#### Analytics
**Plausible or Fathom**
- Privacy-focused, GDPR compliant
- Lightweight script

#### CMS (Optional, for blog/projects)
**Sanity or Contentful**
- Headless CMS for managing project data
- **Why:** Non-technical updates without redeploying

---

### Site Structure (File System)

```
mohit-nexus/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── universe/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── connect/
│   │       └── page.tsx
│   ├── api/
│   │   ├── newsletter/
│   │   │   └── route.ts             # Email signup
│   │   ├── contact/
│   │   │   └── route.ts             # Contact form
│   │   └── ai-chat/
│   │       └── route.ts             # AI agent endpoint
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
├── components/
│   ├── ui/                          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── sections/                    # Page sections
│   │   ├── Hero.tsx
│   │   ├── UniverseGrid.tsx
│   │   ├── ProjectsShowcase.tsx
│   │   └── ...
│   ├── three/                       # 3D components
│   │   ├── HeroSphere.tsx
│   │   ├── ParticleField.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── AIAgent.tsx                  # Chatbot component
├── lib/
│   ├── constants.ts                 # Site config, sub-brands data
│   ├── types.ts                     # TypeScript types
│   └── utils.ts                     # Helper functions
├── public/
│   ├── images/
│   ├── models/                      # 3D models if any
│   └── ...
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 6. AI AGENT IMPLEMENTATION GUIDE

### Agent Personality & Purpose

**Name:** "Nexus" or "Protocol" (tie to parent brand)

**Personality:**
- Helpful, knowledgeable guide (not salesy)
- Speaks like a peer builder, not a corporate bot
- Uses occasional tech/space metaphors
- Warm but professional tone

**Core Functions:**
1. **Navigation Help** — Guide users to right sub-brand
2. **Project Info** — Answer questions about Mohit's work
3. **Community Onboarding** — Explain how to join, what to expect
4. **FAQ** — Common questions (services, collaboration, tech stack)
5. **Lead Qualification** — Identify serious collaborators vs casual browsers

### Knowledge Base Structure

**Training Data Categories:**
1. **About Mohit** — Background, skills, mission, current projects
2. **Sub-Brands** — What each one covers, who it's for, recent work
3. **Projects** — Descriptions of featured projects with tech details
4. **Community** — How to join, what members get, culture/values
5. **Services** — Current and upcoming offerings
6. **FAQ** — Pricing (future), collaboration process, tech preferences

### Sample Agent Prompts

**Opening Message (Homepage):**
> "Hey! I'm Nexus, your guide through the MOHIT universe. Looking for robotics projects? Travel vlogs? Or just curious what this is all about? I can point you in the right direction 🚀"

**Context-Aware (Universe Page):**
> "I see you're exploring the different domains. Which area interests you most? Builds, Creates, Files, or something experimental?"

**Context-Aware (Projects Page):**
> "Any specific project catch your eye? I can give you the full breakdown — tech stack, challenges, outcomes, all that nerdy goodness."

**Lead Qualification Flow:**
```
Agent: "Are you interested in collaborating, joining the community, or just exploring for now?"

User: "Collaborating"

Agent: "Awesome! What kind of project do you have in mind? (e.g., hardware build, software tool, content creation, something else?)"

User: [Answers]

Agent: "Got it! To connect you with Mohit, I'll need your email and a brief description of your idea. Sound good?"

User: [Provides info]

Agent: "Perfect! I've sent your info to Mohit. Expect a response within 2-3 business days. In the meantime, want to join the Discord community to meet other builders?"
```

### Technical Implementation

**Frontend Component:**
```tsx
// components/AIAgent.tsx
'use client'

import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'

export function AIAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  
  const sendMessage = async () => {
    // Add user message to state
    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    
    // Call API
    const response = await fetch('/api/ai-chat', {
      method: 'POST',
      body: JSON.stringify({ messages: [...messages, userMsg] })
    })
    
    const data = await response.json()
    setMessages(prev => [...prev, data.message])
    setInput('')
  }
  
  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl">
          {/* Chat UI here */}
        </div>
      )}
    </>
  )
}
```

**Backend API Route:**
```typescript
// app/api/ai-chat/route.ts
import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const systemPrompt = `You are Nexus, the AI guide for MOHIT NEXUS brand universe.
  
  Your role:
  - Help visitors navigate to the right sub-brand
  - Answer questions about Mohit's projects and capabilities
  - Qualify leads for collaboration inquiries
  - Be warm, helpful, and technically knowledgeable
  
  Knowledge base:
  - MOHITBUILDS: Engineering, robotics, hardware projects
  - MOHITCREATES: Software, design, digital art
  - MOHITFILES: Travel vlogs, exploration content
  - [Include full knowledge base here]
  
  When users want to collaborate, collect: email, project idea, timeline.
  Keep responses concise (2-3 sentences unless detail requested).`
  
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    system: systemPrompt,
    messages: messages
  })
  
  return NextResponse.json({
    message: {
      role: 'assistant',
      content: response.content[0].text
    }
  })
}
```

---

## 7. DEVELOPMENT PHASES & MILESTONES

### Phase 1: Foundation (Week 1-2)
**Goal:** Core infrastructure & design system

**Tasks:**
- [ ] Set up Next.js project with TypeScript
- [ ] Configure Tailwind with custom theme
- [ ] Build component library (Button, Card, Input, etc.)
- [ ] Create layout components (Header, Footer)
- [ ] Implement dark theme with glassmorphism
- [ ] Set up responsive grid system

**Deliverables:**
- Working dev environment
- Storybook/component documentation
- Basic layout template

---

### Phase 2: Home Page (Week 2-3)
**Goal:** Launch-ready landing page

**Tasks:**
- [ ] Build hero section with 3D sphere (Three.js)
- [ ] Implement particle background
- [ ] Create Universe Grid with sub-brand cards
- [ ] Build Featured Projects section
- [ ] Add newsletter signup form
- [ ] Implement scroll animations (Framer Motion)
- [ ] Footer with all links

**Deliverables:**
- Fully functional homepage
- Mobile responsive
- Performance optimized (Lighthouse score 90+)

---

### Phase 3: Core Pages (Week 3-4)
**Goal:** Complete MVP site

**Tasks:**
- [ ] About page with timeline
- [ ] Universe page with sub-brand details
- [ ] Projects page with filtering
- [ ] Connect page with forms
- [ ] 404 and loading states

**Deliverables:**
- All main pages functional
- Cross-linking working
- SEO metadata configured

---

### Phase 4: AI Agent (Week 4-5)
**Goal:** Intelligent chatbot assistant

**Tasks:**
- [ ] Design chat UI component
- [ ] Build API route with Claude integration
- [ ] Create knowledge base/system prompt
- [ ] Implement conversation memory
- [ ] Add proactive triggers (time-based, exit intent)
- [ ] Test conversation flows

**Deliverables:**
- Working AI chatbot
- Context-aware responses
- Lead capture integration

---

### Phase 5: Polish & Launch (Week 5-6)
**Goal:** Production-ready, optimized site

**Tasks:**
- [ ] Performance optimization (code splitting, image optimization)
- [ ] Cross-browser testing
- [ ] Mobile testing on real devices
- [ ] Accessibility audit (WCAG AA)
- [ ] Analytics setup
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Deploy to Vercel
- [ ] Domain setup & SSL

**Deliverables:**
- Live production site
- Analytics tracking
- Monitoring setup

---

### Phase 6: Future Enhancements (Post-Launch)
**Tasks:**
- [ ] Blog/content system (if needed)
- [ ] User authentication (Supabase)
- [ ] E-commerce setup (MOHITFORGE)
- [ ] Community portal integration
- [ ] Advanced animations & interactions
- [ ] More 3D elements
- [ ] Video backgrounds

---

## 8. 600-LINE AI DEVELOPER SOP

---

# STANDARD OPERATING PROCEDURE (SOP)
## Building MOHIT NEXUS Web Application

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Intended Audience:** AI Developer (Claude, Cursor, v0, etc.)  
**Project Goal:** Build a premium, dark-themed portfolio website with AI chatbot for Mohit Yadav's brand universe

---

## SECTION 1: PROJECT INITIALIZATION

### 1.1 Create Next.js Project

Execute the following commands:

```bash
npx create-next-app@latest mohit-nexus
# Select options:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: Yes
# - src/ directory: No
# - App Router: Yes
# - Customize import alias: No

cd mohit-nexus
```

### 1.2 Install Dependencies

Install all required packages in one command:

```bash
npm install framer-motion three @react-three/fiber @react-three/drei @react-three/postprocessing lucide-react @anthropic-ai/sdk react-hook-form zod @hookform/resolvers class-variance-authority clsx tailwind-merge
```

**Dependency Purpose:**
- `framer-motion`: Animations, page transitions, scroll effects
- `three` + `@react-three/*`: 3D graphics and effects
- `lucide-react`: Icon library (consistent, customizable)
- `@anthropic-ai/sdk`: Claude AI integration for chatbot
- `react-hook-form` + `zod`: Form handling with validation
- `clsx` + `tailwind-merge`: Utility for Tailwind class merging

### 1.3 Environment Setup

Create `.env.local` file in root:

```env
ANTHROPIC_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_SERVICE_API_KEY=your_email_service_key
```

**Security Note:** Never commit `.env.local` to version control. Add to `.gitignore`.

### 1.4 Project Structure

Create the following directory structure:

```bash
mkdir -p app/(marketing)/{about,universe,projects,connect}
mkdir -p app/api/{ai-chat,newsletter,contact}
mkdir -p components/{ui,sections,three,layout}
mkdir -p lib
mkdir -p public/{images,fonts}
```

---

## SECTION 2: DESIGN SYSTEM CONFIGURATION

### 2.1 Tailwind Configuration

Replace `tailwind.config.js` with:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'space-black': '#0A0A0F',
        'dark-navy': '#1A1A24',
        'electric-indigo': '#6366F1',
        'bright-blue': '#3B82F6',
        'purple-accent': '#8B5CF6',
        'emerald-accent': '#10B981',
        'amber-accent': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.6)',
      },
    },
  },
  plugins: [],
}
```

### 2.2 Global Styles

Update `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');

@layer base {
  * {
    @apply border-gray-800;
  }
  
  body {
    @apply bg-space-black text-gray-100 antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold;
  }
}

@layer components {
  .glass-card {
    @apply bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-electric-indigo via-bright-blue to-purple-accent bg-clip-text text-transparent;
  }
  
  .btn-primary {
    @apply px-6 py-3 rounded-full bg-gradient-to-r from-electric-indigo to-bright-blue text-white font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300;
  }
  
  .btn-glass {
    @apply px-6 py-3 rounded-full glass-card hover:bg-white/10 transition-all duration-300;
  }
  
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1A1A24;
}

::-webkit-scrollbar-thumb {
  background: #6366F1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #8B5CF6;
}
```

---

## SECTION 3: COMPONENT LIBRARY

### 3.1 Utility Functions

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}
```

### 3.2 Type Definitions

Create `lib/types.ts`:

```typescript
export interface SubBrand {
  id: string
  name: string
  slug: string
  description: string
  tagline: string
  icon: string
  color: string
  href: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  date: string
  link?: string
  github?: string
}

export interface NewsletterSubscriber {
  email: string
  timestamp: Date
}

export interface ContactForm {
  name: string
  email: string
  purpose: 'collaboration' | 'question' | 'feedback' | 'business'
  message: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}
```

### 3.3 Constants & Data

Create `lib/constants.ts`:

```typescript
import { SubBrand, Project } from './types'

export const SUB_BRANDS: SubBrand[] = [
  {
    id: '1',
    name: 'MOHITBUILDS',
    slug: 'builds',
    description: 'Engineering, robotics, and hardware innovation',
    tagline: 'Engineer Reality',
    icon: 'Cpu',
    color: 'electric-indigo',
    href: '/universe/builds'
  },
  {
    id: '2',
    name: 'MOHITCREATES',
    slug: 'creates',
    description: 'Software, design, and digital artistry',
    tagline: 'Sculpt The Future',
    icon: 'Palette',
    color: 'purple-accent',
    href: '/universe/creates'
  },
  {
    id: '3',
    name: 'MOHITFILES',
    slug: 'files',
    description: 'Travel vlogs and exploration documentation',
    tagline: 'Document The Odyssey',
    icon: 'Camera',
    color: 'emerald-accent',
    href: '/universe/files'
  },
  {
    id: '4',
    name: 'MOHITLABS',
    slug: 'labs',
    description: 'Experimental projects and R&D',
    tagline: 'Where Ideas Mutate',
    icon: 'FlaskConical',
    color: 'amber-accent',
    href: '/universe/labs'
  },
  {
    id: '5',
    name: 'MOHITSYSTEMS',
    slug: 'systems',
    description: 'Frameworks, methodology, life optimization',
    tagline: 'Optimize Your Code',
    icon: 'Network',
    color: 'bright-blue',
    href: '/universe/systems'
  },
  {
    id: '6',
    name: 'MOHITCOLLECTIVE',
    slug: 'collective',
    description: 'Community hub for collaboration',
    tagline: 'Join The Network',
    icon: 'Users',
    color: 'electric-indigo',
    href: '/universe/collective'
  },
  {
    id: '7',
    name: 'MOHITFORGE',
    slug: 'forge',
    description: 'Products, tools, and merchandise',
    tagline: 'Arm Yourself',
    icon: 'Hammer',
    color: 'purple-accent',
    href: '/universe/forge'
  },
]

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Autonomous Rover Bot',
    slug: 'rover-bot',
    description: 'AI-powered exploration robot with computer vision',
    category: 'builds',
    tags: ['Robotics', 'AI', 'Hardware'],
    image: '/images/projects/rover.jpg',
    featured: true,
    date: '2025-12-15',
    github: 'https://github.com/mohit/rover'
  },
  // Add more projects...
]

export const SITE_CONFIG = {
  name: 'MOHIT NEXUS',
  description: 'Build. Create. Explore. The Future. Together.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mohitnexus.com',
  author: 'Mohit Yadav',
  social: {
    twitter: '@mohitbuilds',
    youtube: '@mohitfiles',
    linkedin: 'mohityadav',
    github: 'mohitbuilds'
  }
}
```

### 3.4 UI Components - Button

Create `components/ui/Button.tsx`:

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-electric-indigo to-bright-blue text-white hover:scale-105 hover:shadow-glow',
    glass: 'glass-card hover:bg-white/10',
    outline: 'border-2 border-electric-indigo text-electric-indigo hover:bg-electric-indigo hover:text-white'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 3.5 UI Components - Card

Create `components/ui/Card.tsx`:

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'glass-card p-6',
        hover && 'hover:-translate-y-2 hover:border-electric-indigo/50 transition-all duration-300 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
```

### 3.6 UI Components - Input

Create `components/ui/Input.tsx`:

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-gray-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg glass-card text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-indigo transition-all',
            error && 'ring-2 ring-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
```

---

## SECTION 4: LAYOUT COMPONENTS

### 4.1 Header Component

Create `components/layout/Header.tsx`:

```tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Universe', href: '/universe' },
  { label: 'Projects', href: '/projects' },
  { label: 'Connect', href: '/connect' },
]

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold gradient-text">
          MOHIT NEXUS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm">Join Collective</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10">
          <div className="section-container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full">Join Collective</Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

### 4.2 Footer Component

Create `components/layout/Footer.tsx`:

```tsx
import React from 'react'
import Link from 'next/link'
import { Twitter, Youtube, Linkedin, Github } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              MOHIT NEXUS
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future, one project at a time.
            </p>
          </div>

          {/* Universe */}
          <div>
            <h4 className="font-semibold mb-4">Universe</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/universe/builds" className="text-gray-400 hover:text-white transition-colors">Builds</Link></li>
              <li><Link href="/universe/creates" className="text-gray-400 hover:text-white transition-colors">Creates</Link></li>
              <li><Link href="/universe/files" className="text-gray-400 hover:text-white transition-colors">Files</Link></li>
              <li><Link href="/universe/labs" className="text-gray-400 hover:text-white transition-colors">Labs</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/connect" className="text-gray-400 hover:text-white transition-colors">Newsletter</Link></li>
              <li><Link href="/connect#community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/connect#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://twitter.com/${SITE_CONFIG.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-indigo transition-colors">
                <Twitter size={20} />
              </a>
              <a href={`https://youtube.com/${SITE_CONFIG.social.youtube}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-indigo transition-colors">
                <Youtube size={20} />
              </a>
              <a href={`https://linkedin.com/in/${SITE_CONFIG.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-indigo transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`https://github.com/${SITE_CONFIG.social.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-indigo transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Built with obsession by Mohit Yadav</p>
          <p>© {currentYear} MOHIT NEXUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

### 4.3 Root Layout

Update `app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AIAgent } from '@/components/AIAgent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOHIT NEXUS - Build. Create. Explore.',
  description: 'The future isn\'t something that happens to you — it\'s something you BUILD, CREATE, and EXPLORE.',
  keywords: ['robotics', 'engineering', 'design', 'travel', 'innovation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <AIAgent />
      </body>
    </html>
  )
}
```

---

## SECTION 5: THREE.JS 3D COMPONENTS

### 5.1 Hero Sphere Component

Create `components/three/HeroSphere.tsx`:

```tsx
'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export const HeroSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#6366F1"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}
```

### 5.2 Particle Background

Create `components/three/ParticleField.tsx`:

```tsx
'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null)

  const particlesCount = 2000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#6366F1"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}
```

### 5.3 Three.js Canvas Wrapper

Create `components/three/Scene.tsx`:

```tsx
'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { HeroSphere } from './HeroSphere'
import { ParticleField } from './ParticleField'

export const Scene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <ParticleField />
          <HeroSphere />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
```

---

## SECTION 6: PAGE SECTIONS

### 6.1 Hero Section

Create `components/sections/Hero.tsx`:

```tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Scene } from '@/components/three/Scene'
import { ArrowDown } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Scene />
      
      <div className="section-container text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <span className="gradient-text">MOHIT NEXUS</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-gray-300 mb-4">
            Build. Create. Explore.
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The future isn't something that happens to you — it's something you BUILD.
          </p>
          
          <Button size="lg">
            Join The Collective
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  )
}
```

### 6.2 Universe Grid Section

Create `components/sections/UniverseGrid.tsx`:

```tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { SUB_BRANDS } from '@/lib/constants'
import * as Icons from 'lucide-react'

export const UniverseGrid: React.FC = () => {
  return (
    <section className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">
            Explore The Universe
          </h2>
          <p className="text-xl text-gray-400">
            Seven dimensions. One mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUB_BRANDS.map((brand, index) => {
            const Icon = Icons[brand.icon as keyof typeof Icons] as React.ElementType
            
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={brand.href}>
                  <Card hover className="h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full bg-${brand.color}/20 flex items-center justify-center mb-4`}>
                        <Icon className={`text-${brand.color}`} size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                      <p className="text-sm text-electric-indigo mb-3">{brand.tagline}</p>
                      <p className="text-gray-400">{brand.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

### 6.3 Projects Showcase Section

Create `components/sections/ProjectsShowcase.tsx`:

```tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FEATURED_PROJECTS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export const ProjectsShowcase: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent to-dark-navy/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">
            Latest Creations
          </h2>
          <p className="text-xl text-gray-400">
            From concept to reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {FEATURED_PROJECTS.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="overflow-hidden group">
                <div className="relative h-64 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full glass-card"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button variant="glass" size="lg">
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
```

### 6.4 Newsletter CTA Section

Create `components/sections/NewsletterCTA.tsx`:

```tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight } from 'lucide-react'

export const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-6">
            Join 10,000+ Builders
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Get weekly insights, project breakdowns, and early access to new experiments
          </p>

          {isSubmitted ? (
            <div className="glass-card p-8 rounded-2xl">
              <Check className="w-16 h-16 text-emerald-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">You're in!</h3>
              <p className="text-gray-400">Check your email to confirm your subscription</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? 'Joining...' : (
                  <>Subscribe <ArrowRight className="ml-2" size={20} /></>
                )}
              </Button>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Check size={16} /> No spam
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} /> Unsubscribe anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## SECTION 7: AI CHATBOT IMPLEMENTATION

### 7.1 AI Agent Component

Create `components/AIAgent.tsx`:

```tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send } from 'lucide-react'
import { Card } from './ui/Card'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { ChatMessage } from '@/lib/types'

export const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hey! I'm Nexus, your guide through the MOHIT universe. Looking for robotics projects? Travel vlogs? Or just curious what this is all about? I can point you in the right direction 🚀",
          timestamp: new Date()
        }
      ])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      const data = await response.json()
      setMessages(prev => [...prev, data.message])
    } catch (error) {
      console.error('AI chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Try again in a moment!",
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-electric-indigo to-purple-accent shadow-glow-lg z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] z-50"
          >
            <Card className="h-full flex flex-col">
              {/* Header */}
              <div className="border-b border-white/10 p-4">
                <h3 className="font-bold text-lg">Nexus AI</h3>
                <p className="text-sm text-gray-400">Your guide through MOHIT universe</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-electric-indigo text-white'
                          : 'glass-card'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="glass-card p-3 rounded-2xl">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-white/10 p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    size="sm"
                  >
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

### 7.2 AI Chat API Route

Create `app/api/ai-chat/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are Nexus, the AI guide for MOHIT NEXUS brand universe.

Your role:
- Help visitors navigate to the right sub-brand based on their interests
- Answer questions about Mohit's projects, capabilities, and philosophy
- Qualify leads for collaboration inquiries
- Be warm, helpful, technically knowledgeable, and conversational

Brand Universe Overview:
1. MOHITBUILDS - Engineering, robotics, hardware projects (tag: builds)
2. MOHITCREATES - Software, design, digital art, web development (tag: creates)
3. MOHITFILES - Travel vlogs, exploration, adventure content (tag: files)
4. MOHITLABS - Experimental R&D, cutting-edge tech experiments (tag: labs)
5. MOHITSYSTEMS - Productivity frameworks, life optimization methods (tag: systems)
6. MOHITCOLLECTIVE - Community hub for collaboration and networking (tag: collective)
7. MOHITFORGE - Products, tools, merchandise (tag: forge, coming soon)

Philosophy:
"The future isn't something that happens to you — it's something you BUILD, CREATE, and EXPLORE."
We're building a community of ambitious creators who refuse to be spectators.

When users express interest in:
- Hardware/robotics/IoT → Direct to MOHITBUILDS
- Software/design/apps → Direct to MOHITCREATES
- Travel/adventure/vlogs → Direct to MOHITFILES
- Experimental tech → Direct to MOHITLABS
- Community/collaboration → Direct to MOHITCOLLECTIVE

For collaboration inquiries:
1. Ask about their project idea
2. Collect: email, brief description, timeline
3. Let them know Mohit will respond within 2-3 business days
4. Suggest joining the community in the meantime

Keep responses:
- Concise (2-3 sentences unless detail requested)
- Friendly but professional
- Use occasional tech/space metaphors
- Encourage action (visit page, join community, start building)

Never:
- Be overly salesy or pushy
- Make promises about Mohit's availability
- Share pricing (not established yet)
- Pretend to be Mohit himself`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      }))
    })

    return NextResponse.json({
      message: {
        role: 'assistant',
        content: response.content[0].type === 'text' ? response.content[0].text : '',
        timestamp: new Date()
      }
    })
  } catch (error) {
    console.error('AI chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
```

---

## SECTION 8: API ROUTES

### 8.1 Newsletter API

Create `app/api/newsletter/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (ConvertKit, Mailchimp, etc.)
    // Example with ConvertKit:
    // const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email: email
    //   })
    // })

    // For now, just log it
    console.log('Newsletter signup:', email)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
```

### 8.2 Contact Form API

Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, purpose, message } = await req.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Send email using service like Resend, SendGrid, etc.
    // Example with Resend:
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@mohitnexus.com',
    //   to: 'mohit@mohitnexus.com',
    //   subject: `Contact Form: ${purpose}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
    // })

    // For now, just log it
    console.log('Contact form submission:', { name, email, purpose, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

---

## SECTION 9: PAGES IMPLEMENTATION

### 9.1 Home Page

Create `app/(marketing)/page.tsx`:

```tsx
import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { UniverseGrid } from '@/components/sections/UniverseGrid'
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase'
import { NewsletterCTA } from '@/components/sections/NewsletterCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <UniverseGrid />
      <ProjectsShowcase />
      <NewsletterCTA />
    </>
  )
}
```

### 9.2 About Page

Create `app/(marketing)/about/page.tsx`:

```tsx
import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <div className="py-32">
      <div className="section-container">
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold gradient-text mb-6">
            The Builder Behind The Universe
          </h1>
          <p className="text-2xl text-gray-400">
            Engineer. Creator. Explorer.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto space-y-16">
          <Card className="p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-electric-indigo to-purple-accent" />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">The Journey</h2>
                <p className="text-gray-400 mb-4">
                  From tinkering with circuits as a kid to building autonomous robots, 
                  my journey has always been driven by one question: "What if I could build that?"
                </p>
                <p className="text-gray-400 mb-4">
                  MOHIT NEXUS isn't just a brand — it's a philosophy. It's about refusing 
                  to be a spectator in the age of exponential technology. It's about building 
                  the future we want to see, one project at a time.
                </p>
                <p className="text-gray-400">
                  Through robotics, software, travel, and experimental R&D, I'm documenting 
                  the entire process and inviting you to build alongside me.
                </p>
              </div>
            </div>
          </Card>

          {/* Philosophy */}
          <div>
            <h2 className="text-4xl font-bold text-center gradient-text mb-12">
              Core Beliefs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Build in Public',
                  description: 'Share the journey, not just the destination. Failures teach more than successes.'
                },
                {
                  title: 'Multidisciplinary',
                  description: 'The best innovations happen at the intersection of different fields.'
                },
                {
                  title: 'Community Over Competition',
                  description: 'Rising tides lift all boats. We succeed together.'
                }
              ].map((belief, index) => (
                <Card key={index} hover>
                  <h3 className="text-xl font-bold mb-3">{belief.title}</h3>
                  <p className="text-gray-400">{belief.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 9.3 Projects Page

Create `app/(marketing)/projects/page.tsx`:

```tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { FEATURED_PROJECTS, SUB_BRANDS } from '@/lib/constants'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter)

  return (
    <div className="py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-display font-bold gradient-text mb-6">
            Things We've Built
          </h1>
          <p className="text-xl text-gray-400">
            From concept to reality, explore the journey
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeFilter === 'all'
                ? 'bg-electric-indigo text-white'
                : 'glass-card hover:bg-white/10'
            }`}
          >
            All
          </button>
          {SUB_BRANDS.slice(0, 4).map((brand) => (
            <button
              key={brand.slug}
              onClick={() => setActiveFilter(brand.slug)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === brand.slug
                  ? 'bg-electric-indigo text-white'
                  : 'glass-card hover:bg-white/10'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} hover>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full glass-card"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
```

---

## SECTION 10: DEPLOYMENT & OPTIMIZATION

### 10.1 Performance Optimization Checklist

**Image Optimization:**
- [ ] Use Next.js Image component for all images
- [ ] Compress images (WebP format, <200KB each)
- [ ] Implement lazy loading for below-fold content
- [ ] Use appropriate image sizes for different viewports

**Code Splitting:**
- [ ] Dynamic imports for Three.js components
- [ ] Lazy load AI chat component until user interaction
- [ ] Split route-specific code automatically with Next.js

**Fonts:**
- [ ] Use next/font for automatic font optimization
- [ ] Preload critical fonts
- [ ] Subset fonts to include only needed characters

**Third-Party Scripts:**
- [ ] Load analytics scripts with next/script
- [ ] Defer non-critical scripts
- [ ] Use Script strategy="afterInteractive" for most scripts

**CSS:**
- [ ] Purge unused Tailwind classes in production
- [ ] Minimize critical CSS
- [ ] Use CSS containment for isolated components

### 10.2 SEO Configuration

Create `app/metadata.ts`:

```typescript
import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mohitnexus.com'),
  title: {
    default: 'MOHIT NEXUS - Build. Create. Explore.',
    template: '%s | MOHIT NEXUS'
  },
  description: 'Join the movement of ambitious creators building the future through engineering, design, exploration, and innovation.',
  keywords: ['robotics', 'engineering', 'web development', 'travel', 'innovation', 'maker', 'creator'],
  authors: [{ name: 'Mohit Yadav' }],
  creator: 'Mohit Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'MOHIT NEXUS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MOHIT NEXUS - Build the Future'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mohitbuilds',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
}
```

### 10.3 Deployment to Vercel

**Step-by-step: