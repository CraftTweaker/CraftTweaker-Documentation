# Import Function

Instead of typing the whole function name all the time, you can just import a function to serve your needs.
Useful when using mod functions.

## Note on pre 1.12 imports
With CraftTweaker 1.12, a lot of code has changed.  
Before, all internal functions were called using `minetweaker.package.function`.
Now, `minetweaker` has been replaced by `crafttweaker`, so now it sais `crafttweaker.name.function`!

Should you ever experience any importing issues with scripts from this wiki, you may want to check if your MC version is below 1.12.


## Basic Import

Imports have to be declared at the top of a Script. You will have to declare imports for each scripts separately.
Be careful not to import two functions with the same name, use the AS function for that

```
//This will import the hide function from JEI
import mods.jei.JEI.removeAndHide;

//And this will import the JEI package
import mods.jei.JEI;

//removeAndHide is a function, so we can just use it
removeAndHide(<minecraft:dirt>);

//JEI is a package, so we need to specify what function of it we want to use
JEI.hide(<minecraft:diamond>);
```

## Import as

Sometimes you want to import two functions with the same name or just want to keep your scripts look better by using custom names.
When adding the AS statement at the end of the import, you can specify the name that the import should listen to.

```
//This will import the hide function from JEI and make it available under the name "h"
import mods.jei.JEI.hide as h;

//And this will import the removeAndHide function from JEI and make it available under the name "rh"
import mods.jei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```

