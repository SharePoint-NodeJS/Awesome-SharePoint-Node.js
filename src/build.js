const path = require('path');
const fs = require('fs');

class Awesome {

    constructor() {
        this.data = require(path.join(__dirname, 'data'));
    }

    trim(multistring, join) {
        return multistring.trim().split('\n').map(line => line.trim()).join(join || '\n');
    }

    mdUrl(paragraph) {
        return [ '&', '.', ',' ].reduce((res, sym) => {
            let reg = new RegExp(`\\${sym}`, 'g');
            return res.replace(reg, '');
        }, paragraph)
            .replace(/ /g, '-')
            .toLowerCase();
    }

    templateToc(categories) {
        return this.trim(`
            **Table of Contents**
            ${categories.map(category => {
                return this.trim(`
                    - [${category}](${this.mdUrl(category)})
                `);
            }).join('\n')}
        `);
    }

    templateHeader() {
        return this.trim(`
            | Package | | Description |
            | ------- | --- | ------- |
        `);
    }

    templateTableRow(data) {
        let packageName = data.package || data.name;
        return this.trim(`
            | [${data.name}](${data.url}) |
                [![npm](https://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.com/package/${packageName})
                [![npm](https://img.shields.io/npm/dm/${packageName}.svg)](https://www.npmjs.com/package/${packageName})
                [![npm](https://img.shields.io/npm/dt/${packageName}.svg)](https://www.npmjs.com/package/${packageName})
            | ${data.description} |
        `, ' ');
    }

    buildReadme(toc, content) {
        let template = fs.readFileSync(path.join(__dirname, 'template.md')).toString();
        let result = template
            .replace('{{TOC}}', toc)
            .replace('{{CONTENT}}', content);
        fs.writeFileSync(
            path.join(__dirname, '..', 'README.md'),
            result, {
                encoding: 'utf-8'
            }
        );
    }

    build() {
        let toc = this.templateToc(this.data.categories);
        let content = this.data.categories.map((category, index) => {
            return `## ${category}\n\n` + this.trim(`
                ${this.templateHeader()}
                ${
                    this.data.libs
                        .filter(lib => lib.categories.indexOf(index) !== -1)
                        .map(lib => {
                            return this.templateTableRow(lib);
                        }).join('\n')
                }
            `) + '\n\n';
        }).join('\n');
        this.buildReadme(toc, content);
    }

}

(new Awesome()).build();