FROM node as front_end_modules
COPY public/package.json public/package-lock.json ./
RUN npm i

### STAGE 1: Build ###
# We label our stage as ‘builder’

FROM node as builder

COPY /public ./public

WORKDIR /public

COPY --from=front_end_modules node_modules ./node_modules

RUN npm install -g @angular/cli

# Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build --prod --aot --outputHashing=all --output-path=dist

FROM node as server_modules
COPY server/package.json server/package-lock.json ./
RUN npm i

### STAGE 2: Setup ###
FROM node

## channge directory
WORKDIR /app

COPY --from=server_modules node_modules /node_modules

#COPY api code to app folder
COPY server/ /app/

RUN npm i -g nodemon

## From ‘builder’ copy published angular bundles in app/public
COPY --from=builder public/dist /app/public
## expose port for express
EXPOSE 8001

CMD ["nodemon",  "./server/bin/run.js"]`