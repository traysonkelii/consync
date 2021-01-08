FROM node

WORKDIR /home/node
ARG PORT=8001
EXPOSE ${PORT}

COPY package.json package-lock.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .

CMD ["nodemon","./bin/run.js"]

