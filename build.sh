#!/bin/bash

echo "build script";
echo "moving English version in translation folder";
mkdir -p ./translations/en/docs;
cp -fr ./docs ./translations/en;
cp ./mkdocs.yml ./translations/en/;

echo "start building...";
cd ./translations;

TRANS=./*;

for f in $TRANS; do cd $f echo "Processing folder $f"; SITEDIR="../../build/${f#"./"}"; echo $SITEDIR; mkdocs build --clean --theme-dir "../../mkdocs_windmill" --site-dir $SITEDIR; cd ..; done
echo "finished building!"