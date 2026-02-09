.PHONY: run build down logs

run:
	docker compose up --build

build:
	docker compose build

down:
	docker compose down

logs:
	docker compose logs -f --tail=200
