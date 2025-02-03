# Cypress Test Suite

The tests are built with [Cypress](https://www.cypress.io) and are executable on Chrome, Firefox, and WebKit browsers. Additionally, the tests run on a predefined viewport matching the MacBook 15" screen size, which can be adjusted if necessary. Test suite should focus on making sure that user can see all needed information about book and can easily sort list or search. 

#### Table of Contents

- [FOLDER STRUCTURE](#folder-structure)
- [LOCAL DEVELOPMENT](#local-development)
- [RUNNING TESTS](#running-tests)
- [UI AUTOMATION STRATEGY](#ui-automation-strategy)
- [KNOWN ISSUES](#known-issues-and-potential-improvements)

## Folder Structure

```
/web-app-testing 
│  └── app/                     # Test application
│       ├──frontend
│       └──server      
└── tests/
│        ├── e2e/                # Test specifications
│        ├── page/               # Page Object Model (POM)
│        ├── support/            # Common cypress functions
│        ├── cypress.conf.js     # Cypress default configuration
│        └── package.json        # Node.js dependencies and scripts
└── package.json                 # Support to manage multiple packages 
```

## Local Development

## Precondition

- Before you begin, ensure that Node.js is installed on your system.
- Ensure that you have at least one modern browser Chrome or Firefox installed. 
  All supported browsers can be found [here](https://docs.cypress.io/app/references/launching-browsers#Browsers)

## Install Dependencies and start test application locally

1. Run `npm install`
2. Run `npm run start` to start running application at http://localhost:5173/

## Running Tests

### Using Cypress GUI

- Run `npm run open:cypress` to open the Cypress application and run tests interactively.

### Using Cypress in headless mode

- Run `npm run ci:e2e:chrome` to execute all tests in a headless Chrome browser.
- Run `npm run ci:e2e:firefox` to execute all tests in a headless Firefox browser.
- Run `npm run ci:e2e:webkit` to execute all tests in a headless Webkit browser (Safari).

## UI Automation strategy

- Before executing each step in the test, ensure that the application is in the correct state (can be achieved by checking API response finished, loading icon is hidden etc.).
- Tests executed on each PR push, should focus on the critical user journeys of the application.
- Avoid hardcoding test data within the test scripts.
- Introduce the unique `data-testid`/`id` attributes if possible, to locate and interact with elements in the DOM.