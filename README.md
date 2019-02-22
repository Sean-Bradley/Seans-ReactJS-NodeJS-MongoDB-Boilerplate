# Seans ReactJS NodeJS MongoDB Boilerplate

*Comes Dockerised and with Tests*

### NOTE: This project has many concepts. If you want a project that focuses mainly on just TypeScript with NodeJS and demonstrates a basic CRUD style REST API, then see https://github.com/Sean-Bradley/Seans-TypeScript-NodeJS-CRUD-REST-API-Boilerplate


## To start

`docker-compose up`

then visit

`http://localhost:3000`

## Note about docker toolbox on windows 10

After running `docker-compose up`, the site will be available at `http://192.168.99.100:3000`
You can change this to `http:/localhost:3000` by following these steps below.

* Open VBox manager,
* Click the default machine used by docker
* Right click and choose Settings
* Network > Adapter 1 > Advanced > Port Forwarding
* Click "+" to add a new Rule
* Set Host IP to 127.0.0.1, Host Port 3000
* Guest IP to 192.168.99.100 and Guest Port 3000
* http:/localhost:3000

![Screenshot](screenshot.png)

## To Test

Contains mocha, chai and enzyme tests

`cd nodejs`

`npm test`

## Protractor e2e tests

There is also the option to do e2e testing with protractor and jasmine.

Before you start, you need to install protractor

`cd nodejs`

`npm install -g protractor`

then, update the web driver

`npm run update-webdriver`

Now you can run

`npm run protractor`

![protractor screenshot](protractorScreenshot.png)
