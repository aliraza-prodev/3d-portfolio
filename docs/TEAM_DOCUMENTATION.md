# Portfolio Project Documentation (Team Handoff)

## 1) Project Overview

This is a single-page, interactive 3D portfolio built with **React + TypeScript + Vite**.

It combines:
- Component-based UI sections (Landing, About, What I Do, Career, Work, Contact)
- A real-time 3D character scene (Three.js)
- Scroll-driven animation orchestration (GSAP + ScrollTrigger + ScrollSmoother)
- A loading gate and staged intro effects
- A physics-based tech stack section using React Three Fiber + Rapier

---

## 2) Tech Stack

### Core
- React 18
- TypeScript
- Vite

### 3D / Rendering / Physics
- three
- @react-three/fiber
- @react-three/drei
- @react-three/postprocessing
- @react-three/rapier
- @react-three/cannon (installed, not central in current flow)
- three-stdlib (GLTFLoader, DRACOLoader)

### Animation & Interaction
- gsap
- GSAP plugins: ScrollTrigger, ScrollSmoother, SplitText
- react-fast-marquee
- react-icons

---

## 3) High-Level Architecture

## App boot flow
1. `src/main.tsx` mounts app
2. `src/App.tsx` wraps app in `LoadingProvider`
3. `MainContainer` renders page shell + sections
4. 3D character scene renders via lazy-loaded `Character`
5. Loader completes, then intro animations run
6. Scroll timelines activate content transitions

## Structure map
- `src/components/`
  - UI sections: `Landing`, `About`, `WhatIDo`, `Career`, `Work`, `Contact`
  - Experience shell: `MainContainer`, `Navbar`, `SocialIcons`, `Cursor`, `Loading`
  - 3D character: `Character/`
  - 3D tech cloud: `TechStack`
  - Shared interaction display: `HoverLinks`
- `src/components/utils/`
  - GSAP timelines, initial intro FX, split text logic
- `src/context/`
  - Loading state and lifecycle
- `public/`
  - Static assets (images, model files, draco decoder)

---

## 4) Rendering Layers (Important)

The page is effectively built in layered systems:

1. **DOM/CSS Layer**
   - Standard React sections with CSS modules per section
   - Hover effects, text styles, layout, and some CSS keyframe animations

2. **Three.js Character Layer**
   - `src/components/Character/Scene.tsx`
   - Separate WebGL renderer + camera + scene lifecycle
   - Character mesh loaded from encrypted model

3. **R3F Physics Layer (TechStack)**
   - `src/components/TechStack.tsx`
   - Uses Canvas from React Three Fiber
   - Uses Rapier for rigid body interactions

4. **GSAP Timeline Layer**
   - Coordinates transitions between content sections and 3D camera/character state

---

## 5) Loading & Intro Pipeline

### Loading state
- Managed by `LoadingProvider`
- `Loading` component displays percentage + visual intro UI
- Progress updates come from `setProgress()` helper

### After load
- `initialFX()` runs:
  - Enables scrolling
  - Unpauses smooth scrolling
  - Animates hero text and navbar/icons visibility
  - Starts looping text transitions on heading segments

---

## 6) Character Model Architecture

### Files
- `src/components/Character/Scene.tsx`
- `src/components/Character/utils/character.ts`
- `src/components/Character/utils/decrypt.ts`
- `src/components/Character/utils/animationUtils.ts`
- `src/components/Character/utils/mouseUtils.ts`
- `src/components/Character/utils/resizeUtils.ts`

### Model loading process
1. Fetch encrypted model: `/models/character.enc`
2. Decrypt in browser (`decryptFile`) using AES-CBC
3. Create blob URL
4. Load with GLTFLoader + DRACOLoader
5. Compile with renderer, add to scene
6. Apply selective material theme tweaks
7. Start character animation + GSAP timelines

### Character animation sources
- GLTF animation clips (e.g., intro, blink, typing, brow)
- Bone-filtered animation actions for targeted control
- Mouse/touch head tracking via interpolation
- Scroll timelines for camera/pose transitions

---

## 7) Scroll Animation Strategy

### Timeline definitions
- `setCharTimeline()` controls character + camera + section transitions
- `setAllTimeline()` controls career timeline reveal flow

