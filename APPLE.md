# APPLE.md

> Apple-inspired Liquid Glass design and interaction reference for PromptMika.
>
> This document combines project design guidance with source-derived behavior studied from Kyant0/AndroidLiquidGlass, especially the current `kmp` branch and its catalog examples. It is not an official Apple specification and should not be treated as one.

---

## 0. Reference Status

~~~yaml
document:
  name: "APPLE.md"
  purpose: "Apple-inspired Liquid Glass visual + behavioral design reference"
  status: "project-guideline"
  revision: "2026-09-25"

referenceImplementation:
  repository: "https://github.com/Kyant0/AndroidLiquidGlass"
  branch: "kmp"
  observedHead: "65ab177e90e5c1d8c62e70cf7755841982da65f6"
  observedHeadDate: "2026-08-26"
  latestObservedRelease: "2.0.1"
  releaseDate: "2026-08-26"
  artifact: "io.github.kyant0:backdrop:2.0.1"
  note: "High-level LiquidButton/LiquidToggle/LiquidSlider/LiquidBottomTabs are catalog examples, not shipped as high-level library components."

referencePolicy:
  copyReferenceBrands: false
  copyReferenceLogos: false
  copyReferenceText: false
  copyReferenceArtwork: false
  reuseVisualLanguageOnly: true

selectionRules:
  dominantStylesPerPage: 1
  secondaryStylesPerPageMax: 1
  secondaryVisualShareMax: "30%"
  minimumStyleConfidenceToAutoselect: 0.65

styleWeights:
  productCategoryFit: 0.25
  brandPersonalityFit: 0.20
  contentDensityFit: 0.15
  audienceFit: 0.15
  mediaAssetFit: 0.10
  interactionFit: 0.10
  accessibilityFit: 0.05
~~~

### Source boundary

Facts in sections explicitly labeled **Kyant reference behavior** come from the observed AndroidLiquidGlass `kmp` source. The design rules derived from those facts are PromptMika guidance, not claims about official Apple internals.

---

# 1. Core Design Philosophy

The interface should feel:

- minimal without feeling empty;
- layered without becoming busy;
- tactile without becoming playful everywhere;
- transparent without sacrificing legibility;
- responsive without excessive animation;
- physically coherent from idle state through press, drag, release, and settle;
- visually rich because material and motion are connected, not because every surface has effects.

Primary principles:

1. **Clarity before decoration**
2. **Consistency before novelty**
3. **Interaction is part of the material**
4. **Performance before visual complexity**
5. **Hierarchy before density**
6. **Depth with restraint**
7. **Content remains the focus**
8. **Motion should explain state**
9. **Glass should preserve context**
10. **Pressed glass may change material properties, not only scale**

The most important updated principle is:

> Liquid Glass is not a static combination of transparency, blur, and rounded corners. A convincing implementation changes optical behavior, geometry, lighting, and depth as the user touches and moves it.

---

# 2. Liquid Glass Mental Model

A Liquid Glass surface can be thought of as a pipeline:

~~~text
content behind the surface
        ↓
accurate backdrop sampling
        ↓
color / luminance treatment
        ↓
optional blur
        ↓
edge refraction / lens distortion
        ↓
optional chromatic dispersion
        ↓
surface tint
        ↓
rim highlight
        ↓
outer + inner depth
        ↓
foreground content
        ↓
interaction deformation
~~~

The strongest results come from treating these as separate systems.

Do not collapse the whole material into one generic "glass" style.

---

# 3. Material Layers

A complete glass component can have these independent layers.

## 3.1 Backdrop

The environment behind the component should remain spatially connected to the component.

The backdrop can contain:

- wallpaper;
- app content;
- media artwork;
- another glass surface;
- a slider track;
- a toggle track;
- selected navigation content;
- cursor/text layers;
- a custom drawn surface.

The user should feel that the glass is revealing or refracting the real environment beneath it.

## 3.2 Color treatment

Useful operations include:

- vibrancy / increased saturation;
- adaptive brightness;
- adaptive contrast;
- opacity;
- arbitrary color filters.

Color treatment should preserve legibility.

## 3.3 Blur

Blur is only one part of the material.

Use blur to create separation at rest, but do not assume stronger blur always means better glass.

