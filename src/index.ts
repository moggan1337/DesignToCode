/**
 * DesignToCode - Transform designs to code with bold aesthetics
 * NO AI slop: Unique typography, bold colors, unexpected layouts
 */

export interface DesignElement {
  type: 'heading' | 'paragraph' | 'button' | 'card' | 'container' | 'image' | 'list' | 'input' | 'nav' | 'footer';
  children?: DesignElement[];
  styles?: Record<string, string>;
  content?: string;
  props?: Record<string, string>;
  id?: string;
}

export interface DesignToken {
  colors: Record<string, string>;
  typography: Record<string, { fontFamily: string; fontSize: string; fontWeight: string; lineHeight: string; letterSpacing?: string; textTransform?: string }>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}

export interface GeneratedComponent {
  name: string;
  framework: 'react' | 'vue' | 'svelte' | 'html' | 'css';
  code: string;
  styles: string;
}

/**
 * Design Parser - Converts design specifications to internal AST
 */
export class DesignParser {
  parse(input: string | object): DesignElement[] {
    if (typeof input === 'string') {
      return this.parseFromText(input);
    }
    return this.parseFromObject(input);
  }

  private parseFromText(text: string): DesignElement[] {
    const elements: DesignElement[] = [];
    const lines = text.split('\n').filter(l => l.trim());

    let currentContainer: DesignElement | null = null;

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith('# ')) {
        elements.push({
          type: 'heading',
          content: trimmed.slice(2),
          styles: { level: '1' }
        });
      } else if (trimmed.startsWith('## ')) {
        elements.push({
          type: 'heading',
          content: trimmed.slice(3),
          styles: { level: '2' }
        });
      } else if (trimmed.startsWith('[CTA]')) {
        elements.push({
          type: 'button',
          content: trimmed.slice(5).trim() || 'Click me',
          styles: { variant: 'primary' }
        });
      } else if (trimmed.startsWith('[CARD]')) {
        currentContainer = {
          type: 'card',
          children: [],
          content: trimmed.slice(6).trim()
        };
      } else if (trimmed.startsWith('[/CARD]') && currentContainer) {
        elements.push(currentContainer);
        currentContainer = null;
      } else if (currentContainer && currentContainer.children !== undefined) {
        currentContainer.children.push({
          type: 'paragraph',
          content: trimmed
        });
      } else if (!trimmed.startsWith('[')) {
        elements.push({
          type: 'paragraph',
          content: trimmed
        });
      }
    }

    return elements;
  }

  private parseFromObject(obj: any): DesignElement[] {
    if (Array.isArray(obj)) {
      return obj.map(item => this.convertToElement(item));
    }
    if (obj.components) {
      return obj.components.map((c: any) => this.convertToElement(c));
    }
    return [this.convertToElement(obj)];
  }

  private convertToElement(item: any): DesignElement {
    return {
      type: item.type || 'container',
      content: item.content || item.text || '',
      styles: item.styles || {},
      props: item.props || {},
      children: item.children?.map((c: any) => this.convertToElement(c))
    };
  }
}

/**
 * Bold Aesthetic Engine - Applies non-AI-slop design principles
 */
export class BoldAestheticEngine {
  private tokens: DesignToken;

  constructor() {
    this.tokens = this.generateBoldTokens();
  }

