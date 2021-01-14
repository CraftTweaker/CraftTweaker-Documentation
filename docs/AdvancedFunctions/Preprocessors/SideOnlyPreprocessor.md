# SideOnlyPreprocessor

The preprocessor can set what side the scripts are loaded.

## Call

It can be used as follows:

`#sideonly sidename`

Example: `#sideonly client` or `#sideonly server`

## What it does

This will make scripts only being loaded when the loader is the specified side of the network just leaving this loader away will cause it to be loaded on both sides.
