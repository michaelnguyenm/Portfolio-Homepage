# Portfolio Homepage

Building a website to display my portfolio served with apache2 at https://michaelmnguyen.me

This website is built with the following:

1. HTML
2. CSS with [Bootstrap 3](http://getbootstrap.com/)
3. JavaScript, using AngularJS 1.6.0 with ui-router and jquery

Code is based off of examples hosted on [Bootstrap's website](http://getbootstrap.com/getting-started/#examples) as well as [Scotch.io's routing using ui-router tutorial](https://scotch.io/tutorials/angular-routing-using-ui-router).

## Developer Environment

This website can easily be run in a developer environment by using the provided `docker-compose.dev.yml` file. You can use the following command to spin up an environment:

```shell
docker-compose -f docker-compose.dev.yml up -d
```

## Building For Production

This portfolio website can be built and deployed using Docker. To build, clone this repository and use the command:

```shell
docker build -t <your image name> .
```

After building, to deploy the image on port 1440, you can spin up a container using:

```shell
docker run --name <your container name> -p 127.0.0.1:1440:80/tcp -d <your image name OR michaelnguyenm/portfolio-home>
```

This process is a lot more simple if you use Docker Compose, which will pull the docker image from `michaelnguyenm/portfolio-home` on Dockerhub:

```shell
docker-compose up -d
```

A development server running on 127.0.0.1:1441 can be run using:

```shell
docker-compose -f docker-compose.dev.yml up -d
```
