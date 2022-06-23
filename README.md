# movie-list
mini-app for movie list

## Project Description
A repository to house the movie-list mini-app for Galvanize SDI #10.

## Setup Instructions
### Front-End:
1. Change directory to the client

        cd client

2. Install dependencies

        npm install

3. Run react application

        npm start

### Back-End:
1.  Spin up docker container

    a. download docker if you haven't already (visit https://www.docker.com/products/docker-desktop/)

    b. Pull latest postgres image

        docker pull postgres

    c. Make a docker volume for postgres

        mkdir -p $HOME/docker/volumes/postgres

    d. Make and spin up the container

        docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

2. Create database

    a. Shows list of containers, you will need the container ID for the subsequent command

        docker ps -a

    b.. Open a bash command line with the docker container

        docker exec -it <PSQL-Container-ID> bash

    c. Open command line inside psql with the username postgres

         psql -U postgres

    d. Create the database for this project

         CREATE DATABASE movie_list;

3. Initialize database

        npx knex migrate:latest
        npx knex seed:run (optional)

4. Install back-end dependencies (must be in the /server directory)

        npm install

5. Start back-end server

        npm start

