docker build -t grio-web .
docker run -d -p 8000:8000 --name grio-web grio-web


#Use this command to find the process using the port:
sudo lsof -i :8000
#Kill the process 
kill <process-id>


#Remove container 
docker rm <container_id_or_name>