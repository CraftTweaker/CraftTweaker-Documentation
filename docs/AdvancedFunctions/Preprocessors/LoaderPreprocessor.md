# LoaderPreprocessor

The loader preprocessor will set the script's loaders.

## Call
You call the loader Preprocessor by adding `#loader loaderNames...` to your script file with `loaderNames...` being the names of the loaders you want to assign the script to, seperated by spaces.
Example 1: `#loader contenttweaker`
Example 2: `#loader preinit crafttweaker gregtech`

## What it does
Scripts with the loader Preprocessor will only be loaded by the loaders specified.  
In the first example above, crafttweaker's loader won't touch the file, instead the loader called "contenttweaker" will execute that script.  
In the second example, the loaders called "preinit", "crafttweaker" and "gregtech" will each execute that script.  
If you don't specify that preprocessor, it will default to being just "crafttweaker".
Is is highly recommended that you define only a single loader for a script running any code, as executing it multiple times with different loaders will usually lead to errors or undefined behaviour.
Defining multiple loaders is useful for declaring [static variables](/AdvancedFunctions/Global_Static_Variables/) and [custom functions](/AdvancedFunctions/Custom_Functions/) in utility scripts which are available during multiple loaders' execution via [cross-script references](/AdvancedFunctions/Cross-Script_Reference/).