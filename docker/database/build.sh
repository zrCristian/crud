#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
docker build -t dh-mysql $(readlink -f "$DIR/Dockerfile")