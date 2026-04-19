#!/usr/bin/env node

/**
 * DesignToCode CLI
 * Transform designs to code with bold aesthetics
 */

import { DesignToCode, GeneratedComponent } from './index.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import figlet from 'figlet';
import { Command } from 'commander';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// CLI Banner
function showBanner(): void {
  console.log(chalk.black.bold.bgYellowBright(figlet.textSync('DesignToCode', { font: 'ANSI Shadow' })));
  console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(chalk.yellow('→ Transform designs to code with BOLD aesthetics'));
  console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));
}

// Main CLI class
class CLI {
  private designToCode: DesignToCode;
  private outputDir: string;

  constructor() {
    this.designToCode = new DesignToCode();
    this.outputDir = process.cwd();
  }

  async run(args: string[]): Promise<void> {
    const program = new Command();

    program
      .name('design-to-code')
      .description('Transform designs to code with bold aesthetics - NO AI slop')
      .version('1.0.0');

    program
      .command('generate')
      .description('Generate code from design description')
      .argument('<input>', 'Design description (string or file path)')
      .option('-f, --framework <framework>', 'Target framework (html, react, vue, svelte, css)', 'html')
      .option('-o, --output <path>', 'Output file path')
      .option('-s, --styles-only', 'Output styles only')
      .action((input, options) => this.generate(input, options));

    program
      .command('component')
      .description('Generate a UI component from the library')
      .argument('<name>', 'Component name (button, card, nav, hero, pricing)')
      .option('-o, --output <path>', 'Output file path')
      .option('-a, --args <args>', 'Component arguments (JSON string)', '{}')
      .action((name, options) => this.component(name, options));

    program
      .command('tokens')
      .description('Show design tokens')
      .option('-f, --format <format>', 'Output format (css, json)', 'css')
      .option('-o, --output <path>', 'Output file path')
      .action((options) => this.tokens(options));

    program
      .command('list')
      .description('List available options')
      .argument('[type]', 'Type to list (components, frameworks)')
      .action((type) => this.list(type));

    program
      .command('example')
      .description('Generate an example file')
      .option('-f, --framework <framework>', 'Target framework', 'html')
      .option('-o, --output <path>', 'Output file path')
      .action((options) => this.example(options));

    await program.parseAsync(args);
  }

  private async generate(input: string, options: { framework?: string; output?: string; stylesOnly?: boolean }): Promise<void> {
    try {
      // Check if input is a file path
      let designInput: string | object = input;
      
      if (existsSync(input) && !input.includes('{')) {
        designInput = readFileSync(input, 'utf-8');
        console.log(chalk.gray(`📄 Read from file: ${input}`));
      } else if (input.includes('{')) {
        try {
          designInput = JSON.parse(input);
        } catch {
          // Keep as string
        }
      }

      const framework = (options.framework || 'html') as GeneratedComponent['framework'];
      const result = this.designToCode.transform(designInput, framework);

      if (options.stylesOnly) {
        this.output(result.styles, options.output, `${result.name}.css`);
      } else {
        const ext = this.getExtension(framework);
        this.output(result.code, options.output, `${result.name}${ext}`);
        
        // Also output styles if HTML
        if (framework === 'html' && result.styles) {
          const cssPath = options.output?.replace(ext, '.css') || `${result.name}.css`;
          console.log(chalk.gray(`📄 Styles: ${cssPath}`));
        }
      }

      console.log(chalk.greenBright(`✓ Generated ${result.name} (${result.framework})`));
    } catch (error) {
      console.error(chalk.redBright(`✗ Error: ${(error as Error).message}`));
      process.exit(1);
    }
  }