An important behavioral pattern from the reference implementation is:

~~~text
idle control  → more frosted
pressed control → clearer / less blurred
~~~

For controls such as Toggle and Slider, blur decreases while refraction increases during press.

## 3.4 Lens refraction

Refraction bends the sampled backdrop near the material boundary.

The reference implementation exposes the equivalent of:

~~~text
refraction height
refraction amount
depth effect
chromatic aberration
~~~

Use refraction to communicate material thickness, especially during direct manipulation.

## 3.5 Chromatic dispersion

Subtle spectral separation can appear under stronger lens deformation.

It should normally be:

- absent or extremely weak at rest;
- stronger while pressed or dragged;
- concentrated around refracted boundaries;
- avoided as a constant rainbow border.

## 3.6 Surface tint

Surface color is separate from the optical backdrop.

Examples:

- neutral translucent white;
- neutral dark material;
- accent tint;
- context-adaptive tint.

A common interaction rule is to reduce opaque-looking surface treatment during direct manipulation, allowing the element to feel more lens-like.

## 3.7 Rim highlight

The edge highlight should suggest directional light, not a uniform white outline.

Highlight can vary by:

- width;
- blur radius;
- alpha;
- light angle;
- falloff;
- device orientation where appropriate.

## 3.8 Shadow and inner shadow

Outer shadow communicates separation.

Inner shadow communicates thickness and internal depth.

Inner shadow is especially useful while glass is pressed because it makes the surface feel more like a deforming optical object.

---

# 4. The Interaction State Model

Use these states as the default Liquid Glass interaction model.

## 4.1 Idle

Idle glass should be calm.

Typical properties:

~~~text
moderate blur
low deformation
low or medium refraction
stable geometry
subtle highlight
subtle surface tint
minimal spectral dispersion
~~~

## 4.2 Touch-down / hold

On touch-down, do not only change opacity.

Depending on component type:

~~~text
scale increases
blur decreases
refraction increases
highlight strengthens
inner shadow appears
surface fill becomes more transparent
pointer highlight appears
chromatic aberration may appear
~~~

The transition should feel immediate but spring-driven.

## 4.3 Drag

Direct manipulation should connect the component to the finger or pointer.

Possible responses:

~~~text
position follows pointer
movement is damped rather than perfectly 1:1
shape stretches in direction of motion
velocity changes scaleX / scaleY independently
light or highlight follows pointer position
neighboring or underlying content becomes part of the sampled backdrop
~~~

## 4.4 Release

Release should resolve semantic state, not merely stop motion.

Examples:

- selector rounds to nearest tab;
- toggle resolves to on/off;
- slider settles on its value;
- elastic offset returns to rest;
- highlight fades;
- inner shadow decreases;
- refraction returns toward idle;
- X and Y shape scales recover with springs.

## 4.5 Settled

Once settled, return to the calm material state.

The release should leave no residual deformation unless the component intentionally preserves position, such as a freely draggable magnifier or lock-screen element.

---

# 5. Shared Motion Principles

## Spring response

Use spring motion for:

- press scale;
- release scale;
- navigation selector movement;
- snap-to-state behavior;
- elastic container offsets;
- overscroll recovery.

Avoid using one identical spring for every axis and property.

Independent X/Y recovery can make a component feel soft instead of rigid.

## Velocity deformation

Velocity may affect geometry.

Conceptually:

~~~text
slow movement:
    ( glass )

fast horizontal movement:
    (==== glass ====)

release:
    ( glass )
~~~

Use this subtly.

The component must remain readable and recognizable throughout deformation.

## Damped pointer following

For buttons or floating controls, pointer movement should often be resisted.

Large finger travel should produce proportionally smaller component travel.

This creates a feeling of tension rather than making the control detach from its logical position.

---

# 6. Component Behavior Specifications

The following sections capture the current catalog behavior studied from:

- `app/src/commonMain/kotlin/com/kyant/backdrop/catalog/components/`
- `app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/`

These should be treated as behavioral references, not mandatory literal values for every project.

---

# 7. Liquid Button

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/components/LiquidButton.kt

## Idle

Reference recipe:

~~~text
shape: Capsule
height: about 48dp
vibrancy: enabled
blur: about 2dp
refraction height: about 12dp
refraction amount: about 24dp
~~~

