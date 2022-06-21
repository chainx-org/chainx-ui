# Chainx-Ui-Components

[![npm version](https://badge.fury.io/js/wr-ui.svg)](https://badge.fury.io/js/wr-ui)

This is Chainx's front-end team, a more convenient and easy-to-use component library based on the ant design component library for secondary packaging.

Ant-design is powerful, but if you want to personalize the style customization, you need to spend a lot of time to modify. In order to avoid having to re-modify the default style that overrides ant-design every time a new project is created, it is necessary to recapture it.

At the same time, we can customize styles directly on components, such as:

```javascript
<Icon cursor={'pointer'} iconSrc={IconSearch} size={24} />
```

The root element of Icon here is actually an img tag, and we can directly pass cursor, size or other set attributes on props to change its css style, without using styled-components or whatever to wrap him.

# Get started
```
yarn add chainx-ui-components
```
Then you can reference it in your file!

```javascript
import { Icon } from 'chainx-ui-components';

<Icon cursor={'pointer'} iconSrc={IconSearch} size={24} />
```

# Extend
Our component library is also compatible with the powerful rebass library, which you can also use for some simple styling customization. such as:
```javascript
<Text fontSize={15} fontWeight={600}>
  Test
</Text>
```

**Moreover, since it is a component based on ant design for secondary encapsulation, the properties of the ant design component are also fully supported**

# Development

## Unit Tests
When developing components, it is important to note that the coverage rate of unit tests should reach more than 90.
The command to run the test is:
```
yarn test
```
The unit test files for each component are placed in the __test__ directory of its directory, for example:
``lib/Button/__test__/Button.test.tsx``

## Documentation
Documentation is an important thing for a component library, and each component should have its corresponding documentation description. Document file placement path:
``lib/Button/Button.mdx``

Regarding the writing of the ``mdx`` file, the ``docz`` library was developed with the help of the command to run the document locally:
```yarn docz:dev```
Then visit ``http://localhost:6001`` to view the contents of your document

## Publish
Before publish, make sure your tests pass before you publish to ``npm``