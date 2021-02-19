# Divide tu código en más de un archivo

Se considera una buena idea separar lo que hagas en más de un archivo

## El problema 

- Cuando escribes archivos para un modpack grande o medianamente grande, tu archivo podría hacerse bastante largo y confuso.
- Intentar encontrar un error en un archivo con muchas líneas puede tardar mucho, especialmente si el error no es de compilador, sino de ejecución (como por ejemplo el de un evento), que no apunta a una línea específica.

## What we know/need to know

- CraftTweaker can load files from multiple script files.
- CraftTweaker can even load files in subfolders.
- Also, CraftTweaker can load .zip files that contain .zs scripts inside them, as long as the .zip file is not password protected.

## La solución

- Split your large scripts into multiple smaller ones.
- You could for example create one script for each mod, or each mod handler.

## Example

```zenscript
scripts
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Vanilla
        Recipes
            Remove.zs
            Shaped.zs
            Shapeless.zs
        Seeds.zs
    oreDict.zs
```

## Ventajas:

- Your script files become easier to debug.
- An error won't stop your whole script from working but instead only a small part of it.
- People checking your script files can easier orient themselves

## Desventajas:

- You need to be careful with the loading order of the scripts (especially if one script removes a recipe and another one adds it). Check the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) if your script loading order is a problem
- There are many ways to categorize your scripts after and yours may be confusing for outsiders.