  private generateBoldTokens(): DesignToken {
    return {
      colors: {
        // Primary palette - unexpected, bold choices
        'ink': '#0D0D0D',
        'paper': '#F5F0E8',
        'electric-lime': '#CCFF00',
        'hot-coral': '#FF4D4D',
        'vivid-teal': '#00CED1',
        'burnt-orange': '#E65C00',
        'deep-plum': '#3D1A3D',
        'electric-blue': '#0066FF',
        
        // Grays with personality
        'stone': '#8B8680',
        'charcoal': '#2A2A2A',
        'bone': '#E8E4DC',
        
        // Accents
        'gold': '#FFD700',
        'neon-green': '#39FF14',
        'electric-purple': '#7B00FF',
        
        // Semantic
        'text-primary': '#0D0D0D',
        'text-secondary': '#5A5A5A',
        'background': '#F5F0E8',
        'surface': '#FFFFFF',
        'border': '#D4D0C8',
      },
      typography: {
        display: {
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: '4rem',
          fontWeight: '900',
          lineHeight: '1.1'
        },
        h1: {
          fontFamily: '"Archivo Black", Impact, sans-serif',
          fontSize: '3rem',
          fontWeight: '700',
          lineHeight: '1.2'
        },
        h2: {
          fontFamily: '"Bebas Neue", Impact, sans-serif',
          fontSize: '2.5rem',
          fontWeight: '400',
          lineHeight: '1.1'
        },
        h3: {
          fontFamily: '"Space Mono", monospace',
          fontSize: '1.5rem',
          fontWeight: '700',
          lineHeight: '1.3'
        },
        body: {
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: '1.125rem',
          fontWeight: '400',
          lineHeight: '1.7'
        },
        code: {
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: '0.9rem',
          fontWeight: '400',
          lineHeight: '1.6'
        },
        label: {
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1.4',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }
      },
      spacing: {
        '4xs': '0.125rem',
        '3xs': '0.25rem',
        '2xs': '0.5rem',
        'xs': '0.75rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '8rem'
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
        blob: '60% 40% 30% 70% / 60% 30% 70% 40%'
      },
      shadows: {
        none: 'none',
        sm: '2px 2px 0px #0D0D0D',
        md: '4px 4px 0px #0D0D0D',
        lg: '8px 8px 0px #0D0D0D',
        xl: '12px 12px 0px #0D0D0D',
        hard: '20px 20px 0px rgba(0,0,0,0.3)',
        glow: '0 0 30px rgba(204, 255, 0, 0.5)',
        neon: '0 0 10px #CCFF00, 0 0 20px #CCFF00, 0 0 40px #CCFF00'
      }
    };
  }

  getTokens(): DesignToken {
    return this.tokens;
  }

  applyAesthetic(element: DesignElement): DesignElement {
    const styled = { ...element };

    switch (element.type) {
      case 'heading':
        styled.styles = {
          ...styled.styles,
          fontFamily: this.tokens.typography.h1.fontFamily,
          color: this.tokens.colors['ink'],
          letterSpacing: element.styles?.level === '1' ? '-0.02em' : '0.05em'
        };
        break;

      case 'paragraph':
        styled.styles = {
          ...styled.styles,
          fontFamily: this.tokens.typography.body.fontFamily,
          color: this.tokens.colors['text-secondary'],
          maxWidth: '65ch'
        };
        break;

      case 'button':
        styled.styles = {
          ...styled.styles,
          backgroundColor: this.tokens.colors['electric-lime'],
          color: this.tokens.colors['ink'],
          fontFamily: this.tokens.typography.label.fontFamily,
          borderRadius: this.tokens.borderRadius.none,
          boxShadow: this.tokens.shadows.md,
          padding: '1rem 2rem',
          border: `3px solid ${this.tokens.colors['ink']}`,
          cursor: 'pointer',
          transition: 'all 0.15s ease'
        };
        styled.props = {
          ...styled.props,
          onMouseOver: 'this.style.transform="translate(-2px, -2px)"',
          onMouseOut: 'this.style.transform="translate(0, 0)"'
        };
        break;

      case 'card':
        styled.styles = {
          ...styled.styles,
          backgroundColor: this.tokens.colors['surface'],
          borderRadius: this.tokens.borderRadius.lg,
          boxShadow: this.tokens.shadows.md,
          border: `1px solid ${this.tokens.colors['border']}`,
          padding: this.tokens.spacing.lg,
          position: 'relative',
          overflow: 'hidden'
        };
        break;

      case 'container':
        styled.styles = {
          ...styled.styles,
          backgroundColor: this.tokens.colors['background'],
          padding: this.tokens.spacing.xl
        };
        break;

      case 'input':
        styled.styles = {
          ...styled.styles,
          fontFamily: this.tokens.typography.body.fontFamily,
          border: `2px solid ${this.tokens.colors['ink']}`,
          borderRadius: this.tokens.borderRadius.none,
          padding: this.tokens.spacing.sm,
          backgroundColor: this.tokens.colors['surface'],
          boxShadow: this.tokens.shadows.sm
        };
        break;
    }

    return styled;
  }

  generateCSSVariables(): string {
    let css = ':root {\n';

    // Colors
    css += '  /* === BOLD COLOR PALETTE === */\n';
    for (const [name, value] of Object.entries(this.tokens.colors)) {
      css += `  --color-${this.kebabCase(name)}: ${value};\n`;
    }

    // Typography
    css += '\n  /* === UNIQUE TYPOGRAPHY === */\n';
    for (const [name, props] of Object.entries(this.tokens.typography)) {
      css += `  --font-${this.kebabCase(name)}: ${props.fontFamily};\n`;
    }

    // Spacing
    css += '\n  /* === SPACING SCALE === */\n';
    for (const [name, value] of Object.entries(this.tokens.spacing)) {
      css += `  --space-${name}: ${value};\n`;
    }

    // Border radius
    css += '\n  /* === BORDER RADIUS === */\n';
    for (const [name, value] of Object.entries(this.tokens.borderRadius)) {
      css += `  --radius-${name}: ${value};\n`;
    }

    // Shadows
    css += '\n  /* === HARD SHADOWS === */\n';
    for (const [name, value] of Object.entries(this.tokens.shadows)) {
      css += `  --shadow-${name}: ${value};\n`;
    }

    css += '}\n';
    return css;
  }

  private kebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}

/**
 * Code Generator - Outputs framework-specific code
 */
export class CodeGenerator {
  private aesthetic: BoldAestheticEngine;
  private parser: DesignParser;

