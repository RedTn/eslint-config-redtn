# RedTn's ESLint Monorepo

[![CircleCI](https://circleci.com/gh/RedTn/eslint-config-redtn.svg?style=svg)](https://circleci.com/gh/RedTn/eslint-config-redtn)

## Usage

#### Base ESLint

`yarn add eslint-config-redtn --dev`

or

`npm install eslint-config-redtn --save-dev`

#### With React (extends Base ESlint)

`yarn add eslint-config-redtn-react eslint-plugin-react --dev`

or

`npm install eslint-config-redtn-react eslint-plugin-react --save-dev`

### Configuration

In your `.eslintrc.json`

1. add an extends rule for the config file you are using

#### Base

```json
{
  "extends": [
    "eslint-config-redtn",
  ],
}
```

#### React

```json
{
  "extends": [
    "eslint-config-redtn-react",
  ],
}
```

2. Add eslint properties specific to your project

```json
{
  "env": ...,
  "parserOptions": ...,
  "plugins": ...,
}
```

## Developing/Updating

If you are setting up the project for the first time, you must run:

`npm run lerna-bootstrap`

in order to install all the dependencies and links any cross-dependencies.

Update the packages as necessary and commit with

`npm run cz`

Generate the CHANGELOG file by running

`npm run generate-changelog`

Commit this file with

`npm run cz`

When commits have been published to remote, run

`npm run lerna-publish`

And follow prompts as desired to publish packages to npm.

More details on lerna can be found at [https://lernajs.io/](https://lernajs.io/)
