# UK bank holidays (built with React)

[![Screen-Shot-2019-04-06-at-23-23-04.png](https://i.postimg.cc/c45xNm4Z/Screen-Shot-2019-04-06-at-23-23-04.png)](https://postimg.cc/TpgMVnDH)

[Visit the live app →](http://nikhilvijayan.com/bankholidays/)

- SPA built using React from scratch (i.e. not using create-react-app)
- Tested using `jest` and `react-test-renderer`
- Styled using `styled-components` (following the [reusable component system](https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c))
- Bundled (and developed) using `parcel`

## Installation

- Clone this repo with `git clone https://github.com/nkhil/UK-bank-holidays-react.git`
- `cd UK-bank-holidays-react` to go into the application root
- `npm install` to install dependencies
- `npm run start` to start the development server
- `npm run build` to build for deployment

## Testing

- `npm run test` to run the tests (in `watchAll` mode by default)
- `npm run coverage` to get jest test coverage
- `npm run updatesnapshot` to update test snapshots

## Approach

- I've tried to keep my components DRY while delegating as much responsibility as possible. This allows for very less coupling as the logic and components are abstracted away.  
- This was my first time using CSS-in-JS as well as the re-usable component system. I think  they work well to keep the code clean by abstracting the presentation layer, while still allowing customisation and semantic declaration within the render methods (for eg: `<Header h3 center>` or `<Flex column contentCenter alignCenter>`)

## Learnings

- Functions should be created to take in any input instead of hard coded inputs (to reduce coupling)
- Functions should be tested for their behaviour, and not how they cause the intended behaviour
- Snapshot testing (why, how, when)
- Using `async` functions causes further complexity in testing (and error messages) which are easily fixed by `@babel/plugin-transform-runtime`
- Re-usable component systems are useful and make life easy