  constructor() {
    this.aesthetic = new BoldAestheticEngine();
    this.parser = new DesignParser();
  }

  generate(input: string | object, framework: GeneratedComponent['framework'] = 'html'): GeneratedComponent {
    const elements = this.parser.parse(input);
    const styled = elements.map(el => this.aesthetic.applyAesthetic(el));

    switch (framework) {
      case 'react':
        return this.generateReact(styled);
      case 'vue':
        return this.generateVue(styled);
      case 'svelte':
        return this.generateSvelte(styled);
      case 'css':
        return this.generateCSSOnly(styled);
      default:
        return this.generateHTML(styled);
    }
  }

  private generateReact(elements: DesignElement[]): GeneratedComponent {
    const cssVars = this.aesthetic.generateCSSVariables();
    const componentCode = this.generateComponentCode(elements, 'react');

    return {
      name: 'DesignComponent',
      framework: 'react',
      code: `import React from 'react';
${componentCode}

export default DesignComponent;`,
      styles: cssVars
    };
  }

  private generateVue(elements: DesignElement[]): GeneratedComponent {
    const cssVars = this.aesthetic.generateCSSVariables();
    const componentCode = this.generateComponentCode(elements, 'vue');

    return {
      name: 'DesignComponent',
      framework: 'vue',
      code: `<template>
${this.indent(componentCode, '  ')}
</template>

<script setup>
// Component logic here
</script>

<style scoped>
${this.indent(cssVars, '')}
</style>`,
      styles: cssVars
    };
  }

  private generateSvelte(elements: DesignElement[]): GeneratedComponent {
    const cssVars = this.aesthetic.generateCSSVariables();
    const componentCode = this.generateComponentCode(elements, 'svelte');

    return {
      name: 'DesignComponent',
      framework: 'svelte',
      code: `<script>
${this.indent(this.generateSvelteScript(elements), '  ')}
</script>

${this.indent(componentCode, '')}
  
<style>
${this.indent(cssVars, '')}
</style>`,
      styles: cssVars
    };
  }

