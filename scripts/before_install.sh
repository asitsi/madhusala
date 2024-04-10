#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh

#create our working directory if it doesnt exist
DIR="/home/ec2-user/manoshala.magpie.ui.screening-assessments"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi