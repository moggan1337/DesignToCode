# DesignToCode

> Transform designs to code with **BOLD** aesthetics. No AI slop.

[![npm version](https://img.shields.io/npm/v/design-to-code.svg)](https://www.npmjs.com/package/design-to-code)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Philosophy

We believe in design that makes a statement. No purple gradients on white backgrounds. No Inter font. No generic "modern" aesthetics that look like every other SaaS product.

**DesignToCode** transforms your design descriptions into production-ready code using:

- **Unique typography**: Fraunces, Archivo Black, Bebas Neue, Space Mono, Newsreader
- **Bold colors**: Electric lime, hot coral, vivid teal, burnt orange
- **Hard shadows**: No blur, just punch
- **Unexpected layouts**: Asymmetric, blob-shaped elements, raw edges

## Features

- 🎨 **Design Parser** - Parse designs from text, JSON, or structured objects
- 🖌️ **Bold Aesthetic Engine** - Apply non-AI-slop design principles
- ⚡ **Code Generator** - Output to React, Vue, Svelte, HTML, or pure CSS
- 🧩 **UI Component Library** - Pre-built bold components ready to use
- 🎯 **Design Tokens** - CSS variables for consistent theming

## Installation

```bash
npm install design-to-code
```

Or use globally:

```bash
npm install -g design-to-code
```

## Quick Start

### CLI Usage

```bash
# Generate from text description
design-to-code generate "# Hello World" -f html -o output.html

# Generate from file
design-to-code generate design.json -f react -o Component.jsx

# Generate a UI component
design-to-code component button -a '"danger"'

# List available components
design-to-code list components

# Generate example
design-to-code example -f react -o Example.jsx

# Export design tokens
design-to-code tokens -f css -o tokens.css
```

### Programmatic Usage

```typescript
import { DesignToCode } from 'design-to-code';

const dtc = new DesignToCode();

// Transform a design
const result = dtc.transform('# Hello World\n\nA bold paragraph', 'react');
console.log(result.code);

// Get a pre-built component
const button = dtc.getComponent('button', 'primary');
console.log(button);

// Get design tokens
const tokens = dtc.getTokens();
console.log(tokens.colors);
```

## Design Rules

We follow strict anti-AI-slop principles:

### ❌ Never Use
- Inter, Roboto, Arial, Space Grotesk
- Purple gradients on white backgrounds
- Blurred soft shadows
- 8px border radius everywhere
- "Modern and clean" buzzwords

### ✅ Always Use
- **Fraunces** for display text (variable, serif)
- **Archivo Black** for headings
- **Bebas Neue** for impact titles
- **Space Mono** for code/labels
- **Newsreader** for body text
- **DM Sans** for UI elements
- **JetBrains Mono** for code

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Ink | `#0D0D0D` | Primary text, borders |
| Paper | `#F5F0E8` | Warm backgrounds |
| Electric Lime | `#CCFF00` | Primary accent |
| Hot Coral | `#FF4D4D` | Danger/attention |
| Vivid Teal | `#00CED1` | Secondary accent |
| Burnt Orange | `#E65C00` | Tertiary accent |
| Deep Plum | `#3D1A3D` | Dark accent |
| Electric Blue | `#0066FF` | Links/info |

## API Reference

### DesignToCode Class

```typescript
const dtc = new DesignToCode();
```

#### Methods

##### `transform(input, framework)`
Transform a design description to code.

```typescript
// From string
const result = dtc.transform('# Title\n\nParagraph text', 'html');

// From JSON
const result = dtc.transform({
  type: 'heading',
  content: 'Hello',
  styles: { level: '1' }
}, 'react');

// From array
const result = dtc.transform([
  { type: 'heading', content: 'Title' },
  { type: 'paragraph', content: 'Text' }
], 'vue');
```

**Supported frameworks:** `html`, `react`, `vue`, `svelte`, `css`

##### `getTokens()`
Returns the complete design token system.

```typescript
const tokens = dtc.getTokens();
// {
//   colors: { ink: '#0D0D0D', ... },
//   typography: { h1: { fontFamily: '...', ... }, ... },
//   spacing: { sm: '1rem', ... },
//   borderRadius: { none: '0', ... },
//   shadows: { md: '4px 4px 0px #0D0D0D', ... }
// }
```

##### `getCSSVariables()`
Returns CSS custom properties for theming.

```css
:root {
  --color-ink: #0D0D0D;
  --color-electric-lime: #CCFF00;
  /* ... */
}
```

##### `getComponent(name, ...args)`
Generate a pre-built UI component.

```typescript
// Buttons
dtc.getComponent('button', 'primary');   // Lime, black border
dtc.getComponent('button', 'secondary');  // Black, white text
dtc.getComponent('button', 'ghost');     // Transparent
dtc.getComponent('button', 'danger');    // Hot coral

// Cards
dtc.getComponent('card');                 // Basic card
dtc.getComponent('card', true);          // Card with image

// Sections
dtc.getComponent('nav');                 // Navigation bar
dtc.getComponent('hero');                // Hero section

// Pricing
dtc.getComponent('pricing', '$29', '/mo', ['Feature 1', 'Feature 2']);
```

##### `listComponents()`
Returns available component names.

##### `listFrameworks()`
Returns supported frameworks.

### Design Parser

Parse designs from various input formats:

```typescript
import { DesignParser } from 'design-to-code';

const parser = new DesignParser();

// Text format
const elements = parser.parse(`
# Heading 1
## Heading 2

Regular paragraph

[CTA] Call to Action

[CARD]
Card content here
  Child paragraph
[/CARD]
`);

// Object format
const elements = parser.parse({
  type: 'container',
  children: [
    { type: 'heading', content: 'Title', styles: { level: '1' } },
    { type: 'paragraph', content: 'Description' }
  ]
});
```

### Bold Aesthetic Engine

Apply bold styling to elements:

```typescript
import { BoldAestheticEngine } from 'design-to-code';

const engine = new BoldAestheticEngine();

const styled = engine.applyAesthetic({
  type: 'button',
  content: 'Click me'
});

// styled.styles now includes:
// {
//   backgroundColor: '#CCFF00',
//   color: '#0D0D0D',
//   fontFamily: 'DM Sans, sans-serif',
//   borderRadius: '0',
//   boxShadow: '4px 4px 0px #0D0D0D',
//   padding: '1rem 2rem',
//   border: '3px solid #0D0D0D'
// }
```

## CLI Commands

### `generate <input>`

Generate code from a design description.

```bash
# String input
design-to-code generate "# Hello" -f html -o output.html

# File input
design-to-code generate design.json -f react -o Component.jsx

# JSON input
design-to-code generate '{"type":"heading","content":"Hi"}' -f vue
```

### `component <name>`

Generate a pre-built component.

```bash
# Button variants
design-to-code component button -a '"primary"'
design-to-code component button -a '"danger"'

# Card with image
design-to-code component card -a 'true'

# Hero section
design-to-code component hero -o Hero.jsx
```

### `tokens`

Export design tokens.

```bash
# CSS variables
design-to-code tokens -f css -o tokens.css

# JSON format
design-to-code tokens -f json -o tokens.json
```

### `list`

List available options.

```bash
design-to-code list components
design-to-code list frameworks
design-to-code list
```

### `example`

Generate an example file.

```bash
design-to-code example -f react -o Example.jsx
design-to-code example -f html -o index.html
```

## Component Library

### Button

Bold buttons with hard shadows and no rounded corners.

```jsx
<button
  style={{
    backgroundColor: '#CCFF00',
    color: '#0D0D0D',
    border: '3px solid #0D0D0D',
    borderRadius: '0',
    padding: '1rem 2rem',
    boxShadow: '4px 4px 0px #0D0D0D',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }}
>
  Button
</button>
```

### Card

Sharp corners with hard shadows.

```jsx
<div style={{
  backgroundColor: '#FFFFFF',
  borderRadius: '1rem',
  boxShadow: '4px 4px 0px #0D0D0D',
  border: '1px solid #D4D0C8',
  padding: '2rem',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Card content */}
</div>
```

### Navigation

Dark nav with lime accent.

```jsx
<nav style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem 3rem',
  backgroundColor: '#0D0D0D',
  color: '#F5F0E8'
}}>
  {/* Logo and links */}
</nav>
```

### Hero Section

Bold typography with organic shapes.

```jsx
<section style={{
  minHeight: '80vh',
  backgroundColor: '#F5F0E8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3rem',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Organic blob decoration */}
  <h1 style={{
    fontFamily: 'Fraunces, serif',
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 900,
    lineHeight: 1.1
  }}>
    Design with <span style={{ color: '#CCFF00' }}>BOLD</span> aesthetics
  </h1>
</section>
```

## Typography Scale

| Name | Font | Size | Weight | Usage |
|------|------|------|--------|-------|
| Display | Fraunces | 4rem | 900 | Hero text |
| H1 | Archivo Black | 3rem | 700 | Page titles |
| H2 | Bebas Neue | 2.5rem | 400 | Section headers |
| H3 | Space Mono | 1.5rem | 700 | Subsections |
| Body | Newsreader | 1.125rem | 400 | Paragraphs |
| Code | JetBrains Mono | 0.9rem | 400 | Code blocks |
| Label | DM Sans | 0.75rem | 600 | Labels, buttons |

## Spacing Scale

```
4xs: 0.125rem   (2px)
3xs: 0.25rem    (4px)
2xs: 0.5rem     (8px)
xs:  0.75rem    (12px)
sm:  1rem       (16px)
md:  1.5rem     (24px)
lg:  2rem       (32px)
xl:  3rem       (48px)
2xl: 4rem       (64px)
3xl: 6rem       (96px)
4xl: 8rem       (128px)
```

## Shadow System

Hard shadows with no blur for bold impact:

```css
--shadow-sm: 2px 2px 0px #0D0D0D;
--shadow-md: 4px 4px 0px #0D0D0D;
--shadow-lg: 8px 8px 0px #0D0D0D;
--shadow-xl: 12px 12px 0px #0D0D0D;
--shadow-glow: 0 0 30px rgba(204, 255, 0, 0.5);
--shadow-neon: 0 0 10px #CCFF00, 0 0 20px #CCFF00, 0 0 40px #CCFF00;
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/bold-idea`)
3. Commit your changes (`git commit -m 'feat: add bold feature'`)
4. Push to the branch (`git push origin feature/bold-idea`)
5. Open a Pull Request

## License

MIT © DesignToCode

---

**Remember:** Bold design isn't about being loud. It's about being intentional.
