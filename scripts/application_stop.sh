#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing running application on port 3000"
fuser -k 3000/tcp