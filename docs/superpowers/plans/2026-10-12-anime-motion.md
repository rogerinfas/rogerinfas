# Anime.js Motion Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add choreographed anime.js entrances and springy micro-interactions across the portfolio with full reduced-motion support.

**Architecture:** A shared motion-tokens module plus a reduced-motion hook feed component-scoped anime timelines (one `createScope` per component, `revert()` on unmount). Existing component APIs (`Reveal` props, `useReveal`, sticky stacking) are preserved.

**Tech Stack:** Astro 7 + React 19 (`client:only`), Tailwind v4, animejs v4 (`animate`, `createTimeline`, `stagger`, `splitText`, `createScope`).

**Spec:** `docs/superpowers/specs/2026-10-12-anime-motion-design.md`

## Global Constraints

- All anime code inside `useEffect` + `createScope({ root })` with a per-component `ref`; cleanup is always `scope.current.revert()`.
- Selectors scoped to the component root only; never global class queries.
- No React state writes from anime callbacks after unmount.
- Animate transform/opacity only; no layout-property animation.
- When `prefers-reduced-motion` is set, skip all timelines and render final states instantly.
- No new `setInterval` clocks for animation.
- This repo has no unit-test framework; verification is `npm run build` plus the per-task behavior checks below.

## Review Focus

- Reduced-motion user opens every section: everything visible and operable with zero motion — pinned by Task 1 checks, exercised in Task 8.
- Rapid slide changes in the hero (clicking dots mid-timeline): no stuck half-faded state — pinned in Task 3.
- Modal/menu opened and closed repeatedly: no console errors, no stuck transforms — pinned in Task 6.
- Fast scroll past sticky project cards: no transform residue on cards — pinned in Task 5.
- Unmount during a running timeline (navigation while animating): no post-unmount state writes — pinned in every component task via the revert check.

---

## File structure

- Create `src/lib/motion.ts` — tokens (`ENTER_DURATION`, `STAGGER_MS`, `EASE_ENTER`, `SPRING_SOFT`, `SPRING_SNAPPY`) and `shouldReduceMotion()`.
- Create `src/hooks/use-prefers-reduced-motion.ts` — reactive `boolean` hook.
- Modify `src/components/Reveal.tsx` — add optional staggered-children mode, anime internals for complex cases, CSS kept for simple fades.
- Modify `src/components/sections/HeroSection.tsx` — slide-change `createTimeline` + timeline-driven progress bar.
- Modify `src/components/sections/IntroSection.tsx` — `splitText` char stagger + chained underline sweep.
- Modify `src/components/sections/ValueSection.tsx` — merged steps + capabilities + outcomes lists; entrances only, lists stay static.
- Modify `src/components/sections/FeaturedProjectsSection.tsx` — card content entry stagger (sticky/measure logic untouched).
- Modify `src/components/sections/CtaSection.tsx`, `src/components/ContactModal.tsx`, `src/components/SideMenu.tsx`, `src/components/sections/TestimonialsSection.tsx`, `src/components/sections/FeaturedProjectsSection.tsx` (`CopyField`) — micro-interactions.

### Task 1: Foundation (tokens + reduced-motion)

**Files:**
- Create: `src/lib/motion.ts`
- Create: `src/hooks/use-prefers-reduced-motion.ts`

**Interfaces:**
- Consumes: nothing (first task).
- Produces: `ENTER_DURATION: number`, `STAGGER_MS: number`, `EASE_ENTER: string`, `SPRING_SOFT: object`, `SPRING_SNAPPY: object`, `shouldReduceMotion(): boolean` from `src/lib/motion.ts`; `usePrefersReducedMotion(): boolean` from the hook. Later tasks import these exact names.

- [ ] **Step 1: Install the dependency**

Run: `npm i -S animejs@^4`
Expected: `animejs` appears in `package.json` dependencies.

- [ ] **Step 2: Write `src/lib/motion.ts`**

Exact exports: `ENTER_DURATION = 700`, `STAGGER_MS = 90`, `EASE_ENTER` (anime easing string approximating `cubic-bezier(0.16,1,0.3,1)`), `SPRING_SOFT` / `SPRING_SNAPPY` (anime `spring()` parameter objects), `shouldReduceMotion(): boolean` (guards `typeof window === "undefined"`, reads `matchMedia('(prefers-reduced-motion: reduce)')`).

- [ ] **Step 3: Write `src/hooks/use-prefers-reduced-motion.ts`**

Exact signature: `usePrefersReducedMotion(): boolean`. Subscribes to the media query, updates on change, cleans up the listener.

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: PASS with no new warnings. Emulate reduced motion in devtools: hook returns true (verify via a temporary console log, then remove it).

- [ ] **Step 5: Commit**

```bash
git add package.json src/lib/motion.ts src/hooks/use-prefers-reduced-motion.ts
git commit -m "feat: add anime.js motion tokens and reduced-motion hook"
```

### Task 2: Reveal staggered-children mode

**Files:**
- Modify: `src/components/Reveal.tsx`

**Interfaces:**
- Consumes: `ENTER_DURATION`, `STAGGER_MS`, `EASE_ENTER`, `usePrefersReducedMotion` from Task 1.
- Produces: extended `<Reveal>` props — existing props unchanged, plus optional `staggerChildren?: boolean`. Later tasks rely on the unchanged default behavior.

