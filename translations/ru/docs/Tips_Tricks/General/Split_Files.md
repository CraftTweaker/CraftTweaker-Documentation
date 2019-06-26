# Разделяйте свои скрипты на несколько файлов

Это хорошая идея &mdash; делить свои скрипты на несколько файлов

## Проблема

- When writing scripts for bigger modpacks, your script might soon become pretty long and confusing.
- Debugging a long script might take really long, especially if you have an error that doesn't point out a specific line in your script.

## What we know/need to know

- CraftTweaker can load files from multiple script files.
- CraftTweaker can even load files in subfolders.
- Also, CraftTweaker can load .zip files that contain .zs scripts inside them, as long as the .zip file is not password protected.

## Решение

- Split your large scripts into multiple smaller ones.
- You could for example create one script for each mod, or each mod handler.

## Пример

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
    

## Advantages

- Your script files become easier to debug.
- An error won't stop your whole script from working but instead only a small part of it.
- People checking your script files can easier orient themselves

## Disadvantages

- You need to be careful with the loading order of the scripts (especially if one script removes a recipe and another one adds it). Check the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) if your script loading order is a problem
- There are many ways to categorize your scripts after and yours may be confusing for outsiders.