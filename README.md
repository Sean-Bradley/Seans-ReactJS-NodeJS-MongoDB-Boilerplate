# Seans-ReactJS-NodeJS-MongoDB-Boilerplate

## To start

`docker-compose up`

then visit

`http://192.168.99.100`

*dockerised on windows 10 using docker toolbox*

![Screenshot](screenshot.png)

## Protractor e2e tests

There is also the option to do e2e testing with protractor and jasmine.

Before you start, you need to install protractor

`cd nodejs`

`npm install -g protractor`

then, update the web driver

`npm run update-webdriver`

Now you can run

`npm run protractor`
