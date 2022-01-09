::since{version=1.1.0}
# OutputList

Represents a recipe that has no inputs, but produces a certain set of outputs.

 The amount of rows of output can be manually set. Each row has space for up to 9 outputs.

This class was added by a mod with mod-id `jeitweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.OutputList;
```


## Extending SimpleJeiCategory

OutputList extends [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory). That means all methods available in [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) are also available in OutputList

## Свойства

| Название | Тип  | Имеет Getter | Имеет Setter | Описание                                                        |
| -------- | ---- | ------------ | ------------ | --------------------------------------------------------------- |
| rows     | void | false        | true         | Sets the amount of rows that should be present for each recipe. |

