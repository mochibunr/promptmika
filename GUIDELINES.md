---
title: "AI Web UX/UI/Motion Guidelines"
filename: "GUIDELINES.md"
version: "1.0.0"
status: "normative"
scope: "AI-generated websites, web apps, dashboards, SaaS, commerce, content sites, and agentic interfaces"
language: "en"
entryCount: 1000

agentInstruction:
  primary: "Select only the guidelines that solve the current product, user, content, and interaction problem."
  doNotMaximizeUsage: true
  preferFamiliarPatterns: true
  preserveUserControl: true
  accessibilityIsBaseline: true
  responsiveIsBaseline: true
  motionMustHavePurpose: true
  decorationMustNotReduceUsability: true

selection:
  required:
    - "Identify product type."
    - "Identify primary user goal."
    - "Identify primary device/input modes."
    - "Identify content density."
    - "Identify critical flows."
    - "Identify accessibility constraints."
    - "Identify whether motion communicates useful change."
  ux:
    minimumRelevantPrinciples: 5
    maximumArbitraryPrinciples: 0
  ui:
    chooseByTaskNotTrend: true
    avoidComponentStuffing: true
  motion:
    defaultIntensity: "minimal-to-subtle"
    continuousDecorativeAnimationsMax: 1
    simultaneousPrimaryAnimationsMax: 1
    simultaneousSecondaryAnimationsMax: 2
    defaultLoop: false
    mustRespectReducedMotion: true

motionDefaults:
  durations:
    instant: "0ms"
    microFast: "80ms"
    micro: "120ms"
    microSlow: "160ms"
    fast: "180ms"
    normal: "220ms"
    moderate: "280ms"
    panel: "320ms"
    large: "400ms"
    storytelling: "500-800ms"
  guidance:
    routineInteractionMax: "400ms"
    preferredProperties:
      - "transform"
      - "opacity"
    expensiveProperties:
      - "filter"
      - "blur"
      - "box-shadow"
      - "layout-affecting properties"
  easing:
    enter: "cubic-bezier(0.16, 1, 0.3, 1)"
    exit: "cubic-bezier(0.7, 0, 0.84, 0)"
    movement: "ease-in-out"

priorityOrder:
  - "user feedback"
  - "state communication"
  - "navigation continuity"
  - "spatial relationship"
  - "progress"
  - "attention"
  - "brand personality"
  - "decoration"

hardRules:
  - "Never hide essential information behind hover-only interaction."
  - "Never make animation the only state cue."
  - "Never block normal interaction only to finish decorative animation."
  - "Never use fake progress."
  - "Never autoplay important carousels without user control."
  - "Never hijack native scrolling for ordinary pages."
  - "Never remove visible focus styles."
  - "Never sacrifice readability for glass, blur, glow, particles, gradients, or 3D effects."
  - "Never animate everything just because animation is available."
  - "Prefer no animation over meaningless animation."
---

# GUIDELINES.md

## 0. How the AI Must Read This File

This file is a **selection system**, not a checklist.

The AI MUST NOT apply all 1,000 guidelines to one website. It MUST first understand the product and then select only relevant rules.

Use this order:

1. Determine the product category and primary user goal.
2. Select relevant UX rules from `G0001–G0200`.
3. Select concrete UI components from `G0201–G0500`.
4. Select motion rules from `G0501–G1000` only when motion communicates useful change.
5. Validate accessibility, responsive behavior, performance, error recovery, loading behavior, and reduced motion.
6. Remove anything decorative that competes with the user's task.

### Interpretation Keywords

- **MUST** = required unless technically impossible.
- **SHOULD** = default recommendation; deviate only with a reason.
- **MAY** = optional and context-dependent.
- **AVOID** = usually harmful unless a narrow use case justifies it.
- **NEVER** = prohibited.

### Per-Entry Schema

Every guideline follows this structure:

```yaml
id: G0001
name: Example
type: ux | ui | motion
category: example-category
description: what the guideline/component/motion is
useWhen: where and how it should be applied
benefit: what improves when it is used correctly
missingImpact: what tends to happen without it
overuseRisk: what happens when it is applied excessively or without a real need
```

## 0.1 Global Decision Rule

Before adding any UX pattern, UI component, or animation, ask:

```text
Does this reduce confusion, effort, error, latency perception, uncertainty,
navigation cost, accessibility barriers, or loss of control?

YES -> consider it.
NO  -> do not add it merely for visual novelty.
```

## 0.2 Motion Decision Rule

Before animating anything, ask:

```text
Did state, position, hierarchy, progress, relationship, or feedback change?

YES -> subtle motion may help explain the change.
NO  -> prefer static UI.
```

## 0.3 Default Motion Intensity by Product

| Product | Default Motion |
|---|---|
| Developer tool | Minimal |
| Enterprise dashboard | Minimal |
| Productivity app | Minimal–Subtle |
| Settings / security | Minimal |
| Checkout / payment | Minimal |
| SaaS app | Subtle |
| Consumer app | Subtle–Moderate |
| Marketing site | Subtle–Expressive |
| Portfolio | Moderate–Expressive |
| Storytelling experience | Moderate–Immersive |
| Game / playful experience | Context-dependent |

---

# 1. Canonical Guidelines


## UX

### Research

#### G0001 — User Research

```yaml
id: G0001
name: "User Research"
type: ux
category: research
description: "A UX guideline covering user research; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "User Research makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without User Research, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0002 — User Interviews

```yaml
id: G0002
name: "User Interviews"
type: ux
category: research
description: "A UX guideline covering user interviews; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "User Interviews makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without User Interviews, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0003 — User Surveys

```yaml
id: G0003
name: "User Surveys"
type: ux
category: research
description: "A UX guideline covering user surveys; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "User Surveys makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without User Surveys, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0004 — Contextual Inquiry

```yaml
id: G0004
name: "Contextual Inquiry"
type: ux
category: research
description: "A UX guideline covering contextual inquiry; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Contextual Inquiry makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Contextual Inquiry, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0005 — Diary Study

```yaml
id: G0005
name: "Diary Study"
type: ux
category: research
description: "A UX guideline covering diary study; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Diary Study makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Diary Study, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0006 — Personas

```yaml
id: G0006
name: "Personas"
type: ux
category: research
description: "A UX guideline covering personas; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Personas makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Personas, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0007 — Proto-Personas

```yaml
id: G0007
name: "Proto-Personas"
type: ux
category: research
description: "A UX guideline covering proto-personas; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Proto-Personas makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Proto-Personas, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0008 — Jobs To Be Done

```yaml
id: G0008
name: "Jobs To Be Done"
type: ux
category: research
description: "A UX guideline covering jobs to be done; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Jobs To Be Done makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Jobs To Be Done, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0009 — Empathy Mapping

```yaml
id: G0009
name: "Empathy Mapping"
type: ux
category: research
description: "A UX guideline covering empathy mapping; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Empathy Mapping makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Empathy Mapping, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0010 — Competitive Analysis

```yaml
id: G0010
name: "Competitive Analysis"
type: ux
category: research
description: "A UX guideline covering competitive analysis; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Competitive Analysis makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Competitive Analysis, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0011 — Journey Mapping

```yaml
id: G0011
name: "Journey Mapping"
type: ux
category: research
description: "A UX guideline covering journey mapping; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Journey Mapping makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Journey Mapping, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0012 — Experience Mapping

```yaml
id: G0012
name: "Experience Mapping"
type: ux
category: research
description: "A UX guideline covering experience mapping; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Experience Mapping makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Experience Mapping, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0013 — Service Blueprint

```yaml
id: G0013
name: "Service Blueprint"
type: ux
category: research
description: "A UX guideline covering service blueprint; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Service Blueprint makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Service Blueprint, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0014 — Task Analysis

```yaml
id: G0014
name: "Task Analysis"
type: ux
category: research
description: "A UX guideline covering task analysis; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Task Analysis makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Task Analysis, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0015 — User Story Mapping

```yaml
id: G0015
name: "User Story Mapping"
type: ux
category: research
description: "A UX guideline covering user story mapping; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "User Story Mapping makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without User Story Mapping, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0016 — Problem Framing

```yaml
id: G0016
name: "Problem Framing"
type: ux
category: research
description: "A UX guideline covering problem framing; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Problem Framing makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Problem Framing, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0017 — UX Hypothesis

```yaml
id: G0017
name: "UX Hypothesis"
type: ux
category: research
description: "A UX guideline covering ux hypothesis; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "UX Hypothesis makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without UX Hypothesis, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0018 — Experience Principles

```yaml
id: G0018
name: "Experience Principles"
type: ux
category: research
description: "A UX guideline covering experience principles; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Experience Principles makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Experience Principles, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0019 — UX Benchmarking

```yaml
id: G0019
name: "UX Benchmarking"
type: ux
category: research
description: "A UX guideline covering ux benchmarking; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "UX Benchmarking makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without UX Benchmarking, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0020 — Usability Benchmarking

```yaml
id: G0020
name: "Usability Benchmarking"
type: ux
category: research
description: "A UX guideline covering usability benchmarking; use it to reduce friction and make the user's path more understandable."
useWhen: "Use before or during product decisions to replace assumptions with evidence."
benefit: "Usability Benchmarking makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Usability Benchmarking, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Information Architecture

#### G0021 — Information Architecture

```yaml
id: G0021
name: "Information Architecture"
type: ux
category: information-architecture
description: "A UX guideline covering information architecture; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Information Architecture makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Information Architecture, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0022 — Content Hierarchy

```yaml
id: G0022
name: "Content Hierarchy"
type: ux
category: information-architecture
description: "A UX guideline covering content hierarchy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Content Hierarchy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Content Hierarchy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0023 — Visual Hierarchy

```yaml
id: G0023
name: "Visual Hierarchy"
type: ux
category: information-architecture
description: "A UX guideline covering visual hierarchy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Visual Hierarchy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Visual Hierarchy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0024 — Sitemap

```yaml
id: G0024
name: "Sitemap"
type: ux
category: information-architecture
description: "A UX guideline covering sitemap; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Sitemap makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Sitemap, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0025 — Taxonomy

```yaml
id: G0025
name: "Taxonomy"
type: ux
category: information-architecture
description: "A UX guideline covering taxonomy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Taxonomy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Taxonomy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0026 — Card Sorting

```yaml
id: G0026
name: "Card Sorting"
type: ux
category: information-architecture
description: "A UX guideline covering card sorting; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Card Sorting makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Card Sorting, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0027 — Tree Testing

```yaml
id: G0027
name: "Tree Testing"
type: ux
category: information-architecture
description: "A UX guideline covering tree testing; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Tree Testing makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Tree Testing, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0028 — Content Grouping

```yaml
id: G0028
name: "Content Grouping"
type: ux
category: information-architecture
description: "A UX guideline covering content grouping; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Content Grouping makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Content Grouping, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0029 — Chunking

```yaml
id: G0029
name: "Chunking"
type: ux
category: information-architecture
description: "A UX guideline covering chunking; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Chunking makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Chunking, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0030 — Progressive Disclosure

```yaml
id: G0030
name: "Progressive Disclosure"
type: ux
category: information-architecture
description: "A UX guideline covering progressive disclosure; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when organizing pages, content, navigation, or large information sets."
benefit: "Progressive Disclosure makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Progressive Disclosure, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Navigation

#### G0031 — Global Navigation

```yaml
id: G0031
name: "Global Navigation"
type: ux
category: navigation
description: "A UX guideline covering global navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Global Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Global Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0032 — Local Navigation

```yaml
id: G0032
name: "Local Navigation"
type: ux
category: navigation
description: "A UX guideline covering local navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Local Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Local Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0033 — Contextual Navigation

```yaml
id: G0033
name: "Contextual Navigation"
type: ux
category: navigation
description: "A UX guideline covering contextual navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Contextual Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Contextual Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0034 — Breadcrumb Navigation

```yaml
id: G0034
name: "Breadcrumb Navigation"
type: ux
category: navigation
description: "A UX guideline covering breadcrumb navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Breadcrumb Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Breadcrumb Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0035 — Tab Navigation

```yaml
id: G0035
name: "Tab Navigation"
type: ux
category: navigation
description: "A UX guideline covering tab navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Tab Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Tab Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0036 — Sidebar Navigation

```yaml
id: G0036
name: "Sidebar Navigation"
type: ux
category: navigation
description: "A UX guideline covering sidebar navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Sidebar Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Sidebar Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0037 — Bottom Navigation

```yaml
id: G0037
name: "Bottom Navigation"
type: ux
category: navigation
description: "A UX guideline covering bottom navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Bottom Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Bottom Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0038 — Mega Menu

```yaml
id: G0038
name: "Mega Menu"
type: ux
category: navigation
description: "A UX guideline covering mega menu; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Mega Menu makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Mega Menu, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0039 — Anchor Navigation

```yaml
id: G0039
name: "Anchor Navigation"
type: ux
category: navigation
description: "A UX guideline covering anchor navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Anchor Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Anchor Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0040 — Back Navigation Consistency

```yaml
id: G0040
name: "Back Navigation Consistency"
type: ux
category: navigation
description: "A UX guideline covering back navigation consistency; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users must move between destinations, levels, or sections."
benefit: "Back Navigation Consistency makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Back Navigation Consistency, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Interaction

#### G0041 — Affordance

```yaml
id: G0041
name: "Affordance"
type: ux
category: interaction
description: "A UX guideline covering affordance; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Affordance makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Affordance, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0042 — Signifiers

```yaml
id: G0042
name: "Signifiers"
type: ux
category: interaction
description: "A UX guideline covering signifiers; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Signifiers makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Signifiers, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0043 — Direct Manipulation

```yaml
id: G0043
name: "Direct Manipulation"
type: ux
category: interaction
description: "A UX guideline covering direct manipulation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Direct Manipulation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Direct Manipulation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0044 — Drag and Drop

```yaml
id: G0044
name: "Drag and Drop"
type: ux
category: interaction
description: "A UX guideline covering drag and drop; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Drag and Drop makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Drag and Drop, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0045 — Inline Editing

```yaml
id: G0045
name: "Inline Editing"
type: ux
category: interaction
description: "A UX guideline covering inline editing; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Inline Editing makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Inline Editing, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0046 — Context Menu

```yaml
id: G0046
name: "Context Menu"
type: ux
category: interaction
description: "A UX guideline covering context menu; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Context Menu makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Context Menu, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0047 — Command Palette

```yaml
id: G0047
name: "Command Palette"
type: ux
category: interaction
description: "A UX guideline covering command palette; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Command Palette makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Command Palette, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0048 — Keyboard Shortcuts

```yaml
id: G0048
name: "Keyboard Shortcuts"
type: ux
category: interaction
description: "A UX guideline covering keyboard shortcuts; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Keyboard Shortcuts makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Keyboard Shortcuts, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0049 — Multi-Select

```yaml
id: G0049
name: "Multi-Select"
type: ux
category: interaction
description: "A UX guideline covering multi-select; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Multi-Select makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Multi-Select, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0050 — Bulk Actions

```yaml
id: G0050
name: "Bulk Actions"
type: ux
category: interaction
description: "A UX guideline covering bulk actions; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when users manipulate, select, edit, or act on interface objects."
benefit: "Bulk Actions makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Bulk Actions, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Feedback

#### G0051 — Immediate Feedback

```yaml
id: G0051
name: "Immediate Feedback"
type: ux
category: feedback
description: "A UX guideline covering immediate feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Immediate Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Immediate Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0052 — Hover Feedback

```yaml
id: G0052
name: "Hover Feedback"
type: ux
category: feedback
description: "A UX guideline covering hover feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Hover Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Hover Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0053 — Focus Feedback

```yaml
id: G0053
name: "Focus Feedback"
type: ux
category: feedback
description: "A UX guideline covering focus feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Focus Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Focus Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0054 — Pressed Feedback

```yaml
id: G0054
name: "Pressed Feedback"
type: ux
category: feedback
description: "A UX guideline covering pressed feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Pressed Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Pressed Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0055 — Selected Feedback

```yaml
id: G0055
name: "Selected Feedback"
type: ux
category: feedback
description: "A UX guideline covering selected feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Selected Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Selected Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0056 — Disabled Feedback

```yaml
id: G0056
name: "Disabled Feedback"
type: ux
category: feedback
description: "A UX guideline covering disabled feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Disabled Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Disabled Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0057 — Success Feedback

```yaml
id: G0057
name: "Success Feedback"
type: ux
category: feedback
description: "A UX guideline covering success feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Success Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Success Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0058 — Error Feedback

```yaml
id: G0058
name: "Error Feedback"
type: ux
category: feedback
description: "A UX guideline covering error feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Error Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Error Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0059 — Progress Feedback

```yaml
id: G0059
name: "Progress Feedback"
type: ux
category: feedback
description: "A UX guideline covering progress feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "Progress Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Progress Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0060 — System Status Visibility

```yaml
id: G0060
name: "System Status Visibility"
type: ux
category: feedback
description: "A UX guideline covering system status visibility; use it to reduce friction and make the user's path more understandable."
useWhen: "Use immediately after user input or system state changes."
benefit: "System Status Visibility makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without System Status Visibility, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Loading

#### G0061 — Loading Indicator

```yaml
id: G0061
name: "Loading Indicator"
type: ux
category: loading
description: "A UX guideline covering loading indicator; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Loading Indicator makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Loading Indicator, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0062 — Skeleton Loading

```yaml
id: G0062
name: "Skeleton Loading"
type: ux
category: loading
description: "A UX guideline covering skeleton loading; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Skeleton Loading makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Skeleton Loading, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0063 — Progressive Loading

```yaml
id: G0063
name: "Progressive Loading"
type: ux
category: loading
description: "A UX guideline covering progressive loading; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Progressive Loading makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Progressive Loading, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0064 — Lazy Loading

```yaml
id: G0064
name: "Lazy Loading"
type: ux
category: loading
description: "A UX guideline covering lazy loading; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Lazy Loading makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Lazy Loading, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0065 — Prefetching

```yaml
id: G0065
name: "Prefetching"
type: ux
category: loading
description: "A UX guideline covering prefetching; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Prefetching makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Prefetching, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0066 — Optimistic UI

```yaml
id: G0066
name: "Optimistic UI"
type: ux
category: loading
description: "A UX guideline covering optimistic ui; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Optimistic UI makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Optimistic UI, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0067 — Determinate Progress

```yaml
id: G0067
name: "Determinate Progress"
type: ux
category: loading
description: "A UX guideline covering determinate progress; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Determinate Progress makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Determinate Progress, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0068 — Background Loading

```yaml
id: G0068
name: "Background Loading"
type: ux
category: loading
description: "A UX guideline covering background loading; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Background Loading makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Background Loading, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0069 — Perceived Performance

```yaml
id: G0069
name: "Perceived Performance"
type: ux
category: loading
description: "A UX guideline covering perceived performance; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Perceived Performance makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Perceived Performance, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0070 — Layout Stability

```yaml
id: G0070
name: "Layout Stability"
type: ux
category: loading
description: "A UX guideline covering layout stability; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for latency, asynchronous content, and perceived performance."
benefit: "Layout Stability makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Layout Stability, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Forms

#### G0071 — Clear Labels

```yaml
id: G0071
name: "Clear Labels"
type: ux
category: forms
description: "A UX guideline covering clear labels; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Clear Labels makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Clear Labels, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0072 — Placeholder Guidance

```yaml
id: G0072
name: "Placeholder Guidance"
type: ux
category: forms
description: "A UX guideline covering placeholder guidance; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Placeholder Guidance makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Placeholder Guidance, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0073 — Inline Validation

```yaml
id: G0073
name: "Inline Validation"
type: ux
category: forms
description: "A UX guideline covering inline validation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Inline Validation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Inline Validation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0074 — Real-Time Validation

```yaml
id: G0074
name: "Real-Time Validation"
type: ux
category: forms
description: "A UX guideline covering real-time validation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Real-Time Validation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Real-Time Validation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0075 — Input Masking

```yaml
id: G0075
name: "Input Masking"
type: ux
category: forms
description: "A UX guideline covering input masking; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Input Masking makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Input Masking, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0076 — Autofill

```yaml
id: G0076
name: "Autofill"
type: ux
category: forms
description: "A UX guideline covering autofill; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Autofill makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Autofill, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0077 — Autocomplete

```yaml
id: G0077
name: "Autocomplete"
type: ux
category: forms
description: "A UX guideline covering autocomplete; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Autocomplete makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Autocomplete, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0078 — Smart Defaults

```yaml
id: G0078
name: "Smart Defaults"
type: ux
category: forms
description: "A UX guideline covering smart defaults; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Smart Defaults makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Smart Defaults, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0079 — Conditional Fields

```yaml
id: G0079
name: "Conditional Fields"
type: ux
category: forms
description: "A UX guideline covering conditional fields; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Conditional Fields makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Conditional Fields, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0080 — Form Progress

```yaml
id: G0080
name: "Form Progress"
type: ux
category: forms
description: "A UX guideline covering form progress; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for data entry, validation, progressive disclosure, and completion."
benefit: "Form Progress makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Form Progress, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Authentication

#### G0081 — Simple Signup

```yaml
id: G0081
name: "Simple Signup"
type: ux
category: authentication
description: "A UX guideline covering simple signup; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Simple Signup makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Simple Signup, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0082 — Social Sign-In

```yaml
id: G0082
name: "Social Sign-In"
type: ux
category: authentication
description: "A UX guideline covering social sign-in; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Social Sign-In makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Social Sign-In, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0083 — Single Sign-On

```yaml
id: G0083
name: "Single Sign-On"
type: ux
category: authentication
description: "A UX guideline covering single sign-on; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Single Sign-On makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Single Sign-On, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0084 — Magic Links

```yaml
id: G0084
name: "Magic Links"
type: ux
category: authentication
description: "A UX guideline covering magic links; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Magic Links makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Magic Links, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0085 — Passkeys

```yaml
id: G0085
name: "Passkeys"
type: ux
category: authentication
description: "A UX guideline covering passkeys; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Passkeys makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Passkeys, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0086 — Password Visibility

```yaml
id: G0086
name: "Password Visibility"
type: ux
category: authentication
description: "A UX guideline covering password visibility; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Password Visibility makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Password Visibility, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0087 — Account Recovery

```yaml
id: G0087
name: "Account Recovery"
type: ux
category: authentication
description: "A UX guideline covering account recovery; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Account Recovery makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Account Recovery, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0088 — Session Management

```yaml
id: G0088
name: "Session Management"
type: ux
category: authentication
description: "A UX guideline covering session management; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Session Management makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Session Management, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0089 — Account Switching

```yaml
id: G0089
name: "Account Switching"
type: ux
category: authentication
description: "A UX guideline covering account switching; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Account Switching makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Account Switching, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0090 — Account Deletion UX

```yaml
id: G0090
name: "Account Deletion UX"
type: ux
category: authentication
description: "A UX guideline covering account deletion ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use for identity, session, sign-in, account, and recovery flows."
benefit: "Account Deletion UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Account Deletion UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Onboarding

#### G0091 — First-Run Experience

```yaml
id: G0091
name: "First-Run Experience"
type: ux
category: onboarding
description: "A UX guideline covering first-run experience; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "First-Run Experience makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without First-Run Experience, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0092 — Guided Onboarding

```yaml
id: G0092
name: "Guided Onboarding"
type: ux
category: onboarding
description: "A UX guideline covering guided onboarding; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Guided Onboarding makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Guided Onboarding, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0093 — Contextual Onboarding

```yaml
id: G0093
name: "Contextual Onboarding"
type: ux
category: onboarding
description: "A UX guideline covering contextual onboarding; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Contextual Onboarding makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Contextual Onboarding, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0094 — Onboarding Checklist

```yaml
id: G0094
name: "Onboarding Checklist"
type: ux
category: onboarding
description: "A UX guideline covering onboarding checklist; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Onboarding Checklist makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Onboarding Checklist, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0095 — Sample Data

```yaml
id: G0095
name: "Sample Data"
type: ux
category: onboarding
description: "A UX guideline covering sample data; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Sample Data makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Sample Data, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0096 — Product Tour

```yaml
id: G0096
name: "Product Tour"
type: ux
category: onboarding
description: "A UX guideline covering product tour; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Product Tour makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Product Tour, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0097 — Activation UX

```yaml
id: G0097
name: "Activation UX"
type: ux
category: onboarding
description: "A UX guideline covering activation ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Activation UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Activation UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0098 — Permission Priming

```yaml
id: G0098
name: "Permission Priming"
type: ux
category: onboarding
description: "A UX guideline covering permission priming; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Permission Priming makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Permission Priming, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0099 — Progressive Onboarding

```yaml
id: G0099
name: "Progressive Onboarding"
type: ux
category: onboarding
description: "A UX guideline covering progressive onboarding; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Progressive Onboarding makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Progressive Onboarding, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0100 — Skip Onboarding

```yaml
id: G0100
name: "Skip Onboarding"
type: ux
category: onboarding
description: "A UX guideline covering skip onboarding; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to help new users reach first value without overwhelming them."
benefit: "Skip Onboarding makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Skip Onboarding, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Search

#### G0101 — Site Search

```yaml
id: G0101
name: "Site Search"
type: ux
category: search
description: "A UX guideline covering site search; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Site Search makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Site Search, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0102 — Search Suggestions

```yaml
id: G0102
name: "Search Suggestions"
type: ux
category: search
description: "A UX guideline covering search suggestions; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Search Suggestions makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Search Suggestions, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0103 — Typo Tolerance

