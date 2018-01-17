# Crusher
The Crusher package can be used to add/remove recipes to/from the Immersive Engineering Crusher.

## Calling The Package:
You can call the Crusher package using `mods.immersiveengineering.Crusher`.

## Add Recipe

|Required  |Type                  |Data Type                                          										|
|----------|----------------------|-----------------------------------------------------------------------------------------|
|Required  |Output                |[IItemStack](/Vanilla/Items/IItemStack) 													|
|Required  |Input                 |[IIngredient](/Vanilla/Variable_Types/IIngredient)      									|
|Required  |Energy                |Integer																					|
|Optional  |Secondary Output      |[IItemStack](/Vanilla/Items/IItemStack)													|
|Optional  |Secondary Chance      |Double																					|

### Example:
```
//Example:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example:
```
//Example:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```