  private generateHTML(elements: DesignElement[]): GeneratedComponent {
    const cssVars = this.aesthetic.generateCSSVariables();
    const componentCode = this.generateComponentCode(elements, 'html');

    return {
      name: 'DesignComponent',
      framework: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bold Design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,wght@0,400;0,600;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
${this.indent(cssVars, '    ')}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: var(--color-background); }
  </style>
</head>
<body>
${this.indent(componentCode, '  ')}
</body>
</html>`,
      styles: cssVars
    };
  }

  private generateCSSOnly(elements: DesignElement[]): GeneratedComponent {
    const cssVars = this.aesthetic.generateCSSVariables();
    const styles = this.generateElementStyles(elements);

    return {
      name: 'DesignComponent',
      framework: 'css',
      code: `/* Add these classes to your HTML elements */
<div class="design-container">
  <!-- Your elements here -->
</div>`,
      styles: cssVars + '\n\n' + styles
    };
  }

  private generateComponentCode(elements: DesignElement[], framework: string): string {
    return elements.map(el => this.elementToCode(el, framework)).join('\n\n');
  }

  private elementToCode(element: DesignElement, framework: string): string {
    const styles = this.stylesToString(element.styles || {});

    switch (element.type) {
      case 'heading':
        const Tag = `h${element.styles?.level || 1}`;
        if (framework === 'react') return `<${Tag} style={styles.heading}>${element.content}</${Tag}>`;
        if (framework === 'vue') return `<${Tag} class="heading">${element.content}</${Tag}>`;
        if (framework === 'svelte') return `<${Tag} class="heading">${element.content}</${Tag}>`;
        return `<${Tag} style="${styles.inline}">${element.content}</${Tag}>`;

      case 'paragraph':
        if (framework === 'react') return `<p style={styles.paragraph}>${element.content}</p>`;
        if (framework === 'vue') return `<p class="paragraph">${element.content}</p>`;
        if (framework === 'svelte') return `<p class="paragraph">${element.content}</p>`;
        return `<p style="${styles.inline}">${element.content}</p>`;

      case 'button':
        if (framework === 'react') return `<button style={styles.button}>${element.content}</button>`;
        if (framework === 'vue') return `<button class="button">${element.content}</button>`;
        if (framework === 'svelte') return `<button class="button">${element.content}</button>`;
        return `<button style="${styles.inline}">${element.content}</button>`;

      case 'card':
        const children = element.children?.map(c => this.elementToCode(c, framework)).join('\n') || '';
        if (framework === 'react') return `<div style={styles.card}>\n  ${children}\n</div>`;
        if (framework === 'vue') return `<div class="card">\n  ${children}\n</div>`;
        if (framework === 'svelte') return `<div class="card">\n  ${children}\n</div>`;
        return `<div style="${styles.inline}">\n  ${children}\n</div>`;

      default:
        return `<!-- ${element.type}: ${element.content} -->`;
    }
  }

  private generateSvelteScript(elements: DesignElement[]): string {
    return `// Reactive state if needed
let count = 0;`;
  }

  private generateElementStyles(elements: DesignElement[]): string {
    let css = '/* === COMPONENT STYLES === */\n\n';

    css += `.design-container {
  background: var(--color-background);
  padding: var(--space-xl);
  min-height: 100vh;
}\n\n`;

    css += `.heading {
  font-family: var(--font-h1);
  color: var(--color-ink);
  margin-bottom: var(--space-md);
}\n\n`;

    css += `.paragraph {
  font-family: var(--font-body);
  color: var(--color-text-secondary);
  max-width: 65ch;
  margin-bottom: var(--space-md);
}\n\n`;

    css += `.button {
  font-family: var(--font-label);
  background: var(--color-electric-lime);
  color: var(--color-ink);
  border: 3px solid var(--color-ink);
  border-radius: 0;
  padding: var(--space-sm) var(--space-lg);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all 0.15s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}\n\n`;

    css += `.button:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-lg);
}\n\n`;

    css += `.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  padding: var(--space-lg);
}`;

    return css;
  }

  private stylesToString(styles: Record<string, string>): { heading: string; paragraph: string; button: string; card: string; inline: string } {
    const inline = Object.entries(styles)
      .map(([k, v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`)
      .join('; ');

    return {
      heading: `{
  fontFamily: "${styles.fontFamily || 'Archivo Black, sans-serif'}",
  color: "${styles.color || '#0D0D0D'}",
  letterSpacing: "${styles.letterSpacing || '-0.02em'}"
}`,
      paragraph: `{
  fontFamily: "${styles.fontFamily || 'Newsreader, serif'}",
  color: "${styles.color || '#5A5A5A'}",
  maxWidth: "${styles.maxWidth || '65ch'}"
}`,
      button: `{
  backgroundColor: "${styles.backgroundColor || '#CCFF00'}",
  color: "${styles.color || '#0D0D0D'}",
  fontFamily: "${styles.fontFamily || 'DM Sans, sans-serif'}",
  borderRadius: "${styles.borderRadius || '0'}",
  boxShadow: "${styles.boxShadow || '4px 4px 0px #0D0D0D'}",
  padding: "${styles.padding || '1rem 2rem'}",
  border: "${styles.border || '3px solid #0D0D0D'}",
  cursor: "${styles.cursor || 'pointer'}",
  textTransform: "${styles.textTransform || 'uppercase'}",
  letterSpacing: "${styles.letterSpacing || '0.1em'}"
}`,
      card: `{
  backgroundColor: "${styles.backgroundColor || '#FFFFFF'}",
  borderRadius: "${styles.borderRadius || '1rem'}",
  boxShadow: "${styles.boxShadow || '4px 4px 0px #0D0D0D'}",
  border: "${styles.border || '1px solid #D4D0C8'}",
  padding: "${styles.padding || '2rem'}",
  position: "${styles.position || 'relative'}",
  overflow: "${styles.overflow || 'hidden'}"
}`,
      inline
    };
  }

  private indent(str: string, prefix: string): string {
    return str.split('\n').map(line => prefix + line).join('\n');
  }
}