```yaml
id: G0103
name: "Typo Tolerance"
type: ux
category: search
description: "A UX guideline covering typo tolerance; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Typo Tolerance makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Typo Tolerance, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0104 — Fuzzy Search

```yaml
id: G0104
name: "Fuzzy Search"
type: ux
category: search
description: "A UX guideline covering fuzzy search; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Fuzzy Search makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Fuzzy Search, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0105 — Semantic Search

```yaml
id: G0105
name: "Semantic Search"
type: ux
category: search
description: "A UX guideline covering semantic search; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Semantic Search makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Semantic Search, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0106 — Filters

```yaml
id: G0106
name: "Filters"
type: ux
category: search
description: "A UX guideline covering filters; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Filters makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Filters, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0107 — Faceted Search

```yaml
id: G0107
name: "Faceted Search"
type: ux
category: search
description: "A UX guideline covering faceted search; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Faceted Search makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Faceted Search, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0108 — Sorting

```yaml
id: G0108
name: "Sorting"
type: ux
category: search
description: "A UX guideline covering sorting; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Sorting makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Sorting, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0109 — Recent Searches

```yaml
id: G0109
name: "Recent Searches"
type: ux
category: search
description: "A UX guideline covering recent searches; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Recent Searches makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Recent Searches, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0110 — Zero-Result Recovery

```yaml
id: G0110
name: "Zero-Result Recovery"
type: ux
category: search
description: "A UX guideline covering zero-result recovery; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when content volume exceeds what navigation alone can expose."
benefit: "Zero-Result Recovery makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Zero-Result Recovery, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Content

#### G0111 — UX Writing

```yaml
id: G0111
name: "UX Writing"
type: ux
category: content
description: "A UX guideline covering ux writing; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "UX Writing makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without UX Writing, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0112 — Microcopy

```yaml
id: G0112
name: "Microcopy"
type: ux
category: content
description: "A UX guideline covering microcopy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Microcopy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Microcopy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0113 — Clear CTA Copy

```yaml
id: G0113
name: "Clear CTA Copy"
type: ux
category: content
description: "A UX guideline covering clear cta copy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Clear CTA Copy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Clear CTA Copy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0114 — Plain Language

```yaml
id: G0114
name: "Plain Language"
type: ux
category: content
description: "A UX guideline covering plain language; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Plain Language makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Plain Language, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0115 — Scannable Content

```yaml
id: G0115
name: "Scannable Content"
type: ux
category: content
description: "A UX guideline covering scannable content; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Scannable Content makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Scannable Content, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0116 — Meaningful Headings

```yaml
id: G0116
name: "Meaningful Headings"
type: ux
category: content
description: "A UX guideline covering meaningful headings; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Meaningful Headings makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Meaningful Headings, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0117 — Content Prioritization

```yaml
id: G0117
name: "Content Prioritization"
type: ux
category: content
description: "A UX guideline covering content prioritization; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Content Prioritization makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Content Prioritization, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0118 — Consistent Terminology

```yaml
id: G0118
name: "Consistent Terminology"
type: ux
category: content
description: "A UX guideline covering consistent terminology; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Consistent Terminology makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Consistent Terminology, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0119 — Helpful Error Copy

```yaml
id: G0119
name: "Helpful Error Copy"
type: ux
category: content
description: "A UX guideline covering helpful error copy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Helpful Error Copy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Helpful Error Copy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0120 — Empty-State Copy

```yaml
id: G0120
name: "Empty-State Copy"
type: ux
category: content
description: "A UX guideline covering empty-state copy; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever wording, hierarchy, labels, and information density affect comprehension."
benefit: "Empty-State Copy makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Empty-State Copy, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Accessibility

#### G0121 — Keyboard Navigation

```yaml
id: G0121
name: "Keyboard Navigation"
type: ux
category: accessibility
description: "A UX guideline covering keyboard navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Keyboard Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Keyboard Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0122 — Screen Reader Support

```yaml
id: G0122
name: "Screen Reader Support"
type: ux
category: accessibility
description: "A UX guideline covering screen reader support; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Screen Reader Support makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Screen Reader Support, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0123 — Visible Focus

```yaml
id: G0123
name: "Visible Focus"
type: ux
category: accessibility
description: "A UX guideline covering visible focus; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Visible Focus makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Visible Focus, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0124 — Color Contrast

```yaml
id: G0124
name: "Color Contrast"
type: ux
category: accessibility
description: "A UX guideline covering color contrast; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Color Contrast makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Color Contrast, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0125 — Non-Color Indicators

```yaml
id: G0125
name: "Non-Color Indicators"
type: ux
category: accessibility
description: "A UX guideline covering non-color indicators; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Non-Color Indicators makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Non-Color Indicators, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0126 — Alternative Text

```yaml
id: G0126
name: "Alternative Text"
type: ux
category: accessibility
description: "A UX guideline covering alternative text; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Alternative Text makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Alternative Text, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0127 — Semantic HTML

```yaml
id: G0127
name: "Semantic HTML"
type: ux
category: accessibility
description: "A UX guideline covering semantic html; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Semantic HTML makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Semantic HTML, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0128 — Touch Target Sizing

```yaml
id: G0128
name: "Touch Target Sizing"
type: ux
category: accessibility
description: "A UX guideline covering touch target sizing; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Touch Target Sizing makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Touch Target Sizing, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0129 — Reduced Motion

```yaml
id: G0129
name: "Reduced Motion"
type: ux
category: accessibility
description: "A UX guideline covering reduced motion; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Reduced Motion makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Reduced Motion, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0130 — Accessible Errors

```yaml
id: G0130
name: "Accessible Errors"
type: ux
category: accessibility
description: "A UX guideline covering accessible errors; use it to reduce friction and make the user's path more understandable."
useWhen: "Treat as baseline product quality, not an optional enhancement."
benefit: "Accessible Errors makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Accessible Errors, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Responsive

#### G0131 — Responsive Layout

```yaml
id: G0131
name: "Responsive Layout"
type: ux
category: responsive
description: "A UX guideline covering responsive layout; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Responsive Layout makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Responsive Layout, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0132 — Adaptive Navigation

```yaml
id: G0132
name: "Adaptive Navigation"
type: ux
category: responsive
description: "A UX guideline covering adaptive navigation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Adaptive Navigation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Adaptive Navigation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0133 — Thumb-Zone Design

```yaml
id: G0133
name: "Thumb-Zone Design"
type: ux
category: responsive
description: "A UX guideline covering thumb-zone design; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Thumb-Zone Design makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Thumb-Zone Design, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0134 — Mobile-First Design

```yaml
id: G0134
name: "Mobile-First Design"
type: ux
category: responsive
description: "A UX guideline covering mobile-first design; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Mobile-First Design makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Mobile-First Design, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0135 — Responsive Typography

```yaml
id: G0135
name: "Responsive Typography"
type: ux
category: responsive
description: "A UX guideline covering responsive typography; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Responsive Typography makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Responsive Typography, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0136 — Responsive Images

```yaml
id: G0136
name: "Responsive Images"
type: ux
category: responsive
description: "A UX guideline covering responsive images; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Responsive Images makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Responsive Images, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0137 — Safe Area Handling

```yaml
id: G0137
name: "Safe Area Handling"
type: ux
category: responsive
description: "A UX guideline covering safe area handling; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Safe Area Handling makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Safe Area Handling, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0138 — Keyboard Handling

```yaml
id: G0138
name: "Keyboard Handling"
type: ux
category: responsive
description: "A UX guideline covering keyboard handling; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Keyboard Handling makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Keyboard Handling, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0139 — Orientation Adaptation

```yaml
id: G0139
name: "Orientation Adaptation"
type: ux
category: responsive
description: "A UX guideline covering orientation adaptation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Orientation Adaptation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Orientation Adaptation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0140 — Gesture Compatibility

```yaml
id: G0140
name: "Gesture Compatibility"
type: ux
category: responsive
description: "A UX guideline covering gesture compatibility; use it to reduce friction and make the user's path more understandable."
useWhen: "Use across viewport sizes, input modes, and device capabilities."
benefit: "Gesture Compatibility makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Gesture Compatibility, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Reliability

#### G0141 — Fast Initial Load

```yaml
id: G0141
name: "Fast Initial Load"
type: ux
category: reliability
description: "A UX guideline covering fast initial load; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Fast Initial Load makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Fast Initial Load, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0142 — Fast Interaction Response

```yaml
id: G0142
name: "Fast Interaction Response"
type: ux
category: reliability
description: "A UX guideline covering fast interaction response; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Fast Interaction Response makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Fast Interaction Response, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0143 — Offline Support

```yaml
id: G0143
name: "Offline Support"
type: ux
category: reliability
description: "A UX guideline covering offline support; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Offline Support makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Offline Support, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0144 — Connection Status

```yaml
id: G0144
name: "Connection Status"
type: ux
category: reliability
description: "A UX guideline covering connection status; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Connection Status makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Connection Status, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0145 — Automatic Retry

```yaml
id: G0145
name: "Automatic Retry"
type: ux
category: reliability
description: "A UX guideline covering automatic retry; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Automatic Retry makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Automatic Retry, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0146 — State Persistence

```yaml
id: G0146
name: "State Persistence"
type: ux
category: reliability
description: "A UX guideline covering state persistence; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "State Persistence makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without State Persistence, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0147 — Autosave

```yaml
id: G0147
name: "Autosave"
type: ux
category: reliability
description: "A UX guideline covering autosave; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Autosave makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Autosave, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0148 — Draft Recovery

```yaml
id: G0148
name: "Draft Recovery"
type: ux
category: reliability
description: "A UX guideline covering draft recovery; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Draft Recovery makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Draft Recovery, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0149 — Graceful Degradation

```yaml
id: G0149
name: "Graceful Degradation"
type: ux
category: reliability
description: "A UX guideline covering graceful degradation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Graceful Degradation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Graceful Degradation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0150 — Resilient UX

```yaml
id: G0150
name: "Resilient UX"
type: ux
category: reliability
description: "A UX guideline covering resilient ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use wherever failure, latency, offline state, or data loss is possible."
benefit: "Resilient UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Resilient UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Trust Security

#### G0151 — Trust Signals

```yaml
id: G0151
name: "Trust Signals"
type: ux
category: trust-security
description: "A UX guideline covering trust signals; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Trust Signals makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Trust Signals, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0152 — Privacy Transparency

```yaml
id: G0152
name: "Privacy Transparency"
type: ux
category: trust-security
description: "A UX guideline covering privacy transparency; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Privacy Transparency makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Privacy Transparency, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0153 — Consent UX

```yaml
id: G0153
name: "Consent UX"
type: ux
category: trust-security
description: "A UX guideline covering consent ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Consent UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Consent UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0154 — Permission Control

```yaml
id: G0154
name: "Permission Control"
type: ux
category: trust-security
description: "A UX guideline covering permission control; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Permission Control makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Permission Control, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0155 — Data Export

```yaml
id: G0155
name: "Data Export"
type: ux
category: trust-security
description: "A UX guideline covering data export; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Data Export makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Data Export, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0156 — Data Deletion

```yaml
id: G0156
name: "Data Deletion"
type: ux
category: trust-security
description: "A UX guideline covering data deletion; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Data Deletion makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Data Deletion, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0157 — Destructive Confirmation

```yaml
id: G0157
name: "Destructive Confirmation"
type: ux
category: trust-security
description: "A UX guideline covering destructive confirmation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Destructive Confirmation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Destructive Confirmation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0158 — Undo

```yaml
id: G0158
name: "Undo"
type: ux
category: trust-security
description: "A UX guideline covering undo; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Undo makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Undo, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0159 — Security Notification

```yaml
id: G0159
name: "Security Notification"
type: ux
category: trust-security
description: "A UX guideline covering security notification; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Security Notification makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Security Notification, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0160 — Session Timeout UX

```yaml
id: G0160
name: "Session Timeout UX"
type: ux
category: trust-security
description: "A UX guideline covering session timeout ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use around privacy, permissions, destructive actions, security, and user control."
benefit: "Session Timeout UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Session Timeout UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Commerce

#### G0161 — Product Discovery

```yaml
id: G0161
name: "Product Discovery"
type: ux
category: commerce
description: "A UX guideline covering product discovery; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Product Discovery makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Product Discovery, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0162 — Product Comparison

```yaml
id: G0162
name: "Product Comparison"
type: ux
category: commerce
description: "A UX guideline covering product comparison; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Product Comparison makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Product Comparison, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0163 — Wishlist

```yaml
id: G0163
name: "Wishlist"
type: ux
category: commerce
description: "A UX guideline covering wishlist; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Wishlist makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Wishlist, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0164 — Persistent Cart

```yaml
id: G0164
name: "Persistent Cart"
type: ux
category: commerce
description: "A UX guideline covering persistent cart; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Persistent Cart makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Persistent Cart, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0165 — Guest Checkout

```yaml
id: G0165
name: "Guest Checkout"
type: ux
category: commerce
description: "A UX guideline covering guest checkout; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Guest Checkout makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Guest Checkout, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0166 — Checkout Progress

```yaml
id: G0166
name: "Checkout Progress"
type: ux
category: commerce
description: "A UX guideline covering checkout progress; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Checkout Progress makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Checkout Progress, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0167 — Transparent Pricing

```yaml
id: G0167
name: "Transparent Pricing"
type: ux
category: commerce
description: "A UX guideline covering transparent pricing; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Transparent Pricing makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Transparent Pricing, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0168 — Shipping Transparency

```yaml
id: G0168
name: "Shipping Transparency"
type: ux
category: commerce
description: "A UX guideline covering shipping transparency; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Shipping Transparency makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Shipping Transparency, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0169 — Payment Recovery

```yaml
id: G0169
name: "Payment Recovery"
type: ux
category: commerce
description: "A UX guideline covering payment recovery; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Payment Recovery makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Payment Recovery, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0170 — Order Confirmation

```yaml
id: G0170
name: "Order Confirmation"
type: ux
category: commerce
description: "A UX guideline covering order confirmation; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in discovery, evaluation, cart, checkout, payment, delivery, and post-purchase flows."
benefit: "Order Confirmation makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Order Confirmation, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Retention

#### G0171 — Personalization

```yaml
id: G0171
name: "Personalization"
type: ux
category: retention
description: "A UX guideline covering personalization; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Personalization makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Personalization, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0172 — Saved Preferences

```yaml
id: G0172
name: "Saved Preferences"
type: ux
category: retention
description: "A UX guideline covering saved preferences; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Saved Preferences makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Saved Preferences, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0173 — Favorites

```yaml
id: G0173
name: "Favorites"
type: ux
category: retention
description: "A UX guideline covering favorites; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Favorites makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Favorites, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0174 — History

```yaml
id: G0174
name: "History"
type: ux
category: retention
description: "A UX guideline covering history; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "History makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without History, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0175 — Notification Preferences

```yaml
id: G0175
name: "Notification Preferences"
type: ux
category: retention
description: "A UX guideline covering notification preferences; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Notification Preferences makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Notification Preferences, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0176 — Notification Batching

```yaml
id: G0176
name: "Notification Batching"
type: ux
category: retention
description: "A UX guideline covering notification batching; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Notification Batching makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Notification Batching, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0177 — Re-Engagement UX

```yaml
id: G0177
name: "Re-Engagement UX"
type: ux
category: retention
description: "A UX guideline covering re-engagement ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Re-Engagement UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Re-Engagement UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0178 — Progress Tracking

```yaml
id: G0178
name: "Progress Tracking"
type: ux
category: retention
description: "A UX guideline covering progress tracking; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Progress Tracking makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Progress Tracking, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0179 — Achievement Feedback

```yaml
id: G0179
name: "Achievement Feedback"
type: ux
category: retention
description: "A UX guideline covering achievement feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Achievement Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Achievement Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0180 — Habit-Friendly UX

```yaml
id: G0180
name: "Habit-Friendly UX"
type: ux
category: retention
description: "A UX guideline covering habit-friendly ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use to reduce repeated work and support meaningful return usage."
benefit: "Habit-Friendly UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Habit-Friendly UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Collaboration Data

#### G0181 — Presence Indicators

```yaml
id: G0181
name: "Presence Indicators"
type: ux
category: collaboration-data
description: "A UX guideline covering presence indicators; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Presence Indicators makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Presence Indicators, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0182 — Live Collaboration

```yaml
id: G0182
name: "Live Collaboration"
type: ux
category: collaboration-data
description: "A UX guideline covering live collaboration; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Live Collaboration makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Live Collaboration, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0183 — Version History

```yaml
id: G0183
name: "Version History"
type: ux
category: collaboration-data
description: "A UX guideline covering version history; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Version History makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Version History, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0184 — Comments UX

```yaml
id: G0184
name: "Comments UX"
type: ux
category: collaboration-data
description: "A UX guideline covering comments ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Comments UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Comments UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0185 — Mentions

```yaml
id: G0185
name: "Mentions"
type: ux
category: collaboration-data
description: "A UX guideline covering mentions; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Mentions makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Mentions, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0186 — Role-Based Access UX

```yaml
id: G0186
name: "Role-Based Access UX"
type: ux
category: collaboration-data
description: "A UX guideline covering role-based access ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Role-Based Access UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Role-Based Access UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0187 — Activity Log

```yaml
id: G0187
name: "Activity Log"
type: ux
category: collaboration-data
description: "A UX guideline covering activity log; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Activity Log makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Activity Log, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0188 — Data Table UX

```yaml
id: G0188
name: "Data Table UX"
type: ux
category: collaboration-data
description: "A UX guideline covering data table ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Data Table UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Data Table UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0189 — Data Visualization UX

```yaml
id: G0189
name: "Data Visualization UX"
type: ux
category: collaboration-data
description: "A UX guideline covering data visualization ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Data Visualization UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Data Visualization UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0190 — Drill-Down UX

```yaml
id: G0190
name: "Drill-Down UX"
type: ux
category: collaboration-data
description: "A UX guideline covering drill-down ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use in shared work, dense information, auditing, and analytical workflows."
benefit: "Drill-Down UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Drill-Down UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Ai Agent

#### G0191 — Conversational UX

```yaml
id: G0191
name: "Conversational UX"
type: ux
category: ai-agent
description: "A UX guideline covering conversational ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Conversational UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Conversational UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0192 — Prompt UX

```yaml
id: G0192
name: "Prompt UX"
type: ux
category: ai-agent
description: "A UX guideline covering prompt ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Prompt UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Prompt UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0193 — Suggested Prompts

```yaml
id: G0193
name: "Suggested Prompts"
type: ux
category: ai-agent
description: "A UX guideline covering suggested prompts; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Suggested Prompts makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Suggested Prompts, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0194 — Streaming Feedback

```yaml
id: G0194
name: "Streaming Feedback"
type: ux
category: ai-agent
description: "A UX guideline covering streaming feedback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Streaming Feedback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Streaming Feedback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0195 — AI Uncertainty UX

```yaml
id: G0195
name: "AI Uncertainty UX"
type: ux
category: ai-agent
description: "A UX guideline covering ai uncertainty ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "AI Uncertainty UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without AI Uncertainty UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0196 — Citation UX

```yaml
id: G0196
name: "Citation UX"
type: ux
category: ai-agent
description: "A UX guideline covering citation ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Citation UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Citation UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0197 — Human-in-the-Loop UX

```yaml
id: G0197
name: "Human-in-the-Loop UX"
type: ux
category: ai-agent
description: "A UX guideline covering human-in-the-loop ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Human-in-the-Loop UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Human-in-the-Loop UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0198 — Agent Progress UX

```yaml
id: G0198
name: "Agent Progress UX"
type: ux
category: ai-agent
description: "A UX guideline covering agent progress ux; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Agent Progress UX makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Agent Progress UX, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0199 — Agent Interruptibility

```yaml
id: G0199
name: "Agent Interruptibility"
type: ux
category: ai-agent
description: "A UX guideline covering agent interruptibility; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Agent Interruptibility makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Agent Interruptibility, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0200 — Agent Rollback

```yaml
id: G0200
name: "Agent Rollback"
type: ux
category: ai-agent
description: "A UX guideline covering agent rollback; use it to reduce friction and make the user's path more understandable."
useWhen: "Use when AI or automation can generate, decide, act, or use tools on a user's behalf."
benefit: "Agent Rollback makes the relevant workflow clearer, more efficient, or more predictable when applied to the right user problem."
missingImpact: "Without Agent Rollback, users may need extra interpretation, navigation, repetition, or recovery effort."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

## UI Components

### Buttons Selection

#### G0201 — Primary Button

```yaml
id: G0201
name: "Primary Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for primary button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Primary Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Primary Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0202 — Secondary Button

```yaml
id: G0202
name: "Secondary Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for secondary button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Secondary Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Secondary Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0203 — Tertiary Button

```yaml
id: G0203
name: "Tertiary Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for tertiary button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tertiary Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tertiary Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0204 — Icon Button

```yaml
id: G0204
name: "Icon Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for icon button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Icon Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Icon Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0205 — Split Button

```yaml
id: G0205
name: "Split Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for split button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Split Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Split Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0206 — Floating Action Button

```yaml
id: G0206
name: "Floating Action Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for floating action button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Floating Action Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Floating Action Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0207 — Toggle Button

```yaml
id: G0207
name: "Toggle Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for toggle button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Toggle Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Toggle Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0208 — Switch

```yaml
id: G0208
name: "Switch"
type: ui
category: buttons-selection
description: "A reusable UI primitive for switch behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Switch gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Switch, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0209 — Checkbox

```yaml
id: G0209
name: "Checkbox"
type: ui
category: buttons-selection
description: "A reusable UI primitive for checkbox behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Checkbox gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Checkbox, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0210 — Radio Button

```yaml
id: G0210
name: "Radio Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for radio button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Radio Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Radio Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0211 — Segmented Control

```yaml
id: G0211
name: "Segmented Control"
type: ui
category: buttons-selection
description: "A reusable UI primitive for segmented control behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Segmented Control gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Segmented Control, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0212 — Link

```yaml
id: G0212
name: "Link"
type: ui
category: buttons-selection
description: "A reusable UI primitive for link behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Link gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Link, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0213 — Button Group

```yaml
id: G0213
name: "Button Group"
type: ui
category: buttons-selection
description: "A reusable UI primitive for button group behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Button Group gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Button Group, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0214 — Toggle Group

```yaml
id: G0214
name: "Toggle Group"
type: ui
category: buttons-selection
description: "A reusable UI primitive for toggle group behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Toggle Group gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Toggle Group, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0215 — Choice Chip

```yaml
id: G0215
name: "Choice Chip"
type: ui
category: buttons-selection
description: "A reusable UI primitive for choice chip behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Choice Chip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Choice Chip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0216 — Filter Chip

```yaml
id: G0216
name: "Filter Chip"
type: ui
category: buttons-selection
description: "A reusable UI primitive for filter chip behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Filter Chip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Filter Chip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0217 — Action Chip

```yaml
id: G0217
name: "Action Chip"
type: ui
category: buttons-selection
description: "A reusable UI primitive for action chip behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Action Chip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Action Chip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0218 — Selection Card

```yaml
id: G0218
name: "Selection Card"
type: ui
category: buttons-selection
description: "A reusable UI primitive for selection card behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Selection Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Selection Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0219 — Favorite Button

```yaml
id: G0219
name: "Favorite Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for favorite button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Favorite Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Favorite Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0220 — Bookmark Button

```yaml
id: G0220
name: "Bookmark Button"
type: ui
category: buttons-selection
description: "A reusable UI primitive for bookmark button behavior, presentation, or interaction."
useWhen: "Use for direct actions and explicit selection. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Bookmark Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Bookmark Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Text Inputs

#### G0221 — Text Input

```yaml
id: G0221
name: "Text Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for text input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Text Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Text Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0222 — Textarea

```yaml
id: G0222
name: "Textarea"
type: ui
category: text-inputs
description: "A reusable UI primitive for textarea behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Textarea gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Textarea, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0223 — Search Field

```yaml
id: G0223
name: "Search Field"
type: ui
category: text-inputs
description: "A reusable UI primitive for search field behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Search Field gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Search Field, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0224 — Password Field

```yaml
id: G0224
name: "Password Field"
type: ui
category: text-inputs
description: "A reusable UI primitive for password field behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Password Field gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Password Field, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0225 — Email Field

```yaml
id: G0225
name: "Email Field"
type: ui
category: text-inputs
description: "A reusable UI primitive for email field behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Email Field gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Email Field, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0226 — Number Input

```yaml
id: G0226
name: "Number Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for number input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Number Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Number Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0227 — Telephone Input

```yaml
id: G0227
name: "Telephone Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for telephone input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Telephone Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Telephone Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0228 — URL Input

```yaml
id: G0228
name: "URL Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for url input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "URL Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without URL Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0229 — OTP Input

```yaml
id: G0229
name: "OTP Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for otp input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "OTP Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without OTP Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0230 — PIN Input

```yaml
id: G0230
name: "PIN Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for pin input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "PIN Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without PIN Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0231 — Tags Input

```yaml
id: G0231
name: "Tags Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for tags input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tags Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tags Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0232 — Mention Input

```yaml
id: G0232
name: "Mention Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for mention input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Mention Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Mention Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0233 — Rich Text Editor

```yaml
id: G0233
name: "Rich Text Editor"
type: ui
category: text-inputs
description: "A reusable UI primitive for rich text editor behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Rich Text Editor gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Rich Text Editor, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0234 — Markdown Editor

```yaml
id: G0234
name: "Markdown Editor"
type: ui
category: text-inputs
description: "A reusable UI primitive for markdown editor behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Markdown Editor gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Markdown Editor, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0235 — Code Editor

