#!/bin/bash

echo Load Environment Variables
echo "set -o allexport" >> ~/.bashrc
echo "source ./deployment/dev/.env" >> ~/.bashrc
echo "set +o allexport" >> ~/.bashrc
source ~/.bashrc

/bin/bash