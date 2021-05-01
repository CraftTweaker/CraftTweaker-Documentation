# LoaderPreprocessor

The loader preprocessor will set the script's loaders.

## Call
You call the loader Preprocessor by adding `#loader loaderNames...` to your script file with `loaderNames...` being the names of the loaders you want to assign the script to, seperated by spaces.<br/>
Example 1: `#loader contenttweaker`<br/>
Example 2: `#loader preinit crafttweaker gregtech`

## What it does
Scripts with the loader Preprocessor will only be loaded by the loaders specified.<br/>
In the first example above, crafttweaker's loader won't touch the file, instead the loader called "contenttweaker" will execute that script.<br/>
In the second example, the loaders called "preinit", "crafttweaker" and "gregtech" will each execute that script.<br/>
If you don't specify that preprocessor, it will default to being just "crafttweaker".<br/>
Is is highly recommended that you define only a single loader for a script running any code, as executing it multiple times with different loaders will usually lead to errors or undefined behaviour.<br/>
Defining multiple loaders is useful for declaring [static variables](/AdvancedFunctions/Global_Static_Variables/) and [custom functions](/AdvancedFunctions/Custom_Functions/) in utility scripts which are available during multiple loaders' execution via [cross-script references](/AdvancedFunctions/Cross-Script_Reference/).