```yaml
id: G0235
name: "Code Editor"
type: ui
category: text-inputs
description: "A reusable UI primitive for code editor behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Code Editor gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Code Editor, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0236 — Command Input

```yaml
id: G0236
name: "Command Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for command input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Command Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Command Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0237 — Search-and-Replace Input

```yaml
id: G0237
name: "Search-and-Replace Input"
type: ui
category: text-inputs
description: "A reusable UI primitive for search-and-replace input behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Search-and-Replace Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Search-and-Replace Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0238 — Character Counter

```yaml
id: G0238
name: "Character Counter"
type: ui
category: text-inputs
description: "A reusable UI primitive for character counter behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Character Counter gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Character Counter, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0239 — Input Prefix

```yaml
id: G0239
name: "Input Prefix"
type: ui
category: text-inputs
description: "A reusable UI primitive for input prefix behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Input Prefix gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Input Prefix, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0240 — Input Suffix

```yaml
id: G0240
name: "Input Suffix"
type: ui
category: text-inputs
description: "A reusable UI primitive for input suffix behavior, presentation, or interaction."
useWhen: "Use for entering or editing text-like values. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Input Suffix gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Input Suffix, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Pickers Inputs

#### G0241 — Select

```yaml
id: G0241
name: "Select"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for select behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Select gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Select, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0242 — Combobox

```yaml
id: G0242
name: "Combobox"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for combobox behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Combobox gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Combobox, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0243 — Multi-Select Control

```yaml
id: G0243
name: "Multi-Select Control"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for multi-select control behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Multi-Select Control gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Multi-Select Control, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0244 — Autocomplete Control

```yaml
id: G0244
name: "Autocomplete Control"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for autocomplete control behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Autocomplete Control gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Autocomplete Control, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0245 — Date Picker

```yaml
id: G0245
name: "Date Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for date picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Date Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Date Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0246 — Time Picker

```yaml
id: G0246
name: "Time Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for time picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Time Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Time Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0247 — Date-Time Picker

```yaml
id: G0247
name: "Date-Time Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for date-time picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Date-Time Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Date-Time Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0248 — Date Range Picker

```yaml
id: G0248
name: "Date Range Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for date range picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Date Range Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Date Range Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0249 — Month Picker

```yaml
id: G0249
name: "Month Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for month picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Month Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Month Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0250 — Year Picker

```yaml
id: G0250
name: "Year Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for year picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Year Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Year Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0251 — Range Slider

```yaml
id: G0251
name: "Range Slider"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for range slider behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Range Slider gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Range Slider, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0252 — Slider

```yaml
id: G0252
name: "Slider"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for slider behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Slider gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Slider, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0253 — Stepper Input

```yaml
id: G0253
name: "Stepper Input"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for stepper input behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Stepper Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Stepper Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0254 — Quantity Selector

```yaml
id: G0254
name: "Quantity Selector"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for quantity selector behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Quantity Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Quantity Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0255 — Color Picker

```yaml
id: G0255
name: "Color Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for color picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Color Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Color Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0256 — Gradient Picker

```yaml
id: G0256
name: "Gradient Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for gradient picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Gradient Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Gradient Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0257 — Emoji Picker

```yaml
id: G0257
name: "Emoji Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for emoji picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Emoji Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Emoji Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0258 — Icon Picker

```yaml
id: G0258
name: "Icon Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for icon picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Icon Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Icon Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0259 — Rating Input

```yaml
id: G0259
name: "Rating Input"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for rating input behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Rating Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Rating Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0260 — File Picker

```yaml
id: G0260
name: "File Picker"
type: ui
category: pickers-inputs
description: "A reusable UI primitive for file picker behavior, presentation, or interaction."
useWhen: "Use when constrained values are easier to choose than type. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "File Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without File Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### File Media Inputs

#### G0261 — Upload Button

```yaml
id: G0261
name: "Upload Button"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for upload button behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Upload Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Upload Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0262 — Dropzone

```yaml
id: G0262
name: "Dropzone"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for dropzone behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Dropzone gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Dropzone, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0263 — Upload Queue

```yaml
id: G0263
name: "Upload Queue"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for upload queue behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Upload Queue gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Upload Queue, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0264 — Upload Progress

```yaml
id: G0264
name: "Upload Progress"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for upload progress behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Upload Progress gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Upload Progress, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0265 — Attachment Preview

```yaml
id: G0265
name: "Attachment Preview"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for attachment preview behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Attachment Preview gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Attachment Preview, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0266 — Image Cropper

```yaml
id: G0266
name: "Image Cropper"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for image cropper behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Image Cropper gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Image Cropper, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0267 — Image Editor

```yaml
id: G0267
name: "Image Editor"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for image editor behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Image Editor gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Image Editor, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0268 — Webcam Capture

```yaml
id: G0268
name: "Webcam Capture"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for webcam capture behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Webcam Capture gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Webcam Capture, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0269 — Microphone Recorder

```yaml
id: G0269
name: "Microphone Recorder"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for microphone recorder behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Microphone Recorder gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Microphone Recorder, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0270 — Screen Recorder

```yaml
id: G0270
name: "Screen Recorder"
type: ui
category: file-media-inputs
description: "A reusable UI primitive for screen recorder behavior, presentation, or interaction."
useWhen: "Use for upload, capture, preview, or media manipulation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Screen Recorder gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Screen Recorder, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Form Structure

#### G0271 — Form

```yaml
id: G0271
name: "Form"
type: ui
category: form-structure
description: "A reusable UI primitive for form behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Form gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Form, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0272 — Fieldset

```yaml
id: G0272
name: "Fieldset"
type: ui
category: form-structure
description: "A reusable UI primitive for fieldset behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Fieldset gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Fieldset, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0273 — Field Label

```yaml
id: G0273
name: "Field Label"
type: ui
category: form-structure
description: "A reusable UI primitive for field label behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Field Label gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Field Label, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0274 — Helper Text

```yaml
id: G0274
name: "Helper Text"
type: ui
category: form-structure
description: "A reusable UI primitive for helper text behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Helper Text gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Helper Text, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0275 — Error Message

```yaml
id: G0275
name: "Error Message"
type: ui
category: form-structure
description: "A reusable UI primitive for error message behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Error Message gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Error Message, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0276 — Success Message

```yaml
id: G0276
name: "Success Message"
type: ui
category: form-structure
description: "A reusable UI primitive for success message behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Success Message gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Success Message, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0277 — Required Indicator

```yaml
id: G0277
name: "Required Indicator"
type: ui
category: form-structure
description: "A reusable UI primitive for required indicator behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Required Indicator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Required Indicator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0278 — Optional Indicator

```yaml
id: G0278
name: "Optional Indicator"
type: ui
category: form-structure
description: "A reusable UI primitive for optional indicator behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Optional Indicator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Optional Indicator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0279 — Form Section

```yaml
id: G0279
name: "Form Section"
type: ui
category: form-structure
description: "A reusable UI primitive for form section behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Form Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Form Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0280 — Form Actions

```yaml
id: G0280
name: "Form Actions"
type: ui
category: form-structure
description: "A reusable UI primitive for form actions behavior, presentation, or interaction."
useWhen: "Use to group form inputs and communicate validation or completion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Form Actions gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Form Actions, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Navigation Components

#### G0281 — Navbar

```yaml
id: G0281
name: "Navbar"
type: ui
category: navigation-components
description: "A reusable UI primitive for navbar behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Navbar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Navbar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0282 — Top App Bar

```yaml
id: G0282
name: "Top App Bar"
type: ui
category: navigation-components
description: "A reusable UI primitive for top app bar behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Top App Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Top App Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0283 — Sidebar

```yaml
id: G0283
name: "Sidebar"
type: ui
category: navigation-components
description: "A reusable UI primitive for sidebar behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sidebar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sidebar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0284 — Navigation Rail

```yaml
id: G0284
name: "Navigation Rail"
type: ui
category: navigation-components
description: "A reusable UI primitive for navigation rail behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Navigation Rail gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Navigation Rail, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0285 — Bottom Navigation Bar

```yaml
id: G0285
name: "Bottom Navigation Bar"
type: ui
category: navigation-components
description: "A reusable UI primitive for bottom navigation bar behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Bottom Navigation Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Bottom Navigation Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0286 — Tab Bar

```yaml
id: G0286
name: "Tab Bar"
type: ui
category: navigation-components
description: "A reusable UI primitive for tab bar behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tab Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tab Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0287 — Breadcrumbs

```yaml
id: G0287
name: "Breadcrumbs"
type: ui
category: navigation-components
description: "A reusable UI primitive for breadcrumbs behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Breadcrumbs gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Breadcrumbs, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0288 — Pagination

```yaml
id: G0288
name: "Pagination"
type: ui
category: navigation-components
description: "A reusable UI primitive for pagination behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Pagination gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Pagination, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0289 — Stepper Navigation

```yaml
id: G0289
name: "Stepper Navigation"
type: ui
category: navigation-components
description: "A reusable UI primitive for stepper navigation behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Stepper Navigation gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Stepper Navigation, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0290 — Command Palette Component

```yaml
id: G0290
name: "Command Palette Component"
type: ui
category: navigation-components
description: "A reusable UI primitive for command palette component behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Command Palette Component gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Command Palette Component, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0291 — Menu

```yaml
id: G0291
name: "Menu"
type: ui
category: navigation-components
description: "A reusable UI primitive for menu behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Menu gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Menu, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0292 — Dropdown Menu

```yaml
id: G0292
name: "Dropdown Menu"
type: ui
category: navigation-components
description: "A reusable UI primitive for dropdown menu behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Dropdown Menu gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Dropdown Menu, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0293 — Context Menu Component

```yaml
id: G0293
name: "Context Menu Component"
type: ui
category: navigation-components
description: "A reusable UI primitive for context menu component behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Context Menu Component gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Context Menu Component, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0294 — Mega Menu Component

```yaml
id: G0294
name: "Mega Menu Component"
type: ui
category: navigation-components
description: "A reusable UI primitive for mega menu component behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Mega Menu Component gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Mega Menu Component, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0295 — Toolbar

```yaml
id: G0295
name: "Toolbar"
type: ui
category: navigation-components
description: "A reusable UI primitive for toolbar behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Toolbar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Toolbar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0296 — Dock

```yaml
id: G0296
name: "Dock"
type: ui
category: navigation-components
description: "A reusable UI primitive for dock behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Dock gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Dock, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0297 — Anchor Navigation Component

```yaml
id: G0297
name: "Anchor Navigation Component"
type: ui
category: navigation-components
description: "A reusable UI primitive for anchor navigation component behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Anchor Navigation Component gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Anchor Navigation Component, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0298 — Jump Links

```yaml
id: G0298
name: "Jump Links"
type: ui
category: navigation-components
description: "A reusable UI primitive for jump links behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Jump Links gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Jump Links, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0299 — Back Button

```yaml
id: G0299
name: "Back Button"
type: ui
category: navigation-components
description: "A reusable UI primitive for back button behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Back Button gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Back Button, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0300 — Home Control

```yaml
id: G0300
name: "Home Control"
type: ui
category: navigation-components
description: "A reusable UI primitive for home control behavior, presentation, or interaction."
useWhen: "Use as concrete navigation surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Home Control gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Home Control, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Containers Content

#### G0301 — Card

```yaml
id: G0301
name: "Card"
type: ui
category: containers-content
description: "A reusable UI primitive for card behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0302 — List

```yaml
id: G0302
name: "List"
type: ui
category: containers-content
description: "A reusable UI primitive for list behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "List gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without List, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0303 — List Item

```yaml
id: G0303
name: "List Item"
type: ui
category: containers-content
description: "A reusable UI primitive for list item behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "List Item gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without List Item, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0304 — Media Object

```yaml
id: G0304
name: "Media Object"
type: ui
category: containers-content
description: "A reusable UI primitive for media object behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Media Object gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Media Object, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0305 — Accordion

```yaml
id: G0305
name: "Accordion"
type: ui
category: containers-content
description: "A reusable UI primitive for accordion behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Accordion gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Accordion, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0306 — Disclosure

```yaml
id: G0306
name: "Disclosure"
type: ui
category: containers-content
description: "A reusable UI primitive for disclosure behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Disclosure gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Disclosure, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0307 — Collapsible Panel

```yaml
id: G0307
name: "Collapsible Panel"
type: ui
category: containers-content
description: "A reusable UI primitive for collapsible panel behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Collapsible Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Collapsible Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0308 — Tabs

```yaml
id: G0308
name: "Tabs"
type: ui
category: containers-content
description: "A reusable UI primitive for tabs behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tabs gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tabs, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0309 — Carousel

```yaml
id: G0309
name: "Carousel"
type: ui
category: containers-content
description: "A reusable UI primitive for carousel behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Carousel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Carousel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0310 — Gallery Slider

```yaml
id: G0310
name: "Gallery Slider"
type: ui
category: containers-content
description: "A reusable UI primitive for gallery slider behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Gallery Slider gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Gallery Slider, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0311 — Masonry Grid

```yaml
id: G0311
name: "Masonry Grid"
type: ui
category: containers-content
description: "A reusable UI primitive for masonry grid behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Masonry Grid gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Masonry Grid, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0312 — Bento Grid

```yaml
id: G0312
name: "Bento Grid"
type: ui
category: containers-content
description: "A reusable UI primitive for bento grid behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Bento Grid gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Bento Grid, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0313 — Split Pane

```yaml
id: G0313
name: "Split Pane"
type: ui
category: containers-content
description: "A reusable UI primitive for split pane behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Split Pane gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Split Pane, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0314 — Resizable Panel

```yaml
id: G0314
name: "Resizable Panel"
type: ui
category: containers-content
description: "A reusable UI primitive for resizable panel behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Resizable Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Resizable Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0315 — Drawer

```yaml
id: G0315
name: "Drawer"
type: ui
category: containers-content
description: "A reusable UI primitive for drawer behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Drawer gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Drawer, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0316 — Sheet

```yaml
id: G0316
name: "Sheet"
type: ui
category: containers-content
description: "A reusable UI primitive for sheet behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sheet gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sheet, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0317 — Modal

```yaml
id: G0317
name: "Modal"
type: ui
category: containers-content
description: "A reusable UI primitive for modal behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Modal gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Modal, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0318 — Dialog

```yaml
id: G0318
name: "Dialog"
type: ui
category: containers-content
description: "A reusable UI primitive for dialog behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Dialog gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Dialog, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0319 — Popover

```yaml
id: G0319
name: "Popover"
type: ui
category: containers-content
description: "A reusable UI primitive for popover behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Popover gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Popover, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0320 — Tooltip

```yaml
id: G0320
name: "Tooltip"
type: ui
category: containers-content
description: "A reusable UI primitive for tooltip behavior, presentation, or interaction."
useWhen: "Use to group, reveal, layer, or structure interface content. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tooltip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tooltip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Feedback Components

#### G0321 — Toast

```yaml
id: G0321
name: "Toast"
type: ui
category: feedback-components
description: "A reusable UI primitive for toast behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Toast gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Toast, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0322 — Snackbar

```yaml
id: G0322
name: "Snackbar"
type: ui
category: feedback-components
description: "A reusable UI primitive for snackbar behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Snackbar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Snackbar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0323 — Alert Banner

```yaml
id: G0323
name: "Alert Banner"
type: ui
category: feedback-components
description: "A reusable UI primitive for alert banner behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Alert Banner gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Alert Banner, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0324 — Notification Panel

```yaml
id: G0324
name: "Notification Panel"
type: ui
category: feedback-components
description: "A reusable UI primitive for notification panel behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Notification Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Notification Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0325 — Badge

```yaml
id: G0325
name: "Badge"
type: ui
category: feedback-components
description: "A reusable UI primitive for badge behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Badge gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Badge, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0326 — Chip

```yaml
id: G0326
name: "Chip"
type: ui
category: feedback-components
description: "A reusable UI primitive for chip behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Chip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Chip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0327 — Tag

```yaml
id: G0327
name: "Tag"
type: ui
category: feedback-components
description: "A reusable UI primitive for tag behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tag gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tag, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0328 — Status Dot

```yaml
id: G0328
name: "Status Dot"
type: ui
category: feedback-components
description: "A reusable UI primitive for status dot behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Status Dot gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Status Dot, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0329 — Progress Bar

```yaml
id: G0329
name: "Progress Bar"
type: ui
category: feedback-components
description: "A reusable UI primitive for progress bar behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Progress Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Progress Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0330 — Spinner

```yaml
id: G0330
name: "Spinner"
type: ui
category: feedback-components
description: "A reusable UI primitive for spinner behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Spinner gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Spinner, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0331 — Skeleton

```yaml
id: G0331
name: "Skeleton"
type: ui
category: feedback-components
description: "A reusable UI primitive for skeleton behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Skeleton gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Skeleton, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0332 — Empty State

```yaml
id: G0332
name: "Empty State"
type: ui
category: feedback-components
description: "A reusable UI primitive for empty state behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Empty State gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Empty State, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0333 — Error State

```yaml
id: G0333
name: "Error State"
type: ui
category: feedback-components
description: "A reusable UI primitive for error state behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Error State gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Error State, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0334 — Success State

```yaml
id: G0334
name: "Success State"
type: ui
category: feedback-components
description: "A reusable UI primitive for success state behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Success State gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Success State, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0335 — Loading Overlay

```yaml
id: G0335
name: "Loading Overlay"
type: ui
category: feedback-components
description: "A reusable UI primitive for loading overlay behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Loading Overlay gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Loading Overlay, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0336 — Inline Alert

```yaml
id: G0336
name: "Inline Alert"
type: ui
category: feedback-components
description: "A reusable UI primitive for inline alert behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Inline Alert gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Inline Alert, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0337 — Callout

```yaml
id: G0337
name: "Callout"
type: ui
category: feedback-components
description: "A reusable UI primitive for callout behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Callout gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Callout, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0338 — Progress Ring

```yaml
id: G0338
name: "Progress Ring"
type: ui
category: feedback-components
description: "A reusable UI primitive for progress ring behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Progress Ring gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Progress Ring, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0339 — Meter

```yaml
id: G0339
name: "Meter"
type: ui
category: feedback-components
description: "A reusable UI primitive for meter behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Meter gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Meter, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0340 — Timeline

```yaml
id: G0340
name: "Timeline"
type: ui
category: feedback-components
description: "A reusable UI primitive for timeline behavior, presentation, or interaction."
useWhen: "Use to communicate status, progress, errors, success, and alerts. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Timeline gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Timeline, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Identity Media

#### G0341 — Avatar

```yaml
id: G0341
name: "Avatar"
type: ui
category: identity-media
description: "A reusable UI primitive for avatar behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Avatar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Avatar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0342 — Avatar Group

```yaml
id: G0342
name: "Avatar Group"
type: ui
category: identity-media
description: "A reusable UI primitive for avatar group behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Avatar Group gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Avatar Group, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0343 — Profile Card

```yaml
id: G0343
name: "Profile Card"
type: ui
category: identity-media
description: "A reusable UI primitive for profile card behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Profile Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Profile Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0344 — User Menu

```yaml
id: G0344
name: "User Menu"
type: ui
category: identity-media
description: "A reusable UI primitive for user menu behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "User Menu gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without User Menu, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0345 — Icon

```yaml
id: G0345
name: "Icon"
type: ui
category: identity-media
description: "A reusable UI primitive for icon behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Icon gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Icon, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0346 — Logo

```yaml
id: G0346
name: "Logo"
type: ui
category: identity-media
description: "A reusable UI primitive for logo behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Logo gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Logo, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0347 — Thumbnail

```yaml
id: G0347
name: "Thumbnail"
type: ui
category: identity-media
description: "A reusable UI primitive for thumbnail behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Thumbnail gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Thumbnail, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0348 — Image

```yaml
id: G0348
name: "Image"
type: ui
category: identity-media
description: "A reusable UI primitive for image behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Image gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Image, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0349 — Hero Image

```yaml
id: G0349
name: "Hero Image"
type: ui
category: identity-media
description: "A reusable UI primitive for hero image behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Hero Image gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Hero Image, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0350 — Video Player

```yaml
id: G0350
name: "Video Player"
type: ui
category: identity-media
description: "A reusable UI primitive for video player behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Video Player gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Video Player, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0351 — Audio Player

```yaml
id: G0351
name: "Audio Player"
type: ui
category: identity-media
description: "A reusable UI primitive for audio player behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Audio Player gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Audio Player, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0352 — Lightbox

```yaml
id: G0352
name: "Lightbox"
type: ui
category: identity-media
description: "A reusable UI primitive for lightbox behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Lightbox gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Lightbox, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0353 — Image Gallery

```yaml
id: G0353
name: "Image Gallery"
type: ui
category: identity-media
description: "A reusable UI primitive for image gallery behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Image Gallery gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Image Gallery, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0354 — Illustration

```yaml
id: G0354
name: "Illustration"
type: ui
category: identity-media
description: "A reusable UI primitive for illustration behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Illustration gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Illustration, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0355 — Background Media

```yaml
id: G0355
name: "Background Media"
type: ui
category: identity-media
description: "A reusable UI primitive for background media behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Background Media gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Background Media, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0356 — Map

```yaml
id: G0356
name: "Map"
type: ui
category: identity-media
description: "A reusable UI primitive for map behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Map gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Map, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0357 — Map Marker

```yaml
id: G0357
name: "Map Marker"
type: ui
category: identity-media
description: "A reusable UI primitive for map marker behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Map Marker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Map Marker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0358 — Chart

```yaml
id: G0358
name: "Chart"
type: ui
category: identity-media
description: "A reusable UI primitive for chart behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Chart gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Chart, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0359 — Sparkline

```yaml
id: G0359
name: "Sparkline"
type: ui
category: identity-media
description: "A reusable UI primitive for sparkline behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sparkline gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sparkline, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0360 — Diagram

```yaml
id: G0360
name: "Diagram"
type: ui
category: identity-media
description: "A reusable UI primitive for diagram behavior, presentation, or interaction."
useWhen: "Use for people, branding, imagery, media, and visual explanation. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Diagram gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Diagram, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Data Display

#### G0361 — Table

```yaml
id: G0361
name: "Table"
type: ui
category: data-display
description: "A reusable UI primitive for table behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Table gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Table, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0362 — Data Grid

```yaml
id: G0362
name: "Data Grid"
type: ui
category: data-display
description: "A reusable UI primitive for data grid behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Data Grid gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Data Grid, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0363 — Sortable Header

```yaml
id: G0363
name: "Sortable Header"
type: ui
category: data-display
description: "A reusable UI primitive for sortable header behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sortable Header gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sortable Header, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0364 — Filter Bar

```yaml
id: G0364
name: "Filter Bar"
type: ui
category: data-display
description: "A reusable UI primitive for filter bar behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Filter Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Filter Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0365 — Column Picker

```yaml
id: G0365
name: "Column Picker"
type: ui
category: data-display
description: "A reusable UI primitive for column picker behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Column Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Column Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0366 — Row Actions

```yaml
id: G0366
name: "Row Actions"
type: ui
category: data-display
description: "A reusable UI primitive for row actions behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Row Actions gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Row Actions, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0367 — Expandable Row

```yaml
id: G0367
name: "Expandable Row"
type: ui
category: data-display
description: "A reusable UI primitive for expandable row behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Expandable Row gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Expandable Row, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0368 — Sticky Header

```yaml
id: G0368
name: "Sticky Header"
type: ui
category: data-display
description: "A reusable UI primitive for sticky header behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sticky Header gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sticky Header, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0369 — Frozen Column

```yaml
id: G0369
name: "Frozen Column"
type: ui
category: data-display
description: "A reusable UI primitive for frozen column behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Frozen Column gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Frozen Column, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0370 — Tree Table

```yaml
id: G0370
name: "Tree Table"
type: ui
category: data-display
description: "A reusable UI primitive for tree table behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tree Table gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tree Table, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0371 — Tree View

```yaml
id: G0371
name: "Tree View"
type: ui
category: data-display
description: "A reusable UI primitive for tree view behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Tree View gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Tree View, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0372 — Kanban Board

```yaml
id: G0372
name: "Kanban Board"
type: ui
category: data-display
description: "A reusable UI primitive for kanban board behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Kanban Board gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Kanban Board, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0373 — Calendar

```yaml
id: G0373
name: "Calendar"
type: ui
category: data-display
description: "A reusable UI primitive for calendar behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Calendar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Calendar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0374 — Scheduler

```yaml
id: G0374
name: "Scheduler"
type: ui
category: data-display
description: "A reusable UI primitive for scheduler behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Scheduler gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Scheduler, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0375 — Gantt Chart

```yaml
id: G0375
name: "Gantt Chart"
type: ui
category: data-display
description: "A reusable UI primitive for gantt chart behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Gantt Chart gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Gantt Chart, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0376 — Stats Card

```yaml
id: G0376
name: "Stats Card"
type: ui
category: data-display
description: "A reusable UI primitive for stats card behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Stats Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Stats Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0377 — KPI Block

```yaml
id: G0377
name: "KPI Block"
type: ui
category: data-display
description: "A reusable UI primitive for kpi block behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "KPI Block gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without KPI Block, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0378 — Summary Panel

```yaml
id: G0378
name: "Summary Panel"
type: ui
category: data-display
description: "A reusable UI primitive for summary panel behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Summary Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Summary Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0379 — Comparison Table

