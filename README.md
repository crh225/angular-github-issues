Demo: https://christopher.house <br>
Chat: https://gitter.im/angular-github-issues/Lobby

<a href="https://codeclimate.com/github/crh225/angular-github-issues/maintainability"><img src="https://api.codeclimate.com/v1/badges/e17d5ad267ef6f6503c1/maintainability" /></a>
<a href="https://codeclimate.com/github/crh225/angular-github-issues/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e17d5ad267ef6f6503c1/test_coverage" /></a>
[![CircleCI](https://circleci.com/gh/crh225/angular-github-issues/tree/master.svg?style=shield)](https://circleci.com/gh/crh225/angular-github-issues/tree/master)
[![Dependency Status](https://david-dm.org/crh225/angular-github-issues.svg)](https://david-dm.org/crh225/angular-github-issues)
[![devDependencies Status](https://david-dm.org/crh225/angular-github-issues/dev-status.svg)](https://david-dm.org/crh225/angular-github-issues?type=dev)
![Angular_Version 6](https://img.shields.io/badge/Angular_Version-7-brightgreen.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/crh225/angular-github-issues/badge)](https://www.codefactor.io/repository/github/crh225/angular-github-issues)
[![BCH compliance](https://bettercodehub.com/edge/badge/crh225/angular-github-issues?branch=master)](https://bettercodehub.com/)
# About
Spanish Docs: https://github.com/crh225/angular-github-issues/tree/master/es

This repository searches's github for repositories, issues for that repository, and a github user search for angular developers. Once you search for a repository, you can then drill down into each repository and see a list of issues for the past seven days.

The other main feature is the ability to search for a github user in a particular Location in America. Right now it is defaulted to TN.

CI is set up to run lint,testing, build in aot mode for production, and to deploy to firebase.

This example show how to use multiple entity's in ngrx. The main search page is now a dashboard of barcharts for each repository. In the works is lazy loaded feature ngrx/stores.

Secure Github API login via Oath 2

For a live demo: https://christopher.house


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installation of npm packages

Run `npm install`.

## Build

Run `ng build --aot` to build the project in AoT mode instead of JiT. This will allow for faster rendering of your application, Fewer asynchronous requests, Smaller Angular framework download size and to Detect template errors earlier.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Docker: you can this in dev mode by running yarn dock or docker-compose up -d --build

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
