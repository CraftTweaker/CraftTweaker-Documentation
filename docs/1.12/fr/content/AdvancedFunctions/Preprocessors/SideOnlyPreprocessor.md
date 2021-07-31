# SideOnlyPreprocessor

The preprocessor can set what side the scripts are loaded.

## Appel

It can be used as follows:

`#sideonly sidename`

Example: `#sideonly client` or `#sideonly server`

## Ce qu'il fait

This will make scripts only load when the execution side is the specified side of the network. Leaving the loader out will cause the script to load on both sides (the default).
