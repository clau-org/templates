# api-<NAME>

## Development

To run this module in development mode run:

```
deno task dev
```

## Test

To run the test for this module run:

```
deno task test
```

### Test in development mode

To run the test for this module in development mode run:

```
deno task test:dev
```

## Preview

To preview this module run:

```
deno task preview
```

## Release

To release a new `patch` version push to main. To any type of release go to the
repo under actions publish release select.

To skip a release add `[skip]` to the commit message

## Usage

To use the module in any deno script

```ts
import { hello } "https://raw.githubusercontent.com/clau-org/api-<NAME>/v0.0.1/src/hello.ts"
```
