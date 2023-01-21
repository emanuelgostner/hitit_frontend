## Mock
- https://mockapi.io/projects/6368d90c15219b8496085dc3

## Icons
- https://github.com/nuxt-modules/icon
- https://icones.js.org/collection/all

## gestures
- https://interactjs.io/pro/
- zingtouch
- hammer.js

## tests
### cucumber tests with playwright test runner
run cucumber playwright tests with: `npm run test:e2e test/acceptance/features/login.feature`

which uses following package.json config 
```
"test:e2e": "cucumber-js --require cucumber.conf.js --require test/acceptance/stepDefinitions/**/*.js --format @cucumber/pretty-formatter"
```
### playwright test runner
run with: `npm testplaywright`

which uses following package.json config:
```
"testplaywright": "npx playwright test"
```

