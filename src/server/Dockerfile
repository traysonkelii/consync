FROM node

WORKDIR /home/node
ARG PORT=8001
EXPOSE ${PORT}

COPY package.json package-lock.json ./
RUN npm set progress=false && npm config set depth 0 && npm ci --only=prod

COPY . .

CMD ["nodemon","./bin/run.js"]

