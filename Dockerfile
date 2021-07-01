FROM node:12.18-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install request
EXPOSE 4200
RUN npm install --only=dev && npm cache clean -f
COPY . .
CMD ["npm", "start"]