### Plugins used
- ScrollTrigger: section-based triggers and scrub behavior
- ScrollSmoother: smooth navigation and scroll movement
- SplitText: per-char/per-word text reveal animations

### Mobile behavior
- Reduced/alternate behavior on smaller screens
- Some desktop-only transitions are disabled or simplified

---

## 8) Work Section & Media Strategy

Current implementation in `Work` is **text-only centered slides** (professional mode).

### Is video used for animation?
- **Currently displayed in Work:** No (images/video are not rendered in active `Work.tsx` layout)
- **Capability exists:** `WorkImage.tsx` supports hover-preview videos (`<video>`), but this component is currently not used in Work carousel rendering

So the project supports both patterns:
- Component-based animated text/card sections (active)
- Media-assisted hover video previews (available but inactive)

---

## 9) Social & Contact Architecture

### Floating social rail
- `SocialIcons.tsx`
- Current visible icons are reduced to 3 platform icons (Facebook, LinkedIn, Instagram)
- Includes link hover position easing logic using CSS variables

### Contact section
- `Contact.tsx`
- Mirrors profile links and core details in a static, readable layout

---

## 10) TechStack Physics Section

### File
- `src/components/TechStack.tsx`

### How it works
- Creates textured spheres from icon images in `public/images`
- Rapier physics bodies + colliders
- Pointer rigid body pushes/interacts with sphere cluster
- Post-processing with AO for depth and polish

### Activation
- Section behavior toggles active state based on scroll position near Work region

---

## 11) Design System & Styling

- Styling is component-scoped via CSS files in `src/components/styles/`
- Reusable classes:
  - `.title`, `.para` (animated with SplitText)
- UI interactions:
  - Custom cursor behavior
  - HoverLinks duplicated text motion effect
  - Decorative glow/light effects

---

## 12) Security & Asset Handling Notes

- Character model is shipped encrypted (`character.enc`) and decrypted client-side
- This obfuscates direct model extraction but is not equivalent to server-side secure DRM
- Draco decoder files are hosted in `public/draco`

---

## 13) Build, Run, and Release

### Local development
- `npm install`
- `npm run dev`

### Production
- `npm run build`
- `npm run preview`

### Deployment target
- Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages)

---

## 14) Team Editing Guide (Where to change what)

### Profile content
- Landing: `src/components/Landing.tsx`
- About: `src/components/About.tsx`
- Career timeline: `src/components/Career.tsx`
- Projects: `src/components/Work.tsx`
- Contact details: `src/components/Contact.tsx`
- Social links: `src/components/SocialIcons.tsx`

### Motion/animation behavior
- Intro animation: `src/components/utils/initialFX.ts`
- Scroll timeline orchestration: `src/components/utils/GsapScroll.ts`
- Text split animations: `src/components/utils/splitText.ts`

### 3D character behavior
- Scene setup: `src/components/Character/Scene.tsx`
- Model load/decrypt: `src/components/Character/utils/character.ts`, `decrypt.ts`
- Bone/clip animation logic: `animationUtils.ts`

### Tech stack section
- Physics objects and textures: `src/components/TechStack.tsx`
- Add/remove logos via `imageUrls` array and assets in `public/images`

---

## 15) Suggested Team Conventions

1. Keep section content changes isolated to section files
2. Keep animation timing changes in utility files (not scattered in sections)
3. Avoid changing both scene and CSS animation logic in same PR unless required
4. For production stability:
   - Test desktop and mobile separately
   - Verify smooth scroll + anchor behavior
   - Verify performance on low-end device profile

---

## 16) QA Checklist Before Merge

- [ ] `npm run build` passes
- [ ] No TypeScript or lint regressions
- [ ] Hero intro animation still runs after loader
- [ ] Character loads correctly (no decoder/model fetch issues)
- [ ] Work carousel navigation + dot controls work
- [ ] Career timeline animations still trigger
- [ ] Contact/social links open correctly
- [ ] Mobile layout remains readable and usable

---

## 17) Future Improvements (Optional)

- Move static content (career/projects/contact) to centralized data files
- Add environment-based feature flags for heavy 3D sections
- Add route-based code splitting if multi-page expansion is planned
- Improve cleanup of some event listeners to prevent potential duplicate bindings
- Add automated CI checks for build and lint

---

## 18) Ownership Notes

This document is intended for internal team sharing and onboarding.
For client-facing summaries, create a shorter version from this file.
