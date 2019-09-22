# Разделяйте свои скрипты на несколько файлов

Это хорошая идея &mdash; делить свои скрипты на несколько файлов

## Проблема

- When writing scripts for bigger modpacks, your script might soon become pretty long and confusing.
- Debugging a long script might take really long, especially if you have an error that doesn't point out a specific line in your script.

## Что мы знаем/должны знать

- CraftTweaker может загружать файлы из нескольких файлов скриптов.
- CraftTweaker может даже загружать файлы из вложенных папок.
- Также CraftTweaker может загружать .zip-файлы, содержащие скрипты .zs внутри, если архив не защищен паролем.

## Решение

- Разделяйте ваши огромные скрипты на меньшие.
- Например, вы можете создать скрипты для каждого мода или для каждого обработчика из мода.

## Пример

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

## Преимущества

- Ваши скрипты становятся легче для отладки.
- Ошибка не остановит целый скрипт, а только их часть.
- People checking your script files can easier orient themselves

## Disadvantages

- You need to be careful with the loading order of the scripts (especially if one script removes a recipe and another one adds it). Check the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) if your script loading order is a problem
- There are many ways to categorize your scripts after and yours may be confusing for outsiders.