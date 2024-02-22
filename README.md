# noted. (backend)

Here to capture your fleeting thoughts.

## Description

noted. is designed for users who prefer a quick and simple way to jot down notes without worrying about organization! It follows a write-now, organize-later approach, allowing users to focus on capturing their thoughts without distractions.

## Table of contents

* [Technologies](#technologies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)

## Technologies

Project is created with:
* Node.js version: 20.11.0
* Express version: 4.18.2
* MongoDB version 6.3.0
* Bcrypt version: 5.1.1
* Cors version: 2.8.5
* Dotenv version: 16.4.4

## Setup

This server can be set up on your local machine with these steps:
```
$ git clone https://github.com/yurikahirata/noted_backend
$ npm install
$ npm start
```

You will also need to set up a .env file (please ask the administrator the URI to the databse):
```
ATLAS_URI=<URI>
PORT=8080
```

## API Endpoints
User routes
* `POST /users/`: Creates a new user
* `POST /users/session`: Authenticates user

Notes routes
* `POST /notes/`: Creates a new note
* `POST /notes/username/:collection`: Gets notes by username and collection name
* `DELETE /notes/:id`: Deletes a note by id
* `DELETE /notes/:username/:collection`: Deletes notes by username and collection name
* `PATCH /notes/:id`: Updates a note by id
* `PATCH /notes/username/:collection`: Updates notes by username and collection name

Collections routes
* `POST /collections/`: Creates a new collection
* `POST /collections/username`: Gets all collections by username
* `DELETE /collections/:id`: Deletes a collection by id
* `PATCH /collections/:id`: Updates a collection by id
