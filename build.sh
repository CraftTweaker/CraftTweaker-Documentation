#!/bin/bash

echo "build script";
echo "moving English version in translation folder";
mkdir -p ./translations/en/docs;
cp -fr ./docs ./translations/en;
cp ./mkdocs.yml ./translations/en/;

echo "start building...";
cd ./translations;

TRANS=./*;

SITE_URL="https:\/\/docs.blamejared.com\/1.14\/"

for f in $TRANS; do cd $f; echo "Processing folder $f"; SITEDIR="../../build/${f#"./"}"; echo $SITEDIR; mkdocs build --clean --theme-dir "../../mkdocs_zen" --site-dir $SITEDIR; sed -i "s/<loc>\//<loc>$SITE_URL${f:2:4}\//g" $SITEDIR/sitemap.xml; cd ..; done
echo "finished building!"