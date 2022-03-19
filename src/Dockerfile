FROM node:16-alpine 
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./
RUN npm config set unsafe-perm true
RUN npm install
EXPOSE 3000
CMD ["npm","start"]