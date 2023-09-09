#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DOCKER_PATH=$(readlink -f "$DIR/")
docker build -t dh-mysql $DOCKER_PATH