/**
 * UI Component Library - Pre-built bold components
 */
export class UIComponentLibrary {
  private aesthetic: BoldAestheticEngine;

  constructor() {
    this.aesthetic = new BoldAestheticEngine();
  }

  generateButton(variant: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary'): string {
    const colors = this.aesthetic.getTokens().colors;
    const spacing = this.aesthetic.getTokens().spacing;
    const shadows = this.aesthetic.getTokens().shadows;

    const variants = {
      primary: {
        bg: colors['electric-lime'],
        text: colors['ink'],
        shadow: shadows.md
      },
      secondary: {
        bg: colors['ink'],
        text: colors['paper'],
        shadow: shadows.md
      },
      ghost: {
        bg: 'transparent',
        text: colors['ink'],
        shadow: shadows.none
      },
      danger: {
        bg: colors['hot-coral'],
        text: colors['paper'],
        shadow: shadows.md
      }
    };

    const v = variants[variant];

    return `<button
  style={{
    backgroundColor: '${v.bg}',
    color: '${v.text}',
    border: '3px solid #0D0D0D',
    borderRadius: '0',
    padding: '${spacing.sm} ${spacing.lg}',
    boxShadow: '${v.shadow}',
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
  Button
</button>`;
  }

  generateCard(withImage: boolean = false): string {
    const colors = this.aesthetic.getTokens().colors;
    const spacing = this.aesthetic.getTokens().spacing;
    const shadows = this.aesthetic.getTokens().shadows;

    return `<div style={{
  backgroundColor: '${colors['surface']}',
  borderRadius: '${this.aesthetic.getTokens().borderRadius.lg}',
  boxShadow: '${shadows.md}',
  border: '1px solid ${colors['border']}',
  padding: '${spacing.lg}',
  maxWidth: '400px',
  position: 'relative',
  overflow: 'hidden'
}}>
  ${withImage ? `<img 
    src="/api/placeholder/400/200" 
    alt="Card image"
    style={{
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      marginBottom: '${spacing.md}',
      borderRadius: '${this.aesthetic.getTokens().borderRadius.md}'
    }}
  />` : ''}
  <span style={{
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '${colors['burnt-orange']}'
  }}>
    Featured
  </span>
  <h3 style={{
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: '1.5rem',
    marginTop: '${spacing.xs}',
    marginBottom: '${spacing.sm}',
    color: '${colors['ink']}'
  }}>
    Bold Card Title
  </h3>
  <p style={{
    fontFamily: 'Newsreader, serif',
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '${colors.textSecondary}'
  }}>
    A card component with strong typography and hard shadows. No rounded corners, no gradients—just bold design.
  </p>
  <button style={{
    marginTop: '${spacing.md}',
    backgroundColor: '${colors['electric-lime']}',
    color: '${colors['ink']}',
    border: '3px solid ${colors['ink']}',
    borderRadius: '0',
    padding: '${spacing.sm} ${spacing.lg}',
    boxShadow: '${shadows.md}',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }}>
    Learn More
  </button>
</div>`;
  }

