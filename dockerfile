FROM node:latest

# Create an app dir
WORKDIR /app 

# Install deps 
COPY package.json ./

RUN npm install 

COPY . .

# Expose web app port
EXPOSE 8000

CMD [ "npm", "start" ]