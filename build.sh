#!/bin/bash

echo "start";

echo "Removing previous builds";
rm -fr ./build/*;
git clean -df;


#echo "Building english site";
#mkdocs build --clean --theme-dir ./mkdocs_windmill --site-dir ./build/en;

mkdir -p ./translations/en/docs;
cp -fr ./docs ./translations/en;
cp ./mkdocs.yml ./translations/en/;


cd ./translations;

TRANS=./*;

for f in $TRANS; do cd $f echo "Processing folder $f"; SITEDIR="../../build/${f#"./"}"; echo $SITEDIR; mkdocs build --clean --theme-dir "../../mkdocs_windmill" --site-dir $SITEDIR; cd ..; done
