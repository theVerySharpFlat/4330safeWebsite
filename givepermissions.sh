#!/bin/bash

#I'm glad your not an idiot and decided to read this
#This is so that the port.sh file can access the files/dirs it needs (/var/www/ and /etc/lighttpd/)
#if you're not comfortable, talk to me

# -R option recursively gives the shell script permission


chmod -R 755 .
chmod -R 755 /var/www
chmod -R 755 /etc/lighttpd