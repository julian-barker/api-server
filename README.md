# Lab - Class 04

## Project: API Server

### Author: Julian Barker

### Problem Domain  

This repo is an exercise in creating and deploying an Express server and connecting to a SQL database. It uses a local and deployed instance of a postgres database for development and production as well as a sqlite in-memory database for testing. It implements all CRUD operations as router middleware.

### Links and Resources

- [ci/cd](https://github.com/julian-barker/api-server/actions)
- [deployment](https://four01-api-server.onrender.com)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - 3001
- `DATABASE_URL` - postgres://localhost:5432/\<database-name\>?sslmode=disable

#### How to initialize/run your application (where applicable)

- `npx tsc --watch & nodemon -q dist/index.js`

#### Features / Routes

- GET : `/` - return "We're live!!!"
- GET : `/clothes` - gets all records from the clothes table
- GET : `/clothes/:id` - gets a single record by id
- POST : `/clothes` - inserts a new record; takes an object in the request body as fields to populate
- PUT : `/clothes/:id` - updates a single record by id; takes an object in the request body as fields to be updated
- DELETE : `/clothes/:id` - deletes a single record by id

#### Tests

- `npm test` (alias for `NODE_ENV=test npx tsc && jest --verbose --coverage`)

#### UML

![UML](./assets/401_lab_3_UML.png)

### Attributions
