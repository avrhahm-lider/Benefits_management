FROM node:24.17.0 
WORKDIR /app
COPY package*json /app/
RUN npm i
COPY . /app/
CMD [ "node", "app" ]




