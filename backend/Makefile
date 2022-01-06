build:
	echo "Building..."

run:
	sudo docker run --name mariadb -v "${PWD}"/data:/var/lib/mysql -e MARIADB_ROOT_PASSWORD=root -d mariadb:latest

clean:
	sudo docker stop mariadb
	sudo docker container rm mariadb