```yaml
id: G0379
name: "Comparison Table"
type: ui
category: data-display
description: "A reusable UI primitive for comparison table behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Comparison Table gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Comparison Table, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0380 — Heatmap

```yaml
id: G0380
name: "Heatmap"
type: ui
category: data-display
description: "A reusable UI primitive for heatmap behavior, presentation, or interaction."
useWhen: "Use for dense, structured, comparative, temporal, or analytical data. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Heatmap gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Heatmap, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Typography Layout

#### G0381 — Heading

```yaml
id: G0381
name: "Heading"
type: ui
category: typography-layout
description: "A reusable UI primitive for heading behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Heading gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Heading, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0382 — Paragraph

```yaml
id: G0382
name: "Paragraph"
type: ui
category: typography-layout
description: "A reusable UI primitive for paragraph behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Paragraph gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Paragraph, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0383 — Label

```yaml
id: G0383
name: "Label"
type: ui
category: typography-layout
description: "A reusable UI primitive for label behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Label gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Label, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0384 — Caption

```yaml
id: G0384
name: "Caption"
type: ui
category: typography-layout
description: "A reusable UI primitive for caption behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Caption gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Caption, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0385 — Code Block

```yaml
id: G0385
name: "Code Block"
type: ui
category: typography-layout
description: "A reusable UI primitive for code block behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Code Block gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Code Block, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0386 — Blockquote

```yaml
id: G0386
name: "Blockquote"
type: ui
category: typography-layout
description: "A reusable UI primitive for blockquote behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Blockquote gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Blockquote, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0387 — Divider

```yaml
id: G0387
name: "Divider"
type: ui
category: typography-layout
description: "A reusable UI primitive for divider behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Divider gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Divider, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0388 — Spacer

```yaml
id: G0388
name: "Spacer"
type: ui
category: typography-layout
description: "A reusable UI primitive for spacer behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Spacer gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Spacer, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0389 — Container

```yaml
id: G0389
name: "Container"
type: ui
category: typography-layout
description: "A reusable UI primitive for container behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Container gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Container, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0390 — Section

```yaml
id: G0390
name: "Section"
type: ui
category: typography-layout
description: "A reusable UI primitive for section behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0391 — Stack

```yaml
id: G0391
name: "Stack"
type: ui
category: typography-layout
description: "A reusable UI primitive for stack behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Stack gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Stack, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0392 — Cluster

```yaml
id: G0392
name: "Cluster"
type: ui
category: typography-layout
description: "A reusable UI primitive for cluster behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Cluster gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Cluster, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0393 — Grid

```yaml
id: G0393
name: "Grid"
type: ui
category: typography-layout
description: "A reusable UI primitive for grid behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Grid gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Grid, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0394 — Flex Row

```yaml
id: G0394
name: "Flex Row"
type: ui
category: typography-layout
description: "A reusable UI primitive for flex row behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Flex Row gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Flex Row, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0395 — Aspect Ratio Box

```yaml
id: G0395
name: "Aspect Ratio Box"
type: ui
category: typography-layout
description: "A reusable UI primitive for aspect ratio box behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Aspect Ratio Box gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Aspect Ratio Box, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0396 — Scroll Area

```yaml
id: G0396
name: "Scroll Area"
type: ui
category: typography-layout
description: "A reusable UI primitive for scroll area behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Scroll Area gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Scroll Area, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0397 — Separator

```yaml
id: G0397
name: "Separator"
type: ui
category: typography-layout
description: "A reusable UI primitive for separator behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Separator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Separator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0398 — Sticky Region

```yaml
id: G0398
name: "Sticky Region"
type: ui
category: typography-layout
description: "A reusable UI primitive for sticky region behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sticky Region gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sticky Region, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0399 — Header

```yaml
id: G0399
name: "Header"
type: ui
category: typography-layout
description: "A reusable UI primitive for header behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Header gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Header, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0400 — Footer

```yaml
id: G0400
name: "Footer"
type: ui
category: typography-layout
description: "A reusable UI primitive for footer behavior, presentation, or interaction."
useWhen: "Use as structural primitives for hierarchy, rhythm, readability, and responsive composition. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Footer gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Footer, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Marketing

#### G0401 — Hero Section

```yaml
id: G0401
name: "Hero Section"
type: ui
category: marketing
description: "A reusable UI primitive for hero section behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Hero Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Hero Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0402 — Feature Section

```yaml
id: G0402
name: "Feature Section"
type: ui
category: marketing
description: "A reusable UI primitive for feature section behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Feature Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Feature Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0403 — Testimonial Block

```yaml
id: G0403
name: "Testimonial Block"
type: ui
category: marketing
description: "A reusable UI primitive for testimonial block behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Testimonial Block gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Testimonial Block, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0404 — Pricing Table

```yaml
id: G0404
name: "Pricing Table"
type: ui
category: marketing
description: "A reusable UI primitive for pricing table behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Pricing Table gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Pricing Table, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0405 — FAQ Block

```yaml
id: G0405
name: "FAQ Block"
type: ui
category: marketing
description: "A reusable UI primitive for faq block behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "FAQ Block gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without FAQ Block, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0406 — CTA Section

```yaml
id: G0406
name: "CTA Section"
type: ui
category: marketing
description: "A reusable UI primitive for cta section behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "CTA Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without CTA Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0407 — Logo Cloud

```yaml
id: G0407
name: "Logo Cloud"
type: ui
category: marketing
description: "A reusable UI primitive for logo cloud behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Logo Cloud gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Logo Cloud, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0408 — Stats Section

```yaml
id: G0408
name: "Stats Section"
type: ui
category: marketing
description: "A reusable UI primitive for stats section behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Stats Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Stats Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0409 — Comparison Section

```yaml
id: G0409
name: "Comparison Section"
type: ui
category: marketing
description: "A reusable UI primitive for comparison section behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Comparison Section gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Comparison Section, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0410 — Newsletter Form

```yaml
id: G0410
name: "Newsletter Form"
type: ui
category: marketing
description: "A reusable UI primitive for newsletter form behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Newsletter Form gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Newsletter Form, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0411 — Announcement Bar

```yaml
id: G0411
name: "Announcement Bar"
type: ui
category: marketing
description: "A reusable UI primitive for announcement bar behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Announcement Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Announcement Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0412 — Promo Banner

```yaml
id: G0412
name: "Promo Banner"
type: ui
category: marketing
description: "A reusable UI primitive for promo banner behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Promo Banner gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Promo Banner, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0413 — Feature Card

```yaml
id: G0413
name: "Feature Card"
type: ui
category: marketing
description: "A reusable UI primitive for feature card behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Feature Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Feature Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0414 — Benefit Card

```yaml
id: G0414
name: "Benefit Card"
type: ui
category: marketing
description: "A reusable UI primitive for benefit card behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Benefit Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Benefit Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0415 — Case Study Card

```yaml
id: G0415
name: "Case Study Card"
type: ui
category: marketing
description: "A reusable UI primitive for case study card behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Case Study Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Case Study Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0416 — Social Proof Strip

```yaml
id: G0416
name: "Social Proof Strip"
type: ui
category: marketing
description: "A reusable UI primitive for social proof strip behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Social Proof Strip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Social Proof Strip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0417 — Partner Badge

```yaml
id: G0417
name: "Partner Badge"
type: ui
category: marketing
description: "A reusable UI primitive for partner badge behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Partner Badge gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Partner Badge, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0418 — Download CTA

```yaml
id: G0418
name: "Download CTA"
type: ui
category: marketing
description: "A reusable UI primitive for download cta behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Download CTA gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Download CTA, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0419 — App Store Badge

```yaml
id: G0419
name: "App Store Badge"
type: ui
category: marketing
description: "A reusable UI primitive for app store badge behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "App Store Badge gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without App Store Badge, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0420 — Demo CTA

```yaml
id: G0420
name: "Demo CTA"
type: ui
category: marketing
description: "A reusable UI primitive for demo cta behavior, presentation, or interaction."
useWhen: "Use on marketing surfaces only when it supports comprehension, trust, or conversion. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Demo CTA gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Demo CTA, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Search Interface

#### G0421 — Search Result Item

```yaml
id: G0421
name: "Search Result Item"
type: ui
category: search-interface
description: "A reusable UI primitive for search result item behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Search Result Item gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Search Result Item, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0422 — Search Result Group

```yaml
id: G0422
name: "Search Result Group"
type: ui
category: search-interface
description: "A reusable UI primitive for search result group behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Search Result Group gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Search Result Group, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0423 — Search Suggestion

```yaml
id: G0423
name: "Search Suggestion"
type: ui
category: search-interface
description: "A reusable UI primitive for search suggestion behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Search Suggestion gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Search Suggestion, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0424 — Recent Search Item

```yaml
id: G0424
name: "Recent Search Item"
type: ui
category: search-interface
description: "A reusable UI primitive for recent search item behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Recent Search Item gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Recent Search Item, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0425 — Trending Search

```yaml
id: G0425
name: "Trending Search"
type: ui
category: search-interface
description: "A reusable UI primitive for trending search behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Trending Search gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Trending Search, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0426 — Query Highlight

```yaml
id: G0426
name: "Query Highlight"
type: ui
category: search-interface
description: "A reusable UI primitive for query highlight behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Query Highlight gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Query Highlight, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0427 — Facet Panel

```yaml
id: G0427
name: "Facet Panel"
type: ui
category: search-interface
description: "A reusable UI primitive for facet panel behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Facet Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Facet Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0428 — Sort Control

```yaml
id: G0428
name: "Sort Control"
type: ui
category: search-interface
description: "A reusable UI primitive for sort control behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Sort Control gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Sort Control, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0429 — Active Filter Summary

```yaml
id: G0429
name: "Active Filter Summary"
type: ui
category: search-interface
description: "A reusable UI primitive for active filter summary behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Active Filter Summary gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Active Filter Summary, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0430 — No Results State

```yaml
id: G0430
name: "No Results State"
type: ui
category: search-interface
description: "A reusable UI primitive for no results state behavior, presentation, or interaction."
useWhen: "Use to make query formulation, filtering, sorting, and recovery visible. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "No Results State gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without No Results State, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Commerce Components

#### G0431 — Product Card

```yaml
id: G0431
name: "Product Card"
type: ui
category: commerce-components
description: "A reusable UI primitive for product card behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Product Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Product Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0432 — Product Gallery

```yaml
id: G0432
name: "Product Gallery"
type: ui
category: commerce-components
description: "A reusable UI primitive for product gallery behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Product Gallery gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Product Gallery, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0433 — Variant Selector

```yaml
id: G0433
name: "Variant Selector"
type: ui
category: commerce-components
description: "A reusable UI primitive for variant selector behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Variant Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Variant Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0434 — Size Selector

```yaml
id: G0434
name: "Size Selector"
type: ui
category: commerce-components
description: "A reusable UI primitive for size selector behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Size Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Size Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0435 — Price Display

```yaml
id: G0435
name: "Price Display"
type: ui
category: commerce-components
description: "A reusable UI primitive for price display behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Price Display gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Price Display, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0436 — Discount Badge

```yaml
id: G0436
name: "Discount Badge"
type: ui
category: commerce-components
description: "A reusable UI primitive for discount badge behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Discount Badge gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Discount Badge, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0437 — Stock Indicator

```yaml
id: G0437
name: "Stock Indicator"
type: ui
category: commerce-components
description: "A reusable UI primitive for stock indicator behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Stock Indicator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Stock Indicator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0438 — Shipping Estimator

```yaml
id: G0438
name: "Shipping Estimator"
type: ui
category: commerce-components
description: "A reusable UI primitive for shipping estimator behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Shipping Estimator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Shipping Estimator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0439 — Cart Item

```yaml
id: G0439
name: "Cart Item"
type: ui
category: commerce-components
description: "A reusable UI primitive for cart item behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Cart Item gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Cart Item, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0440 — Mini Cart

```yaml
id: G0440
name: "Mini Cart"
type: ui
category: commerce-components
description: "A reusable UI primitive for mini cart behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Mini Cart gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Mini Cart, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0441 — Cart Drawer

```yaml
id: G0441
name: "Cart Drawer"
type: ui
category: commerce-components
description: "A reusable UI primitive for cart drawer behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Cart Drawer gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Cart Drawer, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0442 — Checkout Summary

```yaml
id: G0442
name: "Checkout Summary"
type: ui
category: commerce-components
description: "A reusable UI primitive for checkout summary behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Checkout Summary gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Checkout Summary, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0443 — Payment Selector

```yaml
id: G0443
name: "Payment Selector"
type: ui
category: commerce-components
description: "A reusable UI primitive for payment selector behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Payment Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Payment Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0444 — Coupon Input

```yaml
id: G0444
name: "Coupon Input"
type: ui
category: commerce-components
description: "A reusable UI primitive for coupon input behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Coupon Input gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Coupon Input, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0445 — Order Status

```yaml
id: G0445
name: "Order Status"
type: ui
category: commerce-components
description: "A reusable UI primitive for order status behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Order Status gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Order Status, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0446 — Review Card

```yaml
id: G0446
name: "Review Card"
type: ui
category: commerce-components
description: "A reusable UI primitive for review card behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Review Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Review Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0447 — Rating Summary

```yaml
id: G0447
name: "Rating Summary"
type: ui
category: commerce-components
description: "A reusable UI primitive for rating summary behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Rating Summary gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Rating Summary, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0448 — Address Card

```yaml
id: G0448
name: "Address Card"
type: ui
category: commerce-components
description: "A reusable UI primitive for address card behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Address Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Address Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0449 — Order Timeline

```yaml
id: G0449
name: "Order Timeline"
type: ui
category: commerce-components
description: "A reusable UI primitive for order timeline behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Order Timeline gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Order Timeline, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0450 — Return Status

```yaml
id: G0450
name: "Return Status"
type: ui
category: commerce-components
description: "A reusable UI primitive for return status behavior, presentation, or interaction."
useWhen: "Use as concrete shopping and transaction primitives. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Return Status gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Return Status, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Collaboration Communication

#### G0451 — Chat Bubble

```yaml
id: G0451
name: "Chat Bubble"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for chat bubble behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Chat Bubble gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Chat Bubble, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0452 — Message Composer

```yaml
id: G0452
name: "Message Composer"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for message composer behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Message Composer gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Message Composer, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0453 — Typing Indicator

```yaml
id: G0453
name: "Typing Indicator"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for typing indicator behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Typing Indicator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Typing Indicator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0454 — Presence Indicator

```yaml
id: G0454
name: "Presence Indicator"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for presence indicator behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Presence Indicator gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Presence Indicator, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0455 — Mention Picker

```yaml
id: G0455
name: "Mention Picker"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for mention picker behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Mention Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Mention Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0456 — Reaction Bar

```yaml
id: G0456
name: "Reaction Bar"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for reaction bar behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Reaction Bar gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Reaction Bar, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0457 — Thread Panel

```yaml
id: G0457
name: "Thread Panel"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for thread panel behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Thread Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Thread Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0458 — Attachment Preview in Chat

```yaml
id: G0458
name: "Attachment Preview in Chat"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for attachment preview in chat behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Attachment Preview in Chat gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Attachment Preview in Chat, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0459 — Voice Message

```yaml
id: G0459
name: "Voice Message"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for voice message behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Voice Message gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Voice Message, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0460 — Read Receipt

```yaml
id: G0460
name: "Read Receipt"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for read receipt behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Read Receipt gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Read Receipt, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0461 — Comment Box

```yaml
id: G0461
name: "Comment Box"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for comment box behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Comment Box gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Comment Box, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0462 — Comment Thread

```yaml
id: G0462
name: "Comment Thread"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for comment thread behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Comment Thread gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Comment Thread, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0463 — Collaborator Cursor

```yaml
id: G0463
name: "Collaborator Cursor"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for collaborator cursor behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Collaborator Cursor gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Collaborator Cursor, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0464 — Activity Feed

```yaml
id: G0464
name: "Activity Feed"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for activity feed behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Activity Feed gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Activity Feed, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0465 — Notification Item

```yaml
id: G0465
name: "Notification Item"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for notification item behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Notification Item gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Notification Item, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0466 — Inbox Item

```yaml
id: G0466
name: "Inbox Item"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for inbox item behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Inbox Item gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Inbox Item, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0467 — Contact Chip

```yaml
id: G0467
name: "Contact Chip"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for contact chip behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Contact Chip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Contact Chip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0468 — Member Picker

```yaml
id: G0468
name: "Member Picker"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for member picker behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Member Picker gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Member Picker, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0469 — Share Dialog

```yaml
id: G0469
name: "Share Dialog"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for share dialog behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Share Dialog gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Share Dialog, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0470 — Permission Selector

```yaml
id: G0470
name: "Permission Selector"
type: ui
category: collaboration-communication
description: "A reusable UI primitive for permission selector behavior, presentation, or interaction."
useWhen: "Use for messaging, presence, sharing, comments, and team workflows. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Permission Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Permission Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Onboarding Settings

#### G0471 — Onboarding Tour

```yaml
id: G0471
name: "Onboarding Tour"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for onboarding tour behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Onboarding Tour gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Onboarding Tour, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0472 — Coach Mark

```yaml
id: G0472
name: "Coach Mark"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for coach mark behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Coach Mark gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Coach Mark, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0473 — Spotlight

```yaml
id: G0473
name: "Spotlight"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for spotlight behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Spotlight gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Spotlight, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0474 — Setup Checklist

```yaml
id: G0474
name: "Setup Checklist"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for setup checklist behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Setup Checklist gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Setup Checklist, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0475 — Walkthrough

```yaml
id: G0475
name: "Walkthrough"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for walkthrough behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Walkthrough gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Walkthrough, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0476 — Welcome Screen

```yaml
id: G0476
name: "Welcome Screen"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for welcome screen behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Welcome Screen gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Welcome Screen, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0477 — Setup Wizard

```yaml
id: G0477
name: "Setup Wizard"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for setup wizard behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Setup Wizard gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Setup Wizard, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0478 — Confirmation Screen

```yaml
id: G0478
name: "Confirmation Screen"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for confirmation screen behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Confirmation Screen gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Confirmation Screen, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0479 — Celebration State

```yaml
id: G0479
name: "Celebration State"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for celebration state behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Celebration State gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Celebration State, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0480 — Settings Row

```yaml
id: G0480
name: "Settings Row"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for settings row behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Settings Row gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Settings Row, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0481 — Settings Group

```yaml
id: G0481
name: "Settings Group"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for settings group behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Settings Group gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Settings Group, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0482 — Preference Toggle

```yaml
id: G0482
name: "Preference Toggle"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for preference toggle behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Preference Toggle gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Preference Toggle, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0483 — Account Panel

```yaml
id: G0483
name: "Account Panel"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for account panel behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Account Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Account Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0484 — Security Panel

```yaml
id: G0484
name: "Security Panel"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for security panel behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Security Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Security Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0485 — Session List

```yaml
id: G0485
name: "Session List"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for session list behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Session List gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Session List, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0486 — API Key Row

```yaml
id: G0486
name: "API Key Row"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for api key row behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "API Key Row gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without API Key Row, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0487 — Integration Card

```yaml
id: G0487
name: "Integration Card"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for integration card behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Integration Card gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Integration Card, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0488 — Connected App Row

```yaml
id: G0488
name: "Connected App Row"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for connected app row behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Connected App Row gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Connected App Row, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0489 — Theme Switcher

```yaml
id: G0489
name: "Theme Switcher"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for theme switcher behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Theme Switcher gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Theme Switcher, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0490 — Language Selector

```yaml
id: G0490
name: "Language Selector"
type: ui
category: onboarding-settings
description: "A reusable UI primitive for language selector behavior, presentation, or interaction."
useWhen: "Use for first-run guidance, configuration, preferences, account, and security surfaces. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Language Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Language Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

### Advanced Accessibility Ai

#### G0491 — Focus Ring

```yaml
id: G0491
name: "Focus Ring"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for focus ring behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Focus Ring gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Focus Ring, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0492 — Skip Link

```yaml
id: G0492
name: "Skip Link"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for skip link behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Skip Link gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Skip Link, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0493 — Screen-Reader Text

```yaml
id: G0493
name: "Screen-Reader Text"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for screen-reader text behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Screen-Reader Text gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Screen-Reader Text, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0494 — Accessibility Menu

```yaml
id: G0494
name: "Accessibility Menu"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for accessibility menu behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Accessibility Menu gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Accessibility Menu, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0495 — AI Prompt Box

```yaml
id: G0495
name: "AI Prompt Box"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for ai prompt box behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "AI Prompt Box gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without AI Prompt Box, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0496 — AI Suggestion Chip

```yaml
id: G0496
name: "AI Suggestion Chip"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for ai suggestion chip behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "AI Suggestion Chip gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without AI Suggestion Chip, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0497 — Model Selector

```yaml
id: G0497
name: "Model Selector"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for model selector behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Model Selector gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Model Selector, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0498 — Agent Progress Panel

```yaml
id: G0498
name: "Agent Progress Panel"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for agent progress panel behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Agent Progress Panel gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Agent Progress Panel, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0499 — Agent Approval Dialog

```yaml
id: G0499
name: "Agent Approval Dialog"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for agent approval dialog behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Agent Approval Dialog gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Agent Approval Dialog, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

#### G0500 — Agent Activity Log

```yaml
id: G0500
name: "Agent Activity Log"
type: ui
category: advanced-accessibility-ai
description: "A reusable UI primitive for agent activity log behavior, presentation, or interaction."
useWhen: "Use for assistive access and AI-specific control/visibility. Define default, hover/focus, active, disabled, loading, error, empty, and responsive behavior when applicable."
benefit: "Agent Activity Log gives the interface a recognizable and reusable pattern, reducing custom behavior users must learn."
missingImpact: "Without Agent Activity Log, the task may need a less direct substitute or a custom pattern with weaker discoverability."
overuseRisk: "N/A. The main risk is applying the pattern where it does not solve a real user problem."
```

## Motion & Animation

### Motion Foundations

#### G0501 — State Transition

```yaml
id: G0501
name: "State Transition"
type: motion
category: motion-foundations
description: "A motion guideline for state transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "State Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without State Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0502 — Spatial Continuity

```yaml
id: G0502
name: "Spatial Continuity"
type: motion
category: motion-foundations
description: "A motion guideline for spatial continuity; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Spatial Continuity can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Spatial Continuity, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0503 — Motion Hierarchy

```yaml
id: G0503
name: "Motion Hierarchy"
type: motion
category: motion-foundations
description: "A motion guideline for motion hierarchy; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Motion Hierarchy can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Motion Hierarchy, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0504 — Enter Transition

```yaml
id: G0504
name: "Enter Transition"
type: motion
category: motion-foundations
description: "A motion guideline for enter transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Enter Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Enter Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0505 — Exit Transition

```yaml
id: G0505
name: "Exit Transition"
type: motion
category: motion-foundations
description: "A motion guideline for exit transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Exit Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Exit Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0506 — Crossfade

```yaml
id: G0506
name: "Crossfade"
type: motion
category: motion-foundations
description: "A motion guideline for crossfade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Crossfade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Crossfade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0507 — Fade In

```yaml
id: G0507
name: "Fade In"
type: motion
category: motion-foundations
description: "A motion guideline for fade in; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Fade In can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Fade In, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0508 — Fade Out

```yaml
id: G0508
name: "Fade Out"
type: motion
category: motion-foundations
description: "A motion guideline for fade out; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Fade Out can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Fade Out, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0509 — Scale In

```yaml
id: G0509
name: "Scale In"
type: motion
category: motion-foundations
description: "A motion guideline for scale in; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scale In can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scale In, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0510 — Scale Out

```yaml
id: G0510
name: "Scale Out"
type: motion
category: motion-foundations
description: "A motion guideline for scale out; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scale Out can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scale Out, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0511 — Slide In

```yaml
id: G0511
name: "Slide In"
type: motion
category: motion-foundations
description: "A motion guideline for slide in; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Slide In can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Slide In, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0512 — Slide Out

```yaml
id: G0512
name: "Slide Out"
type: motion
category: motion-foundations
description: "A motion guideline for slide out; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Slide Out can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Slide Out, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0513 — Expand Animation

```yaml
id: G0513
name: "Expand Animation"
type: motion
category: motion-foundations
description: "A motion guideline for expand animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Expand Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Expand Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0514 — Collapse Animation

```yaml
id: G0514
name: "Collapse Animation"
type: motion
category: motion-foundations
description: "A motion guideline for collapse animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Collapse Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Collapse Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0515 — Morph Transition

```yaml
id: G0515
name: "Morph Transition"
type: motion
category: motion-foundations
description: "A motion guideline for morph transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Morph Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Morph Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0516 — Shared Element Transition

```yaml
id: G0516
name: "Shared Element Transition"
type: motion
category: motion-foundations
description: "A motion guideline for shared element transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Shared Element Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Shared Element Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0517 — Object Permanence Motion

```yaml
id: G0517
name: "Object Permanence Motion"
type: motion
category: motion-foundations
description: "A motion guideline for object permanence motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Object Permanence Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Object Permanence Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0518 — Parent-Child Transition

```yaml
id: G0518
name: "Parent-Child Transition"
type: motion
category: motion-foundations
description: "A motion guideline for parent-child transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Parent-Child Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Parent-Child Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0519 — Directional Motion

```yaml
id: G0519
name: "Directional Motion"
type: motion
category: motion-foundations
description: "A motion guideline for directional motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Directional Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Directional Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0520 — Depth Motion