  generateNavigation(): string {
    const colors = this.aesthetic.getTokens().colors;
    const spacing = this.aesthetic.getTokens().spacing;

    return `<nav style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '${spacing.md} ${spacing.xl}',
  backgroundColor: '${colors['ink']}',
  color: '${colors['paper']}'
}}>
  <div style={{
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '2rem',
    letterSpacing: '0.05em'
  }}>
    BOLD<span style={{ color: '${colors['electric-lime']}' }}>.</span>
  </div>
  <div style={{
    display: 'flex',
    gap: '${spacing.lg}'
  }}>
    ${['Work', 'About', 'Contact'].map(item => `
    <a href="#${item.toLowerCase()}" style={{
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '${colors['paper']}',
      textDecoration: 'none',
      position: 'relative'
    }}>
      ${item}
    </a>`).join('')}
  </div>
</nav>`;
  }

  generateHeroSection(): string {
    const colors = this.aesthetic.getTokens().colors;
    const spacing = this.aesthetic.getTokens().spacing;
    const shadows = this.aesthetic.getTokens().shadows;

    return `<section style={{
  minHeight: '80vh',
  backgroundColor: '${colors['background']}',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '${spacing.xl}',
  position: 'relative',
  overflow: 'hidden'
}}>
  <!-- Decorative element -->
  <div style={{
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    backgroundColor: '${colors['electric-lime']}',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    opacity: 0.3,
    filter: 'blur(80px)'
  }} />
  
  <span style={{
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.875rem',
    color: '${colors['burnt-orange']}',
    marginBottom: '${spacing.sm}'
  }}>
    // Design to Code
  </span>
  
  <h1 style={{
    fontFamily: 'Fraunces, serif',
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    color: '${colors['ink']}',
    maxWidth: '800px',
    marginBottom: '${spacing.lg}'
  }}>
    Design with
    <span style={{
      display: 'block',
      color: '${colors['electric-lime']}',
      WebkitTextStroke: '2px ${colors['ink']}'
    }}>
      BOLD
    </span>
    aesthetics
  </h1>
  
  <p style={{
    fontFamily: 'Newsreader, serif',
    fontSize: '1.25rem',
    lineHeight: 1.7,
    color: '${colors.textSecondary}',
    maxWidth: '500px',
    marginBottom: '${spacing.xl}'
  }}>
    Transform your designs into production-ready code. No AI slop—just bold, intentional design decisions that stand out.
  </p>
  
  <div style={{ display: 'flex', gap: '${spacing.md}' }}>
    <button style={{
      backgroundColor: '${colors['electric-lime']}',
      color: '${colors['ink']}',
      border: '3px solid ${colors['ink']}',
      borderRadius: '0',
      padding: '${spacing.sm} ${spacing.lg}',
      boxShadow: '${shadows.md}',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }}>
      Get Started
    </button>
    <button style={{
      backgroundColor: 'transparent',
      color: '${colors['ink']}',
      border: '3px solid ${colors['ink']}',
      borderRadius: '0',
      padding: '${spacing.sm} ${spacing.lg}',
      boxShadow: '${shadows.sm}',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }}>
      View Examples
    </button>
  </div>
</section>`;
  }

