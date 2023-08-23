# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  NPM stands for "Node Package Manager." It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies.

- What is a package?
  All npm packages are defined in files called package.json. The content of package.json must be written in JSON.

  helps distribute JavaScript code to web and mobile apps, making ongoing improvement possible without forcing users to delete and update their apps.

- What are some other popular package managers?

  - Yarn
  - PNPM
  - ect...

- How can you create a `package.json` with `npm`?
  https://docs.npmjs.com/creating-a-package-json-file#creating-a-default-packagejson-file
  by running this command: npm init --yes

- What is a dependency and how do you add one to a package?

  - A dependency is another package that your package needs in order to work.
  - 'npm i package' command

- What happens when you add a dependency to a package with `npm`?

  - The devDependencies will get stored in the node-moduals file (depandencies are a MUST)

  - using tthe command 'npm install [name of package]'

- What is a devDependency and how do you add one to a package?

  - meant to support the development process of your web application (development are a WANT unlike dependency )

  - install them in the root directory of your package using the 'npm install --save-dev' command

- How do you define and run `npm` scripts? Why are these useful?
  you can just mannually type the 'script' property with a object assigned. then implement what you'd like to use!