  private async component(name: string, options: { output?: string; args?: string }): Promise<void> {
    try {
      let args: any[] = [];
      
      if (options.args) {
        try {
          const parsed = JSON.parse(options.args);
          args = Array.isArray(parsed) ? parsed : [parsed];
        } catch {
          // If JSON parse fails, treat as single string argument
          args = [options.args];
        }
      }

      const code = this.designToCode.getComponent(name, ...args);
      
      this.output(code, options.output, `${name}.jsx`);
      console.log(chalk.greenBright(`✓ Generated component: ${name}`));
    } catch (error) {
      console.error(chalk.redBright(`✗ Error: ${(error as Error).message}`));
      console.log(chalk.yellow('\nAvailable components:'));
      this.list('components');
      process.exit(1);
    }
  }

  private async tokens(options: { format?: string; output?: string }): Promise<void> {
    try {
      const format = options.format || 'css';
      
      if (format === 'json') {
        const tokens = this.designToCode.getTokens();
        const output = JSON.stringify(tokens, null, 2);
        this.output(output, options.output, 'tokens.json');
      } else {
        const css = this.designToCode.getCSSVariables();
        this.output(css, options.output, 'tokens.css');
      }

      console.log(chalk.greenBright(`✓ Exported design tokens (${format})`));
    } catch (error) {
      console.error(chalk.redBright(`✗ Error: ${(error as Error).message}`));
      process.exit(1);
    }
  }

  private async list(type?: string): Promise<void> {
    if (!type || type === 'components') {
      console.log(chalk.yellow('\n📦 UI Components:'));
      const components = this.designToCode.listComponents();
      components.forEach(c => {
        console.log(chalk.gray(`   • ${c}`));
      });
    }

    if (!type || type === 'frameworks') {
      console.log(chalk.yellow('\n⚙️  Frameworks:'));
      const frameworks = this.designToCode.listFrameworks();
      frameworks.forEach(f => {
        console.log(chalk.gray(`   • ${f}`));
      });
    }
  }

  private async example(options: { framework?: string; output?: string }): Promise<void> {
    const framework = (options.framework || 'html') as GeneratedComponent['framework'];
    
    const exampleDesign = `# Bold Hero Section

## Introducing DesignToCode
Transform your designs with BOLD aesthetics that break from the generic AI slop.

[CTA] Get Started

[CARD] Design Token System
A complete token system with bold colors and unique typography.

[/CARD]
`;

    try {
      const result = this.designToCode.transform(exampleDesign, framework);
      const ext = this.getExtension(framework);
      
      this.output(result.code, options.output, `example${ext}`);
      
      if (framework === 'html') {
        const cssOutput = options.output?.replace(ext, '.css') || 'example.css';
        // Extract styles from HTML if present
        const styleMatch = result.code.match(/<style>([\s\S]*?)<\/style>/);
        if (styleMatch) {
          writeFileSync(cssOutput, styleMatch[1]);
          console.log(chalk.gray(`📄 Styles: ${cssOutput}`));
        }
      }

      console.log(chalk.greenBright(`✓ Generated example (${framework})`));
    } catch (error) {
      console.error(chalk.redBright(`✗ Error: ${(error as Error).message}`));
      process.exit(1);
    }
  }

  private output(content: string, outputPath?: string, defaultName?: string): void {
    if (outputPath) {
      const dir = dirname(outputPath);
      if (!existsSync(dir)) {
        console.log(chalk.yellow(`📁 Creating directory: ${dir}`));
      }
      writeFileSync(outputPath, content);
      console.log(chalk.gray(`📄 Output: ${outputPath}`));
    } else {
      console.log(chalk.cyan('\n' + content + '\n'));
    }
  }

  private getExtension(framework: GeneratedComponent['framework']): string {
    const extensions: Record<string, string> = {
      react: '.jsx',
      vue: '.vue',
      svelte: '.svelte',
      css: '.css',
      html: '.html'
    };
    return extensions[framework] || '.html';
  }
}

// Run CLI
async function main(): Promise<void> {
  showBanner();
  const cli = new CLI();
  await cli.run(process.argv);
}

main().catch(console.error);