```yaml
id: G0520
name: "Depth Motion"
type: motion
category: motion-foundations
description: "A motion guideline for depth motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Depth Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Depth Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0521 — Motion Rhythm

```yaml
id: G0521
name: "Motion Rhythm"
type: motion
category: motion-foundations
description: "A motion guideline for motion rhythm; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Motion Rhythm can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Motion Rhythm, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0522 — Stagger

```yaml
id: G0522
name: "Stagger"
type: motion
category: motion-foundations
description: "A motion guideline for stagger; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Stagger can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Stagger, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0523 — Choreographed Motion

```yaml
id: G0523
name: "Choreographed Motion"
type: motion
category: motion-foundations
description: "A motion guideline for choreographed motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Choreographed Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Choreographed Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0524 — Motion Token System

```yaml
id: G0524
name: "Motion Token System"
type: motion
category: motion-foundations
description: "A motion guideline for motion token system; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Motion Token System can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Motion Token System, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0525 — Reduced-Motion Alternative

```yaml
id: G0525
name: "Reduced-Motion Alternative"
type: motion
category: motion-foundations
description: "A motion guideline for reduced-motion alternative; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat as system-level motion language. Define tokens and behavior before component animation. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Reduced-Motion Alternative can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reduced-Motion Alternative, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Button Control Motion

#### G0526 — Button Hover Transition

```yaml
id: G0526
name: "Button Hover Transition"
type: motion
category: button-control-motion
description: "A motion guideline for button hover transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Button Hover Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Button Hover Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0527 — Button Press Scale

```yaml
id: G0527
name: "Button Press Scale"
type: motion
category: button-control-motion
description: "A motion guideline for button press scale; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Button Press Scale can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Button Press Scale, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0528 — Button Release

```yaml
id: G0528
name: "Button Release"
type: motion
category: button-control-motion
description: "A motion guideline for button release; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Button Release can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Button Release, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0529 — CTA Highlight

```yaml
id: G0529
name: "CTA Highlight"
type: motion
category: button-control-motion
description: "A motion guideline for cta highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "CTA Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without CTA Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0530 — Icon Button Rotate

```yaml
id: G0530
name: "Icon Button Rotate"
type: motion
category: button-control-motion
description: "A motion guideline for icon button rotate; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Icon Button Rotate can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Icon Button Rotate, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0531 — Toggle Thumb Slide

```yaml
id: G0531
name: "Toggle Thumb Slide"
type: motion
category: button-control-motion
description: "A motion guideline for toggle thumb slide; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Toggle Thumb Slide can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Toggle Thumb Slide, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0532 — Toggle Track Transition

```yaml
id: G0532
name: "Toggle Track Transition"
type: motion
category: button-control-motion
description: "A motion guideline for toggle track transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Toggle Track Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Toggle Track Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0533 — Checkbox Draw

```yaml
id: G0533
name: "Checkbox Draw"
type: motion
category: button-control-motion
description: "A motion guideline for checkbox draw; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Checkbox Draw can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Checkbox Draw, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0534 — Checkbox Fill

```yaml
id: G0534
name: "Checkbox Fill"
type: motion
category: button-control-motion
description: "A motion guideline for checkbox fill; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Checkbox Fill can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Checkbox Fill, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0535 — Radio Selection Scale

```yaml
id: G0535
name: "Radio Selection Scale"
type: motion
category: button-control-motion
description: "A motion guideline for radio selection scale; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Radio Selection Scale can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Radio Selection Scale, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0536 — Segmented Indicator Slide

```yaml
id: G0536
name: "Segmented Indicator Slide"
type: motion
category: button-control-motion
description: "A motion guideline for segmented indicator slide; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Segmented Indicator Slide can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Segmented Indicator Slide, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0537 — Tab Indicator Motion

```yaml
id: G0537
name: "Tab Indicator Motion"
type: motion
category: button-control-motion
description: "A motion guideline for tab indicator motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tab Indicator Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tab Indicator Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0538 — Favorite Heart Fill

```yaml
id: G0538
name: "Favorite Heart Fill"
type: motion
category: button-control-motion
description: "A motion guideline for favorite heart fill; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Favorite Heart Fill can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Favorite Heart Fill, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0539 — Bookmark Motion

```yaml
id: G0539
name: "Bookmark Motion"
type: motion
category: button-control-motion
description: "A motion guideline for bookmark motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Bookmark Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Bookmark Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0540 — Copy Confirmation

```yaml
id: G0540
name: "Copy Confirmation"
type: motion
category: button-control-motion
description: "A motion guideline for copy confirmation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Copy Confirmation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Copy Confirmation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0541 — Send Button Transition

```yaml
id: G0541
name: "Send Button Transition"
type: motion
category: button-control-motion
description: "A motion guideline for send button transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Send Button Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Send Button Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0542 — Download Button Progress

```yaml
id: G0542
name: "Download Button Progress"
type: motion
category: button-control-motion
description: "A motion guideline for download button progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Download Button Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Download Button Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0543 — Upload Button Progress

```yaml
id: G0543
name: "Upload Button Progress"
type: motion
category: button-control-motion
description: "A motion guideline for upload button progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Upload Button Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Upload Button Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0544 — Destructive Button Warning

```yaml
id: G0544
name: "Destructive Button Warning"
type: motion
category: button-control-motion
description: "A motion guideline for destructive button warning; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Destructive Button Warning can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Destructive Button Warning, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0545 — Hold-to-Confirm Progress

```yaml
id: G0545
name: "Hold-to-Confirm Progress"
type: motion
category: button-control-motion
description: "A motion guideline for hold-to-confirm progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hold-to-Confirm Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hold-to-Confirm Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0546 — Loading Button Spinner

```yaml
id: G0546
name: "Loading Button Spinner"
type: motion
category: button-control-motion
description: "A motion guideline for loading button spinner; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Loading Button Spinner can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Loading Button Spinner, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0547 — Loading Button Width Lock

```yaml
id: G0547
name: "Loading Button Width Lock"
type: motion
category: button-control-motion
description: "A motion guideline for loading button width lock; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Loading Button Width Lock can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Loading Button Width Lock, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0548 — Button Success Morph

```yaml
id: G0548
name: "Button Success Morph"
type: motion
category: button-control-motion
description: "A motion guideline for button success morph; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Button Success Morph can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Button Success Morph, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0549 — Disabled-State Transition

```yaml
id: G0549
name: "Disabled-State Transition"
type: motion
category: button-control-motion
description: "A motion guideline for disabled-state transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Disabled-State Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Disabled-State Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0550 — Shortcut Hint Reveal

```yaml
id: G0550
name: "Shortcut Hint Reveal"
type: motion
category: button-control-motion
description: "A motion guideline for shortcut hint reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep fast and tactile. Usually 60–180ms; never delay the resulting action. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Shortcut Hint Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Shortcut Hint Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Navigation Motion

#### G0551 — Navbar Reveal

```yaml
id: G0551
name: "Navbar Reveal"
type: motion
category: navigation-motion
description: "A motion guideline for navbar reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Navbar Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Navbar Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0552 — Navbar Hide-on-Scroll

```yaml
id: G0552
name: "Navbar Hide-on-Scroll"
type: motion
category: navigation-motion
description: "A motion guideline for navbar hide-on-scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Navbar Hide-on-Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Navbar Hide-on-Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0553 — Sticky Header Transition

```yaml
id: G0553
name: "Sticky Header Transition"
type: motion
category: navigation-motion
description: "A motion guideline for sticky header transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sticky Header Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sticky Header Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0554 — Sidebar Expand

```yaml
id: G0554
name: "Sidebar Expand"
type: motion
category: navigation-motion
description: "A motion guideline for sidebar expand; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sidebar Expand can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sidebar Expand, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0555 — Sidebar Collapse

```yaml
id: G0555
name: "Sidebar Collapse"
type: motion
category: navigation-motion
description: "A motion guideline for sidebar collapse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sidebar Collapse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sidebar Collapse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0556 — Drawer Enter

```yaml
id: G0556
name: "Drawer Enter"
type: motion
category: navigation-motion
description: "A motion guideline for drawer enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drawer Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drawer Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0557 — Drawer Scrim Fade

```yaml
id: G0557
name: "Drawer Scrim Fade"
type: motion
category: navigation-motion
description: "A motion guideline for drawer scrim fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drawer Scrim Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drawer Scrim Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0558 — Menu Open Scale

```yaml
id: G0558
name: "Menu Open Scale"
type: motion
category: navigation-motion
description: "A motion guideline for menu open scale; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Menu Open Scale can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Menu Open Scale, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0559 — Menu Close Fade

```yaml
id: G0559
name: "Menu Close Fade"
type: motion
category: navigation-motion
description: "A motion guideline for menu close fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Menu Close Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Menu Close Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0560 — Breadcrumb Transition

```yaml
id: G0560
name: "Breadcrumb Transition"
type: motion
category: navigation-motion
description: "A motion guideline for breadcrumb transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Breadcrumb Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Breadcrumb Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0561 — Tab Content Slide

```yaml
id: G0561
name: "Tab Content Slide"
type: motion
category: navigation-motion
description: "A motion guideline for tab content slide; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tab Content Slide can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tab Content Slide, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0562 — Tab Crossfade

```yaml
id: G0562
name: "Tab Crossfade"
type: motion
category: navigation-motion
description: "A motion guideline for tab crossfade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tab Crossfade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tab Crossfade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0563 — Active Nav Indicator

```yaml
id: G0563
name: "Active Nav Indicator"
type: motion
category: navigation-motion
description: "A motion guideline for active nav indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Active Nav Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Active Nav Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0564 — Mobile Bottom-Bar Selection

```yaml
id: G0564
name: "Mobile Bottom-Bar Selection"
type: motion
category: navigation-motion
description: "A motion guideline for mobile bottom-bar selection; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Mobile Bottom-Bar Selection can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Mobile Bottom-Bar Selection, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0565 — Navigation Rail Expansion

```yaml
id: G0565
name: "Navigation Rail Expansion"
type: motion
category: navigation-motion
description: "A motion guideline for navigation rail expansion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Navigation Rail Expansion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Navigation Rail Expansion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0566 — Back Navigation Reverse Motion

```yaml
id: G0566
name: "Back Navigation Reverse Motion"
type: motion
category: navigation-motion
description: "A motion guideline for back navigation reverse motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Back Navigation Reverse Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Back Navigation Reverse Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0567 — Forward Navigation Motion

```yaml
id: G0567
name: "Forward Navigation Motion"
type: motion
category: navigation-motion
description: "A motion guideline for forward navigation motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Forward Navigation Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Forward Navigation Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0568 — Anchor Scroll

```yaml
id: G0568
name: "Anchor Scroll"
type: motion
category: navigation-motion
description: "A motion guideline for anchor scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Anchor Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Anchor Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0569 — Scroll-to-Top Motion

```yaml
id: G0569
name: "Scroll-to-Top Motion"
type: motion
category: navigation-motion
description: "A motion guideline for scroll-to-top motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll-to-Top Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll-to-Top Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0570 — Mega-Menu Reveal

```yaml
id: G0570
name: "Mega-Menu Reveal"
type: motion
category: navigation-motion
description: "A motion guideline for mega-menu reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Mega-Menu Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Mega-Menu Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0571 — Navigation Preview Transition

```yaml
id: G0571
name: "Navigation Preview Transition"
type: motion
category: navigation-motion
description: "A motion guideline for navigation preview transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Navigation Preview Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Navigation Preview Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0572 — Route Transition

```yaml
id: G0572
name: "Route Transition"
type: motion
category: navigation-motion
description: "A motion guideline for route transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Route Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Route Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0573 — Navigation Loading Bar

```yaml
id: G0573
name: "Navigation Loading Bar"
type: motion
category: navigation-motion
description: "A motion guideline for navigation loading bar; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Navigation Loading Bar can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Navigation Loading Bar, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0574 — Current-Page Highlight Fade

```yaml
id: G0574
name: "Current-Page Highlight Fade"
type: motion
category: navigation-motion
description: "A motion guideline for current-page highlight fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Current-Page Highlight Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Current-Page Highlight Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0575 — Nested Menu Cascade

```yaml
id: G0575
name: "Nested Menu Cascade"
type: motion
category: navigation-motion
description: "A motion guideline for nested menu cascade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve spatial orientation. Keep repeated navigation transitions short. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Nested Menu Cascade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Nested Menu Cascade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Page Route Motion

#### G0576 — Page Fade

```yaml
id: G0576
name: "Page Fade"
type: motion
category: page-route-motion
description: "A motion guideline for page fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0577 — Page Slide

```yaml
id: G0577
name: "Page Slide"
type: motion
category: page-route-motion
description: "A motion guideline for page slide; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Slide can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Slide, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0578 — Page Scale

```yaml
id: G0578
name: "Page Scale"
type: motion
category: page-route-motion
description: "A motion guideline for page scale; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Scale can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Scale, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0579 — Shared Card-to-Page

```yaml
id: G0579
name: "Shared Card-to-Page"
type: motion
category: page-route-motion
description: "A motion guideline for shared card-to-page; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Shared Card-to-Page can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Shared Card-to-Page, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0580 — Shared Image Transition

```yaml
id: G0580
name: "Shared Image Transition"
type: motion
category: page-route-motion
description: "A motion guideline for shared image transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Shared Image Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Shared Image Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0581 — Page Reveal Mask

```yaml
id: G0581
name: "Page Reveal Mask"
type: motion
category: page-route-motion
description: "A motion guideline for page reveal mask; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Reveal Mask can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Reveal Mask, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0582 — Section-to-Page Expansion

```yaml
id: G0582
name: "Section-to-Page Expansion"
type: motion
category: page-route-motion
description: "A motion guideline for section-to-page expansion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Section-to-Page Expansion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Section-to-Page Expansion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0583 — Route Skeleton Transition

```yaml
id: G0583
name: "Route Skeleton Transition"
type: motion
category: page-route-motion
description: "A motion guideline for route skeleton transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Route Skeleton Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Route Skeleton Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0584 — Content-Preserving Transition

```yaml
id: G0584
name: "Content-Preserving Transition"
type: motion
category: page-route-motion
description: "A motion guideline for content-preserving transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Content-Preserving Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Content-Preserving Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0585 — Master-Detail Transition

```yaml
id: G0585
name: "Master-Detail Transition"
type: motion
category: page-route-motion
description: "A motion guideline for master-detail transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Master-Detail Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Master-Detail Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0586 — Wizard Step Transition

```yaml
id: G0586
name: "Wizard Step Transition"
type: motion
category: page-route-motion
description: "A motion guideline for wizard step transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Wizard Step Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Wizard Step Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0587 — Modal-to-Page Transition

```yaml
id: G0587
name: "Modal-to-Page Transition"
type: motion
category: page-route-motion
description: "A motion guideline for modal-to-page transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Modal-to-Page Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Modal-to-Page Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0588 — Page Exit Delay

```yaml
id: G0588
name: "Page Exit Delay"
type: motion
category: page-route-motion
description: "A motion guideline for page exit delay; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Exit Delay can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Exit Delay, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0589 — Page Enter Delay

```yaml
id: G0589
name: "Page Enter Delay"
type: motion
category: page-route-motion
description: "A motion guideline for page enter delay; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Enter Delay can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Enter Delay, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0590 — Route Direction Memory

```yaml
id: G0590
name: "Route Direction Memory"
type: motion
category: page-route-motion
description: "A motion guideline for route direction memory; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Route Direction Memory can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Route Direction Memory, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0591 — Page Transition Scrim

```yaml
id: G0591
name: "Page Transition Scrim"
type: motion
category: page-route-motion
description: "A motion guideline for page transition scrim; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Transition Scrim can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Transition Scrim, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0592 — Content Swap Fade

```yaml
id: G0592
name: "Content Swap Fade"
type: motion
category: page-route-motion
description: "A motion guideline for content swap fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Content Swap Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Content Swap Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0593 — Route Progress Indicator

```yaml
id: G0593
name: "Route Progress Indicator"
type: motion
category: page-route-motion
description: "A motion guideline for route progress indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Route Progress Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Route Progress Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0594 — Scroll Position Restoration

```yaml
id: G0594
name: "Scroll Position Restoration"
type: motion
category: page-route-motion
description: "A motion guideline for scroll position restoration; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Position Restoration can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Position Restoration, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0595 — Route Error Transition

```yaml
id: G0595
name: "Route Error Transition"
type: motion
category: page-route-motion
description: "A motion guideline for route error transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Route Error Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Route Error Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0596 — Route Success Transition

```yaml
id: G0596
name: "Route Success Transition"
type: motion
category: page-route-motion
description: "A motion guideline for route success transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Route Success Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Route Success Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0597 — Nested Route Transition

```yaml
id: G0597
name: "Nested Route Transition"
type: motion
category: page-route-motion
description: "A motion guideline for nested route transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Nested Route Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Nested Route Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0598 — Page Flip

```yaml
id: G0598
name: "Page Flip"
type: motion
category: page-route-motion
description: "A motion guideline for page flip; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Page Flip can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Page Flip, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0599 — Zoom Navigation

```yaml
id: G0599
name: "Zoom Navigation"
type: motion
category: page-route-motion
description: "A motion guideline for zoom navigation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Zoom Navigation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Zoom Navigation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0600 — No-Motion Route Swap

```yaml
id: G0600
name: "No-Motion Route Swap"
type: motion
category: page-route-motion
description: "A motion guideline for no-motion route swap; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Prefer stable shells and local transitions. Avoid cinematic route changes in productivity software. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "No-Motion Route Swap can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without No-Motion Route Swap, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Overlay Motion

#### G0601 — Modal Fade In

```yaml
id: G0601
name: "Modal Fade In"
type: motion
category: overlay-motion
description: "A motion guideline for modal fade in; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Modal Fade In can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Modal Fade In, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0602 — Modal Scale In

```yaml
id: G0602
name: "Modal Scale In"
type: motion
category: overlay-motion
description: "A motion guideline for modal scale in; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Modal Scale In can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Modal Scale In, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0603 — Modal Exit

```yaml
id: G0603
name: "Modal Exit"
type: motion
category: overlay-motion
description: "A motion guideline for modal exit; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Modal Exit can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Modal Exit, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0604 — Scrim Fade

```yaml
id: G0604
name: "Scrim Fade"
type: motion
category: overlay-motion
description: "A motion guideline for scrim fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scrim Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scrim Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0605 — Background Scale-Back

```yaml
id: G0605
name: "Background Scale-Back"
type: motion
category: overlay-motion
description: "A motion guideline for background scale-back; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Background Scale-Back can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Background Scale-Back, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0606 — Bottom Sheet Enter

```yaml
id: G0606
name: "Bottom Sheet Enter"
type: motion
category: overlay-motion
description: "A motion guideline for bottom sheet enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Bottom Sheet Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Bottom Sheet Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0607 — Bottom Sheet Dismiss

```yaml
id: G0607
name: "Bottom Sheet Dismiss"
type: motion
category: overlay-motion
description: "A motion guideline for bottom sheet dismiss; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Bottom Sheet Dismiss can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Bottom Sheet Dismiss, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0608 — Sheet Drag Follow

```yaml
id: G0608
name: "Sheet Drag Follow"
type: motion
category: overlay-motion
description: "A motion guideline for sheet drag follow; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sheet Drag Follow can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sheet Drag Follow, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0609 — Sheet Snap

```yaml
id: G0609
name: "Sheet Snap"
type: motion
category: overlay-motion
description: "A motion guideline for sheet snap; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sheet Snap can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sheet Snap, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0610 — Popover Origin Scale

```yaml
id: G0610
name: "Popover Origin Scale"
type: motion
category: overlay-motion
description: "A motion guideline for popover origin scale; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Popover Origin Scale can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Popover Origin Scale, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0611 — Tooltip Fade

```yaml
id: G0611
name: "Tooltip Fade"
type: motion
category: overlay-motion
description: "A motion guideline for tooltip fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tooltip Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tooltip Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0612 — Tooltip Delay

```yaml
id: G0612
name: "Tooltip Delay"
type: motion
category: overlay-motion
description: "A motion guideline for tooltip delay; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tooltip Delay can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tooltip Delay, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0613 — Context Menu Reveal

```yaml
id: G0613
name: "Context Menu Reveal"
type: motion
category: overlay-motion
description: "A motion guideline for context menu reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Context Menu Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Context Menu Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0614 — Fullscreen Overlay Transition

```yaml
id: G0614
name: "Fullscreen Overlay Transition"
type: motion
category: overlay-motion
description: "A motion guideline for fullscreen overlay transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Fullscreen Overlay Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Fullscreen Overlay Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0615 — Lightbox Fade

```yaml
id: G0615
name: "Lightbox Fade"
type: motion
category: overlay-motion
description: "A motion guideline for lightbox fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Lightbox Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Lightbox Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0616 — Lightbox Image Zoom

```yaml
id: G0616
name: "Lightbox Image Zoom"
type: motion
category: overlay-motion
description: "A motion guideline for lightbox image zoom; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Lightbox Image Zoom can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Lightbox Image Zoom, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0617 — Confirmation Dialog Emphasis

```yaml
id: G0617
name: "Confirmation Dialog Emphasis"
type: motion
category: overlay-motion
description: "A motion guideline for confirmation dialog emphasis; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Confirmation Dialog Emphasis can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Confirmation Dialog Emphasis, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0618 — Alert Dialog Attention

```yaml
id: G0618
name: "Alert Dialog Attention"
type: motion
category: overlay-motion
description: "A motion guideline for alert dialog attention; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Alert Dialog Attention can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Alert Dialog Attention, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0619 — Nested Dialog Transition

```yaml
id: G0619
name: "Nested Dialog Transition"
type: motion
category: overlay-motion
description: "A motion guideline for nested dialog transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Nested Dialog Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Nested Dialog Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0620 — Side Panel Enter

```yaml
id: G0620
name: "Side Panel Enter"
type: motion
category: overlay-motion
description: "A motion guideline for side panel enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Side Panel Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Side Panel Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0621 — Side Panel Resize

```yaml
id: G0621
name: "Side Panel Resize"
type: motion
category: overlay-motion
description: "A motion guideline for side panel resize; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Side Panel Resize can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Side Panel Resize, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0622 — Overlay Focus Transition

```yaml
id: G0622
name: "Overlay Focus Transition"
type: motion
category: overlay-motion
description: "A motion guideline for overlay focus transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Overlay Focus Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Overlay Focus Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0623 — Dialog Content Swap

```yaml
id: G0623
name: "Dialog Content Swap"
type: motion
category: overlay-motion
description: "A motion guideline for dialog content swap; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Dialog Content Swap can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Dialog Content Swap, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0624 — Toast Stack Shift

```yaml
id: G0624
name: "Toast Stack Shift"
type: motion
category: overlay-motion
description: "A motion guideline for toast stack shift; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Toast Stack Shift can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Toast Stack Shift, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0625 — Overlay Reduced Motion

```yaml
id: G0625
name: "Overlay Reduced Motion"
type: motion
category: overlay-motion
description: "A motion guideline for overlay reduced motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Show layer origin and focus. Enter modestly; exit slightly faster. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Overlay Reduced Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Overlay Reduced Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Form Input Motion

#### G0626 — Floating Label Transition

```yaml
id: G0626
name: "Floating Label Transition"
type: motion
category: form-input-motion
description: "A motion guideline for floating label transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Floating Label Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Floating Label Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0627 — Focus Border Transition

```yaml
id: G0627
name: "Focus Border Transition"
type: motion
category: form-input-motion
description: "A motion guideline for focus border transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Focus Border Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Focus Border Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0628 — Focus Ring Animation

```yaml
id: G0628
name: "Focus Ring Animation"
type: motion
category: form-input-motion
description: "A motion guideline for focus ring animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Focus Ring Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Focus Ring Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0629 — Input Error Shake

```yaml
id: G0629
name: "Input Error Shake"
type: motion
category: form-input-motion
description: "A motion guideline for input error shake; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Input Error Shake can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Input Error Shake, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0630 — Error Message Reveal

```yaml
id: G0630
name: "Error Message Reveal"
type: motion
category: form-input-motion
description: "A motion guideline for error message reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Error Message Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Error Message Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0631 — Error Resolution Transition

```yaml
id: G0631
name: "Error Resolution Transition"
type: motion
category: form-input-motion
description: "A motion guideline for error resolution transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Error Resolution Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Error Resolution Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0632 — Success Check Reveal

```yaml
id: G0632
name: "Success Check Reveal"
type: motion
category: form-input-motion
description: "A motion guideline for success check reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Success Check Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Success Check Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0633 — Password Strength Meter Motion

```yaml
id: G0633
name: "Password Strength Meter Motion"
type: motion
category: form-input-motion
description: "A motion guideline for password strength meter motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Password Strength Meter Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Password Strength Meter Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0634 — Character Counter Transition

```yaml
id: G0634
name: "Character Counter Transition"
type: motion
category: form-input-motion
description: "A motion guideline for character counter transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Character Counter Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Character Counter Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0635 — Autocomplete Reveal

```yaml
id: G0635
name: "Autocomplete Reveal"
type: motion
category: form-input-motion
description: "A motion guideline for autocomplete reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Autocomplete Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Autocomplete Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0636 — Autocomplete Selection

```yaml
id: G0636
name: "Autocomplete Selection"
type: motion
category: form-input-motion
description: "A motion guideline for autocomplete selection; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Autocomplete Selection can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Autocomplete Selection, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0637 — Multi-Select Chip Enter

```yaml
id: G0637
name: "Multi-Select Chip Enter"
type: motion
category: form-input-motion
description: "A motion guideline for multi-select chip enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Multi-Select Chip Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Multi-Select Chip Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0638 — Chip Removal Motion

