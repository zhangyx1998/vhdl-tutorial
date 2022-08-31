---
outline: deep
---
# Web framework manual

This manual is meant for people trying to deploy this project
or those who want to contribute web compatible contents.

> This project uses [VitePress](https:////vitepress.vuejs.org) along with
> extended (and customized) markdown syntax.

## Environment Setup

### NodeJS
::: tip Keep your distribution up-to-date!
Although Node `v16.x` should be working fine, you are still recommended
to keep it up to date.
:::

To install the latest version of NodeJS:

+ For Linux Users:

	+ [Debian and Ubuntu based distributions](https://github.com/nodesource/distributions#debinstall) (deb)

	+ [Enterprise Linux based distributions](https://github.com/nodesource/distributions#rpminstall) (rpm)

+ If you are using MacOS with HomeBrew:

	```sh
	brew install node
	```

+ If your are using Windows or MacOS without HomeBrew:

	Go to [NodeJS Official Download Page](https://nodejs.org/en/download/current/)

## File Hierarchy

To be updated

## Basic Markdown Syntax

To be updated

## Extended Markdown Syntax

To be updated

## Magic Keyword: `@vhdl`

To be updated

## Preview & Deploy

::: warning
The following scripts have only been tested on MacOS.

If you are using linux + bash/zsh, it should also work.
But if you are using Windows + Powershell, you might need
to backup your local changes before proceeding
:::

### Preview

```sh
npm run dev
```

After running this command, you should see a prompt saying
that the web contents are ready in http://xxx.xxx.xxx.xxx:xxxx.
Open the link on the same machine and you can preview the
rendering result.

::: info Live Updates
When you make changes to `js` or `md` files, the preview will be
automatically updated upon saving. However, if you are working
with `json` or `vhdl` files, you have to restart the dev server
to see the changes.
:::

### Deploy

To be updated