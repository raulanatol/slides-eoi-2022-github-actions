.DEFAULT_GOAL := build

start:
	@npm run start

pdf:
	@npm run pdf

build:
	@npm run build

init:
	@npm install

sync-template:
	@sh .scripts/sync-template.sh