```yaml
id: G0638
name: "Chip Removal Motion"
type: motion
category: form-input-motion
description: "A motion guideline for chip removal motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Chip Removal Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Chip Removal Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0639 — Dropdown Expand

```yaml
id: G0639
name: "Dropdown Expand"
type: motion
category: form-input-motion
description: "A motion guideline for dropdown expand; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Dropdown Expand can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Dropdown Expand, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0640 — Date Picker Open

```yaml
id: G0640
name: "Date Picker Open"
type: motion
category: form-input-motion
description: "A motion guideline for date picker open; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Date Picker Open can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Date Picker Open, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0641 — Date Range Highlight

```yaml
id: G0641
name: "Date Range Highlight"
type: motion
category: form-input-motion
description: "A motion guideline for date range highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Date Range Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Date Range Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0642 — Slider Thumb Motion

```yaml
id: G0642
name: "Slider Thumb Motion"
type: motion
category: form-input-motion
description: "A motion guideline for slider thumb motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Slider Thumb Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Slider Thumb Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0643 — Range Fill Motion

```yaml
id: G0643
name: "Range Fill Motion"
type: motion
category: form-input-motion
description: "A motion guideline for range fill motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Range Fill Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Range Fill Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0644 — Stepper Value Transition

```yaml
id: G0644
name: "Stepper Value Transition"
type: motion
category: form-input-motion
description: "A motion guideline for stepper value transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Stepper Value Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Stepper Value Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0645 — OTP Auto-Advance Motion

```yaml
id: G0645
name: "OTP Auto-Advance Motion"
type: motion
category: form-input-motion
description: "A motion guideline for otp auto-advance motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "OTP Auto-Advance Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without OTP Auto-Advance Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0646 — File Drop Highlight

```yaml
id: G0646
name: "File Drop Highlight"
type: motion
category: form-input-motion
description: "A motion guideline for file drop highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "File Drop Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without File Drop Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0647 — File Upload Progress Motion

```yaml
id: G0647
name: "File Upload Progress Motion"
type: motion
category: form-input-motion
description: "A motion guideline for file upload progress motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "File Upload Progress Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without File Upload Progress Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0648 — Form Section Reveal

```yaml
id: G0648
name: "Form Section Reveal"
type: motion
category: form-input-motion
description: "A motion guideline for form section reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Form Section Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Form Section Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0649 — Submit Success Transition

```yaml
id: G0649
name: "Submit Success Transition"
type: motion
category: form-input-motion
description: "A motion guideline for submit success transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Submit Success Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Submit Success Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0650 — Autosave Indicator Transition

```yaml
id: G0650
name: "Autosave Indicator Transition"
type: motion
category: form-input-motion
description: "A motion guideline for autosave indicator transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use only to clarify focus, validation, conditional fields, or completion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Autosave Indicator Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Autosave Indicator Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Loading Progress Motion

#### G0651 — Spinner Rotation

```yaml
id: G0651
name: "Spinner Rotation"
type: motion
category: loading-progress-motion
description: "A motion guideline for spinner rotation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Spinner Rotation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Spinner Rotation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0652 — Skeleton Shimmer

```yaml
id: G0652
name: "Skeleton Shimmer"
type: motion
category: loading-progress-motion
description: "A motion guideline for skeleton shimmer; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Skeleton Shimmer can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Skeleton Shimmer, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0653 — Static Skeleton

```yaml
id: G0653
name: "Static Skeleton"
type: motion
category: loading-progress-motion
description: "A motion guideline for static skeleton; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Static Skeleton can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Static Skeleton, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0654 — Progress Bar Fill

```yaml
id: G0654
name: "Progress Bar Fill"
type: motion
category: loading-progress-motion
description: "A motion guideline for progress bar fill; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Progress Bar Fill can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Progress Bar Fill, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0655 — Indeterminate Progress Bar

```yaml
id: G0655
name: "Indeterminate Progress Bar"
type: motion
category: loading-progress-motion
description: "A motion guideline for indeterminate progress bar; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Indeterminate Progress Bar can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Indeterminate Progress Bar, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0656 — Circular Progress

```yaml
id: G0656
name: "Circular Progress"
type: motion
category: loading-progress-motion
description: "A motion guideline for circular progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Circular Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Circular Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0657 — Step Progress Transition

```yaml
id: G0657
name: "Step Progress Transition"
type: motion
category: loading-progress-motion
description: "A motion guideline for step progress transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Step Progress Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Step Progress Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0658 — Upload Progress Motion

```yaml
id: G0658
name: "Upload Progress Motion"
type: motion
category: loading-progress-motion
description: "A motion guideline for upload progress motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Upload Progress Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Upload Progress Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0659 — Download Progress Motion

```yaml
id: G0659
name: "Download Progress Motion"
type: motion
category: loading-progress-motion
description: "A motion guideline for download progress motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Download Progress Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Download Progress Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0660 — Background Sync Indicator

```yaml
id: G0660
name: "Background Sync Indicator"
type: motion
category: loading-progress-motion
description: "A motion guideline for background sync indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Background Sync Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Background Sync Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0661 — Refresh Animation

```yaml
id: G0661
name: "Refresh Animation"
type: motion
category: loading-progress-motion
description: "A motion guideline for refresh animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Refresh Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Refresh Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0662 — Pull-to-Refresh Motion

```yaml
id: G0662
name: "Pull-to-Refresh Motion"
type: motion
category: loading-progress-motion
description: "A motion guideline for pull-to-refresh motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Pull-to-Refresh Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Pull-to-Refresh Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0663 — Progressive Image Blur-Up

```yaml
id: G0663
name: "Progressive Image Blur-Up"
type: motion
category: loading-progress-motion
description: "A motion guideline for progressive image blur-up; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Progressive Image Blur-Up can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Progressive Image Blur-Up, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0664 — Progressive Content Reveal

```yaml
id: G0664
name: "Progressive Content Reveal"
type: motion
category: loading-progress-motion
description: "A motion guideline for progressive content reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Progressive Content Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Progressive Content Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0665 — Lazy-Load Fade

```yaml
id: G0665
name: "Lazy-Load Fade"
type: motion
category: loading-progress-motion
description: "A motion guideline for lazy-load fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Lazy-Load Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Lazy-Load Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0666 — Loading Dots

```yaml
id: G0666
name: "Loading Dots"
type: motion
category: loading-progress-motion
description: "A motion guideline for loading dots; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Loading Dots can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Loading Dots, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0667 — Typing Indicator Motion

```yaml
id: G0667
name: "Typing Indicator Motion"
type: motion
category: loading-progress-motion
description: "A motion guideline for typing indicator motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Typing Indicator Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Typing Indicator Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0668 — Processing Pulse

```yaml
id: G0668
name: "Processing Pulse"
type: motion
category: loading-progress-motion
description: "A motion guideline for processing pulse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Processing Pulse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Processing Pulse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0669 — Queue Progress

```yaml
id: G0669
name: "Queue Progress"
type: motion
category: loading-progress-motion
description: "A motion guideline for queue progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Queue Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Queue Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0670 — Loading Placeholder Morph

```yaml
id: G0670
name: "Loading Placeholder Morph"
type: motion
category: loading-progress-motion
description: "A motion guideline for loading placeholder morph; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Loading Placeholder Morph can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Loading Placeholder Morph, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0671 — Loading Completion Fade

```yaml
id: G0671
name: "Loading Completion Fade"
type: motion
category: loading-progress-motion
description: "A motion guideline for loading completion fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Loading Completion Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Loading Completion Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0672 — Retry Transition

```yaml
id: G0672
name: "Retry Transition"
type: motion
category: loading-progress-motion
description: "A motion guideline for retry transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Retry Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Retry Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0673 — Offline Queue Motion

```yaml
id: G0673
name: "Offline Queue Motion"
type: motion
category: loading-progress-motion
description: "A motion guideline for offline queue motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Offline Queue Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Offline Queue Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0674 — Background Prefetch Indicator

```yaml
id: G0674
name: "Background Prefetch Indicator"
type: motion
category: loading-progress-motion
description: "A motion guideline for background prefetch indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Background Prefetch Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Background Prefetch Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0675 — Loading Timeout Transition

```yaml
id: G0675
name: "Loading Timeout Transition"
type: motion
category: loading-progress-motion
description: "A motion guideline for loading timeout transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Represent real processing honestly. Never fake progress to create drama. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Loading Timeout Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Loading Timeout Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Feedback Status Motion

#### G0676 — Toast Enter

```yaml
id: G0676
name: "Toast Enter"
type: motion
category: feedback-status-motion
description: "A motion guideline for toast enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Toast Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Toast Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0677 — Toast Exit

```yaml
id: G0677
name: "Toast Exit"
type: motion
category: feedback-status-motion
description: "A motion guideline for toast exit; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Toast Exit can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Toast Exit, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0678 — Snackbar Enter

```yaml
id: G0678
name: "Snackbar Enter"
type: motion
category: feedback-status-motion
description: "A motion guideline for snackbar enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Snackbar Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Snackbar Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0679 — Undo Countdown

```yaml
id: G0679
name: "Undo Countdown"
type: motion
category: feedback-status-motion
description: "A motion guideline for undo countdown; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Undo Countdown can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Undo Countdown, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0680 — Notification Badge Pop

```yaml
id: G0680
name: "Notification Badge Pop"
type: motion
category: feedback-status-motion
description: "A motion guideline for notification badge pop; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Notification Badge Pop can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Notification Badge Pop, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0681 — Status Dot Pulse

```yaml
id: G0681
name: "Status Dot Pulse"
type: motion
category: feedback-status-motion
description: "A motion guideline for status dot pulse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Status Dot Pulse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Status Dot Pulse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0682 — Success Check Draw

```yaml
id: G0682
name: "Success Check Draw"
type: motion
category: feedback-status-motion
description: "A motion guideline for success check draw; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Success Check Draw can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Success Check Draw, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0683 — Error Icon Reveal

```yaml
id: G0683
name: "Error Icon Reveal"
type: motion
category: feedback-status-motion
description: "A motion guideline for error icon reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Error Icon Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Error Icon Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0684 — Warning Pulse

```yaml
id: G0684
name: "Warning Pulse"
type: motion
category: feedback-status-motion
description: "A motion guideline for warning pulse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Warning Pulse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Warning Pulse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0685 — Connection Recovered Transition

```yaml
id: G0685
name: "Connection Recovered Transition"
type: motion
category: feedback-status-motion
description: "A motion guideline for connection recovered transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Connection Recovered Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Connection Recovered Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0686 — Offline Banner Reveal

```yaml
id: G0686
name: "Offline Banner Reveal"
type: motion
category: feedback-status-motion
description: "A motion guideline for offline banner reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Offline Banner Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Offline Banner Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0687 — Saved Indicator Fade

```yaml
id: G0687
name: "Saved Indicator Fade"
type: motion
category: feedback-status-motion
description: "A motion guideline for saved indicator fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Saved Indicator Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Saved Indicator Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0688 — Sync State Morph

```yaml
id: G0688
name: "Sync State Morph"
type: motion
category: feedback-status-motion
description: "A motion guideline for sync state morph; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sync State Morph can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sync State Morph, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0689 — Presence Change Fade

```yaml
id: G0689
name: "Presence Change Fade"
type: motion
category: feedback-status-motion
description: "A motion guideline for presence change fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Presence Change Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Presence Change Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0690 — Live Update Highlight

```yaml
id: G0690
name: "Live Update Highlight"
type: motion
category: feedback-status-motion
description: "A motion guideline for live update highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Live Update Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Live Update Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0691 — New Item Highlight

```yaml
id: G0691
name: "New Item Highlight"
type: motion
category: feedback-status-motion
description: "A motion guideline for new item highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "New Item Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without New Item Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0692 — Removed Item Collapse

```yaml
id: G0692
name: "Removed Item Collapse"
type: motion
category: feedback-status-motion
description: "A motion guideline for removed item collapse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Removed Item Collapse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Removed Item Collapse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0693 — Undo Restore Motion

```yaml
id: G0693
name: "Undo Restore Motion"
type: motion
category: feedback-status-motion
description: "A motion guideline for undo restore motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Undo Restore Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Undo Restore Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0694 — Permission Granted Transition

```yaml
id: G0694
name: "Permission Granted Transition"
type: motion
category: feedback-status-motion
description: "A motion guideline for permission granted transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Permission Granted Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Permission Granted Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0695 — Permission Denied Transition

```yaml
id: G0695
name: "Permission Denied Transition"
type: motion
category: feedback-status-motion
description: "A motion guideline for permission denied transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Permission Denied Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Permission Denied Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0696 — Connection Quality Motion

```yaml
id: G0696
name: "Connection Quality Motion"
type: motion
category: feedback-status-motion
description: "A motion guideline for connection quality motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Connection Quality Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Connection Quality Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0697 — Recording Indicator

```yaml
id: G0697
name: "Recording Indicator"
type: motion
category: feedback-status-motion
description: "A motion guideline for recording indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Recording Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Recording Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0698 — Live Indicator Motion

```yaml
id: G0698
name: "Live Indicator Motion"
type: motion
category: feedback-status-motion
description: "A motion guideline for live indicator motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Live Indicator Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Live Indicator Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0699 — Completion Celebration

```yaml
id: G0699
name: "Completion Celebration"
type: motion
category: feedback-status-motion
description: "A motion guideline for completion celebration; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Completion Celebration can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Completion Celebration, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0700 — Failure Recovery Motion

```yaml
id: G0700
name: "Failure Recovery Motion"
type: motion
category: feedback-status-motion
description: "A motion guideline for failure recovery motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Keep brief and contextual. Avoid looping attention demands unless state is truly live/critical. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Failure Recovery Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Failure Recovery Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Collection Motion

#### G0701 — Card Hover Lift

```yaml
id: G0701
name: "Card Hover Lift"
type: motion
category: collection-motion
description: "A motion guideline for card hover lift; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Card Hover Lift can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Card Hover Lift, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0702 — Card Press

```yaml
id: G0702
name: "Card Press"
type: motion
category: collection-motion
description: "A motion guideline for card press; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Card Press can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Card Press, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0703 — Card Expand

```yaml
id: G0703
name: "Card Expand"
type: motion
category: collection-motion
description: "A motion guideline for card expand; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Card Expand can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Card Expand, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0704 — Card Collapse

```yaml
id: G0704
name: "Card Collapse"
type: motion
category: collection-motion
description: "A motion guideline for card collapse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Card Collapse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Card Collapse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0705 — Card Flip

```yaml
id: G0705
name: "Card Flip"
type: motion
category: collection-motion
description: "A motion guideline for card flip; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Card Flip can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Card Flip, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0706 — Card Reorder

```yaml
id: G0706
name: "Card Reorder"
type: motion
category: collection-motion
description: "A motion guideline for card reorder; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Card Reorder can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Card Reorder, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0707 — Drag Lift

```yaml
id: G0707
name: "Drag Lift"
type: motion
category: collection-motion
description: "A motion guideline for drag lift; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drag Lift can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drag Lift, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0708 — Drag Follow

```yaml
id: G0708
name: "Drag Follow"
type: motion
category: collection-motion
description: "A motion guideline for drag follow; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drag Follow can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drag Follow, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0709 — Drop Settle

```yaml
id: G0709
name: "Drop Settle"
type: motion
category: collection-motion
description: "A motion guideline for drop settle; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drop Settle can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drop Settle, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0710 — Placeholder Shift

```yaml
id: G0710
name: "Placeholder Shift"
type: motion
category: collection-motion
description: "A motion guideline for placeholder shift; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Placeholder Shift can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Placeholder Shift, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0711 — List Insert

```yaml
id: G0711
name: "List Insert"
type: motion
category: collection-motion
description: "A motion guideline for list insert; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "List Insert can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without List Insert, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0712 — List Remove

```yaml
id: G0712
name: "List Remove"
type: motion
category: collection-motion
description: "A motion guideline for list remove; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "List Remove can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without List Remove, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0713 — List Reorder

```yaml
id: G0713
name: "List Reorder"
type: motion
category: collection-motion
description: "A motion guideline for list reorder; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "List Reorder can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without List Reorder, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0714 — Filter Transition

```yaml
id: G0714
name: "Filter Transition"
type: motion
category: collection-motion
description: "A motion guideline for filter transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Filter Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Filter Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0715 — Sort Transition

```yaml
id: G0715
name: "Sort Transition"
type: motion
category: collection-motion
description: "A motion guideline for sort transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sort Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sort Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0716 — Grid Reflow

```yaml
id: G0716
name: "Grid Reflow"
type: motion
category: collection-motion
description: "A motion guideline for grid reflow; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Grid Reflow can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Grid Reflow, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0717 — Masonry Reflow

```yaml
id: G0717
name: "Masonry Reflow"
type: motion
category: collection-motion
description: "A motion guideline for masonry reflow; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Masonry Reflow can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Masonry Reflow, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0718 — Accordion Open

```yaml
id: G0718
name: "Accordion Open"
type: motion
category: collection-motion
description: "A motion guideline for accordion open; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Accordion Open can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Accordion Open, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0719 — Accordion Close

```yaml
id: G0719
name: "Accordion Close"
type: motion
category: collection-motion
description: "A motion guideline for accordion close; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Accordion Close can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Accordion Close, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0720 — List Stagger Entrance

```yaml
id: G0720
name: "List Stagger Entrance"
type: motion
category: collection-motion
description: "A motion guideline for list stagger entrance; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "List Stagger Entrance can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without List Stagger Entrance, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0721 — Selected Card Indicator

```yaml
id: G0721
name: "Selected Card Indicator"
type: motion
category: collection-motion
description: "A motion guideline for selected card indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Selected Card Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Selected Card Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0722 — Collection Pagination Transition

```yaml
id: G0722
name: "Collection Pagination Transition"
type: motion
category: collection-motion
description: "A motion guideline for collection pagination transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Collection Pagination Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Collection Pagination Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0723 — Infinite Scroll Insert

```yaml
id: G0723
name: "Infinite Scroll Insert"
type: motion
category: collection-motion
description: "A motion guideline for infinite scroll insert; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Infinite Scroll Insert can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Infinite Scroll Insert, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0724 — Expandable Row Motion

```yaml
id: G0724
name: "Expandable Row Motion"
type: motion
category: collection-motion
description: "A motion guideline for expandable row motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Expandable Row Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Expandable Row Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0725 — Grid Selection Motion

```yaml
id: G0725
name: "Grid Selection Motion"
type: motion
category: collection-motion
description: "A motion guideline for grid selection motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to preserve object identity during insert, remove, reorder, filter, and drag. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Grid Selection Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Grid Selection Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Scroll Viewport Motion

#### G0726 — Smooth Anchor Scroll

```yaml
id: G0726
name: "Smooth Anchor Scroll"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for smooth anchor scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Smooth Anchor Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Smooth Anchor Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0727 — Scroll Reveal

```yaml
id: G0727
name: "Scroll Reveal"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0728 — Fade-on-Scroll

```yaml
id: G0728
name: "Fade-on-Scroll"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for fade-on-scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Fade-on-Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Fade-on-Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0729 — Slide-on-Scroll

```yaml
id: G0729
name: "Slide-on-Scroll"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for slide-on-scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Slide-on-Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Slide-on-Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0730 — Scale-on-Scroll

```yaml
id: G0730
name: "Scale-on-Scroll"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scale-on-scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scale-on-Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scale-on-Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0731 — Parallax

```yaml
id: G0731
name: "Parallax"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for parallax; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Parallax can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Parallax, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0732 — Subtle Parallax

```yaml
id: G0732
name: "Subtle Parallax"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for subtle parallax; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Subtle Parallax can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Subtle Parallax, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0733 — Scroll Progress Bar

```yaml
id: G0733
name: "Scroll Progress Bar"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll progress bar; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Progress Bar can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Progress Bar, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0734 — Section Progress Indicator

```yaml
id: G0734
name: "Section Progress Indicator"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for section progress indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Section Progress Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Section Progress Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0735 — Sticky Section Transition

```yaml
id: G0735
name: "Sticky Section Transition"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for sticky section transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sticky Section Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sticky Section Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0736 — Scroll-Snap Transition

```yaml
id: G0736
name: "Scroll-Snap Transition"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll-snap transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll-Snap Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll-Snap Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0737 — Horizontal Scroll Cue

```yaml
id: G0737
name: "Horizontal Scroll Cue"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for horizontal scroll cue; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Horizontal Scroll Cue can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Horizontal Scroll Cue, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0738 — Infinite Scroll Loading

```yaml
id: G0738
name: "Infinite Scroll Loading"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for infinite scroll loading; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Infinite Scroll Loading can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Infinite Scroll Loading, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0739 — Back-to-Top Reveal

```yaml
id: G0739
name: "Back-to-Top Reveal"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for back-to-top reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Back-to-Top Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Back-to-Top Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0740 — Sticky Header Compression

```yaml
id: G0740
name: "Sticky Header Compression"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for sticky header compression; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sticky Header Compression can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sticky Header Compression, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0741 — Scroll Direction Header

```yaml
id: G0741
name: "Scroll Direction Header"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll direction header; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Direction Header can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Direction Header, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0742 — Scroll-Based Active Nav

```yaml
id: G0742
name: "Scroll-Based Active Nav"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll-based active nav; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll-Based Active Nav can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll-Based Active Nav, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0743 — Scroll Image Sequence

```yaml
id: G0743
name: "Scroll Image Sequence"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll image sequence; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Image Sequence can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Image Sequence, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0744 — Scroll Timeline

```yaml
id: G0744
name: "Scroll Timeline"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll timeline; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Timeline can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Timeline, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0745 — Scroll Counter

```yaml
id: G0745
name: "Scroll Counter"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll counter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Counter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Counter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0746 — Scroll-Pinned Media

```yaml
id: G0746
name: "Scroll-Pinned Media"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll-pinned media; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll-Pinned Media can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll-Pinned Media, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0747 — Scroll Crossfade

```yaml
id: G0747
name: "Scroll Crossfade"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll crossfade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Crossfade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Crossfade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0748 — Reveal Once

```yaml
id: G0748
name: "Reveal Once"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for reveal once; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Reveal Once can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reveal Once, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0749 — Scroll Motion Reduction

```yaml
id: G0749
name: "Scroll Motion Reduction"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for scroll motion reduction; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Scroll Motion Reduction can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Scroll Motion Reduction, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0750 — Native Scroll Preservation

```yaml
id: G0750
name: "Native Scroll Preservation"
type: motion
category: scroll-viewport-motion
description: "A motion guideline for native scroll preservation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use sparingly. Never make content availability depend on decorative reveal. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Native Scroll Preservation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Native Scroll Preservation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Hero Media Marketing Motion

#### G0751 — Hero Entrance

```yaml
id: G0751
name: "Hero Entrance"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for hero entrance; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hero Entrance can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hero Entrance, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0752 — Hero Text Stagger

```yaml
id: G0752
name: "Hero Text Stagger"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for hero text stagger; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hero Text Stagger can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hero Text Stagger, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0753 — Hero Image Reveal

```yaml
id: G0753
name: "Hero Image Reveal"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for hero image reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hero Image Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hero Image Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0754 — Product Mockup Float

```yaml
id: G0754
name: "Product Mockup Float"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for product mockup float; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Product Mockup Float can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Product Mockup Float, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0755 — Device Mockup Tilt

```yaml
id: G0755
name: "Device Mockup Tilt"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for device mockup tilt; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Device Mockup Tilt can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Device Mockup Tilt, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0756 — Spotlight Follow

```yaml
id: G0756
name: "Spotlight Follow"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for spotlight follow; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Spotlight Follow can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Spotlight Follow, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0757 — Gradient Drift

```yaml
id: G0757
name: "Gradient Drift"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for gradient drift; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Gradient Drift can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Gradient Drift, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0758 — Background Orb Motion

```yaml
id: G0758
name: "Background Orb Motion"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for background orb motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Background Orb Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Background Orb Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0759 — Animated Mesh Gradient

```yaml
id: G0759
name: "Animated Mesh Gradient"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for animated mesh gradient; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Animated Mesh Gradient can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Animated Mesh Gradient, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0760 — Logo Marquee

```yaml
id: G0760
name: "Logo Marquee"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for logo marquee; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Logo Marquee can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Logo Marquee, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0761 — Testimonial Carousel Motion

```yaml
id: G0761
name: "Testimonial Carousel Motion"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for testimonial carousel motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Testimonial Carousel Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Testimonial Carousel Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0762 — Feature Carousel Motion

```yaml
id: G0762
name: "Feature Carousel Motion"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for feature carousel motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Feature Carousel Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Feature Carousel Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0763 — Product Screenshot Pan

```yaml
id: G0763
name: "Product Screenshot Pan"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for product screenshot pan; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Product Screenshot Pan can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Product Screenshot Pan, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0764 — Video Poster Transition

```yaml
id: G0764
name: "Video Poster Transition"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for video poster transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Video Poster Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Video Poster Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0765 — Play Button Feedback

```yaml
id: G0765
name: "Play Button Feedback"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for play button feedback; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Play Button Feedback can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Play Button Feedback, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0766 — Image Gallery Transition

```yaml
id: G0766
name: "Image Gallery Transition"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for image gallery transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Image Gallery Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Image Gallery Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0767 — Lightbox Shared Image

```yaml
id: G0767
name: "Lightbox Shared Image"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for lightbox shared image; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Lightbox Shared Image can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Lightbox Shared Image, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0768 — Before/After Slider Motion

```yaml
id: G0768
name: "Before/After Slider Motion"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for before/after slider motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Before/After Slider Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Before/After Slider Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0769 — Animated Illustration

```yaml
id: G0769
name: "Animated Illustration"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for animated illustration; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Animated Illustration can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Animated Illustration, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0770 — Lottie Animation

