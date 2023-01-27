init: docker-up

#all
docker-up: docker-down
	docker-compose up -d --build

docker-log: docker-down
	docker-compose up --build

docker-down:
	docker-compose stop
	docker-compose down

permission-755:
	sudo chmod -R 755 ./src/

permission-777:
	sudo chmod -R 777 ./src/