The catalog demonstrates:

- transparent button;
- translucent surface button;
- blue-tinted button;
- orange-tinted button.

## Hold

When the user presses and holds:

- a pointer-centered interactive highlight appears;
- the control expands slightly;
- the material remains readable;
- the control begins responding to finger movement.

The press should feel like grabbing the material.

## Drag while held

The button may follow the pointer slightly.

The reference behavior uses damped movement, so the button does not travel 1:1 with the finger.

Horizontal drag contributes more to horizontal stretch.

Vertical drag contributes more to vertical stretch.

Large displacement is increasingly resisted.

## Release

- click action resolves;
- highlight fades;
- translation returns;
- geometry springs back to rest.

### PromptMika rule

Do not implement Liquid Button press as only:

~~~text
opacity 1 → 0.8
~~~

Prefer a combination of touch-position light, subtle expansion, damped movement, and spring recovery.

---

# 8. Liquid Toggle

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/components/LiquidToggle.kt

## Structure

The toggle uses:

- a colored track;
- a separate captured track backdrop;
- a glass thumb;
- a combined backdrop containing page + track.

Approximate reference sizes:

~~~text
track: 64 × 28dp
thumb interaction surface: 40 × 24dp
~~~

## Idle

The thumb is relatively frosted:

~~~text
blur: about 8dp
refraction: effectively low / zero
surface: white-ish
scale: 1
inner shadow: absent
chromatic aberration: absent
~~~

## Hold

Press progress changes the material continuously.

Toward full press:

~~~text
scale              → about 1.5×
blur               → 0
refraction height  → about 5dp
refraction amount  → about 10dp
chromatic aberration → enabled
ambient highlight  → stronger
inner shadow       → about 4dp
white surface      → fades away
~~~

This is a key design pattern:

> Toggle thumb transitions from frosted control to clearer optical lens while manipulated.

## Drag

- horizontal movement directly changes the toggle fraction;
- the thumb follows continuously rather than jumping;
- the colored track becomes visually incorporated into the thumb through combined backdrop sampling;
- movement velocity modifies X/Y shape scale.

## Release

If the interaction was a real drag:

~~~text
fraction < 0.5  → OFF
fraction >= 0.5 → ON
~~~

If it was effectively a press without drag:

~~~text
OFF → ON
ON  → OFF
~~~

Then the thumb springs toward its final position and returns to its idle material.

### PromptMika rule

A high-quality glass toggle should visually merge with the track during manipulation rather than behaving like an unrelated white circle sliding above it.

---

# 9. Liquid Slider

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/components/LiquidSlider.kt

## Structure

The slider uses:

- neutral track;
- accent-filled portion;
- captured track backdrop;
- glass thumb;
- combined page + track sampling.

## Idle

Typical reference behavior:

~~~text
thumb blur: about 8dp
surface: white-ish
scale: 1
refraction: low
~~~

## Hold

Toward full press:

~~~text
scale               → about 1.5×
blur                → 0
refraction height   → about 10dp
refraction amount   → about 14dp
chromatic aberration → enabled
ambient highlight   → visible
inner shadow        → visible
white surface       → fades
~~~

Again, the material changes from frosted to optical.

## Drag

- value follows continuous horizontal movement;
- LTR and RTL are respected;
- the thumb samples the track under it;
- the thumb stretches or squashes with movement velocity.

## Direct track tap

Tapping an empty point on the track:

~~~text
tap X
→ convert position into slider value
→ animate thumb toward target
→ update value
~~~

The user does not have to grab the thumb first.

## Release

- final value remains;
- press material recedes;
- thumb shape returns;
- highlight and inner depth fade toward idle.

### PromptMika rule

Slider movement should feel continuous and spatially attached to the track. Do not make the thumb visually float above a track it does not sample or respond to.

---

# 10. Liquid Bottom Tabs / Bottom Navigation

References:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/components/LiquidBottomTabs.kt
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/components/LiquidBottomTab.kt

This is one of the most important reference components.

## Layer model

The component effectively contains:

~~~text
normal visible tab content
        ↓
large outer glass capsule
        ↓
captured accent-treated tab content
        ↓
moving selected glass capsule
~~~

