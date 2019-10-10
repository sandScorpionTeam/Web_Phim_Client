# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage

RUN apt-get update
RUN apt-get -y install curl
RUN apt-get -y install yarn

WORKDIR /app
COPY ./ /app/
ARG configuration=development
RUN yarn install
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf