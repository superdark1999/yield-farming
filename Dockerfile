FROM node:16-alpine as builder

WORKDIR /frontend

COPY ./package.json /frontend

RUN apk add g++ make py3-pip

RUN npm install

COPY . .
RUN npm run build


EXPOSE 3009

FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf