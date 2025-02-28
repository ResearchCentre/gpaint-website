## live-attendance-website

## Local system running http://localhost:5005

## NPM Install
npm install --legacy-peer-deps

## Start the project in Local system
npm start (or) FAST_REFRESH=false npm start

## Package name                 Date                Reason
npm install -g cross-env        17-Oct-2023         This will help to run the project in Local system for Mac OS & Windows

## Clear the local VS code cache
npm start -- --rest-cache

## Find if any app is running at 3000 port
lsof -i :3000

## Stop any process in command line
kill -9 <PID>

## Build Script in CICD Pipleline
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install --legacy-peer-deps
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*

