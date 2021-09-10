# @heyoo/packs-ts-template

This project is the [heyoo](https://github.com/hey-yoo/heyoo) Command line tool's packs template with typescript.

Before go on, you must install [heyoo](https://github.com/hey-yoo/heyoo) in global.

## Usage

in the project you want to use a heyoo packs, create a heyoo config file(`hey.config.js` or `hey.config.json`):

```javascript
// hey.config.js
export default {
  packs: '@heyoo/packs-ts-template'
}
```

then install:

```shell
pnpm add @heyoo/packs-ts-template
# or
npm i @heyoo/packs-ts-template
# or
yarn add @heyoo/packs-ts-template
```

exec the exports script:

```shell
hey run foo
# or
hey run bar
```

## Develop packs template

```shell
hey create packs
# choose packs-ts-template and follow the other prompts

# the packsName is what you input by prompts
cd ./packsName

hey link
```

build package code:

```shell
<packageManager> run build
```

watch directory ./src, when update will rebuild:

```shell
<packageManager> run build
```
packageManager can be one of `pnpm`, `npm`, `yarn`.

### Notice

* package.json must have `exports` attribute, it must look like:

```json5
{
  "exports": {
    // you can know more on [Package entry points](https://nodejs.org/api/packages.html#packages_package_entry_points)
    "./foo": "./bin/foo.js",
    "./bar": "./bin/bar.js"
  }
}
```

* exports targets must export default a function.
