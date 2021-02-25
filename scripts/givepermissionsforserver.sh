#!/bin/bash

#I'm glad your not an idiot and decided to read this
#This is so that the port.sh file can access the files/dirs it needs (/var/www/ and /etc/lighttpd/)
#if you're not comfortable, talk to me

# -R option recursively gives the shell script permission


chmod 775 /www/4330safeWebsite/
chmod -R 775 /www/4330safeWebsite/
chmod -R 775 /etc/lighttpd/
chmod 777 /www/4330safeWebsite/cgiscripts/safe.status