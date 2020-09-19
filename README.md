# WANDER

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![CircleCI](https://circleci.com/gh/deepakpster/wander.svg?style=svg&circle-token=481837b859a00743c1655210dd813abc8e468853)](https://app.circleci.com/pipelines/github/deepakpster/wander)
___
# CODING CHALLENGE

## A COVID-19 RESPONSIVE WEB DASHBOARD WITH REACT

### User Functions
  - A user can register an account
  - A user can login
  - An authenticated user can view a COVID-19 dashboard for India. The
dashboard can include anything you feel is useful - eg total cases,
active cases, deaths, graphs etc. These examples are not prescriptive.
Be bold, be creative and build something awesome.

### Main Frameworks
  - Redux/Redux Toolkit
  - React Saga for side effects
  - Anything else you wish to use

### Infrastructure
  - Backend/DB - any serverless technology (eg firebase, amplify, lambdas etc)
Deliverables
  - Source code
  - Public working url of the webapp
  - Tests - unit and integration tests. you may also choose to use a ci
___

### Installation
Wander requires [Node.js](https://nodejs.org/) v4+ to run.

After downloading/cloning this repo.

Install the dependencies and devDependencies and start the 
#### Development
Want to contribute? Great!

Wander uses Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

Frontend:
```sh
$ cd wander/fe
$ npm install
$ npm start
```

Backend:
```sh
$ cd wander/be
$ npm install
$ npm start
```
#### Building for source
For production environments...

Frontend:
```sh
$ cd wander/be
$ npm install
$ npm run build
```
Backend:
```sh
$ cd wander/be
$ npm install
$ npm run deploy
```

#### Testing
Frontend:
```sh
$ cd wander/fe
$ npm install
$ npm test
```

## Tech

Wander uses a number of open source projects to work properly:

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [Redux Saga](https://redux-saga.js.org/) - Saga middleware for Redux to handle Side Effects.
* [Firebase](https://firebase.google.com/products/auth) - Authenticate users simply and securely.
* [Superagent](https://visionmedia.github.io/superagent/) - elegant & feature rich browser / node HTTP with a fluent API.
* [Bootstrap](https://getbootstrap.com/) - CSS framework directed at responsive, mobile-first front-end web development
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing
* [Enzyme](https://enzymejs.github.io/enzyme/) - Testing utility for React.
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Serverless](https://www.serverless.com/) - zero-friction serverless development
* [AWS Cloudfront](https://aws.amazon.com/cloudfront/) - Fast, highly secure and programmable content delivery network (CDN)
* [AWS Lambda](https://aws.amazon.com/lambda/) - Run code without thinking about servers.
* [AWS Route 53](https://aws.amazon.com/route53/) - A reliable and cost-effective way to route end users to Internet applications
* [Circle CI](https://circleci.com/) - Continuous integration and delivery platform
## Demo

[Click Here](https://wander.getvoz.com/)


### Todos

 - Write MORE Tests
 - Formatting coding standard
 - Enhance UI/UX (Geo map, visualisation)
 - Typechecks
 - Code coverage
 - Documentation


License
---

MIT
