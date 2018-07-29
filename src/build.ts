import * as path from 'path';
import * as fs from 'fs';

import awesomeData from './data';
import { IData, ILib } from './interfaces';

class Awesome {

  constructor(private data: IData) {}

  public build(): void {
    const toc = this.templateToc(this.data.categories);
    const content = this.templateContent(this.data.categories);
    this.buildReadme(toc, content);
  }

  private trim(multistring: string, join = '\n'): string {
    return multistring.trim().split('\n').map(line => line.trim()).join(join);
  }

  private mdUrl(paragraph: string): string {
    return '#' + ['&', '.', ','].reduce((res, sym) => {
      const reg = new RegExp(`\\${sym}`, 'g');
      return res.replace(reg, '');
    }, paragraph)
      .replace(/ /g, '-')
      .toLowerCase();
  }

  private templateToc(categories: string[]): string {
    return this.trim(`
      ## Table of Contents\n
      ${categories.map(category => {
        return this.trim(`
          - [${category}](${this.mdUrl(category)})
        `);
      }).join('\n')}
    `);
  }

  private templateContent(categories: string[]): string {
    return this.trim(categories.map((category, index) => {
      return `## ${category}\n\n` + this.trim(`
        ${this.templateHeader()}
        ${
          this.data.libs
            .filter(lib => lib.categories.indexOf(index) !== -1)
            .sort((a, b) => {
              const x = (a.package || a.name).toLowerCase();
              const y = (b.package || b.name).toLowerCase();
              return x < y ? -1 : x > y ? 1 : 0;
            })
            .map(lib => {
              return this.templateTableRow(lib);
            }).join('\n')
        }
      `) + '\n';
    }).join('\n'));
  }

  private templateHeader(): string {
    return this.trim(`
      | Package | | Description |
      | ------- | --- | ------- |
    `);
  }

  private templateTableRow(data: ILib): string {
    const packageName = data.package || data.name;
    const noBadges = packageName === 'n/a' ? true : false;
    return this.trim(`
      | [${data.name}](${data.url}) |
        ${!noBadges ? `
          [![npm](https://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.com/package/${packageName})
          [![npm](https://img.shields.io/npm/dm/${packageName}.svg)](https://www.npmjs.com/package/${packageName})
          [![npm](https://img.shields.io/npm/dt/${packageName}.svg)](https://www.npmjs.com/package/${packageName})
        ` : ''}
      | ${data.description} |
    `, ' ');
  }

  private buildReadme(toc: string, content: string): void {
    const template = fs.readFileSync(path.join(__dirname, 'template.md')).toString();
    const result = template
      .replace('{{TOC}}', toc)
      .replace('{{CONTENT}}', content);
    fs.writeFileSync(
      path.join(__dirname, '..', 'README.md'),
      result, {
        encoding: 'utf-8'
      }
    );
  }

}

(new Awesome(awesomeData)).build();
