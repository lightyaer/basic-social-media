## Installation
- Open root folder(basic-social-media)
- Copy respective client and server .env.template to .env
  
  ```bash
  cp client/.env.template client/.env
  cp server/.env.template server/.env
  ```
- Install dependencies
  
  ```bash
  $ yarn install
  ```

## Dev

Run the following command in root folder
```bash
$ yarn run server-dev
```
```bash
$ yarn run client-dev
```

## Seed

- Seed data with friends 
  ```bash
    yarn run seed-data
  ```
- Seed data without friends
  ```bash
    yarn run seed-without-friends
  ```

## Postman
- Included BasicSocialMedia.postman_collection.json, which can be imported into postman

## Checklist

- [x] Create client folder and initialize a Vue Project
- [x] Setup loading & error store
- [x] Create server folder and npm initialize
- [x] Install required dependencies, sequelize, pg, pg-hstore, moment, lodash
- [x] Create DB Connection
- [x] Create schema for users
- [x] Create symmetric Many-to-Many Relationship with users
- [x] Create routes to get all users, get friends of user, addFriend, removeFriend
- [x] Design and create routes for listing friends, friend details, map friends
- [x] Create Listing Page to list all friends
- [x] Create detail page on click of a profile
- [x] Show friends of detail page, show friends of friends,
- [x] Create a dashboard to add friends, delete friends & add user.

