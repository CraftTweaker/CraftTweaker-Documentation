#!/bin/bash
echo $webDir;

ls $webDir;

#rm -fRv $webDir/*;
cp -fRv build/* $webDir;