```yaml
id: G0770
name: "Lottie Animation"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for lottie animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Lottie Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Lottie Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0771 — SVG Path Animation

```yaml
id: G0771
name: "SVG Path Animation"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for svg path animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "SVG Path Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without SVG Path Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0772 — Logo Reveal

```yaml
id: G0772
name: "Logo Reveal"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for logo reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Logo Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Logo Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0773 — Text Mask Reveal

```yaml
id: G0773
name: "Text Mask Reveal"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for text mask reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Text Mask Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Text Mask Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0774 — Kinetic Typography

```yaml
id: G0774
name: "Kinetic Typography"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for kinetic typography; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Kinetic Typography can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Kinetic Typography, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0775 — Ambient Motion Pause

```yaml
id: G0775
name: "Ambient Motion Pause"
type: motion
category: hero-media-marketing-motion
description: "A motion guideline for ambient motion pause; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expressive motion is allowed, but the value proposition and CTA must remain immediately usable. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Ambient Motion Pause can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Ambient Motion Pause, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Data Motion

#### G0776 — Chart Enter Animation

```yaml
id: G0776
name: "Chart Enter Animation"
type: motion
category: data-motion
description: "A motion guideline for chart enter animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Chart Enter Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Chart Enter Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0777 — Bar Growth

```yaml
id: G0777
name: "Bar Growth"
type: motion
category: data-motion
description: "A motion guideline for bar growth; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Bar Growth can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Bar Growth, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0778 — Line Draw

```yaml
id: G0778
name: "Line Draw"
type: motion
category: data-motion
description: "A motion guideline for line draw; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Line Draw can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Line Draw, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0779 — Area Fill Reveal

```yaml
id: G0779
name: "Area Fill Reveal"
type: motion
category: data-motion
description: "A motion guideline for area fill reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Area Fill Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Area Fill Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0780 — Pie Segment Reveal

```yaml
id: G0780
name: "Pie Segment Reveal"
type: motion
category: data-motion
description: "A motion guideline for pie segment reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Pie Segment Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Pie Segment Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0781 — Donut Progress

```yaml
id: G0781
name: "Donut Progress"
type: motion
category: data-motion
description: "A motion guideline for donut progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Donut Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Donut Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0782 — Number Count-Up

```yaml
id: G0782
name: "Number Count-Up"
type: motion
category: data-motion
description: "A motion guideline for number count-up; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Number Count-Up can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Number Count-Up, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0783 — Metric Delta Motion

```yaml
id: G0783
name: "Metric Delta Motion"
type: motion
category: data-motion
description: "A motion guideline for metric delta motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Metric Delta Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Metric Delta Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0784 — Chart Update Transition

```yaml
id: G0784
name: "Chart Update Transition"
type: motion
category: data-motion
description: "A motion guideline for chart update transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Chart Update Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Chart Update Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0785 — Axis Transition

```yaml
id: G0785
name: "Axis Transition"
type: motion
category: data-motion
description: "A motion guideline for axis transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Axis Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Axis Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0786 — Filtered Data Transition

```yaml
id: G0786
name: "Filtered Data Transition"
type: motion
category: data-motion
description: "A motion guideline for filtered data transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Filtered Data Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Filtered Data Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0787 — Hover Highlight

```yaml
id: G0787
name: "Hover Highlight"
type: motion
category: data-motion
description: "A motion guideline for hover highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hover Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hover Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0788 — Selection Highlight

```yaml
id: G0788
name: "Selection Highlight"
type: motion
category: data-motion
description: "A motion guideline for selection highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Selection Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Selection Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0789 — Tooltip Transition

```yaml
id: G0789
name: "Tooltip Transition"
type: motion
category: data-motion
description: "A motion guideline for tooltip transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tooltip Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tooltip Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0790 — Crosshair Motion

```yaml
id: G0790
name: "Crosshair Motion"
type: motion
category: data-motion
description: "A motion guideline for crosshair motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Crosshair Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Crosshair Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0791 — Map Marker Pulse

```yaml
id: G0791
name: "Map Marker Pulse"
type: motion
category: data-motion
description: "A motion guideline for map marker pulse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Map Marker Pulse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Map Marker Pulse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0792 — Choropleth Transition

```yaml
id: G0792
name: "Choropleth Transition"
type: motion
category: data-motion
description: "A motion guideline for choropleth transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Choropleth Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Choropleth Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0793 — Timeline Scrub Animation

```yaml
id: G0793
name: "Timeline Scrub Animation"
type: motion
category: data-motion
description: "A motion guideline for timeline scrub animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Timeline Scrub Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Timeline Scrub Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0794 — Sankey Flow Motion

```yaml
id: G0794
name: "Sankey Flow Motion"
type: motion
category: data-motion
description: "A motion guideline for sankey flow motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sankey Flow Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sankey Flow Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0795 — Network Layout Transition

```yaml
id: G0795
name: "Network Layout Transition"
type: motion
category: data-motion
description: "A motion guideline for network layout transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Network Layout Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Network Layout Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0796 — Table Row Update Flash

```yaml
id: G0796
name: "Table Row Update Flash"
type: motion
category: data-motion
description: "A motion guideline for table row update flash; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Table Row Update Flash can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Table Row Update Flash, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0797 — Sorting Row Motion

```yaml
id: G0797
name: "Sorting Row Motion"
type: motion
category: data-motion
description: "A motion guideline for sorting row motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sorting Row Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sorting Row Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0798 — Drill-Down Chart Transition

```yaml
id: G0798
name: "Drill-Down Chart Transition"
type: motion
category: data-motion
description: "A motion guideline for drill-down chart transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drill-Down Chart Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drill-Down Chart Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0799 — Drill-Up Reverse Transition

```yaml
id: G0799
name: "Drill-Up Reverse Transition"
type: motion
category: data-motion
description: "A motion guideline for drill-up reverse transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drill-Up Reverse Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drill-Up Reverse Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0800 — Reduced-Motion Data Update

```yaml
id: G0800
name: "Reduced-Motion Data Update"
type: motion
category: data-motion
description: "A motion guideline for reduced-motion data update; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use motion to explain change, not to decorate numbers. Never distort or imply false continuity. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Reduced-Motion Data Update can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reduced-Motion Data Update, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Commerce Motion

#### G0801 — Add-to-Cart Feedback

```yaml
id: G0801
name: "Add-to-Cart Feedback"
type: motion
category: commerce-motion
description: "A motion guideline for add-to-cart feedback; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Add-to-Cart Feedback can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Add-to-Cart Feedback, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0802 — Product-to-Cart Motion

```yaml
id: G0802
name: "Product-to-Cart Motion"
type: motion
category: commerce-motion
description: "A motion guideline for product-to-cart motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Product-to-Cart Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Product-to-Cart Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0803 — Cart Badge Increment

```yaml
id: G0803
name: "Cart Badge Increment"
type: motion
category: commerce-motion
description: "A motion guideline for cart badge increment; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Cart Badge Increment can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Cart Badge Increment, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0804 — Cart Drawer Enter

```yaml
id: G0804
name: "Cart Drawer Enter"
type: motion
category: commerce-motion
description: "A motion guideline for cart drawer enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Cart Drawer Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Cart Drawer Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0805 — Cart Item Removal

```yaml
id: G0805
name: "Cart Item Removal"
type: motion
category: commerce-motion
description: "A motion guideline for cart item removal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Cart Item Removal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Cart Item Removal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0806 — Quantity Change

```yaml
id: G0806
name: "Quantity Change"
type: motion
category: commerce-motion
description: "A motion guideline for quantity change; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Quantity Change can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Quantity Change, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0807 — Price Update

```yaml
id: G0807
name: "Price Update"
type: motion
category: commerce-motion
description: "A motion guideline for price update; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Price Update can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Price Update, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0808 — Discount Apply

```yaml
id: G0808
name: "Discount Apply"
type: motion
category: commerce-motion
description: "A motion guideline for discount apply; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Discount Apply can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Discount Apply, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0809 — Coupon Error Transition

```yaml
id: G0809
name: "Coupon Error Transition"
type: motion
category: commerce-motion
description: "A motion guideline for coupon error transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Coupon Error Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Coupon Error Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0810 — Variant Image Transition

```yaml
id: G0810
name: "Variant Image Transition"
type: motion
category: commerce-motion
description: "A motion guideline for variant image transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Variant Image Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Variant Image Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0811 — Variant Selection Motion

```yaml
id: G0811
name: "Variant Selection Motion"
type: motion
category: commerce-motion
description: "A motion guideline for variant selection motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Variant Selection Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Variant Selection Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0812 — Stock Status Transition

```yaml
id: G0812
name: "Stock Status Transition"
type: motion
category: commerce-motion
description: "A motion guideline for stock status transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Stock Status Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Stock Status Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0813 — Shipping Estimate Update

```yaml
id: G0813
name: "Shipping Estimate Update"
type: motion
category: commerce-motion
description: "A motion guideline for shipping estimate update; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Shipping Estimate Update can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Shipping Estimate Update, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0814 — Checkout Step Motion

```yaml
id: G0814
name: "Checkout Step Motion"
type: motion
category: commerce-motion
description: "A motion guideline for checkout step motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Checkout Step Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Checkout Step Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0815 — Payment Processing

```yaml
id: G0815
name: "Payment Processing"
type: motion
category: commerce-motion
description: "A motion guideline for payment processing; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Payment Processing can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Payment Processing, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0816 — Payment Success

```yaml
id: G0816
name: "Payment Success"
type: motion
category: commerce-motion
description: "A motion guideline for payment success; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Payment Success can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Payment Success, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0817 — Payment Failure

```yaml
id: G0817
name: "Payment Failure"
type: motion
category: commerce-motion
description: "A motion guideline for payment failure; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Payment Failure can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Payment Failure, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0818 — Order Confirmation Reveal

```yaml
id: G0818
name: "Order Confirmation Reveal"
type: motion
category: commerce-motion
description: "A motion guideline for order confirmation reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Order Confirmation Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Order Confirmation Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0819 — Wishlist Heart Motion

```yaml
id: G0819
name: "Wishlist Heart Motion"
type: motion
category: commerce-motion
description: "A motion guideline for wishlist heart motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Wishlist Heart Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Wishlist Heart Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0820 — Product Gallery Swipe

```yaml
id: G0820
name: "Product Gallery Swipe"
type: motion
category: commerce-motion
description: "A motion guideline for product gallery swipe; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Product Gallery Swipe can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Product Gallery Swipe, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0821 — Gallery Dot Transition

```yaml
id: G0821
name: "Gallery Dot Transition"
type: motion
category: commerce-motion
description: "A motion guideline for gallery dot transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Gallery Dot Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Gallery Dot Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0822 — Quick-View Modal

```yaml
id: G0822
name: "Quick-View Modal"
type: motion
category: commerce-motion
description: "A motion guideline for quick-view modal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Quick-View Modal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Quick-View Modal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0823 — Compare Selection Motion

```yaml
id: G0823
name: "Compare Selection Motion"
type: motion
category: commerce-motion
description: "A motion guideline for compare selection motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Compare Selection Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Compare Selection Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0824 — Checkout Error Focus

```yaml
id: G0824
name: "Checkout Error Focus"
type: motion
category: commerce-motion
description: "A motion guideline for checkout error focus; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Checkout Error Focus can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Checkout Error Focus, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0825 — Delivery Tracking Progress

```yaml
id: G0825
name: "Delivery Tracking Progress"
type: motion
category: commerce-motion
description: "A motion guideline for delivery tracking progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Clarity and trust beat spectacle. Payment and checkout motion should be restrained. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Delivery Tracking Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Delivery Tracking Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Onboarding Education Motion

#### G0826 — Welcome Entrance

```yaml
id: G0826
name: "Welcome Entrance"
type: motion
category: onboarding-education-motion
description: "A motion guideline for welcome entrance; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Welcome Entrance can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Welcome Entrance, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0827 — Onboarding Step Transition

```yaml
id: G0827
name: "Onboarding Step Transition"
type: motion
category: onboarding-education-motion
description: "A motion guideline for onboarding step transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Onboarding Step Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Onboarding Step Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0828 — Progress Step Animation

```yaml
id: G0828
name: "Progress Step Animation"
type: motion
category: onboarding-education-motion
description: "A motion guideline for progress step animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Progress Step Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Progress Step Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0829 — Coach Mark Enter

```yaml
id: G0829
name: "Coach Mark Enter"
type: motion
category: onboarding-education-motion
description: "A motion guideline for coach mark enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Coach Mark Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Coach Mark Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0830 — Coach Mark Target Pulse

```yaml
id: G0830
name: "Coach Mark Target Pulse"
type: motion
category: onboarding-education-motion
description: "A motion guideline for coach mark target pulse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Coach Mark Target Pulse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Coach Mark Target Pulse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0831 — Spotlight Reveal

```yaml
id: G0831
name: "Spotlight Reveal"
type: motion
category: onboarding-education-motion
description: "A motion guideline for spotlight reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Spotlight Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Spotlight Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0832 — Tutorial Pointer

```yaml
id: G0832
name: "Tutorial Pointer"
type: motion
category: onboarding-education-motion
description: "A motion guideline for tutorial pointer; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tutorial Pointer can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tutorial Pointer, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0833 — Gesture Demonstration

```yaml
id: G0833
name: "Gesture Demonstration"
type: motion
category: onboarding-education-motion
description: "A motion guideline for gesture demonstration; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Gesture Demonstration can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Gesture Demonstration, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0834 — Checklist Completion

```yaml
id: G0834
name: "Checklist Completion"
type: motion
category: onboarding-education-motion
description: "A motion guideline for checklist completion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Checklist Completion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Checklist Completion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0835 — Progress Ring Fill

```yaml
id: G0835
name: "Progress Ring Fill"
type: motion
category: onboarding-education-motion
description: "A motion guideline for progress ring fill; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Progress Ring Fill can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Progress Ring Fill, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0836 — Sample Data Populate

```yaml
id: G0836
name: "Sample Data Populate"
type: motion
category: onboarding-education-motion
description: "A motion guideline for sample data populate; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Sample Data Populate can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Sample Data Populate, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0837 — Empty-State Illustration Motion

```yaml
id: G0837
name: "Empty-State Illustration Motion"
type: motion
category: onboarding-education-motion
description: "A motion guideline for empty-state illustration motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Empty-State Illustration Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Empty-State Illustration Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0838 — Feature Discovery Nudge

```yaml
id: G0838
name: "Feature Discovery Nudge"
type: motion
category: onboarding-education-motion
description: "A motion guideline for feature discovery nudge; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Feature Discovery Nudge can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Feature Discovery Nudge, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0839 — Permission Explanation Transition

```yaml
id: G0839
name: "Permission Explanation Transition"
type: motion
category: onboarding-education-motion
description: "A motion guideline for permission explanation transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Permission Explanation Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Permission Explanation Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0840 — First Success Celebration

```yaml
id: G0840
name: "First Success Celebration"
type: motion
category: onboarding-education-motion
description: "A motion guideline for first success celebration; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "First Success Celebration can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without First Success Celebration, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0841 — Tutorial Completion Transition

```yaml
id: G0841
name: "Tutorial Completion Transition"
type: motion
category: onboarding-education-motion
description: "A motion guideline for tutorial completion transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tutorial Completion Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tutorial Completion Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0842 — Skip Transition

```yaml
id: G0842
name: "Skip Transition"
type: motion
category: onboarding-education-motion
description: "A motion guideline for skip transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Skip Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Skip Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0843 — Contextual Tip Fade

```yaml
id: G0843
name: "Contextual Tip Fade"
type: motion
category: onboarding-education-motion
description: "A motion guideline for contextual tip fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Contextual Tip Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Contextual Tip Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0844 — Hotspot Animation

```yaml
id: G0844
name: "Hotspot Animation"
type: motion
category: onboarding-education-motion
description: "A motion guideline for hotspot animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hotspot Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hotspot Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0845 — Tutorial Video Transition

```yaml
id: G0845
name: "Tutorial Video Transition"
type: motion
category: onboarding-education-motion
description: "A motion guideline for tutorial video transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tutorial Video Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tutorial Video Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0846 — Interactive Example Motion

```yaml
id: G0846
name: "Interactive Example Motion"
type: motion
category: onboarding-education-motion
description: "A motion guideline for interactive example motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Interactive Example Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Interactive Example Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0847 — Completion Badge Unlock

```yaml
id: G0847
name: "Completion Badge Unlock"
type: motion
category: onboarding-education-motion
description: "A motion guideline for completion badge unlock; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Completion Badge Unlock can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Completion Badge Unlock, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0848 — Skill Progress Animation

```yaml
id: G0848
name: "Skill Progress Animation"
type: motion
category: onboarding-education-motion
description: "A motion guideline for skill progress animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Skill Progress Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Skill Progress Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0849 — Guided Cursor Trail

```yaml
id: G0849
name: "Guided Cursor Trail"
type: motion
category: onboarding-education-motion
description: "A motion guideline for guided cursor trail; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Guided Cursor Trail can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Guided Cursor Trail, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0850 — Reduced-Motion Tutorial

```yaml
id: G0850
name: "Reduced-Motion Tutorial"
type: motion
category: onboarding-education-motion
description: "A motion guideline for reduced-motion tutorial; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion may teach gestures or sequence, but never block skipping or delay task entry. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Reduced-Motion Tutorial can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reduced-Motion Tutorial, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Collaboration Motion

#### G0851 — Message Send Animation

```yaml
id: G0851
name: "Message Send Animation"
type: motion
category: collaboration-motion
description: "A motion guideline for message send animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Message Send Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Message Send Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0852 — Message Receive Animation

```yaml
id: G0852
name: "Message Receive Animation"
type: motion
category: collaboration-motion
description: "A motion guideline for message receive animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Message Receive Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Message Receive Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0853 — Typing Dots

```yaml
id: G0853
name: "Typing Dots"
type: motion
category: collaboration-motion
description: "A motion guideline for typing dots; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Typing Dots can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Typing Dots, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0854 — Read Receipt Transition

```yaml
id: G0854
name: "Read Receipt Transition"
type: motion
category: collaboration-motion
description: "A motion guideline for read receipt transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Read Receipt Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Read Receipt Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0855 — Reaction Pop

```yaml
id: G0855
name: "Reaction Pop"
type: motion
category: collaboration-motion
description: "A motion guideline for reaction pop; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Reaction Pop can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reaction Pop, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0856 — Thread Expand

```yaml
id: G0856
name: "Thread Expand"
type: motion
category: collaboration-motion
description: "A motion guideline for thread expand; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Thread Expand can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Thread Expand, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0857 — Mention Highlight

```yaml
id: G0857
name: "Mention Highlight"
type: motion
category: collaboration-motion
description: "A motion guideline for mention highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Mention Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Mention Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0858 — Live Cursor Motion

```yaml
id: G0858
name: "Live Cursor Motion"
type: motion
category: collaboration-motion
description: "A motion guideline for live cursor motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Live Cursor Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Live Cursor Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0859 — Selection Presence Motion

```yaml
id: G0859
name: "Selection Presence Motion"
type: motion
category: collaboration-motion
description: "A motion guideline for selection presence motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Selection Presence Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Selection Presence Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0860 — User Join Transition

```yaml
id: G0860
name: "User Join Transition"
type: motion
category: collaboration-motion
description: "A motion guideline for user join transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "User Join Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without User Join Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0861 — User Leave Transition

```yaml
id: G0861
name: "User Leave Transition"
type: motion
category: collaboration-motion
description: "A motion guideline for user leave transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "User Leave Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without User Leave Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0862 — Activity Feed Insert

```yaml
id: G0862
name: "Activity Feed Insert"
type: motion
category: collaboration-motion
description: "A motion guideline for activity feed insert; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Activity Feed Insert can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Activity Feed Insert, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0863 — Comment Resolve Animation

```yaml
id: G0863
name: "Comment Resolve Animation"
type: motion
category: collaboration-motion
description: "A motion guideline for comment resolve animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Comment Resolve Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Comment Resolve Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0864 — Comment Reopen Animation

```yaml
id: G0864
name: "Comment Reopen Animation"
type: motion
category: collaboration-motion
description: "A motion guideline for comment reopen animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Comment Reopen Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Comment Reopen Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0865 — Share Success Transition

```yaml
id: G0865
name: "Share Success Transition"
type: motion
category: collaboration-motion
description: "A motion guideline for share success transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Share Success Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Share Success Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0866 — Permission Change Transition

```yaml
id: G0866
name: "Permission Change Transition"
type: motion
category: collaboration-motion
description: "A motion guideline for permission change transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Permission Change Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Permission Change Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0867 — File Upload in Chat

```yaml
id: G0867
name: "File Upload in Chat"
type: motion
category: collaboration-motion
description: "A motion guideline for file upload in chat; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "File Upload in Chat can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without File Upload in Chat, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0868 — Voice Recording Waveform

```yaml
id: G0868
name: "Voice Recording Waveform"
type: motion
category: collaboration-motion
description: "A motion guideline for voice recording waveform; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Voice Recording Waveform can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Voice Recording Waveform, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0869 — Voice Playback Progress

```yaml
id: G0869
name: "Voice Playback Progress"
type: motion
category: collaboration-motion
description: "A motion guideline for voice playback progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Voice Playback Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Voice Playback Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0870 — Call Speaking Indicator

```yaml
id: G0870
name: "Call Speaking Indicator"
type: motion
category: collaboration-motion
description: "A motion guideline for call speaking indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Call Speaking Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Call Speaking Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0871 — Screen Share Transition

```yaml
id: G0871
name: "Screen Share Transition"
type: motion
category: collaboration-motion
description: "A motion guideline for screen share transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Screen Share Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Screen Share Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0872 — Hand Raise Animation

```yaml
id: G0872
name: "Hand Raise Animation"
type: motion
category: collaboration-motion
description: "A motion guideline for hand raise animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Hand Raise Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Hand Raise Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0873 — Collaborative Object Move

```yaml
id: G0873
name: "Collaborative Object Move"
type: motion
category: collaboration-motion
description: "A motion guideline for collaborative object move; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Collaborative Object Move can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Collaborative Object Move, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0874 — Conflict Resolution Highlight

```yaml
id: G0874
name: "Conflict Resolution Highlight"
type: motion
category: collaboration-motion
description: "A motion guideline for conflict resolution highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Conflict Resolution Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Conflict Resolution Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0875 — Presence Reduced Motion

```yaml
id: G0875
name: "Presence Reduced Motion"
type: motion
category: collaboration-motion
description: "A motion guideline for presence reduced motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Use to reveal remote activity without turning active collaboration into visual noise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Presence Reduced Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Presence Reduced Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Gesture Motion

#### G0876 — Swipe Follow

```yaml
id: G0876
name: "Swipe Follow"
type: motion
category: gesture-motion
description: "A motion guideline for swipe follow; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Swipe Follow can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Swipe Follow, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0877 — Swipe Dismiss

```yaml
id: G0877
name: "Swipe Dismiss"
type: motion
category: gesture-motion
description: "A motion guideline for swipe dismiss; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Swipe Dismiss can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Swipe Dismiss, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0878 — Swipe Action Reveal

```yaml
id: G0878
name: "Swipe Action Reveal"
type: motion
category: gesture-motion
description: "A motion guideline for swipe action reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Swipe Action Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Swipe Action Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0879 — Swipe Threshold Feedback

```yaml
id: G0879
name: "Swipe Threshold Feedback"
type: motion
category: gesture-motion
description: "A motion guideline for swipe threshold feedback; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Swipe Threshold Feedback can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Swipe Threshold Feedback, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0880 — Overscroll Resistance

```yaml
id: G0880
name: "Overscroll Resistance"
type: motion
category: gesture-motion
description: "A motion guideline for overscroll resistance; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Overscroll Resistance can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Overscroll Resistance, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0881 — Pull-to-Refresh Stretch

```yaml
id: G0881
name: "Pull-to-Refresh Stretch"
type: motion
category: gesture-motion
description: "A motion guideline for pull-to-refresh stretch; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Pull-to-Refresh Stretch can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Pull-to-Refresh Stretch, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0882 — Long-Press Feedback

```yaml
id: G0882
name: "Long-Press Feedback"
type: motion
category: gesture-motion
description: "A motion guideline for long-press feedback; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Long-Press Feedback can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Long-Press Feedback, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0883 — Drag Handle Feedback

```yaml
id: G0883
name: "Drag Handle Feedback"
type: motion
category: gesture-motion
description: "A motion guideline for drag handle feedback; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drag Handle Feedback can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drag Handle Feedback, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0884 — Bottom-Sheet Drag

```yaml
id: G0884
name: "Bottom-Sheet Drag"
type: motion
category: gesture-motion
description: "A motion guideline for bottom-sheet drag; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Bottom-Sheet Drag can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Bottom-Sheet Drag, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0885 — Bottom-Sheet Snap

```yaml
id: G0885
name: "Bottom-Sheet Snap"
type: motion
category: gesture-motion
description: "A motion guideline for bottom-sheet snap; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Bottom-Sheet Snap can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Bottom-Sheet Snap, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0886 — Edge-Swipe Navigation

```yaml
id: G0886
name: "Edge-Swipe Navigation"
type: motion
category: gesture-motion
description: "A motion guideline for edge-swipe navigation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Edge-Swipe Navigation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Edge-Swipe Navigation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0887 — Pinch Zoom

```yaml
id: G0887
name: "Pinch Zoom"
type: motion
category: gesture-motion
description: "A motion guideline for pinch zoom; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Pinch Zoom can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Pinch Zoom, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0888 — Double-Tap Zoom

