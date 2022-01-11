**You may want to employ the
[Parcel backed boilerplate](https://github.com/OleksiyRudenko/parcel-backed-boilerplate)
that implements the solution described below.**

 * [Targets](#targets)
 * [Pre-requisites](#pre-requisites)
 * [Solution](#solution)
 * [Enjoy](#enjoy)

## Targets

1. We want to:
   * use [ParcelJS](https://parceljs.org/) as a building tool
   * have `index.html` as an entry point
   * build into `dist/`
   * have whatever is under `dist/` get published on github pages (and no source code)
2. We DO NOT want to:
   * have `dist/**/*` on repo (with exclusion of `gh-pages` branch where we DO have content from under `dist/`)
   
## Pre-requisites

You have `NodeJS` and `npm` installed.

You may want employ [`yarn`](https://yarnpkg.com/en/docs/install) as your package manager.

You have a repo for your project on github and it is properly associated with your local repo as `origin`.

Under Windows you may also require [Git Credential Manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases).
You will definitely require it if `push-dir` reports `fatal: HttpRequestException encountered` or similar errors.

## Solution

### Have required tools installed

ParcelJS: `npm install -g parcel-bundler` or `yarn global add parcel-bundler`

[push-dir](https://www.npmjs.com/package/push-dir): `npm install -g push-dir` or `yarn global add push-dir`

[Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases)(optional)

### Get prepared

Have the following lines in your root `.gitignore`:
```
node_modules
dist
.cache
```

The above explained:
```
node_modules -- where yarn/npm install local modules
dist         -- target directory where distribution files would be placed
.cache       -- ParcelJS cache directory
```


Run `npm init` or `yarn init` and answer questions as provided. Name your project `index` to have `index.html` as
an entry point under `dist/` when app gets built.

Presuming that your source code is located under `src/` add the following (or instructions herefrom) to the project's `package.json`:
```
{
  ...
  "scripts": {
    "start": "parcel ./src/index.html",
    "prebuild-dev": "shx rm -rf dist/*",
    "build-dev": "parcel build ./src/index.html --no-minify --public-url ./",
    "prebuild": "shx rm -rf dist/*",
    "build": "parcel build ./src/index.html --public-url ./",
    "push-gh-pages": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
  },
  "devDependencies": {
    "shx": "^0.3.2"
  }
  ...
}
```

Run `yarn install` to have dev dependencies installed.

After having published the app to your remote repo `gh-pages` branch
make sure that your remote repo settings on GitHub provide for `gh-pages branch` to be a source for GitHub Pages.

> Use the following as a settings access url template
> [https://github.com/OleksiyRudenko/default-beauty.css/settings](https://github.com/OleksiyRudenko/default-beauty.css/settings)_)
  

## Enjoy

> Commands below employ `yarn`. `npm` can be employed instead.

`yarn start` ==> have your app served at `http://localhost:1234/`

`yarn build-dev` ==> have your project built (unminified) under `dist/`

`yarn build` ==> have your project built (minified) under `dist/`

> `prebuild-dev` and `prebuild` clean `dist/` up and are invoked automatically

`yarn push-gh-pages` ==> have whatever is built under `dist/` published with github pages

NB! Have your git clean before publishing (i.e. any changes commited). 
Do not change anything until publishing completes as the publishing tool manipulates the tree.

You won't see any local `gh-pages` branch after publishing completes. You don't need it either.