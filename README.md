# Awesome SharePoint Node.js [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/sharepoint-node/Lobby)

> A collection of packages, libraries and tools in Node.js for usage with SharePoint and related technologies.

Inspired by modern development, Node.js, SharePoint and awesome-* lists.

**Contributions are welcome!** If you are an author or a user of any cool Node.js package related to SharePoint or Office 365, please let us know about your tool of choice to add it to the list.

### Have an interesting idea for a new Node.js module, tool, library or whatever?
Suggest it under the issues section.

**Table of Contents**
- [Authentication & Http](#authentication--http)
- [Client libraries for browser, which work in Node.JS](#client-libraries-for-browser-which-work-in-nodejs)
- [SPFx related](#spfx-related)
- [Tools & CLIs](#tools--clis)
- [Web applications](#web-applications)
- [Working with files](#working-with-files)
- [Wrapper or helper libraries](#wrapper-or-helper-libraries)
- [Yeoman generators](#yeoman-generators)


## Authentication & Http

| Package | | Description |
| --------- | --- | --------- |
| [node-sp-auth](https://github.com/s-KaiNet/node-sp-auth) | [![npm](https://img.shields.io/npm/v/node-sp-auth.svg)](https://www.npmjs.com/package/node-sp-auth) [![npm](https://img.shields.io/npm/dm/node-sp-auth.svg)](https://www.npmjs.com/package/node-sp-auth) | Unattended SharePoint http authentication with nodejs |
| [sp-request](https://github.com/s-KaiNet/sp-request) | [![npm](https://img.shields.io/npm/v/sp-request.svg)](https://www.npmjs.com/package/sp-request) [![npm](https://img.shields.io/npm/dm/sp-request.svg)](https://www.npmjs.com/package/sp-request) | Simplified SharePoint HTTP client |
| [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy) | [![npm](https://img.shields.io/npm/v/sp-rest-proxy.svg)](https://www.npmjs.com/package/sp-rest-proxy) [![npm](https://img.shields.io/npm/dm/sp-rest-proxy.svg)](https://www.npmjs.com/package/sp-rest-proxy) | SharePoint REST API Proxy for Node.js and Express local serve |
| [sharepointconnector](https://github.com/veeraRaghavSanthosh/sharepointconnector) | [![npm](https://img.shields.io/npm/v/sharepointconnector.svg)](https://www.npmjs.com/package/sharepointconnector) [![npm](https://img.shields.io/npm/dm/sharepointconnector.svg)](https://www.npmjs.com/package/sharepointConnector) | A Node.js SharePoint Client inherited from sharepointer (by cian clarke) |



## Client libraries for browser, which work in Node.JS

| Package | | Description |
| --------- | --- | --------- |
| [PnP-JS-Core](https://github.com/SharePoint/PnP-JS-Core) | [![npm](https://img.shields.io/npm/v/sp-pnp-js.svg)](https://www.npmjs.com/package/sp-pnp-js) [![npm](https://img.shields.io/npm/dm/sp-pnp-js.svg)](https://www.npmjs.com/package/sp-pnp-js) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | PnP JavaScript Core component, a fluent API for working with the full SharePoint REST API as well as utility and helper functions. See [node-pnp-js](https://github.com/s-KaiNet/node-pnp-js) or [sp-pnp-node](https://github.com/koltyakov/sp-pnp-node) for Node.JS integration |
| [sharepointplus](https://aymkdn.github.io/SharepointPlus/) | [![npm](https://img.shields.io/npm/v/sharepointplus.svg)](https://www.npmjs.com/package/sharepointplus) [![npm](https://img.shields.io/npm/dm/sharepointplus.svg)](https://www.npmjs.com/package/sharepointplus) | A JavaScript library which offers some extended features for SharePoint entirely on client side (requires no server install) |
| [sprestlib](https://gitbrent.github.io/SpRestLib/) | [![npm](https://img.shields.io/npm/v/sprestlib.svg)](https://www.npmjs.com/package/sprestlib) [![npm](https://img.shields.io/npm/dm/sprestlib.svg)](https://www.npmjs.com/package/sprestlib) | SharePoint REST Library: JavaScript Library for SharePoint Web Services |
| [spscript](https://github.com/DroopyTersen/spscript) | [![npm](https://img.shields.io/npm/v/spscript.svg)](https://www.npmjs.com/package/spscript) [![npm](https://img.shields.io/npm/dm/spscript.svg)](https://www.npmjs.com/package/spscript) | SPScript makes it easy to code against SharePoint 2013 Rest API |

## SPFx related

| Package | | Description |
| --------- | --- | --------- |
| [node-sppkg-deploy](https://github.com/estruyf/node-sppkg-deploy) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| [![npm](https://img.shields.io/npm/v/node-sppkg-deploy.svg)](https://www.npmjs.com/package/node-sppkg-deploy) [![npm](https://img.shields.io/npm/dm/node-sppkg-deploy.svg)](https://www.npmjs.com/package/node-sppkg-deploy) | SharePoint APP Package Deployment |
| [spfx-build-url-rewrite](https://www.npmjs.com/package/spfx-build-url-rewrite) | [![npm](https://img.shields.io/npm/v/spfx-build-url-rewrite.svg)](https://www.npmjs.com/package/spfx-build-url-rewrite) [![npm](https://img.shields.io/npm/dm/spfx-build-url-rewrite.svg)](https://www.npmjs.com/package/spfx-build-url-rewrite) | SharePoint Framework build tool that automatically re-writes URL's in the manifest |
| [spfx-extensions-cli](https://github.com/vman/spfx-extensions-cli) | [![npm](https://img.shields.io/npm/v/spfx-extensions-cli.svg)](https://www.npmjs.com/package/spfx-extensions-cli) [![npm](https://img.shields.io/npm/dm/spfx-extensions-cli.svg)](https://www.npmjs.com/package/spfx-extensions-cli) | CLI tool to manage SharePoint Framework extensions |
| [sp-workbench-api-proxy](https://github.com/valorekhov/sp-workbench-api-proxy) | [![npm](https://img.shields.io/npm/v/sp-workbench-api-proxy.svg)](https://www.npmjs.com/package/sp-workbench-api-proxy) [![npm](https://img.shields.io/npm/dm/sp-workbench-api-proxy.svg)](https://www.npmjs.com/package/sp-workbench-api-proxy) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Provides an authenticated proxy to Office 365 + SharePoint Online or an on-prem SharePoint installation. Use as a part of development with SpFx Workbench or a custom toolchain. |


## Tools & CLIs

| Package | | Description |
| --------- | --- | --------- |
| [node-sp-auth-config](https://github.com/koltyakov/node-sp-auth-config)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| [![npm](https://img.shields.io/npm/v/node-sp-auth-config.svg)](https://www.npmjs.com/package/node-sp-auth-config) [![npm](https://img.shields.io/npm/dm/node-sp-auth-config.svg)](https://www.npmjs.com/package/node-sp-auth-config) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Config options builder for [node-sp-auth](https://github.com/s-KaiNet/node-pnp-js) |
| [sp-build-tasks](https://github.com/koltyakov/sp-build-tasks) | [![npm](https://img.shields.io/npm/v/sp-build-tasks.svg)](https://www.npmjs.com/package/sp-build-tasks) [![npm](https://img.shields.io/npm/dm/sp-build-tasks.svg)](https://www.npmjs.com/package/sp-build-tasks) | SharePoint front-end projects automation and tasks tool-belt |
| [sphooks](https://github.com/s-KaiNet/sphooks) | [![npm](https://img.shields.io/npm/v/sphooks.svg)](https://www.npmjs.com/package/sphooks) [![npm](https://img.shields.io/npm/dm/sphooks.svg)](https://www.npmjs.com/package/sphooks) | Cross-platform CLI for managing SharePoint list web hooks |
| [sp-live-reload](https://github.com/koltyakov/sp-live-reload) | [![npm](https://img.shields.io/npm/v/sp-live-reload.svg)](https://www.npmjs.com/package/sp-live-reload) [![npm](https://img.shields.io/npm/dm/sp-live-reload.svg)](https://www.npmjs.com/package/sp-live-reload) | SharePoint pages live reload module for client side development |
| [gulp-spcolor2scss](https://github.com/artokai/gulp-spcolor2scss) | [![npm](https://img.shields.io/npm/v/gulp-spcolor2scss.svg)](https://www.npmjs.com/package/gulp-spcolor2scss) [![npm](https://img.shields.io/npm/dm/gulp-spcolor2scss.svg)](https://www.npmjs.com/package/gulp-spcolor2scss) | Convert SharePoint spcolor-files to Sass partials |
| [gulp-spcolor-stylus](https://github.com/olemp/gulp-spcolor-stylus) | [![npm](https://img.shields.io/npm/v/gulp-spcolor-stylus.svg)](https://www.npmjs.com/package/gulp-spcolor-stylus) [![npm](https://img.shields.io/npm/dm/gulp-spcolor-stylus.svg)](https://www.npmjs.com/package/gulp-spcolor-stylus) | Converts SharePoint .spcolor files to .styl variables |
| [spcmd](https://github.com/benamar/spcmd) | [![npm](https://img.shields.io/npm/v/spcmd.svg)](https://www.npmjs.com/package/spcmd) [![npm](https://img.shields.io/npm/dm/spcmd.svg)](https://www.npmjs.com/package/spcmd) | office 365 shell command utilities |
| [sprestlib](https://www.npmjs.com/package/sp-wiki-to-docx) | [![npm](https://img.shields.io/npm/v/sp-wiki-to-docx.svg)](https://www.npmjs.com/package/sp-wiki-to-docx) [![npm](https://img.shields.io/npm/dm/sp-wiki-to-docx.svg)](https://www.npmjs.com/package/sp-wiki-to-docx) | Convert a sharepoint wiki library into a DOCX file |
| [spo-shell](https://github.com/beyond-sharepoint/spo-shell) | [![npm](https://img.shields.io/npm/v/@beyond-sharepoint/spo-shell.svg)](https://www.npmjs.com/package/@beyond-sharepoint/spo-shell) [![npm](https://img.shields.io/npm/dm/@beyond-sharepoint/spo-shell.svg)](https://www.npmjs.com/package/@beyond-sharepoint/spo-shell) | A cross-platform implementation of SharePoint shell commands written in straight ES6. No powershell cmdlets and confusing PnP installs |


## Web applications  

| Package | | Description |
| --------- | -- | ------------|
| [passport-sharepoint-addin](https://github.com/s-KaiNet/passport-sharepoint-addin) | [![npm](https://img.shields.io/npm/v/passport-sharepoint-addin.svg)](https://www.npmjs.com/package/passport-sharepoint-addin) [![npm](https://img.shields.io/npm/dm/passport-sharepoint-addin.svg)](https://www.npmjs.com/package/passport-sharepoint-addin) | [Passport.js](http://passportjs.org/) authentication middleware for SharePoint add-in |
| [expressjs-sp-addin](https://github.com/s-KaiNet/expressjs-sp-addin) |  | Sample SharePoint provider-hosted add-in with Express.js, [passport-sharepoint-addin](https://github.com/s-KaiNet/passport-sharepoint-addin) and PnP-JS-Core |
| [passport-sharepoint](https://github.com/QuePort/passport-sharepoint) | [![npm](https://img.shields.io/npm/v/passport-sharepoint.svg)](https://www.npmjs.com/package/passport-sharepoint) [![npm](https://img.shields.io/npm/dm/passport-sharepoint.svg)](https://www.npmjs.com/package/passport-sharepoint) | SharePoint authentication strategy for Passport and Node.js. |

## Working with files

| Package | | Description |
| --------- | -- | ------------|
| [gulp-spsave](https://github.com/s-KaiNet/gulp-spsave) | [![npm](https://img.shields.io/npm/v/gulp-spsave.svg)](https://www.npmjs.com/package/gulp-spsave) [![npm](https://img.shields.io/npm/dm/gulp-spsave.svg)](https://www.npmjs.com/package/gulp-spsave)  | Gulp plugin for saving files inside SharePoint |
| [sp-download](https://github.com/koltyakov/sp-download) | [![npm](https://img.shields.io/npm/v/sp-download.svg)](https://www.npmjs.com/package/sp-download) [![npm](https://img.shields.io/npm/dm/sp-download.svg)](https://www.npmjs.com/package/sp-download) | SharePoint files download client (library and CLI) in Node.js |
| [sppull](https://github.com/koltyakov/sppull) | [![npm](https://img.shields.io/npm/v/sppull.svg)](https://www.npmjs.com/package/sppull) [![npm](https://img.shields.io/npm/dm/sppull.svg)](https://www.npmjs.com/package/sppull) | Download files from SharePoint document libraries using Node.js without hassles |
| [sppurge](https://github.com/koltyakov/sppurge) | [![npm](https://img.shields.io/npm/v/sppurge.svg)](https://www.npmjs.com/package/sppurge) [![npm](https://img.shields.io/npm/dm/sppurge.svg)](https://www.npmjs.com/package/sppurge) | Delete files from SharePoint document libraries using Node.js without hassles |
| [spsave](https://github.com/s-KaiNet/spsave) | [![npm](https://img.shields.io/npm/v/spsave.svg)](https://www.npmjs.com/package/spsave) [![npm](https://img.shields.io/npm/dm/spsave.svg)](https://www.npmjs.com/package/spsave) | Save files in SharePoint using node.js easily |
| [spsave-webpack-plugin](https://github.com/yohanb/spsave-webpack-plugin) | [![npm](https://img.shields.io/npm/v/spsave-webpack-plugin.svg)](https://www.npmjs.com/package/spsave-webpack-plugin) [![npm](https://img.shields.io/npm/dm/spsave-webpack-plugin.svg)](https://www.npmjs.com/package/spsave-webpack-plugin) | a Webpack plugin that allows you upload generated assets to a SharePoint site |
| [gulp-spsync](https://github.com/wictorwilen/gulp-spsync) | [![npm](https://img.shields.io/npm/v/gulp-spsync.svg)](https://www.npmjs.com/package/gulp-spsync) [![npm](https://img.shields.io/npm/dm/gulp-spsync.svg)](https://www.npmjs.com/package/gulp-spsync) | Gulp plugin for synchronizing local files with a SharePoint library |
| [gulp-spsync-creds](https://github.com/estruyf/gulp-spsync-creds) | [![npm](https://img.shields.io/npm/v/gulp-spsync-creds.svg)](https://www.npmjs.com/package/gulp-spsync-creds) [![npm](https://img.shields.io/npm/dm/gulp-spsync-creds.svg)](https://www.npmjs.com/package/gulp-spsync-creds) | Gulp plugin for synchronizing local files with a SharePoint library |
| [sharepoint-file](https://github.com/timegrip/sharepoint-file) | [![npm](https://img.shields.io/npm/v/sharepoint-file.svg)](https://www.npmjs.com/package/sharepoint-file) [![npm](https://img.shields.io/npm/dm/sharepoint-file.svg)](https://www.npmjs.com/package/sharepoint-file) | A command-line utility for Sharepoint file operations |
| [spdeployment](https://github.com/mwiedemeyer/SPDeployment) | [![npm](https://img.shields.io/npm/v/spdeployment.svg)](https://www.npmjs.com/package/spdeployment) [![npm](https://img.shields.io/npm/dm/spdeployment.svg)](https://www.npmjs.com/package/spdeployment) | A command line tool to deploy all kind of files to SharePoint / Office 365 and set properties if specified |


## Wrapper or helper libraries

| Package | | Description |
| --------- | --- | --------- |
| [node-pnp-js](https://github.com/s-KaiNet/node-pnp-js) | [![npm](https://img.shields.io/npm/v/node-pnp-js.svg)](https://www.npmjs.com/package/node-pnp-js) [![npm](https://img.shields.io/npm/dm/node-pnp-js.svg)](https://www.npmjs.com/package/node-pnp-js) | PnP-JS-Core (sp-pnp-js) with Node.js made easy |
| [sp-jsom-node](https://github.com/koltyakov/sp-jsom-node) | [![npm](https://img.shields.io/npm/v/sp-jsom-node.svg)](https://www.npmjs.com/package/sp-jsom-node) [![npm](https://img.shields.io/npm/dm/sp-jsom-node.svg)](https://www.npmjs.com/package/sp-jsom-node) | SharePoint JavaScript Object Model for Node.js |
| [sp-pnp-node](https://github.com/koltyakov/sp-pnp-node) | [![npm](https://img.shields.io/npm/v/sp-pnp-node.svg)](https://www.npmjs.com/package/sp-pnp-node) [![npm](https://img.shields.io/npm/dm/sp-pnp-node.svg)](https://www.npmjs.com/package/sp-pnp-node) | SharePoint JavaScript Core Library wrapper helper for Node.js |
| [sp-screwdriver](https://github.com/koltyakov/sp-screwdriver) | [![npm](https://img.shields.io/npm/v/sp-screwdriver.svg)](https://www.npmjs.com/package/sp-screwdriver) [![npm](https://img.shields.io/npm/dm/sp-screwdriver.svg)](https://www.npmjs.com/package/sp-screwdriver) | Adds missing and abstracts SharePoint APIs for transparent usage in Node.js applications |
| [csom-node](https://github.com/vgrem/CSOMNode) | [![npm](https://img.shields.io/npm/v/csom-node.svg)](https://www.npmjs.com/package/csom-node) [![npm](https://img.shields.io/npm/dm/csom-node.svg)](https://www.npmjs.com/package/csom-node) | SharePoint Client Object Model (CSOM) API for Node.js applications |
| [gd-sprest](https://gunjandatta.github.io/sprest/) | [![npm](https://img.shields.io/npm/v/sprest.svg)](https://www.npmjs.com/package/sprest) [![npm](https://img.shields.io/npm/dm/sprest.svg)](https://www.npmjs.com/package/sprest) | SharePoint REST Framework - an easy way to create, read, update and delete data using the SharePoint 2013/Online REST API |


## Yeoman generators

| Package | | Description |
| --------- | -- | ------------|
| [generator-sppp](https://github.com/koltyakov/generator-sppp) | [![npm](https://img.shields.io/npm/v/generator-sppp.svg)](https://www.npmjs.com/package/generator-sppp) [![npm](https://img.shields.io/npm/dm/generator-sppp.svg)](https://www.npmjs.com/package/generator-sppp) | SP Pull-n-Push - Yeoman generator for SharePoint client-side applications |
| [SharePoint Framework generator](https://dev.office.com/sharepoint/docs/spfx/toolchain/scaffolding-projects-using-yeoman-sharepoint-generator) | [![npm](https://img.shields.io/npm/v/@microsoft/generator-sharepoint.svg)](https://www.npmjs.com/package/@microsoft/generator-sharepoint) [![npm](https://img.shields.io/npm/dm/@microsoft/generator-sharepoint.svg)](https://www.npmjs.com/package/@microsoft/generator-sharepoint) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| a Yeoman plugin for use with the SharePoint Framework. Using this generator, developers can quickly set up a new client-side web part project with sensible defaults and best practices. |
| [generator-spcaf](https://github.com/rencoreab/generator-spcaf) | [![npm](https://img.shields.io/npm/v/generator-spcaf.svg)](https://www.npmjs.com/package/generator-spcaf) [![npm](https://img.shields.io/npm/dm/generator-spcaf.svg)](https://www.npmjs.com/package/generator-spcaf) | This generator makes it easier to run SPCAF analysis on SharePoint Framework projects |
| [generator-portals-clientside](https://www.npmjs.com/package/generator-portals-clientside) | [![npm](https://img.shields.io/npm/v/generator-portals-clientside.svg)](https://www.npmjs.com/package/generator-portals-clientside) [![npm](https://img.shields.io/npm/dm/generator-portals-clientside.svg)](https://www.npmjs.com/package/generator-portals-clientside) | Scaffold out your clientside sharepoint projects. It has sub-generators for components, list exports, and CSR fields |


[_this is not a complete list, just a draft_, we're [collecting](https://github.com/SharePoint-NodeJS/Awesome-SharePoint-Node.js/issues/1) some other great libraries and tools to mention too]

