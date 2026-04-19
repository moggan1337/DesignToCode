# DesignToCode 🎨

<!-- Badges -->
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20.11.0-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.3.3-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![npm](https://img.shields.io/badge/npm-designtocode-red.svg)
![Framework](https://img.shields.io/badge/frameworks-html%20%7C%20react%20%7C%20vue%20%7C%20svelte-orange.svg)

---

**Transform Designs to Code** — Bold aesthetics, intentional choices, and zero AI slop.

DesignToCode is a CLI tool and TypeScript library that converts design specifications into production-ready code. It enforces strict anti-AI-slop design principles, ensuring your output uses distinctive typography, bold color choices, and unconventional layouts that stand apart from generic AI-generated interfaces.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Anti-AI-Slop Rules](#anti-ai-slop-rules)
- [Design Principles](#design-principles)
- [Design Tokens](#design-tokens)
- [CLI Usage](#cli-usage)
- [Component Examples](#component-examples)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

### Prerequisites

- **Node.js**: v20.11.0 or higher
- **npm**: v9.x or higher (comes with Node.js)
- **TypeScript**: v5.3.3 (automatically installed)

### Install Globally

```bash
npm install -g designtocode
```

### Install as Project Dependency

```bash
npm install designtocode --save-dev
```

### Build from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/design-to-code.git
cd design-to-code

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run CLI directly
npm start

# Or link for global access
npm link
```

### Verify Installation

```bash
design-to-code --version
# Output: 1.0.0
```

---

## Quick Start

### Generate Code from Design Text

```bash
design-to-code generate "# Hello World" -f react -o Component.jsx
```

### Generate a Pre-built Component

```bash
design-to-code component button -a '"danger"' -o Button.jsx
```

### Export Design Tokens

```bash
design-to-code tokens -f css -o tokens.css
```

### Generate Example File

```bash
design-to-code example -f html -o example.html
```

---

## Anti-AI-Slop Rules

We follow strict design principles to ensure every generated component has **intentional, bold aesthetics** that break from the generic AI slop flooding the web.

### Design Decision Matrix

| ❌ AI Slop (Avoid) | ✅ Bold Design (Use Instead) |
|-------------------|------------------------------|
| Inter, Roboto, Arial, Open Sans | Fraunces, Archivo Black, Bebas Neue |
| Space Grotesk, Outfit, Plus Jakarta Sans | Space Mono, IBM Plex Mono, Newsreader |
| Purple-to-blue gradients | Electric lime, hot coral, vivid teal |
| 8px/12px/16px rounded corners | Sharp corners (0px), blob shapes (60/40 blend) |
| Blurred soft shadows (blur + opacity) | Hard shadows (no blur, offset only) |
| Boring white (#FFFFFF) backgrounds | Bold color blocks: cream (#F5F0E8), deep plum (#3D1A3D) |
| 16px body text, 1.5 line-height | 18px body text, 1.7 line-height |
| Centered everything | Asymmetric layouts, intentional misalignment |
| Hero with overlapping circles | Blob shapes, hard geometric elements |
| Card grids (3-up or 4-up) | Staggered grids, overlapping cards |
| Micro-interactions on every element | Purposeful, meaningful interactions only |

### Why These Rules?

The AI-generated aesthetic has become **painfully predictable**:

```
Bad:    gradient-hero → rounded-cards → blur-shadows → purple-blue → inter-font
Good:   bold-blocks → hard-shadows → sharp-corners → lime-teal → fraunces-font
```

Every design decision in DesignToCode intentionally **breaks from this pattern**.

---

## Design Principles

### 1. Typography First

Typography is the foundation of bold design:

```css
/* Display: For impact moments */
font-family: "Fraunces", Georgia, serif;
font-size: 4rem;
font-weight: 900;
letter-spacing: -0.02em;

/* Headlines: Bold and commanding */
font-family: "Archivo Black", Impact, sans-serif;
font-size: 3rem;
font-weight: 700;

/* Section Headers: Uppercase drama */
font-family: "Bebas Neue", Impact, sans-serif;
font-size: 2.5rem;
text-transform: uppercase;
letter-spacing: 0.05em;

/* Body: Readable but characterful */
font-family: "Newsreader", Georgia, serif;
font-size: 1.125rem;
line-height: 1.7;

/* Code: Technical precision */
font-family: "JetBrains Mono", "Fira Code", monospace;
font-size: 0.9rem;
```

### 2. Color with Purpose

Colors are bold and unexpected:

```css
/* Primary palette */
--color-ink: #0D0D0D;
--color-paper: #F5F0E8;
--color-electric-lime: #CCFF00;
--color-hot-coral: #FF4D4D;
--color-vivid-teal: #00CED1;
--color-burnt-orange: #E65C00;
--color-deep-plum: #3D1A3D;
--color-electric-blue: #0066FF;
```

### 3. Hard Shadows, No Compromise

```css
/* Bad: Soft blur shadow */
box-shadow: 0 10px 40px rgba(0,0,0,0.15);

/* Good: Hard offset shadow */
box-shadow: 4px 4px 0px #0D0D0D;
box-shadow: 8px 8px 0px #0D0D0D;
box-shadow: 12px 12px 0px #0D0D0D;
```

### 4. Sharp Corners or Blob Shapes

```css
/* Bad: Too rounded */
border-radius: 8px;
border-radius: 12px;
border-radius: 9999px; /* Everything rounded */

/* Good: Sharp or organic */
border-radius: 0;
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; /* Blob */
```

---

## Design Tokens

DesignToCode provides a complete token system for consistent styling across your application.

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-ink` | `#0D0D0D` | Primary text, borders |
| `--color-paper` | `#F5F0E8` | Page background |
| `--color-electric-lime` | `#CCFF00` | Primary accent, CTAs |
| `--color-hot-coral` | `#FF4D4D` | Danger states, alerts |
| `--color-vivid-teal` | `#00CED1` | Secondary accent |
| `--color-burnt-orange` | `#E65C00` | Tertiary accent, highlights |
| `--color-deep-plum` | `#3D1A3D` | Dark backgrounds |
| `--color-electric-blue` | `#0066FF` | Links, info states |
| `--color-gold` | `#FFD700` | Premium, special |
| `--color-neon-green` | `#39FF14` | Success, active states |
| `--color-electric-purple` | `#7B00FF` | Creative accents |
| `--color-stone` | `#8B8680` | Muted text |
| `--color-charcoal` | `#2A2A2A` | Secondary backgrounds |
| `--color-bone` | `#E8E4DC` | Subtle backgrounds |
| `--color-surface` | `#FFFFFF` | Card/panel backgrounds |
| `--color-border` | `#D4D0C8` | Borders, dividers |
| `--color-text-primary` | `#0D0D0D` | Primary text |
| `--color-text-secondary` | `#5A5A5A` | Secondary text |

### Typography Tokens

| Token | Font Family | Size | Weight | Line Height | Use Case |
|-------|-------------|------|--------|-------------|----------|
| `--font-display` | Fraunces | 4rem | 900 | 1.1 | Hero headlines |
| `--font-h1` | Archivo Black | 3rem | 700 | 1.2 | Page titles |
| `--font-h2` | Bebas Neue | 2.5rem | 400 | 1.1 | Section headers |
| `--font-h3` | Space Mono | 1.5rem | 700 | 1.3 | Subsections |
| `--font-body` | Newsreader | 1.125rem | 400 | 1.7 | Body text |
| `--font-code` | JetBrains Mono | 0.9rem | 400 | 1.6 | Code blocks |
| `--font-label` | DM Sans | 0.75rem | 600 | 1.4 | Labels, badges |

### Spacing Tokens

| Token | Value | Pixels | Use Case |
|-------|-------|--------|----------|
| `--space-4xs` | 0.125rem | 2px | Micro gaps |
| `--space-3xs` | 0.25rem | 4px | Tight gaps |
| `--space-2xs` | 0.5rem | 8px | Small gaps |
| `--space-xs` | 0.75rem | 12px | Component padding |
| `--space-sm` | 1rem | 16px | Default padding |
| `--space-md` | 1.5rem | 24px | Section gaps |
| `--space-lg` | 2rem | 32px | Component margins |
| `--space-xl` | 3rem | 48px | Section spacing |
| `--space-2xl` | 4rem | 64px | Large spacing |
| `--space-3xl` | 6rem | 96px | Hero spacing |
| `--space-4xl` | 8rem | 128px | Massive gaps |

### Border Radius Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--radius-none` | 0 | Sharp corners |
| `--radius-sm` | 0.25rem | Subtle rounding |
| `--radius-md` | 0.5rem | Card rounding |
| `--radius-lg` | 1rem | Large rounding |
| `--radius-xl` | 1.5rem | Extra large |
| `--radius-full` | 9999px | Pills, circles |
| `--radius-blob` | `60% 40% 30% 70% / 60% 30% 70% 40%` | Organic blob |

### Shadow Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--shadow-none` | none | No shadow |
| `--shadow-sm` | `2px 2px 0px #0D0D0D` | Small cards |
| `--shadow-md` | `4px 4px 0px #0D0D0D` | Buttons, cards |
| `--shadow-lg` | `8px 8px 0px #0D0D0D` | Featured elements |
| `--shadow-xl` | `12px 12px 0px #0D0D0D` | Hero elements |
| `--shadow-hard` | `20px 20px 0px rgba(0,0,0,0.3)` | High emphasis |
| `--shadow-glow` | `0 0 30px rgba(204, 255, 0, 0.5)` | Neon glow |
| `--shadow-neon` | `0 0 10px #CCFF00, 0 0 20px #CCFF00, 0 0 40px #CCFF00` | Electric effect |

---

## CLI Usage

### Global Commands

```bash
# Show help
design-to-code --help

# Show version
design-to-code --version
```

### `generate` Command

Generate code from a design description or file.

```bash
design-to-code generate <input> [options]
```

**Arguments:**
- `input` — Design description (string) or path to design file

**Options:**
| Flag | Description | Default |
|------|-------------|---------|
| `-f, --framework <framework>` | Target framework | `html` |
| `-o, --output <path>` | Output file path | stdout |
| `-s, --styles-only` | Output styles only | false |

**Frameworks:** `html`, `react`, `vue`, `svelte`, `css`

**Examples:**

```bash
# Generate HTML from string
design-to-code generate "# Hello World" -f html

# Generate React component
design-to-code generate "A bold button" -f react -o Button.jsx

# Generate from file
design-to-code generate design.md -f vue -o Component.vue

# Generate from JSON
design-to-code generate '{"type":"button","content":"Click"}' -f react

# Styles only
design-to-code generate "# Hero" -s -o styles.css
```

### `component` Command

Generate pre-built UI components.

```bash
design-to-code component <name> [options]
```

**Available Components:**
- `button` — Button with variants
- `card` — Card component
- `nav` — Navigation bar
- `hero` — Hero section
- `pricing` — Pricing card

**Options:**
| Flag | Description | Default |
|------|-------------|---------|
| `-o, --output <path>` | Output file path | stdout |
| `-a, --args <args>` | Component arguments (JSON) | `{}` |

**Examples:**

```bash
# Generate primary button
design-to-code component button -o Button.jsx

# Generate danger button
design-to-code component button -a '"danger"' -o DangerButton.jsx

# Generate card with image
design-to-code component card -a '[true]' -o Card.jsx

# Generate navigation
design-to-code component nav -o Nav.jsx

# Generate hero section
design-to-code component hero -o Hero.jsx

# Generate pricing card
design-to-code component pricing -a '["$29","/mo",["Feature 1","Feature 2"]]' -o Pricing.jsx
```

### `tokens` Command

Export design tokens in various formats.

```bash
design-to-code tokens [options]
```

**Options:**
| Flag | Description | Default |
|------|-------------|---------|
| `-f, --format <format>` | Output format | `css` |
| `-o, --output <path>` | Output file path | stdout |

**Formats:** `css`, `json`

**Examples:**

```bash
# Export CSS variables
design-to-code tokens -f css -o tokens.css

# Export JSON tokens
design-to-code tokens -f json -o tokens.json

# View tokens in terminal
design-to-code tokens
```

### `list` Command

List available components and frameworks.

```bash
design-to-code list [type]
```

**Types:** `components`, `frameworks`

**Examples:**

```bash
# List all
design-to-code list

# List components only
design-to-code list components

# List frameworks only
design-to-code list frameworks
```

### `example` Command

Generate a complete example file.

```bash
design-to-code example [options]
```

**Options:**
| Flag | Description | Default |
|------|-------------|---------|
| `-f, --framework <framework>` | Target framework | `html` |
| `-o, --output <path>` | Output file path | stdout |

**Examples:**

```bash
# HTML example
design-to-code example -f html -o example.html

# React example
design-to-code example -f react -o App.jsx

# Vue example
design-to-code example -f vue -o Example.vue
```

---

## Component Examples

### Button Component

```tsx
<button
  style={{
    backgroundColor: '#CCFF00',
    color: '#0D0D0D',
    border: '3px solid #0D0D0D',
    borderRadius: '0',
    padding: '1rem 2rem',
    boxShadow: '4px 4px 0px #0D0D0D',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.15s ease'
  }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
>
  Get Started
</button>
```

**Button Variants:**

| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| `primary` | `#CCFF00` (lime) | `#0D0D0D` (ink) | Main CTAs |
| `secondary` | `#0D0D0D` (ink) | `#F5F0E8` (paper) | Alternative actions |
| `ghost` | transparent | `#0D0D0D` | Subtle actions |
| `danger` | `#FF4D4D` (coral) | `#F5F0E8` (paper) | Destructive actions |

### Card Component

```tsx
<div style={{
  backgroundColor: '#FFFFFF',
  borderRadius: '1rem',
  boxShadow: '4px 4px 0px #0D0D0D',
  border: '1px solid #D4D0C8',
  padding: '2rem',
  maxWidth: '400px',
  position: 'relative',
  overflow: 'hidden'
}}>
  <span style={{
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#E65C00'
  }}>
    Featured
  </span>
  <h3 style={{
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: '1.5rem',
    marginTop: '0.75rem',
    marginBottom: '1rem',
    color: '#0D0D0D'
  }}>
    Bold Card Title
  </h3>
  <p style={{
    fontFamily: 'Newsreader, serif',
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#5A5A5A'
  }}>
    A card component with strong typography and hard shadows.
  </p>
</div>
```

### Navigation Component

```tsx
<nav style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem 3rem',
  backgroundColor: '#0D0D0D',
  color: '#F5F0E8'
}}>
  <div style={{
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '2rem',
    letterSpacing: '0.05em'
  }}>
    BOLD<span style={{ color: '#CCFF00' }}>.</span>
  </div>
  <div style={{ display: 'flex', gap: '2rem' }}>
    <a href="#work" style={{
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#F5F0E8',
      textDecoration: 'none'
    }}>Work</a>
    <a href="#about" style={{...}}>About</a>
    <a href="#contact" style={{...}}>Contact</a>
  </div>
</nav>
```

### Hero Section Component

```tsx
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
  {/* Decorative blob */}
  <div style={{
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    backgroundColor: '#CCFF00',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    opacity: 0.3,
    filter: 'blur(80px)'
  }} />
  
  <span style={{
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.875rem',
    color: '#E65C00',
    marginBottom: '0.75rem'
  }}>
    // Design to Code
  </span>
  
  <h1 style={{
    fontFamily: 'Fraunces, serif',
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    color: '#0D0D0D',
    maxWidth: '800px',
    marginBottom: '2rem'
  }}>
    Design with <span style={{ color: '#CCFF00' }}>BOLD</span> aesthetics
  </h1>
  
  <p style={{
    fontFamily: 'Newsreader, serif',
    fontSize: '1.25rem',
    lineHeight: 1.7,
    color: '#5A5A5A',
    maxWidth: '500px',
    marginBottom: '3rem'
  }}>
    Transform your designs into production-ready code.
  </p>
</section>
```

### Pricing Card Component

```tsx
<div style={{
  backgroundColor: '#FFFFFF',
  borderRadius: '1rem',
  boxShadow: '8px 8px 0px #0D0D0D',
  border: '1px solid #D4D0C8',
  padding: '3rem',
  position: 'relative',
  minWidth: '300px'
}}>
  <div style={{
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#CCFF00',
    padding: '0.75rem 1rem',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.625rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase'
  }}>
    Popular
  </div>
  
  <h3 style={{
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '1.5rem',
    letterSpacing: '0.05em',
    color: '#0D0D0D',
    marginBottom: '1.5rem'
  }}>
    $29<span style={{ fontSize: '1rem', color: '#5A5A5A' }}>/mo</span>
  </h3>
  
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li style={{
      fontFamily: 'Newsreader, serif',
      fontSize: '1rem',
      color: '#5A5A5A',
      paddingLeft: '2rem',
      position: 'relative',
      marginBottom: '0.75rem'
    }}>
      <span style={{ position: 'absolute', left: 0, color: '#00CED1' }}>→</span>
      Unlimited projects
    </li>
    <li style={{...}}>Priority support</li>
    <li style={{...}}>Custom domains</li>
  </ul>
  
  <button style={{
    width: '100%',
    backgroundColor: '#0D0D0D',
    color: '#F5F0E8',
    border: '3px solid #0D0D0D',
    borderRadius: '0',
    padding: '1rem',
    boxShadow: '4px 4px 0px #0D0D0D',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }}>
    Choose Plan
  </button>
</div>
```

---

## Usage Examples

### Example 1: Design Text to React Component

```bash
design-to-code generate "# Welcome" -f react -o Welcome.jsx
```

Output:
```jsx
import React from 'react';

<h1 style={{
  fontFamily: '"Archivo Black", Impact, sans-serif',
  color: '#0D0D0D',
  letterSpacing: '-0.02em'
}}>Welcome</h1>

export default DesignComponent;
```

### Example 2: Full Hero Section

```bash
design-to-code generate "# Bold Hero" -f html -o hero.html
```

### Example 3: Generate Complete Example

```bash
design-to-code example -f vue -o landing.vue
```

### Example 4: Use as Library (TypeScript)

```typescript
import { DesignToCode } from 'designtocode';

const d2c = new DesignToCode();

// Transform design to code
const result = d2c.transform('# Hello World', 'react');
console.log(result.code);

// Get design tokens
const tokens = d2c.getTokens();
console.log(tokens.colors.electricLime);

// Get CSS variables
const css = d2c.getCSSVariables();
console.log(css);

// Get pre-built component
const button = d2c.getComponent('button', 'danger');
console.log(button);

// List available options
const components = d2c.listComponents();
const frameworks = d2c.listFrameworks();
```

### Example 5: Parse Design File

Create `design.md`:
```markdown
# Bold Hero Section

## Introducing DesignToCode
Transform your designs with BOLD aesthetics.

[CTA] Get Started

[CARD] Design Token System
A complete token system with bold colors.

[/CARD]
```

Run:
```bash
design-to-code generate design.md -f svelte -o Hero.svelte
```

### Example 6: Custom JSON Design

```bash
design-to-code generate '{"type":"button","content":"Click Me"}' -f vue
```

---

## API Reference

### `DesignToCode` Class

```typescript
import { DesignToCode } from 'designtocode';

const d2c = new DesignToCode();
```

#### Methods

##### `transform(input, framework)`

Transform design description to code.

```typescript
transform(
  input: string | object,
  framework: 'html' | 'react' | 'vue' | 'svelte' | 'css'
): GeneratedComponent
```

**Returns:**
```typescript
{
  name: string;
  framework: 'html' | 'react' | 'vue' | 'svelte' | 'css';
  code: string;
  styles: string;
}
```

##### `getTokens()`

Get design token values.

```typescript
getTokens(): DesignToken
```

**Returns:**
```typescript
{
  colors: Record<string, string>;
  typography: Record<string, TypographyToken>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}
```

##### `getCSSVariables()`

Generate CSS custom properties.

```typescript
getCSSVariables(): string
```

##### `getComponent(name, ...args)`

Generate pre-built UI component.

```typescript
getComponent(
  name: 'button' | 'card' | 'nav' | 'hero' | 'pricing',
  ...args: any[]
): string
```

##### `listComponents()`

List available components.

```typescript
listComponents(): string[]
```

##### `listFrameworks()`

List supported frameworks.

```typescript
listFrameworks(): string[]
```

### `DesignParser` Class

```typescript
import { DesignParser } from 'designtocode';

const parser = new DesignParser();
const elements = parser.parse('# Hello World');
```

### `BoldAestheticEngine` Class

```typescript
import { BoldAestheticEngine } from 'designtocode';

const engine = new BoldAestheticEngine();
const tokens = engine.getTokens();
```

### `UIComponentLibrary` Class

```typescript
import { UIComponentLibrary } from 'designtocode';

const library = new UIComponentLibrary();
const button = library.generateButton('danger');
const card = library.generateCard(true);
```

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/bold-feature`
3. **Commit changes**: `git commit -m 'Add bold feature'`
4. **Push to branch**: `git push origin feature/bold-feature`
5. **Open a Pull Request**

### Development Setup

```bash
# Clone and install
git clone https://github.com/yourusername/design-to-code.git
cd design-to-code
npm install

# Build
npm run build

# Watch mode
npm run watch

# Test
npm test
```

### Code Style

- Use TypeScript strict mode
- Follow existing code formatting
- Add tests for new features
- Update documentation

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Credits

**DesignToCode** is built with:
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [commander](https://www.npmjs.com/package/commander) — CLI framework
- [chalk](https://www.npmjs.com/package/chalk) — Terminal colors
- [figlet](https://www.npmjs.com/package/figlet) — ASCII art banners

**Typography:**
- [Fraunces](https://fonts.google.com/specimen/Fraunces) — Display font
- [Archivo Black](https://fonts.google.com/specimen/Archivo+Black) — Headlines
- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) — Section headers
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) — Monospace accents
- [Newsreader](https://fonts.google.com/specimen/Newsreader) — Body text
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — Labels
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — Code

---

<div align="center">

**Made with BOLD aesthetics and zero AI slop.**

</div>
