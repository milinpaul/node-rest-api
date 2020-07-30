# Node-Rest-Api

A boilerplate node server code base for Rest Api Dev.
The code is organised in a modular way to suit the needs of large scale application.

# Stacks used:

- Nodejs
- Express
- Docker
- Docker Compose
- Mongo

# Containers Used:

The application is wrapper in docker container. Containers used are

- NodeJs Container for running node app.
- Mongodb container for running mongodb.

# Packages Used:

- bcryptjs - For password salting.
- express-validator - For valiating and sanitizing the query and body parameters from the endpoint.
- http-status-codes - For getting status codes for response purposes.
- lodash - For various utility purposes.
- mongoose - For mongo ORM
- winston - For logging purposes.

# Run The Project:

Create an .env with sutiable values. Refer .env.sample for reference.

```sh
$ docker-compose up --build
```

Browse http://localhost:800/api to see the welcome message.
