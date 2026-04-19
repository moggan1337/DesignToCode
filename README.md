# DesignToCode 🎨

**Transform Designs to Code** - Bold aesthetics, NO AI slop!

## Anti-AI-Slop Rules

We follow strict design principles:

| ❌ Avoid | ✅ Use Instead |
|----------|----------------|
| Inter, Roboto, Arial | Fraunces, Archivo Black, Bebas Neue |
| Space Grotesk | Space Mono, IBM Plex Mono |
| Purple gradients | Electric lime, hot coral, vivid teal |
| Blurred shadows | Hard shadows (no blur) |
| Rounded everything | Sharp corners, blob shapes |
| Boring white backgrounds | Bold color blocks, gradients |

## Features

- **🎨 Bold Aesthetic Engine** - Transform any design to bold code
- **🧩 Component Library** - Pre-built bold components
- **🎭 Design Tokens** - Full token system
- **⚡ Fast Generation** - Instant code output

## Installation

```bash
npm install designtocode
```

## CLI Usage

```bash
# Generate from design
design-to-code generate "# Hello World" -f react -o Component.jsx

# Generate components
design-to-code component button -a '"danger"'
design-to-code component card -a 'true'
design-to-code component hero

# Export tokens
design-to-code tokens -f css -o tokens.css
```

## Design Tokens

### Colors
```css
--electric-lime: #CCFF00;
--hot-coral: #FF6B6B;
--vivid-teal: #00D4AA;
--burnt-orange: #FF8C42;
--deep-violet: #7C3AED;
```

### Typography
- **Display**: Bebas Neue, 72px, uppercase
- **H1**: Archivo Black, 48px
- **H2**: Fraunces, 36px
- **Body**: Space Mono, 16px
- **Code**: JetBrains Mono, 14px

### Spacing
`4xs: 4px`, `xs: 8px`, `sm: 16px`, `md: 24px`, `lg: 32px`, `xl: 48px`, `2xl: 64px`, `4xl: 128px`

## Example Component

```tsx
export const Hero = () => (
  <section className="hero">
    <h1 className="hero__title">BOLD DESIGN</h1>
    <p className="hero__subtitle">No AI slop here</p>
    <button className="btn btn--danger">Get Started</button>
  </section>
);
```

## License

MIT
