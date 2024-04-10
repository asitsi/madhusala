#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/manoshala.magpie.ui.screening-assessments

#navigate into our working directory where we have all our github files
cd /home/ec2-user/manoshala.magpie.ui.screening-assessments

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node
nvm install 16.14

#use correct node version
nvm use

#install node modules
npm install

#build applicatoin
npm run build

#instal serve
npm install -g serve

#start our node app in the background
serve -s build > app.out.log 2> app.err.log < /dev/null & 
