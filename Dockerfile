FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# EXPOSE 4200
RUN npm install request
RUN npm install --only=dev && npm cache clean -f
COPY . .
CMD ["npm", "start"]