A hidden/captured representation of the tabs is tinted with the accent color and exported as a backdrop.

The moving selector samples:

~~~text
page backdrop
+
accent-treated tab backdrop
~~~

This allows selected content to appear transformed through the lens rather than simply swapping icon color.

## Idle

The outer bar is a stable glass capsule.

Reference outer material:

~~~text
vibrancy
blur: about 8dp
lens: about 24dp / 24dp
translucent container surface
~~~

The selector rests exactly under the selected tab.

## Hold selected indicator

Holding the active glass selector triggers a much stronger material state.

The selector grows from roughly:

~~~text
1.0
→ 78 / 56 ≈ 1.39
~~~

At the same time:

~~~text
refraction height  0 → about 10dp
refraction amount  0 → about 14dp
highlight alpha    0 → 1
outer shadow alpha 0 → 1
inner shadow       0 → about 8dp
chromatic aberration becomes visible
resting surface treatment fades
~~~

The outer container also scales slightly during the hold.

### Design interpretation

The held selector should feel thicker, clearer, more refractive, and more physically manipulable than the idle selector.

## Scrub / drag between tabs

While holding:

- selector position is continuous, not integer-only;
- the user can scrub between tabs;
- the selected lens follows the pointer;
- velocity changes the selector geometry;
- the entire outer bar yields slightly in the drag direction.

Conceptual values may pass through:

~~~text
0.0
0.37
0.88
1.24
1.75
2.0
~~~

rather than immediately switching:

~~~text
0 → 1 → 2
~~~

## Container resistance

The selected lens moves substantially.

The outer bar moves only a few dp in the drag direction, using an eased/damped offset.

Conceptually:

~~~text
finger            ─────────────→
selector          ─────────→
outer container   ─→
~~~

This gives the feeling that the selected element can pull against the larger glass body.

## Velocity deformation

Horizontal velocity affects X and Y scale differently.

Fast movement can stretch the selected material horizontally while slightly compensating vertically.

Do not exaggerate this into cartoon deformation.

## Release

On release:

~~~text
continuous selector position
→ round to nearest valid tab
→ spring selector to exact tab center
→ spring outer bar offset to zero
→ update selected destination
→ return optical properties toward idle
~~~

## Tap another tab

Direct tapping is a separate interaction path:

~~~text
tap destination
→ selected index changes
→ selector animates to destination
~~~

This is different from hold + scrub.

### PromptMika rule

A high-quality glass bottom navbar should support a physically coherent selected lens. If implementing the advanced version, distinguish between:

- direct tab tap;
- press-and-hold selected indicator;
- continuous scrub;
- velocity deformation;
- snap-to-nearest release.

Do not reduce the pattern to an underline sliding between icons.

---

# 11. Dialog Glass

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/DialogContent.kt

## Material

Reference behavior combines:

- background dimming;
- brightness/saturation treatment;
- stronger blur;
- strong depth-enabled refraction;
- plain rim highlight;
- translucent container surface.

Approximate reference:

~~~text
blur:
  light theme ≈ 16dp
  dark theme ≈ 8dp

refraction:
  height ≈ 24dp
  amount ≈ 48dp
  depth effect = true
~~~

## Interaction

The dialog body is mostly a static material demonstration.

Its action buttons use conventional click interactions.

### PromptMika rule

Modal glass may be visually stronger than ordinary controls because it needs separation, but content readability outranks optical realism.

---

# 12. Control Center Glass

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/ControlCenterContent.kt

The current catalog models the **entire control center presentation** as an interactive glass state.

## Closed → open transition

As vertical presentation progress goes from 0 to 1:

~~~text
background dim          0 → about 40%
background blur         0 → about 4dp
glass alpha             0 → 1
glass Y translation     about -48dp → 0
refraction height       0 → about 24dp
refraction amount       0 → about 48dp
~~~

The glass therefore materializes optically as it enters.

## Vertical drag

Dragging vertically changes the presentation progress directly.

## Release

Reference resolution:

~~~text
upward velocity   → close
downward velocity → open
near-zero velocity:
  progress < 0.5  → close
  progress >= 0.5 → open
~~~

Open and close use spring behavior.

## Overscroll beyond open

The implementation allows an elastic progress representation beyond the normal range.

During overscroll:

