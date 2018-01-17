# Squeezer
The Squeezer package can be used to add/remove recipes to/from the Immersive Engineering Squeezer.

## Calling The Package:
You can call the Squeezer package using `mods.immersiveengineering.Squeezer`.

## Add Recipe

|Required  |Type                   |Data Type                                          										|
|----------|-----------------------|----------------------------------------------------------------------------------------|
|Required  |Output                 |[IItemStack](/Vanilla/Items/IItemStack) 												|
|Required  |Fluid                  |[Fluidstack](/Vanilla/Liquids/ILiquidStack)     										|
|Required  |Input                  |[IIngredient](/Vanilla/Variable_Types/IIngredient) 										|
|Required  |Energy                 |Integer																					|

### Example:
```
//Example:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```



## Remove Fluid Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[Fluidstack](/Vanilla/Liquids/ILiquidStack)        |

### Example:
```
//Example:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```



## Remove Item Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example:
```
//Example:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```



## Remove By Input

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example:
```
//Example:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```