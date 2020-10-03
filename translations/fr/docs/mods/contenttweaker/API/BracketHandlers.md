# BracketHandlers

I advise against using the static methods in this class directly as they may be merged into CrT's BEP at any point. If you need to access the Bracket Expression Parser methods dynamically, you can use
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.BracketHandlers
```

## Methods
### getItemGroup

Gets the itemGroup. Will throw an error if the group could not be found

 Returns: `The found MCItemGroup`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Parameter | Type   | Description                                 |
| --------- | ------ | ------------------------------------------- |
| tokens    | String | What you createDataCompound in the BEP call |


### getToolType

Gets a [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Will create a new one if the given one does not exist.

 Returns: `The [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) if found, or a new MCToolType`

Return type: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| tokens    | String | What you would createDataCompound in the BEP call |