- horizontal scale compresses slightly;
- vertical scale expands slightly;
- spacing between tile groups increases.

This makes the layout feel connected rather than hitting a hard wall.

## Orientation-aware rim light

The highlight angle can follow device gravity/orientation.

This means physical device orientation can change the apparent light direction across glass edges.

### PromptMika rule

For large glass environments, animate the *material entering the scene*, not only its position.

---

# 13. Magnifier

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/MagnifierContent.kt

## Backdrop composition

The reference combines:

~~~text
page backdrop
+ text/content backdrop
+ cursor backdrop
~~~

## Behavior

A small caret/cursor is freely draggable.

The magnifier follows above it by roughly 80dp.

Inside the lens, the sampled scene is transformed to approximately:

~~~text
1.5× magnification
~~~

Reference lens treatment includes:

~~~text
refraction height ≈ 8dp
refraction amount ≈ 24dp
depth effect = true
chromatic aberration = true
inner shadow ≈ 16dp
~~~

### PromptMika rule

When implementing magnification, the lens should transform the sampled content itself. Do not fake magnification with only a translucent oval.

---

# 14. Lock Screen Glass

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/LockScreenContent.kt

The clock uses an SDF mask rather than a standard rounded rectangle.

Reference optical treatment:

~~~text
brightness ≈ -0.1
contrast ≈ 0.75
saturation ≈ 1.5
blur ≈ 2dp
white overlay ≈ 25%
~~~

## Interaction

The clock can be dragged freely in two dimensions.

It remains where the user leaves it.

The sampled wallpaper remains spatially correct as the clock moves.

### PromptMika rule

Custom-shaped glass is valid when the shape carries meaning. Avoid arbitrary novelty shapes.

---

# 15. Adaptive Luminance Glass

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/AdaptiveLuminanceGlassContent.kt

This demonstrates content-adaptive material.

## Sampling

The reference:

1. records what the glass sees;
2. converts it to an image;
3. downsamples to 5 × 5;
4. reads 25 pixels;
5. computes average luminance;
6. animates optical parameters from that result.

## Bright background behavior

Toward bright content:

- brightness increases;
- contrast can decrease;
- blur increases toward roughly 16dp;
- text becomes dark.

## Dark background behavior

Toward dark content:

- brightness treatment becomes darker;
- contrast remains stronger;
- blur can decrease toward roughly 2dp;
- text becomes light.

Saturation remains elevated and depth-enabled refraction stays present.

## Transform gesture

The glass can:

- pan;
- pinch zoom;
- rotate.

Material adaptation continues as the sampled environment changes.

### PromptMika rule

For glass over arbitrary artwork, wallpapers, or media, consider adaptive contrast/luminance instead of one universal tint.

---

# 16. Glass Playground

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/GlassPlaygroundContent.kt

## Main glass interaction

The main glass can simultaneously:

- pan;
- pinch zoom;
- rotate.

## Runtime-adjustable properties

The sheet controls:

~~~text
corner radius
blur radius
refraction height
refraction amount
chromatic aberration
~~~

## Important implementation detail

In the observed catalog source, chromatic aberration is effectively treated as:

~~~text
value == 0 → disabled
value > 0  → enabled
~~~

The slider value itself is not used as a continuously varying dispersion-strength parameter in that demo.

## Settings sheet

The settings sheet is itself glass.

Reference material:

~~~text
vibrancy
blur ≈ 4dp
lens ≈ 16dp / 32dp
plain highlight
white surface ≈ 50%
~~~

The sheet exports itself as a backdrop so child LiquidSliders can sample the correct local glass environment.

## Reset

Reset animates:

~~~text
translation → zero
zoom → 1
rotation → 0
~~~

and restores optical defaults.

### PromptMika rule

Nested glass components should sample the correct local environment. A child glass control should not appear visually disconnected from a parent glass sheet.

---

# 17. Progressive Blur

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/ProgressiveBlurContent.kt

This is a static optical demonstration.

The effect:

- applies blur;
- applies a runtime shader mask;
- fades blur intensity spatially;
- mixes in tint progressively.

Useful for:

- top navigation overlays;
- bottom controls over media;
- fade-to-glass transitions;
- scroll edge readability;
- media-player overlays.

### PromptMika rule

