FROM node:12.18-alpine
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package.json ./
RUN npm install
# RUN npm install --save-dev @angular-devkit/build-angular
# RUN npm install --only=dev && npm cache clean -f
COPY . .
# RUN ng build --prod
EXPOSE 4200
# CMD /usr/src/app/node_modules/.bin/ng serve --proxy-config proxy.conf.js
# CMD /usr/src/app/node_modules/.bin/npm start
CMD npm start
