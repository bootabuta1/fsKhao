#!/bin/bash

cd /home/ubuntu
pm2 start "npm run start" --name freshkhao
