.SILENT:
.PHONY: help
.DEFAULT_GOAL := help

## This help message
help:
	awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf " * %-15s %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

#=============================================================================

## Install package dependencies
install:
	npm install

## Builds the package
build:
	npm run build

# Ignores unknown commands
%:
	@:
