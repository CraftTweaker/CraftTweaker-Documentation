#!/bin/bash

echo "build script";
echo "moving English version in translation folder";
mkdir -p ./translations/en/docs;
cp -fr ./docs ./translations/en;
cp ./mkdocs.yml ./translations/en/;

echo "start building...";

TRANS=translations/./*;

for f in $TRANS; do echo "Processing folder ./translations$f"; SITEDIR="build/${f#"./"}"; echo $SITEDIR; mkdocs build --clean --site-dir $SITEDIR; done
echo "finished building!"