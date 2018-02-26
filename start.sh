#!/bin/bash

cd /var/www/
npm install
forever stopall
npm start