```yaml
id: G0888
name: "Double-Tap Zoom"
type: motion
category: gesture-motion
description: "A motion guideline for double-tap zoom; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Double-Tap Zoom can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Double-Tap Zoom, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0889 — Drag-to-Reorder

```yaml
id: G0889
name: "Drag-to-Reorder"
type: motion
category: gesture-motion
description: "A motion guideline for drag-to-reorder; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drag-to-Reorder can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drag-to-Reorder, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0890 — Swipe Carousel Momentum

```yaml
id: G0890
name: "Swipe Carousel Momentum"
type: motion
category: gesture-motion
description: "A motion guideline for swipe carousel momentum; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Swipe Carousel Momentum can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Swipe Carousel Momentum, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0891 — Tap Ripple

```yaml
id: G0891
name: "Tap Ripple"
type: motion
category: gesture-motion
description: "A motion guideline for tap ripple; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tap Ripple can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tap Ripple, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0892 — Touch Highlight

```yaml
id: G0892
name: "Touch Highlight"
type: motion
category: gesture-motion
description: "A motion guideline for touch highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Touch Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Touch Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0893 — Press Depth

```yaml
id: G0893
name: "Press Depth"
type: motion
category: gesture-motion
description: "A motion guideline for press depth; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Press Depth can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Press Depth, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0894 — Gesture Cancellation

```yaml
id: G0894
name: "Gesture Cancellation"
type: motion
category: gesture-motion
description: "A motion guideline for gesture cancellation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Gesture Cancellation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Gesture Cancellation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0895 — Gesture Completion

```yaml
id: G0895
name: "Gesture Completion"
type: motion
category: gesture-motion
description: "A motion guideline for gesture completion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Gesture Completion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Gesture Completion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0896 — Drag Auto-Scroll

```yaml
id: G0896
name: "Drag Auto-Scroll"
type: motion
category: gesture-motion
description: "A motion guideline for drag auto-scroll; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Drag Auto-Scroll can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Drag Auto-Scroll, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0897 — Mobile Keyboard Shift

```yaml
id: G0897
name: "Mobile Keyboard Shift"
type: motion
category: gesture-motion
description: "A motion guideline for mobile keyboard shift; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Mobile Keyboard Shift can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Mobile Keyboard Shift, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0898 — Safe-Area Transition

```yaml
id: G0898
name: "Safe-Area Transition"
type: motion
category: gesture-motion
description: "A motion guideline for safe-area transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Safe-Area Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Safe-Area Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0899 — Orientation Transition

```yaml
id: G0899
name: "Orientation Transition"
type: motion
category: gesture-motion
description: "A motion guideline for orientation transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Orientation Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Orientation Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0900 — Reduced Gesture Motion

```yaml
id: G0900
name: "Reduced Gesture Motion"
type: motion
category: gesture-motion
description: "A motion guideline for reduced gesture motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Motion must track input directly and remain interruptible, reversible, and precise. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Reduced Gesture Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reduced Gesture Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Desktop Productivity Motion

#### G0901 — Window Panel Resize

```yaml
id: G0901
name: "Window Panel Resize"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for window panel resize; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Window Panel Resize can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Window Panel Resize, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0902 — Split Pane Motion

```yaml
id: G0902
name: "Split Pane Motion"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for split pane motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Split Pane Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Split Pane Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0903 — Command Palette Enter

```yaml
id: G0903
name: "Command Palette Enter"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for command palette enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Command Palette Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Command Palette Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0904 — Command Result Selection

```yaml
id: G0904
name: "Command Result Selection"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for command result selection; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Command Result Selection can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Command Result Selection, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0905 — Context Menu Motion

```yaml
id: G0905
name: "Context Menu Motion"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for context menu motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Context Menu Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Context Menu Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0906 — Tooltip Quick Fade

```yaml
id: G0906
name: "Tooltip Quick Fade"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for tooltip quick fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tooltip Quick Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tooltip Quick Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0907 — Toolbar State Transition

```yaml
id: G0907
name: "Toolbar State Transition"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for toolbar state transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Toolbar State Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Toolbar State Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0908 — Dock Magnification

```yaml
id: G0908
name: "Dock Magnification"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for dock magnification; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Dock Magnification can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Dock Magnification, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0909 — File Tree Expand

```yaml
id: G0909
name: "File Tree Expand"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for file tree expand; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "File Tree Expand can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without File Tree Expand, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0910 — File Tree Collapse

```yaml
id: G0910
name: "File Tree Collapse"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for file tree collapse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "File Tree Collapse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without File Tree Collapse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0911 — Tab Reorder Motion

```yaml
id: G0911
name: "Tab Reorder Motion"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for tab reorder motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tab Reorder Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tab Reorder Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0912 — Tab Close Collapse

```yaml
id: G0912
name: "Tab Close Collapse"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for tab close collapse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tab Close Collapse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tab Close Collapse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0913 — Tab Preview Fade

```yaml
id: G0913
name: "Tab Preview Fade"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for tab preview fade; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tab Preview Fade can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tab Preview Fade, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0914 — Side Inspector Enter

```yaml
id: G0914
name: "Side Inspector Enter"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for side inspector enter; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Side Inspector Enter can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Side Inspector Enter, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0915 — Side Inspector Resize

```yaml
id: G0915
name: "Side Inspector Resize"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for side inspector resize; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Side Inspector Resize can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Side Inspector Resize, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0916 — Search Result Highlight

```yaml
id: G0916
name: "Search Result Highlight"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for search result highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Search Result Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Search Result Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0917 — Replace Transition

```yaml
id: G0917
name: "Replace Transition"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for replace transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Replace Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Replace Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0918 — Undo Transition

```yaml
id: G0918
name: "Undo Transition"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for undo transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Undo Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Undo Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0919 — Redo Transition

```yaml
id: G0919
name: "Redo Transition"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for redo transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Redo Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Redo Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0920 — Autosave Status

```yaml
id: G0920
name: "Autosave Status"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for autosave status; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Autosave Status can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Autosave Status, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0921 — Compile/Run Indicator

```yaml
id: G0921
name: "Compile/Run Indicator"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for compile/run indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Compile/Run Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Compile/Run Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0922 — Terminal Command Progress

```yaml
id: G0922
name: "Terminal Command Progress"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for terminal command progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Terminal Command Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Terminal Command Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0923 — Notification Center Reveal

```yaml
id: G0923
name: "Notification Center Reveal"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for notification center reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Notification Center Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Notification Center Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0924 — Workspace Switch

```yaml
id: G0924
name: "Workspace Switch"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for workspace switch; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Workspace Switch can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Workspace Switch, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0925 — High-Frequency Motion Suppression

```yaml
id: G0925
name: "High-Frequency Motion Suppression"
type: motion
category: desktop-productivity-motion
description: "A motion guideline for high-frequency motion suppression; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Favor speed. Repeated actions should use minimal motion. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "High-Frequency Motion Suppression can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without High-Frequency Motion Suppression, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Ai Agent Motion

#### G0926 — AI Typing Indicator

```yaml
id: G0926
name: "AI Typing Indicator"
type: motion
category: ai-agent-motion
description: "A motion guideline for ai typing indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "AI Typing Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without AI Typing Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0927 — Token Streaming

```yaml
id: G0927
name: "Token Streaming"
type: motion
category: ai-agent-motion
description: "A motion guideline for token streaming; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Token Streaming can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Token Streaming, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0928 — Streaming Cursor

```yaml
id: G0928
name: "Streaming Cursor"
type: motion
category: ai-agent-motion
description: "A motion guideline for streaming cursor; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Streaming Cursor can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Streaming Cursor, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0929 — Thinking Status Transition

```yaml
id: G0929
name: "Thinking Status Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for thinking status transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Thinking Status Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Thinking Status Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0930 — Tool-Use Indicator

```yaml
id: G0930
name: "Tool-Use Indicator"
type: motion
category: ai-agent-motion
description: "A motion guideline for tool-use indicator; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Tool-Use Indicator can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Tool-Use Indicator, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0931 — Search Progress Motion

```yaml
id: G0931
name: "Search Progress Motion"
type: motion
category: ai-agent-motion
description: "A motion guideline for search progress motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Search Progress Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Search Progress Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0932 — Source Arrival Animation

```yaml
id: G0932
name: "Source Arrival Animation"
type: motion
category: ai-agent-motion
description: "A motion guideline for source arrival animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Source Arrival Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Source Arrival Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0933 — Citation Highlight

```yaml
id: G0933
name: "Citation Highlight"
type: motion
category: ai-agent-motion
description: "A motion guideline for citation highlight; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Citation Highlight can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Citation Highlight, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0934 — Agent Step Progress

```yaml
id: G0934
name: "Agent Step Progress"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent step progress; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Step Progress can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Step Progress, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0935 — Agent Task Expansion

```yaml
id: G0935
name: "Agent Task Expansion"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent task expansion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Task Expansion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Task Expansion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0936 — Agent Approval Reveal

```yaml
id: G0936
name: "Agent Approval Reveal"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent approval reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Approval Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Approval Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0937 — Agent Pause Transition

```yaml
id: G0937
name: "Agent Pause Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent pause transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Pause Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Pause Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0938 — Agent Resume Transition

```yaml
id: G0938
name: "Agent Resume Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent resume transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Resume Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Resume Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0939 — Agent Cancel Transition

```yaml
id: G0939
name: "Agent Cancel Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent cancel transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Cancel Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Cancel Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0940 — Agent Completion Motion

```yaml
id: G0940
name: "Agent Completion Motion"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent completion motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Completion Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Completion Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0941 — Agent Failure Transition

```yaml
id: G0941
name: "Agent Failure Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for agent failure transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Agent Failure Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Agent Failure Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0942 — Retry Step Motion

```yaml
id: G0942
name: "Retry Step Motion"
type: motion
category: ai-agent-motion
description: "A motion guideline for retry step motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Retry Step Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Retry Step Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0943 — Generated Artifact Reveal

```yaml
id: G0943
name: "Generated Artifact Reveal"
type: motion
category: ai-agent-motion
description: "A motion guideline for generated artifact reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Generated Artifact Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Generated Artifact Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0944 — Regeneration Transition

```yaml
id: G0944
name: "Regeneration Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for regeneration transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Regeneration Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Regeneration Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0945 — Diff Highlight Animation

```yaml
id: G0945
name: "Diff Highlight Animation"
type: motion
category: ai-agent-motion
description: "A motion guideline for diff highlight animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Diff Highlight Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Diff Highlight Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0946 — AI Confidence Transition

```yaml
id: G0946
name: "AI Confidence Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for ai confidence transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "AI Confidence Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without AI Confidence Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0947 — Model Switch Transition

```yaml
id: G0947
name: "Model Switch Transition"
type: motion
category: ai-agent-motion
description: "A motion guideline for model switch transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Model Switch Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Model Switch Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0948 — Voice Waveform

```yaml
id: G0948
name: "Voice Waveform"
type: motion
category: ai-agent-motion
description: "A motion guideline for voice waveform; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Voice Waveform can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Voice Waveform, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0949 — Listening Pulse

```yaml
id: G0949
name: "Listening Pulse"
type: motion
category: ai-agent-motion
description: "A motion guideline for listening pulse; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Listening Pulse can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Listening Pulse, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0950 — AI Reduced Motion Mode

```yaml
id: G0950
name: "AI Reduced Motion Mode"
type: motion
category: ai-agent-motion
description: "A motion guideline for ai reduced motion mode; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Expose processing, tool use, approval, failure, and completion without fake theatrical 'thinking'. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "AI Reduced Motion Mode can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without AI Reduced Motion Mode, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Expressive Motion

#### G0951 — Spring Motion

```yaml
id: G0951
name: "Spring Motion"
type: motion
category: expressive-motion
description: "A motion guideline for spring motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Spring Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Spring Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0952 — Inertia

```yaml
id: G0952
name: "Inertia"
type: motion
category: expressive-motion
description: "A motion guideline for inertia; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Inertia can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Inertia, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0953 — Elastic Motion

```yaml
id: G0953
name: "Elastic Motion"
type: motion
category: expressive-motion
description: "A motion guideline for elastic motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Elastic Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Elastic Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0954 — Overshoot

```yaml
id: G0954
name: "Overshoot"
type: motion
category: expressive-motion
description: "A motion guideline for overshoot; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Overshoot can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Overshoot, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0955 — Anticipation

```yaml
id: G0955
name: "Anticipation"
type: motion
category: expressive-motion
description: "A motion guideline for anticipation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Anticipation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Anticipation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0956 — Follow-Through

```yaml
id: G0956
name: "Follow-Through"
type: motion
category: expressive-motion
description: "A motion guideline for follow-through; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Follow-Through can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Follow-Through, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0957 — Secondary Motion

```yaml
id: G0957
name: "Secondary Motion"
type: motion
category: expressive-motion
description: "A motion guideline for secondary motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Secondary Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Secondary Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0958 — Physics-Based Drag

```yaml
id: G0958
name: "Physics-Based Drag"
type: motion
category: expressive-motion
description: "A motion guideline for physics-based drag; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Physics-Based Drag can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Physics-Based Drag, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0959 — Magnetic Hover

```yaml
id: G0959
name: "Magnetic Hover"
type: motion
category: expressive-motion
description: "A motion guideline for magnetic hover; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Magnetic Hover can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Magnetic Hover, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0960 — Cursor-Follow Effect

```yaml
id: G0960
name: "Cursor-Follow Effect"
type: motion
category: expressive-motion
description: "A motion guideline for cursor-follow effect; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Cursor-Follow Effect can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Cursor-Follow Effect, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0961 — 3D Tilt

```yaml
id: G0961
name: "3D Tilt"
type: motion
category: expressive-motion
description: "A motion guideline for 3d tilt; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "3D Tilt can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without 3D Tilt, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0962 — Perspective Transition

```yaml
id: G0962
name: "Perspective Transition"
type: motion
category: expressive-motion
description: "A motion guideline for perspective transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Perspective Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Perspective Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0963 — Flip Transition

```yaml
id: G0963
name: "Flip Transition"
type: motion
category: expressive-motion
description: "A motion guideline for flip transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Flip Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Flip Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0964 — Blur Transition

```yaml
id: G0964
name: "Blur Transition"
type: motion
category: expressive-motion
description: "A motion guideline for blur transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Blur Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Blur Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0965 — Mask Transition

```yaml
id: G0965
name: "Mask Transition"
type: motion
category: expressive-motion
description: "A motion guideline for mask transition; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Mask Transition can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Mask Transition, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0966 — Clip-Path Reveal

```yaml
id: G0966
name: "Clip-Path Reveal"
type: motion
category: expressive-motion
description: "A motion guideline for clip-path reveal; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Clip-Path Reveal can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Clip-Path Reveal, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0967 — Liquid Morph

```yaml
id: G0967
name: "Liquid Morph"
type: motion
category: expressive-motion
description: "A motion guideline for liquid morph; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Liquid Morph can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Liquid Morph, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0968 — Liquid Glass Motion

```yaml
id: G0968
name: "Liquid Glass Motion"
type: motion
category: expressive-motion
description: "A motion guideline for liquid glass motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Liquid Glass Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Liquid Glass Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0969 — Glass Highlight Sweep

```yaml
id: G0969
name: "Glass Highlight Sweep"
type: motion
category: expressive-motion
description: "A motion guideline for glass highlight sweep; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Glass Highlight Sweep can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Glass Highlight Sweep, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0970 — Particle Burst

```yaml
id: G0970
name: "Particle Burst"
type: motion
category: expressive-motion
description: "A motion guideline for particle burst; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Particle Burst can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Particle Burst, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0971 — Confetti

```yaml
id: G0971
name: "Confetti"
type: motion
category: expressive-motion
description: "A motion guideline for confetti; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Confetti can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Confetti, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0972 — Particle Background

```yaml
id: G0972
name: "Particle Background"
type: motion
category: expressive-motion
description: "A motion guideline for particle background; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Particle Background can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Particle Background, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0973 — Noise Motion

```yaml
id: G0973
name: "Noise Motion"
type: motion
category: expressive-motion
description: "A motion guideline for noise motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Noise Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Noise Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0974 — Shader Animation

```yaml
id: G0974
name: "Shader Animation"
type: motion
category: expressive-motion
description: "A motion guideline for shader animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "Shader Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Shader Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

#### G0975 — WebGL Scene Motion

```yaml
id: G0975
name: "WebGL Scene Motion"
type: motion
category: expressive-motion
description: "A motion guideline for webgl scene motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Reserve for storytelling, games, or strong brand moments; never use as default product behavior. Prefer transform/opacity, keep interaction interruptible, and provide a reduced-motion alternative."
benefit: "WebGL Scene Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without WebGL Scene Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Too much intensity, distance, duration, repetition, or simultaneous motion can increase cognitive load, make the UI feel slower, cause motion discomfort, and weaken hierarchy."
```

### Motion Safety Performance

#### G0976 — Duration Discipline

```yaml
id: G0976
name: "Duration Discipline"
type: motion
category: motion-safety-performance
description: "A motion guideline for duration discipline; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Duration Discipline can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Duration Discipline, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0977 — Easing Discipline

```yaml
id: G0977
name: "Easing Discipline"
type: motion
category: motion-safety-performance
description: "A motion guideline for easing discipline; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Easing Discipline can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Easing Discipline, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0978 — Distance Discipline

```yaml
id: G0978
name: "Distance Discipline"
type: motion
category: motion-safety-performance
description: "A motion guideline for distance discipline; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Distance Discipline can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Distance Discipline, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0979 — Motion Frequency Limit

```yaml
id: G0979
name: "Motion Frequency Limit"
type: motion
category: motion-safety-performance
description: "A motion guideline for motion frequency limit; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Motion Frequency Limit can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Motion Frequency Limit, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0980 — One Primary Motion

```yaml
id: G0980
name: "One Primary Motion"
type: motion
category: motion-safety-performance
description: "A motion guideline for one primary motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "One Primary Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without One Primary Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0981 — No Infinite Decorative Loops

```yaml
id: G0981
name: "No Infinite Decorative Loops"
type: motion
category: motion-safety-performance
description: "A motion guideline for no infinite decorative loops; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "No Infinite Decorative Loops can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without No Infinite Decorative Loops, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0982 — Pause Continuous Motion

```yaml
id: G0982
name: "Pause Continuous Motion"
type: motion
category: motion-safety-performance
description: "A motion guideline for pause continuous motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Pause Continuous Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Pause Continuous Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0983 — Reduced Motion Support

```yaml
id: G0983
name: "Reduced Motion Support"
type: motion
category: motion-safety-performance
description: "A motion guideline for reduced motion support; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Reduced Motion Support can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Reduced Motion Support, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0984 — Avoid Layout Animation When Possible

```yaml
id: G0984
name: "Avoid Layout Animation When Possible"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid layout animation when possible; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Layout Animation When Possible can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Layout Animation When Possible, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0985 — GPU-Friendly Motion

```yaml
id: G0985
name: "GPU-Friendly Motion"
type: motion
category: motion-safety-performance
description: "A motion guideline for gpu-friendly motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "GPU-Friendly Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without GPU-Friendly Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0986 — Avoid Excess Blur

```yaml
id: G0986
name: "Avoid Excess Blur"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid excess blur; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Excess Blur can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Excess Blur, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0987 — Avoid Excess Box Shadow Animation

```yaml
id: G0987
name: "Avoid Excess Box Shadow Animation"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid excess box shadow animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Excess Box Shadow Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Excess Box Shadow Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0988 — Avoid Auto-Playing Carousels

```yaml
id: G0988
name: "Avoid Auto-Playing Carousels"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid auto-playing carousels; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Auto-Playing Carousels can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Auto-Playing Carousels, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0989 — Avoid Scroll Hijacking

```yaml
id: G0989
name: "Avoid Scroll Hijacking"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid scroll hijacking; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Scroll Hijacking can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Scroll Hijacking, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0990 — Avoid Entrance Animation Everywhere

```yaml
id: G0990
name: "Avoid Entrance Animation Everywhere"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid entrance animation everywhere; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Entrance Animation Everywhere can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Entrance Animation Everywhere, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0991 — Avoid Hover-Only Information

```yaml
id: G0991
name: "Avoid Hover-Only Information"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid hover-only information; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Hover-Only Information can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Hover-Only Information, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0992 — Avoid Motion as Sole State Cue

```yaml
id: G0992
name: "Avoid Motion as Sole State Cue"
type: motion
category: motion-safety-performance
description: "A motion guideline for avoid motion as sole state cue; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Avoid Motion as Sole State Cue can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Avoid Motion as Sole State Cue, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0993 — Preserve Focus During Animation

```yaml
id: G0993
name: "Preserve Focus During Animation"
type: motion
category: motion-safety-performance
description: "A motion guideline for preserve focus during animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Preserve Focus During Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Preserve Focus During Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0994 — Preserve Input During Animation

```yaml
id: G0994
name: "Preserve Input During Animation"
type: motion
category: motion-safety-performance
description: "A motion guideline for preserve input during animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Preserve Input During Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Preserve Input During Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0995 — Interruptible Motion

```yaml
id: G0995
name: "Interruptible Motion"
type: motion
category: motion-safety-performance
description: "A motion guideline for interruptible motion; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Interruptible Motion can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Interruptible Motion, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0996 — Cancelable Animation

```yaml
id: G0996
name: "Cancelable Animation"
type: motion
category: motion-safety-performance
description: "A motion guideline for cancelable animation; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Cancelable Animation can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Cancelable Animation, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0997 — Motion Performance Budget

```yaml
id: G0997
name: "Motion Performance Budget"
type: motion
category: motion-safety-performance
description: "A motion guideline for motion performance budget; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Motion Performance Budget can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Motion Performance Budget, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0998 — 60 FPS Target

```yaml
id: G0998
name: "60 FPS Target"
type: motion
category: motion-safety-performance
description: "A motion guideline for 60 fps target; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "60 FPS Target can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without 60 FPS Target, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G0999 — Functional Motion First

```yaml
id: G0999
name: "Functional Motion First"
type: motion
category: motion-safety-performance
description: "A motion guideline for functional motion first; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Functional Motion First can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Functional Motion First, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

#### G1000 — Animation Restraint

```yaml
id: G1000
name: "Animation Restraint"
type: motion
category: motion-safety-performance
description: "A motion guideline for animation restraint; use only when movement communicates a real state change, relationship, direction, progress, or feedback."
useWhen: "Treat these as normative constraints. They override decorative preferences."
benefit: "Animation Restraint can make change easier to perceive and the interface feel responsive without forcing the user to wait."
missingImpact: "Without Animation Restraint, the change may feel abrupt or less legible; this is acceptable if motion would add no useful information."
overuseRisk: "Violation causes slower interaction, distraction, accessibility problems, jank, loss of control, or misleading feedback."
```

---

# 2. Agent Validation Checklist

Before delivering a generated website, the AI MUST validate all of the following:

## UX

- The primary user goal is obvious within the first meaningful viewport.
- Navigation matches the information architecture.
- Important actions are distinguishable from secondary actions.
- Loading, success, empty, warning, and error states exist where relevant.
- Destructive actions are reversible or confirmed.
- Forms explain requirements and errors near the relevant input.
- Search provides recovery when zero results are returned.
- Repeated tasks do not require unnecessary repetition.
- Users retain control over privacy, permissions, notifications, and account data.
- The interface does not rely on hidden gestures without another discoverable path.

## UI

- Every interactive element has a clear role.
- Components are selected because they fit the task, not because they are fashionable.
- Cards are not used as a universal wrapper for every piece of content.
- Modals are not used when inline interaction would be simpler.
- Tooltips do not contain essential information.
- Tables are used for comparative structured data, not merely layout.
- Buttons use hierarchy: primary, secondary, tertiary.
- Icon-only controls have accessible names.
- Touch targets are large enough for mobile use.
- Layout works at narrow and wide widths without clipping or accidental horizontal page scrolling.

## Motion

- Every animation has a purpose.
- Routine interactions remain fast.
- Exit animations are not slower than necessary.
- No important action waits for decorative animation.
- Repeated expert workflows use minimal motion.
- Continuous decorative motion is absent or extremely limited.
- `prefers-reduced-motion` is supported.
- Motion is never the only state cue.
- Motion is interruptible or safely cancelable where users can interact rapidly.
- Transform/opacity are preferred for smooth animation.
- Large blur, shadow, layout, 3D, and particle effects are budgeted carefully.
- Scroll behavior remains native unless the product genuinely requires another model.
- No fake loading or fake progress is used.
- Animation does not decrease readability or contrast.

# 3. Failure Signals

The AI SHOULD reconsider the design when any of these appear:

- Every section uses the same card pattern.
- Every element fades in on scroll.
- Multiple things loop continuously.
- The hero consumes most of the page but explains little.
- UI is visually impressive but primary actions are unclear.
- Glass, blur, glow, gradients, or particles reduce readability.
- Users must wait for animations before interacting.
- Navigation transitions feel slower than navigation itself.
- Empty/loading/error states are missing.
- Mobile layout is a compressed desktop layout.
- Keyboard focus is invisible.
- Hover is required to discover important controls.
- AI agents act without progress, approval, cancellation, or rollback.
- Data visualizations animate for decoration rather than explanation.
- The page looks like a design showcase instead of a usable product.

# 4. Final Generation Principle

The AI SHOULD optimize for:

```text
clarity
+ usability
+ accessibility
+ speed
+ consistency
+ predictability
+ feedback
+ recovery
+ trust
+ user control
+ appropriate visual hierarchy
+ deliberate motion
```

The AI SHOULD minimize:

```text
friction
+ cognitive load
+ waiting
+ ambiguity
+ irreversible mistakes
+ unnecessary navigation
+ hidden controls
+ decorative motion
+ visual noise
+ animation fatigue
+ layout instability
```

A high-end interface is not the interface with the most components or animation.

It is the interface where **every component, state, transition, and effect has a reason to exist**.
