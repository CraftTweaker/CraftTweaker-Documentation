::since{version=1.1.0}
# OutputList

Represents a recipe that has no inputs, but produces a certain set of outputs.

 The amount of rows of output can be manually set. Each row has space for up to 9 outputs.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.OutputList;
```


## Extending SimpleJeiCategory

OutputList extends [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory). That means all methods available in [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) are also available in OutputList

## Properties

| 名称   | Type | Has Getter | Has Setter | Description                                                     |
| ---- | ---- | ---------- | ---------- | --------------------------------------------------------------- |
| rows | void | false      | true       | Sets the amount of rows that should be present for each recipe. |

