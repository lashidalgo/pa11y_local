#!/bin/bash
 
for var in "$@"
do 
    pa11y "http://localhost:3000/${var}" -i 'notice;warning' -r html > reports/${var}.html; open reports/${var}.html
done

