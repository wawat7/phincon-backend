FROM node:alpine

RUN apk --no-cache add curl

ADD . /app

ARG DB_HOST=''
ARG DB_NAME=''
ARG DB_USERNAME=''
ARG DB_PASSWORD=''

ARG APP_PORT=4000

WORKDIR /app

RUN echo "DB_HOST=${DB_HOST}"  >> ".env"
RUN echo "DB_NAME=${DB_NAME}"  >> ".env"
RUN echo "DB_USERNAME=${DB_USERNAME}"  >> ".env"
RUN echo "DB_PASSWORD=${DB_PASSWORD}"  >> ".env"
RUN echo "APP_PORT=${APP_PORT}"  >> ".env"

RUN npm install 

EXPOSE 4000

HEALTHCHECK --interval=20s --start-period=5s CMD curl -f localhost:4000/health

CMD npm run start