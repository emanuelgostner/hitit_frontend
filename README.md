## Application description
The app, "HitIt," provides a comprehensive platform for your fitness journey.

Features:

User Authentication and Authorization: Security is our top priority. Users must log in to access their personal data and workouts.

Create Workouts: Design customized workouts with various exercises, intervals, and repetitions according to your own needs and goals.

Edit Workouts: No workout is set in stone. Edit your workouts as needed by adding or removing exercises or adjusting parameters.

View Public Workouts: Browse through our gallery of public workouts created and shared by other users. Get inspired or adopt them directly into your own training plan.

View Private Workouts: Your privacy is important to us. See your own workouts, visible only to you and not accessible or usable by other users.

Execute Workouts with Timer: While you train, our app provides a user-friendly timer with extensive control options. Fast forward, rewind, stop, resume, or cancel your workout as needed.

With "HitIt," you can tailor your fitness program to your preferences and effectively pursue your goals.
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
run cucumber playwright tests with: `npm run ba2testExecution test/ba2/features/Interval.feature`

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
## Stack
Frontend: Vue, Nuxt
Backend: Mongodb, Express, Mongoose
## App showcase
![hitit_login](https://github.com/emanuelgostner/hitit_frontend/assets/13123637/7664eb6a-e686-448c-9242-04387bde95fe)
![hitit routines](https://github.com/emanuelgostner/hitit_frontend/assets/13123637/8601066c-479a-4bad-baf1-3f4b3f912765)
![hitit routine edit](https://github.com/emanuelgostner/hitit_frontend/assets/13123637/c374b2f2-cb98-49a8-b26f-a21bee66dff1)
![hitit interval editor](https://github.com/emanuelgostner/hitit_frontend/assets/13123637/ed9583e6-56d1-498a-ba24-17f61b936371)
![hitit timer](https://github.com/emanuelgostner/hitit_frontend/assets/13123637/a62615d6-8df2-4d9c-9750-aaacaf984437)