Use progressive blur when a full uniform blur would hide too much content.

---

# 18. Scroll Container

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/ScrollContainerContent.kt

The normal scroll demo creates multiple refractive cards.

Reference effect:

~~~text
vibrancy
refraction height ≈ 16dp
refraction amount ≈ 32dp
~~~

No blur is required in this example.

The important behavior is spatial correctness while scrolling.

### PromptMika rule

Glass should remain visually attached to what is actually behind it during scrolling. Incorrect backdrop coordinates immediately break the illusion.

---

# 19. Lazy Scroll Container

Reference:
https://github.com/Kyant0/AndroidLiquidGlass/blob/kmp/app/src/commonMain/kotlin/com/kyant/backdrop/catalog/destinations/LazyScrollContainerContent.kt

This applies the same refractive treatment in a lazy list with 100 items.

The purpose is partly scalability and coordinate correctness.

### PromptMika rule

Large glass lists should preserve virtualization. Do not keep off-screen expensive glass layers alive unnecessarily.

---

# 20. Backdrop Composition Patterns

The observed library provides several reusable conceptual patterns.

## Layer backdrop

Capture actual UI into a reusable graphics layer.

Use when the glass must reveal real content behind it.

## Canvas backdrop

Generate a backdrop procedurally.

Useful for flat colors or custom drawing.

## Combined backdrop

Merge multiple backdrop sources.

Use when glass should optically include:

- page + track;
- page + selected content;
- page + text + cursor;
- parent glass + child-local surface.

## Wrapped backdrop

Intercept and transform how another backdrop is drawn.

Useful for scaling or modifying only one backdrop contribution.

## Exported backdrop

Allow the rendered output of a glass component to become a backdrop source for descendants.

This is important for nested glass.

---

# 21. Rendering Order

A useful mental model for a glass component is:

~~~text
onDrawBehind
    ↓
processed backdrop
    ↓
surface tint/material
    ↓
normal component content
    ↓
onDrawFront
~~~

Keep backdrop optics separate from foreground content whenever possible.

This makes it easier to tune readability without destroying the material.

---

# 22. Platform Capability Notes

The observed Backdrop library declares Android minSdk 21, but not every effect is available equally on every Android version.

Observed platform gates:

~~~text
RenderEffect support:
Android 12 / API 31+

RuntimeShader support:
Android 13 / API 33+
~~~

Implications:

- older Android versions may not receive the full blur/effect pipeline;
- Android 12 can support RenderEffect-based effects but not the full runtime-shader lens;
- Android 13+ supports the reference runtime-shader refraction path;
- Skiko targets report both capabilities as supported in the current implementation.

### Fallback rule

A component must remain usable without full optical effects.

Fallback priority:

~~~text
shape
→ contrast
→ surface tint
→ border/highlight
→ shadow
→ motion
→ blur
→ refraction
→ chromatic dispersion
~~~

Never make core usability depend on RuntimeShader availability.

---

# 23. Shape Constraints

The observed lens implementation is designed around rounded-rectangle-like shapes.

Supported reference categories include:

- Kyant RoundedRectangularShape;
- Compose CornerBasedShape;
- rounded capsules and rounded rectangles built from these families.

Custom shapes may require a custom shader or SDF path.

Do not assume arbitrary shapes can use the same lens shader.

---

# 24. Glass Intensity Levels

## Subtle glass

Use for:

- navigation background;
- compact toolbar;
- secondary floating controls.

Characteristics:

- restrained optical treatment;
- low shadow;
- high readability.

## Standard glass

Use for:

- panels;
- controls;
- sheets;
- media controls.

Characteristics:

- moderate backdrop adaptation;
- clear rim separation;
- contextual tint.

## Strong optical glass

Use for:

- directly manipulated selector;
- magnifier;
- special hero control;
- temporary focus object.

Characteristics:

- stronger refraction;
- possible chromatic dispersion;
- visible inner depth;
- stronger deformation.

Strong glass should generally be temporary or highly localized.

---

# 25. Navigation Rules

For bottom navigation inspired by the reference behavior:

- active destination must remain obvious;
- selected glass should be one coherent object;
- direct tap and hold-scrub are distinct interactions;
- holding may increase material thickness/refraction;
- dragging may pull the container slightly;
- release resolves to nearest destination;
- semantic state should update only when appropriate;
- icons and labels remain readable during deformation;
- reduced-motion mode should use simpler position/opacity transitions.

