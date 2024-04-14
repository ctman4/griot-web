docker stop grio-web
docker rm grio-web
docker build -t grio-web .
docker run -d -p 8000:8000 --network grio-network --name grio-web grio-web 
