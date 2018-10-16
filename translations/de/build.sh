#!/bin/bash

echo "start"
echo "Building english site"
mkdocs build --clean --site-dir ./build/en


cd ./translations

TRANS=./*


for f in $TRANS
do
  cd $f
  echo "Processing folder $f"
  #will refer to start folder/build/languageCode
  SITEDIR="../../build/${f#"./"}"
  mkdocs build --clean --site-dir $SITEDIR
  cd ..
  
done