- [ ] **Step 1: Add `staggerChildren` prop with anime internals**

When true and the existing `useReveal` flips visible (and motion is allowed), run a scoped `animate()` over direct children with `delay: stagger(STAGGER_MS)`; when reduced motion is on, render children in final state with no animation. Default path (false) keeps current CSS classes untouched.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: PASS. Temporarily set `staggerChildren` on one section header in dev: children cascade; with reduced-motion emulation they appear instantly. Revert the temporary usage before committing (real usages land in later tasks).

- [ ] **Step 3: Commit**

```bash
git add src/components/Reveal.tsx
git commit -m "feat: add staggered-children mode to Reveal"
```

### Task 3: Hero slide-change timeline

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Interfaces:**
- Consumes: tokens + hook from Task 1.
- Produces: hero slide changes driven by a single `createTimeline` (crossfade + slow-zoom, metadata stagger, headline swap, progress bar via timeline `onUpdate`). No other task consumes hero internals.

- [ ] **Step 1: Replace the `setInterval` progress loop with a slide timeline**

One `createTimeline` per slide change inside a scoped effect: image layer crossfade/scale, metadata stagger (`STAGGER_MS`), headline fade, progress bar width from timeline progress in `onUpdate`. Autoplay advances the slide on timeline complete; dot clicks cancel the running timeline (`revert()` via scope) and start the new one. Reduced motion: instant cuts, static progress bar hidden.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: PASS. Manual: autoplay rotates every ~5s; rapid dot-clicking never leaves a half-faded slide; reduced motion shows instant cuts.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: drive hero rotation with anime timeline"
```

### Task 4: ValueSection + project/CTA entrances

**Files:**
- Modify: `src/components/sections/ValueSection.tsx` (list staggers only)
- Modify: `src/components/sections/FeaturedProjectsSection.tsx` (card content only)
- Modify: `src/components/sections/CtaSection.tsx` (entry only)

**Interfaces:**
- Consumes: tokens + hook from Task 1, `Reveal` from Task 2.
- Produces: self-contained per section. Sticky stacking, slot measurement, and ribbons in `FeaturedProjectsSection` are explicitly untouched. `ValueSection` lists are static (no autoplay, no accordion); entrances only.

- [ ] **Step 1: Animate entrances**

ValueSection: steps, capabilities, and outcomes rows stagger on `Reveal` visibility using the Task 2 mode. FeaturedProjects: stagger card headline/body/credential blocks on `Reveal` visibility using the Task 2 mode. CTA: headline stagger + button pop on entry.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: PASS. Manual: value lists cascade on scroll; fast scroll past sticky cards leaves no transform residue; reduced motion is instant everywhere.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ValueSection.tsx src/components/sections/FeaturedProjectsSection.tsx src/components/sections/CtaSection.tsx
git commit -m "feat: add anime entrances to value, projects, and CTA"
```

### Task 5: Micro-interactions (buttons, copy, modal, menu, testimonials, intro)

**Files:**
- Modify: `src/components/sections/IntroSection.tsx`
- Modify: `src/components/ContactModal.tsx`
- Modify: `src/components/SideMenu.tsx`
- Modify: `src/components/sections/TestimonialsSection.tsx`
- Modify: `src/components/sections/FeaturedProjectsSection.tsx` (`CopyField` only)

**Interfaces:**
- Consumes: `SPRING_SOFT`, `SPRING_SNAPPY`, hook from Task 1.
- Produces: self-contained per component.

- [ ] **Step 1: Add springs and small timelines**

Intro headline: `splitText` char stagger on reveal, underline sweep chained after. Buttons (CTA/demo): press spring on pointer down/up, existing magnetic math untouched. `CopyField`: success pop on copy. Modal: entrance timeline (backdrop fade + panel spring); success state kept. SideMenu: link stagger on open. Testimonials: slide/fade timeline on index change. All skipped instantly under reduced motion.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: PASS. Manual: open/close modal and menu 5x rapidly — no console errors, no stuck transforms; copy feedback pops; reduced motion is instant.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/IntroSection.tsx src/components/ContactModal.tsx src/components/SideMenu.tsx src/components/sections/TestimonialsSection.tsx src/components/sections/FeaturedProjectsSection.tsx
git commit -m "feat: add anime micro-interactions across landing"
```

### Task 6: Final verification pass

**Files:** none (verification only).

- [ ] **Step 1: Run the build**

Run: `npm run build`
Expected: PASS, no new warnings.

- [ ] **Step 2: Breakpoint and motion checklist**

Check 360 / 640 / 768 / 1024 / 1280px: hero rotation, intro reveal, value section reveal, project stack, modal, menu, testimonials. Emulate `prefers-reduced-motion: reduce` and confirm every section is static, visible, and operable. Confirm no new `setInterval` animation clocks and no layout-property animation remain.

- [ ] **Step 3: Commit (only if fixes were needed)**

```bash
git add -A
git commit -m "fix: polish motion pass findings"
```

If no fixes were needed, skip the commit and note the clean pass.
