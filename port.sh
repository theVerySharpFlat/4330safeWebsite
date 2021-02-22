#!/bin/bash

#this is just a script to move everything to where you want it to go
#you may need to run this with sudo
#or chmod some things to make this work

cp ./webpage/* /var/www/
cp ./lighttpd.conf /etc/lighttpd/
cp ./cgi/cgi-bin/* /var/www/cgi-bin