Do not use excessive glass on every icon individually when one coherent navigation material is enough.

---

# 26. Buttons and Controls

Primary actions should remain obvious without relying on effects.

Use:

- clear content;
- sufficient hit target;
- strong state communication;
- restrained accent.

Glass controls should support:

- idle;
- pressed;
- focused;
- selected where applicable;
- disabled;
- loading where applicable.

For pointer/touch controls, preserve semantic roles and accessibility behavior.

---

# 27. Adaptive Color and Media

When a glass surface sits above media:

- sample dominant/background luminance where practical;
- preserve text contrast;
- avoid applying every sampled color simultaneously;
- prefer one dominant accent family;
- reduce saturation if extracted colors become muddy;
- consider more blur on bright noisy imagery;
- consider less blur but stronger contrast treatment on dark imagery.

The goal is legibility plus contextual belonging.

---

# 28. Typography

Typography should carry hierarchy before effects do.

Use:

- strong readable primary text;
- reduced-emphasis secondary text;
- concise labels;
- predictable type scale;
- stable text during animation.

Avoid:

- translucent body text over complex imagery;
- huge headings added only to make a screen feel designed;
- animated typography that competes with glass motion.

---

# 29. Layout

Prefer:

- clear grouping;
- generous but purposeful spacing;
- strong alignment;
- fewer containers;
- meaningful negative space.

Avoid:

- glass cards nested inside glass cards without a backdrop reason;
- random floating surfaces;
- excessive separators;
- multiple competing material styles.

Before adding a glass container, ask:

> Does this surface represent a meaningful layer, control, focus state, or spatial relationship?

If no, spacing may be better.

---

# 30. Accessibility

Liquid Glass must not reduce usability.

Requirements:

- sufficient foreground contrast;
- visible keyboard focus;
- readable text;
- comfortable hit targets;
- meaningful labels for icon-only actions;
- reduced-motion support;
- reduced-transparency fallback where practical;
- state should not be communicated only by color;
- direct-manipulation gestures must have simpler alternatives.

For advanced bottom-tab scrubbing, direct tab tapping must still work.

For slider/toggle dragging, keyboard/accessibility actions should remain available on supported platforms.

---

# 31. Performance

Glass can be expensive because it may involve:

- captured layers;
- off-screen composition;
- blur;
- custom runtime shaders;
- multiple backdrop sources;
- shadows;
- repeated transparency;
- per-frame transforms.

Rules:

- limit simultaneous large blurred areas;
- avoid continuous full-screen blur if a smaller region works;
- reuse shader instances or cache them;
- avoid recreating expensive layers unnecessarily;
- virtualize long lists;
- animate transform and opacity when possible;
- profile on weaker devices;
- simplify chromatic aberration before sacrificing interaction responsiveness;
- degrade optics before degrading input latency.

A beautiful glass control that lags under touch is unsuccessful.

---

# 32. Anti-Patterns

Avoid:

- "glass" implemented as only 20% white + blur;
- permanent rainbow edges;
- heavy blur everywhere;
- every card becoming glass;
- random gradients with no material logic;
- one generic press scale for every control;
- navigation selector that visually teleports;
- direct-manipulation controls that do not follow the pointer;
- glass that samples the wrong background region;
- nested glass with disconnected backdrops;
- constant strong inner shadows;
- huge glowing borders;
- low-contrast text;
- copied Apple branding, logos, or artwork;
- motion that blocks interaction;
- expensive effects with no visible benefit.

---

# 33. AI Agent Rules

When an AI agent is asked to build "Apple Liquid Glass", "iOS-like glass", or a similar interface:

1. First determine the component role.
2. Build correct hierarchy and interaction without effects.
3. Define backdrop source.
4. Define idle material.
5. Define press/hold material.
6. Define drag behavior if direct manipulation exists.
7. Define velocity deformation only if useful.
8. Define release/snap behavior.
9. Add adaptive contrast.
10. Add accessibility fallbacks.
11. Profile performance.
12. Remove effects that do not improve perception.

The agent must not assume:

~~~text
Liquid Glass = backdrop blur + transparent white
~~~

