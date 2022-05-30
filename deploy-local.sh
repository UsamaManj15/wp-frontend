#!/bin/bash

task="$1"

if [[ -n "${task}" ]]; then
  echo "Task: $task"
fi

if [ "$task" == "build" ]; then
  docker-compose down
  docker-compose build
fi

docker-compose up
