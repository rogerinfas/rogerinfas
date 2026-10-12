# Anime.js Motion Upgrade — Design Spec (A + C)

Date: 2026-10-12
Status: approved (all 3 sections)
Scope: choreographed entrances (A) + micro-interactions (C). Scroll-scrubbed storytelling (B) is OUT of v1, except as a possible later upgrade for the Process blueprint.

## 1. Intent

Give the portfolio maximum motion impact with anime.js v4, no custom cursor effects. Success: every section entrance feels choreographed (staggered, single-clock), interactive feedback feels springy, and `prefers-reduced-motion` users get a fully static site. No jank on mobile, no animation leaks on unmount.

Assumptions: anime.js v4 API (`animate`, `createTimeline`, `stagger`, `splitText`, `createScope` + `scope.revert()`), installed via npm. React tree stays `client:only`; SSR safety preserved.

## 2. Foundation

- Add dependency `animejs@^4`.
- New `src/lib/motion.ts`: tokens `ENTER_DURATION = 700`, `STAGGER = 80–120`, brand ease mapping (entrances approximate `cubic-bezier(0.16,1,0.3,1)` with anime `outExpo`-family; micros use `spring()` presets), plus a `shouldReduceMotion()` helper reading `matchMedia('(prefers-reduced-motion: reduce)')`.
- New `src/hooks/use-prefers-reduced-motion.ts`: reactive hook; when true, components skip anime and apply final states immediately.
- Rules (hard): all anime code inside `useEffect` + `createScope({ root })` with a scoped `ref` per component; cleanup always `scope.revert()`; selectors scoped to root only, never global class queries; no React state writes from anime callbacks after unmount; transform/opacity properties only (no layout thrash).

## 3. Entrances (A)

- `<Reveal>` keeps its props API (`delay`, `variant`, `as`, `className`). Simple fades stay CSS. Add optional staggered-children mode powered by anime for headlines, grids, and nav lists.
- Hero slide change becomes one `createTimeline`: image crossfade + slow-zoom, metadata lines stagger, headline swap, progress bar driven by the timeline clock via `onUpdate` (replaces the independent `setInterval` progress loop).
- Intro headline uses `splitText` char stagger (rise + un-blur); underline sweeps chained after text lands.
- Process steps become timeline labels on one `createTimeline`: autoplay = `play()`, click/hover/focus = `seek(label)`; step progress bar reads timeline progress. Pause-on-hover preserved.
- Capabilities accordion animates height/opacity with `animate()`; floating preview crossfades with a scale settle.
- Project cards: content stagger on entry; CSS sticky stacking, offsets, and ribbons untouched.
- CTA headline stagger + button pop on entry.

## 4. Micro-interactions (C)

- Press springs on CTA / demo buttons (existing magnetic `useMagnetic` math unchanged; spring layered on press only).
- `CopyField` success pop on copy; contact modal entrance timeline (backdrop fade + panel spring); success-state transition kept.
- Testimonial change plays a short slide/fade timeline; SideMenu links stagger on open.
- Tech ribbons, link underlines, and pulsing dots stay CSS (no JS cost).

## 5. Data flow

Visibility (`useReveal` IntersectionObserver, one-shot) or user events → component-scoped anime timeline/animation → transform/opacity on scoped targets. No global motion store. Scroll-driven pieces (hero parallax, preview drift) keep reading the throttled `useScrollY`; anime does not own scroll position in v1.

## 6. Error handling

- Reduced motion: skip all timelines, render final states; accordion/modal open instantly.
- Unmount: `scope.revert()` cancels everything; callbacks guarded against post-unmount state writes.
- SSR: no `window` access outside effects (existing guards kept).
- If anime import ever fails, components fall back to current CSS behavior (final visible states).

## 7. Testing / verification

- `npm run build` passes.
- Manual checklist at 360 / 640 / 768 / 1024 / 1280px: hero rotation, intro reveal, process auto+click steps, project stack, accordion, modal open/close, menu open/close, testimonial prev/next.
- Emulate `prefers-reduced-motion: reduce`: assert no motion, all content visible and operable.
- Mount/unmount modal and menu repeatedly: no console errors, no stuck transforms.
- No new `setInterval` clocks for animation; no layout-property animation.

## 8. Non-goals (v1)

Scroll-scrubbed storytelling, custom cursor, page transitions, 3D/WebGL, sound. Unused capability images in `public/images/capabilities/` may be deleted separately.