For interactive controls, specify:

~~~yaml
interactionModel:
  idle:
    blur: ...
    refraction: ...
    surface: ...
    highlight: ...
    scale: ...
  pressed:
    blur: ...
    refraction: ...
    surface: ...
    highlight: ...
    innerDepth: ...
    scale: ...
  drag:
    followsPointer: ...
    damping: ...
    velocityDeformation: ...
    backdropComposition: ...
  release:
    semanticResolution: ...
    springReturn: ...
~~~

---

# 34. Component Selection Guidance

Use the behavioral pattern that fits the task.

~~~text
Simple action
→ Liquid Button pattern

Binary state
→ Liquid Toggle pattern

Continuous value
→ Liquid Slider pattern

Persistent destinations
→ Liquid Bottom Tabs pattern

Modal focus
→ Dialog glass

Large transient controls overlay
→ Control Center pattern

Optical inspection
→ Magnifier pattern

Wallpaper/media overlay
→ Adaptive Luminance pattern

Scroll edge readability
→ Progressive Blur pattern

Custom-shaped display element
→ SDF / Lock Screen pattern
~~~

Do not apply advanced hold-drag physics to components that do not benefit from direct manipulation.

---

# 35. Quality Checklist

Before considering a Liquid Glass screen complete, verify:

- [ ] Primary content is obvious.
- [ ] Glass has a real structural or interaction purpose.
- [ ] Backdrop sampling is spatially correct.
- [ ] Idle state is calm.
- [ ] Press state is visibly responsive.
- [ ] Directly manipulated glass follows the pointer appropriately.
- [ ] Velocity deformation is subtle.
- [ ] Release resolves semantic state correctly.
- [ ] Navigation snapping is predictable.
- [ ] Text remains readable over bright and dark backgrounds.
- [ ] Surface tint and optical backdrop are separated conceptually.
- [ ] Highlight direction is coherent.
- [ ] Chromatic aberration is restrained.
- [ ] Inner shadow appears only where depth benefits.
- [ ] Reduced-motion behavior remains usable.
- [ ] Fallback behavior works without runtime shaders.
- [ ] Long lists remain performant.
- [ ] Nested glass samples the intended local backdrop.
- [ ] Accent color usage is restrained.
- [ ] The result is inspired by references rather than copied literally.

---

# 36. Implementation Order

When building a new glass component:

~~~text
1. Semantic component behavior
2. Layout and hit targets
3. Correct backdrop source
4. Idle surface
5. Press / hold transition
6. Drag physics
7. Release / snap semantics
8. Color adaptation
9. Blur
10. Refraction
11. Highlight
12. Inner/outer depth
13. Chromatic dispersion if justified
14. Reduced-motion / reduced-transparency fallback
15. Performance profiling
~~~

This order prevents effects from hiding weak interaction design.

---

# 37. Reference Library Notes

## Kyant0 / AndroidLiquidGlass

Repository:
https://github.com/Kyant0/AndroidLiquidGlass

Current observed state:

~~~text
branch: kmp
head: 65ab177e90e5c1d8c62e70cf7755841982da65f6
head date: 2026-08-26
latest observed release: 2.0.1
release note: Compose updated to 1.12.0
~~~

The 2.x line is Compose Multiplatform.

The published library provides low-level Backdrop/effect primitives.

The high-level catalog components are examples that developers are expected to adapt or recreate.

## Other original references

Android:
https://github.com/QmDeve/AndroidLiquidGlassView

React:
https://github.com/rdev/liquid-glass-react

These are implementation references, not authoritative Apple design specifications.

---

# 38. Final Principle

The strongest Liquid Glass interfaces do not look like static frosted acrylic.

They behave like a coherent material.

At rest they are calm.

On contact they acknowledge the user.

While held they can become clearer, thicker, brighter at the edge, and more refractive.

While dragged they remain attached to the pointer and may stretch with velocity.

On release they resolve meaningfully and settle with controlled spring motion.

The intended hierarchy is:

~~~text
Usability
→ Semantic behavior
→ Spatial continuity
→ Interaction feedback
→ Accessibility
→ Performance
→ Material realism
→ Decorative polish
~~~

When visual spectacle conflicts with usability, usability wins.
