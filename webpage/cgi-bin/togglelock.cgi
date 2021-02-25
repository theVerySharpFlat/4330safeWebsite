#!/bin/bash
echo "Content-type: text/plain"
echo ""

export status=$(cat /www/4330safeWebsite/cgiscripts/safe.status)

if [ "$status" == "Locked" ]
then 
    /www/4330safeWebsite/cgiscripts/unlock.cgi
    export status=$(cat /www/4330safeWebsite/cgiscripts/safe.status)
    echo "$status"
    exit 0
elif [ "$status" == "Unlocked" ]
then
    /www/4330safeWebsite/cgiscripts/lock.cgi
    export status=$(cat /www/4330safeWebsite/cgiscripts/safe.status)
    echo "$status"
    exit 0
fi

# if we get here, 
# it  means that there was something other than "Locked" and "UnLocked inside the status file"
exit 1