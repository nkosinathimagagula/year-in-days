# Design System Specification: The Luminous Void

## 1. Overview & Creative North Star

### Creative North Star: The Chromatic Chronometer
This design system is built on the philosophy of "The Chromatic Chronometer"—a high-end, editorial approach to time-tracking that treats data as light within a deep, infinite void. Instead of traditional, boxed-in calendar grids that feel like spreadsheets, we utilize expansive whitespace and luminous accents to make time feel fluid and valuable.

The system breaks the "template" look through **intentional asymmetry**. Data visualizations are not centered; they are weighted to create a sense of movement. We eschew rigid containers in favor of tonal depth, where the UI feels like a series of layered obsidian sheets illuminated by soft, neon-gas signals.

---

## 2. Colors

The color palette is anchored in a deep charcoal foundation, allowing vibrant neon tokens to define "action" and "progress."

### Surface Hierarchy & Nesting
To create a premium feel, we move away from flat layouts. We use the surface tiers to define importance:
*   **Base:** `surface` (#0e0e0e) for the primary application background.
*   **Layout Sections:** Use `surface-container-low` (#131313) to define large navigation or sidebar areas.
*   **Interaction Layers:** Use `surface-container-highest` (#262626) for the highest level of proximity, such as active cards or modals.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. Separation must be achieved through background shifts. A sidebar should be distinguished from the main content solely by moving from `surface-container-low` to `surface`. This creates a seamless, "molded" appearance rather than a constructed one.

### The Glass & Gradient Rule
For floating elements (like time-trackers or popovers), use **Glassmorphism**. Apply `surface_container` with a 60% opacity and a `backdrop-blur` of 20px. 
*   **Signature Textures:** For primary call-to-actions or progress completion states, use a subtle linear gradient transitioning from `primary` (#73ffe3) to `primary_container` (#00f5d4) at a 135-degree angle. This adds "soul" and depth to the neon accents.

---

## 3. Typography

The system utilizes **Inter** for its neutral, architectural precision. The hierarchy is designed to feel like a premium watch magazine.

*   **Display Scale:** Use `display-lg` and `display-md` sparingly for "Big Data" moments—total hours tracked or the current year. These should have a slight letter-spacing reduction (-0.02em) to feel tighter and more intentional.
*   **Headlines:** `headline-sm` should be used for section titles, paired with generous `margin-bottom` to let the content breathe.
*   **The Utility Layer:** `label-md` and `label-sm` are the workhorses for time stamps and metadata. These should always use `on_surface_variant` (#adaaaa) to reduce visual noise, switching to `primary` only when indicating an active state.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** and ambient light rather than structural lines.

*   **The Layering Principle:** Depth is achieved by "stacking." A card (`surface-container-high`) sits on a section (`surface-container-low`) which sits on the background (`surface`). This creates a soft, natural lift.
*   **Ambient Shadows:** For elements that must float (e.g., a "Start Timer" button), use extra-diffused shadows. 
    *   *Spec:* `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 10px rgba(115, 255, 227, 0.05);` (Note the slight tint of the `primary` color in the shadow to mimic neon glow).
*   **The Ghost Border:** If containment is functionally required (e.g., input fields), use a "Ghost Border."
    *   *Spec:* `outline-variant` (#484847) at **15% opacity**. It should be felt, not seen.
*   **Thin-Stroke Iconography:** All icons must use a 1px or 1.5px stroke weight. Avoid filled icons unless they represent a "Selected" state.

---

## 5. Components

### Buttons
*   **Primary:** High-vibrancy `primary` background with `on_primary` text. Use `radius.md` (0.375rem). No shadow, except on hover where a soft `primary_dim` glow is applied.
*   **Secondary/Tertiary:** No background. Use `on_surface` text with a `ghost border` that only appears on hover.

### Chips (Time Tags)
*   Used for categorizing tasks. Use `surface_container_highest` with a `label-sm` font. When selected, the chip's text changes to `secondary` (#b287fe) and a 2px "dot" of the same color appears to the left of the text.

### Progress Visualizations (The Heatmap)
*   Following the visual reference of a "Year in Days," use circular nodes.
*   **Inactive/Future:** Use `surface_variant` (#262626) with a 1px `outline_variant` (#484847).
*   **Active/Filled:** Use `primary` (#73ffe3). 
*   **Current/Today:** Use a `primary` stroke with a pulsing `primary_container` inner glow.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines between list items. Use 16px or 24px of vertical whitespace (from the spacing scale).
*   **Interactive State:** On hover, a list item's background should shift from `transparent` to `surface_container_low`.

### Input Fields
*   Minimalist design: No background fill. Only a bottom "Ghost Border." On focus, the border transitions to 100% opacity `primary` and the label slides up using `label-sm`.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional element. If a screen feels "empty," it is likely working.
*   **DO** use `secondary` (#b287fe) as a "Highlight" color for personal milestones or breaks, keeping `primary` strictly for work/active tracking.
*   **DO** ensure all thin-stroke icons have at least 24px of touch target, even if the icon itself is 16px.

### Don't
*   **DON'T** use pure white (#ffffff) for body text. Use `on_surface_variant` (#adaaaa) for long-form reading to prevent eye strain against the charcoal background.
*   **DON'T** use standard Material shadows. They are too "heavy" for this editorial aesthetic. Stick to Tonal Layering.
*   **DON'T** use 100% opaque borders. They break the "Luminous Void" illusion by creating hard cages for the data.
*   **DON'T** clutter the dashboard. If a piece of metadata isn't essential for the current minute, hide it in a "Details" layer.

---

## 7. Interaction Notes

*   **Micro-interactions:** When a timer starts, the primary accent should "breathe" (a subtle opacity animation from 100% to 70%).
*   **Transitions:** Use `cubic-bezier(0.22, 1, 0.36, 1)` for all surface transitions. This "Expo Out" curve feels snappier and more premium than a linear transition.