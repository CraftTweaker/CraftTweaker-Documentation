# BracketHandlers

I advise against using the static methods in this class directly as they may be merged into CrT's BEP at any point. If you need to access the Bracket Expression Parser methods dynamically, you can use
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.BracketHandlers;
```


## Methods

### getItemGroup

Gets the itemGroup. Will throw an error if the group could not be found

Returns: The found MCItemGroup Return Type: [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

BracketHandlers.getItemGroup(tokens as string) as MCItemGroup
BracketHandlers.getItemGroup("misc");
```
| Parameter | Type   | Description                                 |
| --------- | ------ | ------------------------------------------- |
| tokens    | string | What you createDataCompound in the BEP call |

### getToolType

Gets a [MCToolType](/mods/contenttweaker/API/item/MCToolType). Will create a new one if the given one does not exist.

Returns: The [MCToolType](/mods/contenttweaker/API/item/MCToolType) if found, or a new MCToolType Return Type: [MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

BracketHandlers.getToolType(tokens as string) as MCToolType
BracketHandlers.getToolType("shovel");
```
| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| tokens    | string | What you would createDataCompound in the BEP call |

