# ui-<NAME>

## Install dependencies

To install the dependecies run :

```
npm i
```

## Development

To run the playground using the layer in development mode run:

```
npm run dev
```

## Test

To run the test for this layer run:

```
npm run test
```

### Test in development mode

To run the test for this layer in development mode run:

```
npm run test:dev
```

## Build

To build the playground using the layer run:

```
npm run build
```

## Preview

To preview the playground using the layer run:

```
npm run preview
```

## Release

To release a new `patch` version push to main. To any type of release go to the
repo under actions publish release select.

To skip a release add `[skip]` to the commit message

## Usage

To use the layer in any nuxt > 3 proyect

```ts

// install
npm i @clau-org/ui-<NAME>@latest

// nuxt.config
export default defineNuxtConfig({
  extends: ['@clau-org/ui-<NAME>'],
})

```