  generatePricingCard(price: string, period: string, features: string[]): string {
    const colors = this.aesthetic.getTokens().colors;
    const spacing = this.aesthetic.getTokens().spacing;
    const shadows = this.aesthetic.getTokens().shadows;
    const borderRadius = this.aesthetic.getTokens().borderRadius;

    return `<div style={{
  backgroundColor: '${colors['surface']}',
  borderRadius: '${borderRadius.lg}',
  boxShadow: '${shadows.lg}',
  border: '1px solid ${colors['border']}',
  padding: '${spacing.xl}',
  position: 'relative',
  minWidth: '300px'
}}>
  <div style={{
    position: 'absolute',
    top: '${spacing.md}',
    right: '${spacing.md}',
    backgroundColor: '${colors['electric-lime']}',
    padding: '${spacing.xs} ${spacing.sm}',
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
    color: '${colors['ink']}',
    marginBottom: '${spacing.md}'
  }}>
    ${price}<span style={{ fontSize: '1rem', color: '${colors.textSecondary}' }}>${period}</span>
  </h3>
  
  <ul style={{
    listStyle: 'none',
    padding: 0,
    marginBottom: '${spacing.lg}'
  }}>
    ${features.map(f => `
    <li style={{
      fontFamily: 'Newsreader, serif',
      fontSize: '1rem',
      color: '${colors.textSecondary}',
      paddingLeft: '${spacing.lg}',
      position: 'relative',
      marginBottom: '${spacing.xs}'
    }}>
      <span style={{
        position: 'absolute',
        left: 0,
        color: '${colors['vivid-teal']}'
      }}>→</span>
      ${f}
    </li>`).join('')}
  </ul>
  
  <button style={{
    width: '100%',
    backgroundColor: '${colors['ink']}',
    color: '${colors['paper']}',
    border: '3px solid ${colors['ink']}',
    borderRadius: '0',
    padding: '${spacing.sm}',
    boxShadow: '${shadows.md}',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }}>
    Choose Plan
  </button>
</div>`;
  }
}

/**
 * Main DesignToCode Class
 */
export class DesignToCode {
  private parser: DesignParser;
  private aesthetic: BoldAestheticEngine;
  private generator: CodeGenerator;
  private uiLibrary: UIComponentLibrary;

  constructor() {
    this.parser = new DesignParser();
    this.aesthetic = new BoldAestheticEngine();
    this.generator = new CodeGenerator();
    this.uiLibrary = new UIComponentLibrary();
  }

  /**
   * Transform design description to code
   */
  transform(input: string | object, framework: GeneratedComponent['framework'] = 'html'): GeneratedComponent {
    return this.generator.generate(input, framework);
  }

  /**
   * Get design tokens for custom styling
   */
  getTokens(): DesignToken {
    return this.aesthetic.getTokens();
  }

  /**
   * Generate CSS variables string
   */
  getCSSVariables(): string {
    return this.aesthetic.generateCSSVariables();
  }

  /**
   * Get UI component from library
   */
  getComponent(name: string, ...args: any[]): string {
    switch (name) {
      case 'button':
        return this.uiLibrary.generateButton(args[0] || 'primary');
      case 'card':
        return this.uiLibrary.generateCard(args[0] || false);
      case 'nav':
      case 'navigation':
        return this.uiLibrary.generateNavigation();
      case 'hero':
        return this.uiLibrary.generateHeroSection();
      case 'pricing':
        return this.uiLibrary.generatePricingCard(
          args[0] || '$29',
          args[1] || '/mo',
          args[2] || ['Feature 1', 'Feature 2', 'Feature 3']
        );
      default:
        throw new Error(`Unknown component: ${name}`);
    }
  }

  /**
   * List available components
   */
  listComponents(): string[] {
    return ['button', 'card', 'nav', 'hero', 'pricing'];
  }

  /**
   * List supported frameworks
   */
  listFrameworks(): string[] {
    return ['html', 'react', 'vue', 'svelte', 'css'];
  }
}

// Export singleton instance
export const designToCode = new DesignToCode();

export default DesignToCode;
