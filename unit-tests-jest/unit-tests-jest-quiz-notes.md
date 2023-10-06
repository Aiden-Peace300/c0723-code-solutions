# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?
  Unit testing is a way of testing a unit (unit meaning part) of code so that we can isolate and test code that can be logically isolated in a system.

- Why is it important to write unit tests?
  to isolate written code to test and determine if it works as intended.
  we test for the "happy path" and most importantly edge cases!

- What code should be tested with a unit test? What code is not well suited for unit tests?
  Do note test if the following is true:

  - The code is trivial.
  - The code simply passes through into a stable API.
  - The code needs to interact with other deployed systems; then an integration test is called for

  Test if the following is true:

  - If you can think of arguments that are common case.
  - Test the edge cases of a few unusually complex code that you think will probably have errors.
  - Whenever you find a bug, write a test case to cover it before fixing it

  TEST EXPORTED FUNCTIONS ALMOST ALWAYS!

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is an open-source testing framework built on JavaScript

  Here is a list of JS unit testing frameworks that aren't Jest:

  - Mocha
  - Storybook
  - Jasmine
  - Cypress
  - Puppeteer
  - Testing Library
  - WebdriverIO
  - AVA
  - Playwright
  - vite test
