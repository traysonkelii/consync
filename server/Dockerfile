FROM node as server_modules
COPY /package.json /package-lock.json ./
RUN npm i

### STAGE 2: Setup ###
FROM node

## channge directory
WORKDIR /app

COPY --from=server_modules /node_modules /app/server/node_modules

#COPY api code to app folder
COPY . /app/server

RUN npm i -g nodemon

EXPOSE 8001

CMD ["nodemon",  "./server/bin/run.js"]