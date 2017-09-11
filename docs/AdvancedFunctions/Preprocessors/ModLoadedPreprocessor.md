# ModLoaderPreprocessor

The modLoaded Preprocessor only executes a script, if a certain mod is present.

## Call
You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

## What it does
If you added this preprocessor to a script, it will only be executed if the provided modID's are present, in other words if the respecting mods are loaded.