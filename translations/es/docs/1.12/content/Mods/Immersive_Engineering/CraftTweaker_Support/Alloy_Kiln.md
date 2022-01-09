# Alloy Kiln
The Alloy Smelter package can be used to add/remove recipes to/from the Immersive Engineering Alloy Kiln.

## Calling The Package
You can call the AlloySmelter package using `mods.immersiveengineering.AlloySmelter`

## Add Recipe

| Required | Type    | Data Type                                           |
| -------- | ------- | --------------------------------------------------- |
| Required | Output  | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Input 1 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Input 2 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time    | Integer                                             |


### Ejemplo
```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```



## Remove Recipe

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |


### Ejemplo
```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```
