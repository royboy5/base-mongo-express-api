# Base MongoDb / Express API

A baseline for creating an API with MongoDb and Express.

## Prerequisites
- This base was created with Node v. 7.0.0, npm v. 3.10.8
- A MongoDB server setup.  Add the DB_URI to your environment vars

## Setup

```
$ git clone https://github.com/royboy5/base-mongo-express-api.git <project name>
$ cd <project name>
$ npm install
```

*Note: Remember to update and source the .env.sample file

## Development

```
$ gulp          // To start app with file watcher
$ gulp lint     // Performs eslint
```

## To-do

- Add passport for user auth
