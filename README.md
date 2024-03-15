## Description

A simple NestJS app for load testing sample data

## Installation

```bash
$ npm install
```

## Running the database
```bash
$ docker compose up -d
```
To view the database collections, you can go to: localhost:8081

## Add random users data
```bash
$ npx nestjs-command create:user <userNumber>
```

Example: 

```bash
$ npx nestjs-command create:user 10000
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Load Testing
[Apache Jmeter](https://jmeter.apache.org/download_jmeter.cgi)

The finished load test specimen is placed in ./test/loadtesting/LoadTest Plan.jmx

The results of the load tests can be viewed in ./test/loadtesting/results

## License

Nest is [MIT licensed](LICENSE).
