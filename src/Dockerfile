### STAGE 1: Build ###
# We label our stage as ‘builder’
FROM node as builder

COPY public/package.json public/package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && mv ./node_modules ./app

WORKDIR /app

COPY /public .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build -- --prod --output-path=dist

### STAGE 2: Setup ###
FROM node 

## channge directory
WORKDIR /app

#COPY api code to app folder
COPY server/ /app/

RUN npm i

## From ‘builder’ copy published angular bundles in app/public
COPY --from=builder /app/dist /app/public
## expose port for express
EXPOSE 8001

CMD ["node",  "./bin/run.js"]